import { redirect } from 'next/navigation';
import { sgidClient } from '@/lib/sgidClient';
import { cookies } from 'next/headers';
import { store } from '@/lib/store';
import { generatePkcePair } from '@opengovsg/sgid-client';

const handleLogin = async (state) => {
  const sessionId = cookies().get('sessionId')?.value || '';

  if (!sessionId) {
    throw new Error("Session ID not found in browser's cookies");
  }

  // Generate PKCE pair
  const { codeChallenge, codeVerifier } = generatePkcePair();

  // Generate authorization url
  const { url, nonce } = sgidClient.authorizationUrl({
    state,
    codeChallenge,
  });

  // Store code verifier, state, and nonce in memory
  store.set(sessionId, { state, codeVerifier, nonce });

  redirect(url);
};

export default async function Login({ searchParams }) {
  await handleLogin(searchParams?.state || '');
  return <></>;
}
