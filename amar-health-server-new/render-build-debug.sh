#!/bin/bash
set -o errexit

echo "🚀 Starting debug build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Check Prisma schema
echo "🔍 Checking Prisma schema..."
ls -la prisma/schema/

# Generate Prisma client with verbose output
echo "🔧 Generating Prisma client..."
npx prisma generate --schema=./prisma/schema/schema.prisma

# Check generated client
echo "🔍 Checking generated Prisma client..."
ls -la node_modules/.prisma/client/ || echo "No .prisma/client directory found"
ls -la node_modules/@prisma/client/ || echo "No @prisma/client directory found"

# Try to build with more verbose output
echo "🏗️ Building TypeScript..."
npx tsc --noEmit --listFiles | head -20

echo "✅ Debug build completed!"