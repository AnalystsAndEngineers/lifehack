import { store } from '@/lib/store';
import { sgidClient } from '@/lib/sgidClient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getAndStoreUserInfo = async (code, sessionId) => {
  const session = store.get(sessionId);

  if (!session) {
    throw new Error('Session not found');
  }

  const { nonce, codeVerifier } = session;

  if (!codeVerifier) {
    throw new Error('Code verifier not found');
  }

  // Exchange auth code for access token
  const { accessToken, sub } = await sgidClient.callback({
    code,
    nonce,
    codeVerifier,
  });

  // Request user info with access token
  const { data } = await sgidClient.userinfo({
    accessToken,
    sub,
  });

  // Store userInfo and sgID in memory
  const updatedSession = {
    ...session,
    userInfo: data,
    sub,
  };
  store.set(sessionId, updatedSession);

  return updatedSession;
};

export default async function Redirect({ searchParams }) {
  // Auth code is retrieved from the URL search params
  const code = searchParams?.code;
  const sessionId = cookies().get('sessionId')?.value;
  if (!code) {
    throw new Error('Authorization code is not present in the url search params');
  } else if (!sessionId) {
    throw new Error("Session ID not found in browser's cookies");
  }

  await getAndStoreUserInfo(code, sessionId);
  redirect('/');

  return <></>;
}
