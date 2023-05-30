import './globals.scss';
import { ThemeProvider } from './components/themeprovider';
import { cookies } from 'next/headers';
import styles from '../../styles/styles.css';

import { Montserrat } from 'next/font/google';
import ComplexNavbar from './components/complexNavbar';
import SgidAuthButton from './components/SgidAuthButton';
import { store } from '@/lib/store';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'WorkJoy',
  description: 'Making work a joy',
};

export default function RootLayout({ children }) {
  const sessionId = cookies().get('sessionId')?.value;
  const sessionDetails = store.get(sessionId);
  const hasAttemptedLogin = sessionId && sessionDetails;

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={montserrat.className}>
          {hasAttemptedLogin ? (
            <main>
              <ComplexNavbar />
              <SgidAuthButton />
              {children}
            </main>
          ) : (
            <main
              className={`bg-image flex h-screen items-center justify-center bg-cover ${styles.bgImage} ${styles.blurBg}`}
            >
              <div className="rounded-xl bg-white p-10 p-4 text-center">
                <h1 className="text-xl font-bold">Welcome to WorkJoy</h1>
                <p className="text-xs">Discover Your joy in work with us.</p>
                <button className="mx-auto my-5 rounded border border-gray-400 bg-red-400 px-4 py-2 font-semibold text-white shadow hover:bg-red-700">
                  <a href="/login">Sign in with Singpass</a>
                </button>
              </div>
            </main>
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
