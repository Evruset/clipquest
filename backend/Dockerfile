FROM python:3.10-slim

WORKDIR /app

# копируем зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# копируем код и статические файлы
COPY app.py .
COPY static/ ./static/

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]