FROM python:3

ENV PYTHONUNBUFFERED 1

RUN apt update && apt install -y libpq-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./requirements.txt /app/

RUN pip install -r ./requirements.txt

COPY . /app/