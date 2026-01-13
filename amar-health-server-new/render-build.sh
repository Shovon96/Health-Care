#!/bin/bash
set -o errexit

echo "🚀 Starting Render deployment build..."

# Install all dependencies
echo "📦 Installing dependencies..."
npm install

# Build TypeScript application
echo "🏗️ Building TypeScript..."
npm run build

# Generate Prisma client (must be done before TypeScript build)
echo "🔧 Generating Prisma client..."
npx prisma generate

# Deploy database migrations
echo "🗄️ Deploying database migrations..."
npx prisma migrate deploy

echo "✅ Build completed successfully!"