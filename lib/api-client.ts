/**
 * API Client Utility
 * Handles all API communication for ROOTS-AI frontend
 */

export interface ApiClientOptions {
  baseUrl?: string;
  token?: string;
}

export class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(options: ApiClientOptions = {}) {
    this.baseUrl = options.baseUrl || `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api`;
    this.token = options.token || null;
  }

  /**
   * Set authorization token
   */
  setToken(token: string) {
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
  private async request<T = any>(
    method: string,
    endpoint: string,
    data?: any
  ): Promise<{ success: boolean; data?: T; error?: any }> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const options: RequestInit = {
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
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // ============================================
  // Auth Endpoints
  // ============================================

  async sendMagicLink(email: string, redirectTo?: string) {
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

  async updateProfile(data: {
    display_name?: string;
    age?: number;
    sex_assigned_at_birth?: string;
  }) {
    return this.request('PUT', '/profiles', data);
  }

  // ============================================
  // Assessment Endpoints
  // ============================================

  async listAssessments(page = 1, limit = 10) {
    return this.request(
      'GET',
      `/assessments?page=${page}&limit=${limit}`
    );
  }

  async createAssessment(data: {
    questionnaire_version: string;
    device_info?: string;
    browser_info?: string;
  }) {
    return this.request('POST', '/assessments', data);
  }

  async getAssessment(id: string) {
    return this.request('GET', `/assessments/${id}`);
  }

  async updateAssessment(
    id: string,
    data: {
      status?: string;
      progress?: number;
      device_info?: string;
      browser_info?: string;
      retention_state?: string;
    }
  ) {
    return this.request('PUT', `/assessments/${id}`, data);
  }

  // ============================================
  // Response Endpoints
  // ============================================

  async saveResponse(data: {
    assessment_id: string;
    question_id: number;
    raw_value: number | string;
    source_version?: string;
  }) {
    return this.request('POST', '/responses', data);
  }

  async batchSaveResponses(
    responses: Array<{
      assessment_id: string;
      question_id: number;
      raw_value: number | string;
      source_version?: string;
    }>
  ) {
    return this.request('POST', '/responses/batch', { responses });
  }

  // ============================================
  // Scoring Endpoints (Future)
  // ============================================

  async scoreAssessment(assessmentId: string) {
    return this.request('POST', `/assessments/${assessmentId}/score`, {});
  }

  // ============================================
  // Report Endpoints (Future)
  // ============================================

  async getReport(reportId: string) {
    return this.request('GET', `/reports/${reportId}`);
  }

  async downloadReportPdf(reportId: string) {
    return this.request('POST', `/reports/${reportId}/download-pdf`, {});
  }
}

// Export singleton instance for convenience
export const apiClient = new ApiClient();
