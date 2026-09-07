// Stub authentication utilities
import { getSupabaseServerClient } from './supabase';

export const getSupabaseClient = async () => {
  return getSupabaseServerClient();
};

export const extractBearerToken = (header: string): string | null => {
  if (!header || !header.startsWith('Bearer ')) {
    return null;
  }
  return header.substring(7);
};

export const extractUserFromToken = async (token: string) => {
  try {
    const supabase = await getSupabaseClient();
    const { data, error } = await supabase.auth.getUser(token);
    if (error) return null;
    return data?.user || null;
  } catch {
    return null;
  }
};

export const extractUserIdFromToken = (token: string): string | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    return payload.sub || null;
  } catch {
    return null;
  }
};
