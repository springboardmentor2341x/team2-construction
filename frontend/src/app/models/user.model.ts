export type UserRole = 'admin' | 'project_manager' | 'site_engineer' | 'contractor' | 'worker' | 'client';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  company?: string;
  assignedProjectIds?: string[];
}

export interface AuthResponse {
  token: string;
  user: User;
}
