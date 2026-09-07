/**
 * API Client Utility
 * Handles all API communication for ROOTS-AI frontend
 */
export class ApiClient {
    constructor(options = {}) {
        Object.defineProperty(this, "baseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        this.baseUrl = options.baseUrl || `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api`;
        this.token = options.token || null;
    }
    /**
     * Set authorization token
     */
    setToken(token) {
        this.token = token;
    }
    /**
     * Clear authorization token
     */
    clearToken() {
        this.token = null;
    }
    /**
     * Make HTTP request
     */
    async request(method, endpoint, data) {
        try {
            const url = `${this.baseUrl}${endpoint}`;
            const headers = {
                'Content-Type': 'application/json',
            };
            if (this.token) {
                headers['Authorization'] = `Bearer ${this.token}`;
            }
            const options = {
                method,
                headers,
            };
            if (data && method !== 'GET') {
                options.body = JSON.stringify(data);
            }
            const response = await fetch(url, options);
            if (!response.ok) {
                const error = await response.json().catch(() => ({ message: response.statusText }));
                return {
                    success: false,
                    error: error.error || error,
                };
            }
            const result = await response.json();
            return {
                success: result.status === 'success',
                data: result.data,
                error: result.error,
            };
        }
        catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
    // ============================================
    // Auth Endpoints
    // ============================================
    async sendMagicLink(email, redirectTo) {
        return this.request('/auth/send-link', {
            email,
            redirectTo,
        });
    }
    // ============================================
    // Profile Endpoints
    // ============================================
    async getProfile() {
        return this.request('GET', '/profiles');
    }
    async updateProfile(data) {
        return this.request('PUT', '/profiles', data);
    }
    // ============================================
    // Assessment Endpoints
    // ============================================
    async listAssessments(page = 1, limit = 10) {
        return this.request('GET', `/assessments?page=${page}&limit=${limit}`);
    }
    async createAssessment(data) {
        return this.request('POST', '/assessments', data);
    }
    async getAssessment(id) {
        return this.request('GET', `/assessments/${id}`);
    }
    async updateAssessment(id, data) {
        return this.request('PUT', `/assessments/${id}`, data);
    }
    // ============================================
    // Response Endpoints
    // ============================================
    async saveResponse(data) {
        return this.request('POST', '/responses', data);
    }
    async batchSaveResponses(responses) {
        return this.request('POST', '/responses/batch', { responses });
    }
    // ============================================
    // Scoring Endpoints (Future)
    // ============================================
    async scoreAssessment(assessmentId) {
        return this.request('POST', `/assessments/${assessmentId}/score`, {});
    }
    // ============================================
    // Report Endpoints (Future)
    // ============================================
    async getReport(reportId) {
        return this.request('GET', `/reports/${reportId}`);
    }
    async downloadReportPdf(reportId) {
        return this.request('POST', `/reports/${reportId}/download-pdf`, {});
    }
}
// Export singleton instance for convenience
export const apiClient = new ApiClient();
//# sourceMappingURL=api-client.js.map