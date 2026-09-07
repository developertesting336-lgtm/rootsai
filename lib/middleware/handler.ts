// Stub middleware handler
import { NextRequest, NextResponse } from 'next/server';

export const withErrorHandling = (handler: (req: NextRequest) => Promise<NextResponse>) => {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error) {
      console.error('API error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  };
};

export const apiError = (message: string, status: number = 400) => {
  return NextResponse.json({ error: message }, { status });
};

export const parseJsonBody = async (req: NextRequest) => {
  try {
    return await req.json();
  } catch {
    throw new Error('Invalid JSON body');
  }
};
