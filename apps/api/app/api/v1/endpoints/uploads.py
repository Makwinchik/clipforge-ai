from fastapi import APIRouter, File, HTTPException, UploadFile, status, Depends

from app.core.config import Settings, get_settings
from app.schemas.upload import UploadResponse

router = APIRouter(prefix="/uploads", tags=["uploads"])


@router.post("", response_model=UploadResponse, status_code=status.HTTP_202_ACCEPTED)
async def create_upload(
    file: UploadFile = File(...),
    settings: Settings = Depends(get_settings),
) -> UploadResponse:
    content = await file.read()
    max_bytes = settings.max_upload_mb * 1024 * 1024

    if len(content) > max_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File exceeds {settings.max_upload_mb} MB upload limit.",
        )

    return UploadResponse(
        filename=file.filename or "untitled",
        content_type=file.content_type,
        size_bytes=len(content),
        status="accepted_stub",
    )
