from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List

app = FastAPI()

# CORS для WebApp
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://addressed-adopted-outline-surveillance.trycloudflare.com"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Статика
app.mount("/static", StaticFiles(directory="static"), name="static")

class Clip(BaseModel):
    id: int
    title: str
    url: str

CLIPS = [
    Clip(id=1, title="Первый клип", url="http://localhost:8000/static/sample.mp4")
]

@app.get("/healthz")
async def health():
    return {"status":"ok"}

@app.get("/api/clips", response_model=List[Clip])
async def get_clips(limit: int = 1):
    return CLIPS[:limit]
