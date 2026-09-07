// Stub types
export type * from './database';

export type User = {
  id: string;
  email: string;
  created_at: string;
};

export type Assessment = {
  id: string;
  user_id: string;
  created_at: string;
  status: 'draft' | 'submitted' | 'completed';
};

export type AssessmentResponse = {
  id: string;
  assessment_id: string;
  question_id: string;
  response_value: number;
  created_at: string;
};
