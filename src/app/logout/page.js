import { store } from '@/lib/store';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Logout() {
  console.log('LOGGING OUT');
  const sessionId = cookies().get('sessionId')?.value;
  if (sessionId) {
    store.delete(sessionId);
  }
  redirect('/');
}
