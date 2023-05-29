import { store } from '@/lib/store';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Profile() {
  const sessionId = cookies().get('sessionId')?.value;
  const userInfo = store.get(sessionId)?.userInfo;

  if (!sessionId || !userInfo) redirect('/login');

  return (
    <main className="mx-60 my-8">
      <h1 className="mb-5 text-xl font-semibold">Profile</h1>
      <ul className="mb-10">
        <li>
          <span className="text-bold">Name:&nbsp;</span>
          {userInfo['myinfo.name']}
        </li>
      </ul>
      <Link className="btn-primary text-white" href="/editprofile">
        Edit Profile
      </Link>
    </main>
  );
}
