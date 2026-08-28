import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const authGuard = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isLoggedIn()) {
        return true;
    }
    // Save current route for redirection if needed
    router.navigate(['/login']);
    return false;
};
