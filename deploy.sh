#!/bin/bash
# Deploy to GitHub Pages using /docs folder
# Usage: ./deploy.sh

set -e

echo "Building project..."
npm run build

echo "Copying dist/ to docs/..."
rm -rf docs
cp -r dist docs

# Ensure .nojekyll exists
touch docs/.nojekyll

# Copy 404.html for SPA routing
cp public/404.html docs/404.html 2>/dev/null || true

echo "Done! Now commit and push:"
echo "  git add docs"
echo "  git commit -m 'Deploy to GitHub Pages'"
echo "  git push"
echo ""
echo "Make sure GitHub Pages is set to: main branch → /docs folder"
