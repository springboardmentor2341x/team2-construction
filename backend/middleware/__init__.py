from fastapi import Request
from fastapi.responses import JSONResponse
import logging

# Setup global exception handler for FastAPI
async def global_exception_handler(request: Request, exc: Exception):
    logging.error(f"Global Exception caught: {exc}", exc_info=True)
    status_code = 500
    if hasattr(exc, "status_code"):
        status_code = getattr(exc, "status_code")
    
    message = str(exc)
    if hasattr(exc, "detail"):
        message = getattr(exc, "detail")
        
    return JSONResponse(
        status_code=status_code,
        content={
            "success": False,
            "message": message,
            "detail": str(exc)
        }
    )
