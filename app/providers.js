"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
/**
 * Client-side providers wrapper
 * Initializes Supabase and other client-side contexts
 */
export function Providers({ children }) {
    // Initialize Supabase client
    const supabase = createClientComponentClient();
    return (
    // Wrap with any additional providers here
    // - Zustand stores
    // - React Query
    // - Form context
    // - Theme provider
    <>
      {children}
    </>);
}
//# sourceMappingURL=providers.js.map