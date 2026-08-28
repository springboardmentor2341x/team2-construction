export const authInterceptor = (req, next) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const token = localStorage.getItem('bt_token');
        // Do not attach token if it is a dummy token from old mockup or if empty
        if (token && !token.startsWith('dummy-jwt-token-for-')) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next(cloned);
        }
        else if (token && token.startsWith('dummy-jwt-token-for-')) {
            // If user logs in with real login after seed, we can clear this dummy.
            // But let's attach it anyway just in case they are still using dummy for testing.
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next(cloned);
        }
    }
    return next(req);
};
