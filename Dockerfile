# ---------------------------------------------------------------------------
# EZMusicProduction — imagen de producción
# Build estático (Vite) + servido por nginx. Pensada para Coolify.
# ---------------------------------------------------------------------------

# ---------- etapa 1: build ----------
FROM node:22-alpine AS build
WORKDIR /app

# Cachea la instalación de dependencias
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copia el resto y construye
COPY . .
RUN npm run build

# ---------- etapa 2: runtime ----------
FROM nginx:1.27-alpine AS runtime

# Config propia: SPA fallback, gzip, caché y /healthz
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Artefactos estáticos
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
