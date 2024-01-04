FROM ubuntu:23.04
RUN apt update && apt install -y python3
COPY main.py /app/main.py
CMD ["python3", "/app/main.py"]
EXPOSE 3000