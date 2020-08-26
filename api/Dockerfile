# BUILD
FROM python:3.8-buster as builder
ENV DEBIAN_FRONTEND noninteractive
WORKDIR /build

## virtualenv
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip install --upgrade pip && pip install pip-tools
COPY ./requirements.in .
RUN pip-compile requirements.in >requirements.txt 2>/dev/null && pip-sync

# RUNTIME
FROM python:3.8-slim-buster as runner
ENV DEBIAN_FRONTEND noninteractive
WORKDIR /usr/src/app

# RUN apt-get update \
#   && apt-get install -y libpq5 libxml2 \
#   && apt-get clean \
#   && rm -rf /var/lib/apt/lists/*

COPY --from=builder /opt/venv /opt/venv

## add app
COPY . /usr/src/app

## set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PATH="/opt/venv/bin:$PATH"

EXPOSE 8000
CMD ["uvicorn", "main:api", "--host", "0.0.0.0", "--reload"]

