import { cookies } from 'next/headers';
import Link from 'next/link';
import { LockClosedIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { store } from '@/lib/store';

export default function SgidAuthButton() {
  const sessionId = cookies().get('sessionId')?.value;
  const sessionDetails = store.get(sessionId);
  const isLoggedIn = sessionDetails?.sub;

  const data = {
    login: {
      icon: LockClosedIcon,
      path: '/login',
      text: 'Login',
    },
    logout: {
      icon: ArrowRightOnRectangleIcon,
      path: '/logout',
      text: 'Logout',
    },
  };
  const { icon, path, text } = data[isLoggedIn ? 'logout' : 'login'];

  return (
    <Link
      href={path}
      prefetch={false}
      className="fixed right-0 top-0 m-5 flex gap-2 rounded-full bg-cyan-600 px-6 py-4 font-semibold text-white shadow-lg"
    >
      <div>
        {React.createElement(icon, {
          className: 'h-[24px] w-[24px]',
        })}
      </div>
      <div>{text}</div>
    </Link>
  );
}
