# --- Build stage --------------------------------------------------------
FROM node:26.13.1-alpine3.24 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Runtime stage -------------------------------------------------------
FROM nginx/nginx-unprivileged:1.31.9-alpine3.24 AS runtime

# Pull Alpine security fixes not yet in the base image (e.g. pcre2 CVE-2026-103111)
USER root
RUN apk upgrade --no-cache
USER nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD wget -q --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
