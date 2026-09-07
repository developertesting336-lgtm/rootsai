// Stub API response utilities
import { NextResponse } from 'next/server';

export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorCodes {
  INVALID_REQUEST = 'INVALID_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
}

export const successResponse = (
  data: any,
  status: number = StatusCodes.OK
) => {
  return NextResponse.json(
    { success: true, data },
    { status }
  );
};

export const errorResponse = (
  message: string,
  code: string = ErrorCodes.INTERNAL_ERROR,
  status: number = StatusCodes.INTERNAL_SERVER_ERROR
) => {
  return NextResponse.json(
    { success: false, error: { message, code } },
    { status }
  );
};
