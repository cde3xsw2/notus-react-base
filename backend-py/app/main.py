"""
Primary FastPI ASGI application

"""

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.users.endpoints import users_routes
from app.auth.endpoints import auth_routes
from app.api.endpoints import api_routes
from fastapi.responses import PlainTextResponse, JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.exceptions import RequestValidationError  # , ValidationError


def create_app():
    # Initialize FastAPI app
    app = FastAPI()

    @app.exception_handler(StarletteHTTPException)
    async def http_exception_handler(request, exc):
        return JSONResponse(
            status_code=exc.status_code,
            content={"message": str(exc.detail)},
            # content={"message": f"Oops! {exc.name} did something. There goes a rainbow..."},
        )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request, exc):
        return PlainTextResponse(str(exc), status_code=400)

    # Enable CORS via middleware
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_headers=["*"],
        allow_methods=["*"],
        allow_origins=["*"],
    )

    app.include_router(api_routes)
    app.include_router(users_routes)
    app.include_router(auth_routes)

    return app


application = create_app()
