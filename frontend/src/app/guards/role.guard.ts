import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data?.['allowedRoles'] as string[];
  const userRole = authService.userRole();

  if (authService.isLoggedIn() && userRole && allowedRoles.includes(userRole)) {
    return true;
  }

  // If authenticated but unauthorized, redirect to their designated dashboard
  if (authService.isLoggedIn() && userRole) {
    const dashboardUrl = authService.getDashboardUrl(userRole);
    router.navigate([dashboardUrl]);
    return false;
  }

  // Otherwise, clear session and send to login
  router.navigate(['/login']);
  return false;
};
