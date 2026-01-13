#!/bin/bash
set -o errexit

echo "🚀 Starting Render deployment build..."

# Install all dependencies
echo "📦 Installing dependencies..."
npm ci

# Generate Prisma client (must be done before TypeScript build)
echo "🔧 Generating Prisma client..."
npx prisma generate

# Regenerate Prisma client to ensure latest schema changes
echo "🔄 Regenerating Prisma client with updated schema..."
npx prisma generate

# Build TypeScript application
echo "🏗️ Building TypeScript..."
npm run build

# Deploy database migrations
echo "🗄️ Deploying database migrations..."
npx prisma migrate deploy

echo "✅ Build completed successfully!"