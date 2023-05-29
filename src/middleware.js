import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export async function middleware(req) {
  if (req.nextUrl.pathname !== '/') {
    // Generate new session ID
    const sessionId = req.cookies.get('sessionId')?.value || nanoid();

    // Set session ID in cookie
    const res = NextResponse.next();
    res.cookies.set({
      name: 'sessionId',
      value: sessionId,
      httpOnly: true,
    });
    return res;
  }
}
