import './globals.scss';
import { ThemeProvider } from './components/themeprovider';

import { Montserrat } from 'next/font/google';
import ComplexNavbar from './components/complexNavbar';
import SgidAuthButton from './components/SgidAuthButton';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'WorkJoy',
  description: 'Making work a joy',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <main>
            <ComplexNavbar />
            <SgidAuthButton />
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
