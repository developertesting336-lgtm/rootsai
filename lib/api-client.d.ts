/**
 * API Client Utility
 * Handles all API communication for ROOTS-AI frontend
 */
export interface ApiClientOptions {
    baseUrl?: string;
    token?: string;
}
export declare class ApiClient {
    private baseUrl;
    private token;
    constructor(options?: ApiClientOptions);
    /**
     * Set authorization token
     */
    setToken(token: string): void;
    /**
     * Clear authorization token
     */
    clearToken(): void;
    /**
     * Make HTTP request
     */
    private request;
    sendMagicLink(email: string, redirectTo?: string): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    getProfile(): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    updateProfile(data: {
        display_name?: string;
        age?: number;
        sex_assigned_at_birth?: string;
    }): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    listAssessments(page?: number, limit?: number): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    createAssessment(data: {
        questionnaire_version: string;
        device_info?: string;
        browser_info?: string;
    }): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    getAssessment(id: string): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    updateAssessment(id: string, data: {
        status?: string;
        progress?: number;
        device_info?: string;
        browser_info?: string;
        retention_state?: string;
    }): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    saveResponse(data: {
        assessment_id: string;
        question_id: number;
        raw_value: number | string;
        source_version?: string;
    }): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    batchSaveResponses(responses: Array<{
        assessment_id: string;
        question_id: number;
        raw_value: number | string;
        source_version?: string;
    }>): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    scoreAssessment(assessmentId: string): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    getReport(reportId: string): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
    downloadReportPdf(reportId: string): Promise<{
        success: boolean;
        data?: any;
        error?: any;
    }>;
}
export declare const apiClient: ApiClient;
//# sourceMappingURL=api-client.d.ts.map