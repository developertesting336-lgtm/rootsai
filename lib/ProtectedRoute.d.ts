import { ReactNode } from 'react';
interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo?: string;
}
/**
 * Protected Route Wrapper
 * Redirects to login if not authenticated
 */
export declare function ProtectedRoute({ children, redirectTo, }: ProtectedRouteProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=ProtectedRoute.d.ts.map