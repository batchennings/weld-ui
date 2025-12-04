# Publishing Guide for Weld UI

This guide will walk you through publishing your component library to npm.

## Pre-Publishing Checklist

### 1. Update Package Information

Before publishing, update these fields in `package.json`:

```json
{
  "name": "@batchennings/weld-ui",  // Change if needed
  "version": "0.1.0",                // Update version for each release
  "author": "Your Name",             // Add your name
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/weld-ui"  // Add your repo URL
  }
}
```

### 2. Build the Package

Test the build process:

```bash
pnpm run build
```

This will:
- Generate TypeScript declarations in `dist/`
- Bundle your components into ES and CommonJS formats
- Extract and bundle the CSS

Verify that the `dist/` folder contains:
- `index.js` (ES module)
- `index.cjs` (CommonJS)
- `index.d.ts` (TypeScript declarations)
- `style.css` (bundled styles)

### 3. Test Locally

Before publishing, test your package locally:

```bash
# In your weld-ui directory
pnpm pack
```

This creates a `.tgz` file. Install it in a test project:

```bash
# In a test project
npm install /path/to/weld-ui/batchennings-weld-ui-0.1.0.tgz
```

Test that imports work correctly:

```tsx
import { Button, Alert } from '@batchennings/weld-ui';
import '@batchennings/weld-ui/styles.css';
```

### 4. Version Management

Follow semantic versioning (semver):

- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features (backward compatible)
- **Major** (0.1.0 → 1.0.0): Breaking changes

Update version with:

```bash
npm version patch   # 0.1.0 → 0.1.1
npm version minor   # 0.1.0 → 0.2.0
npm version major   # 0.1.0 → 1.0.0
```

## Publishing to npm

### 1. Create an npm Account

If you don't have one:
- Go to https://www.npmjs.com/signup
- Create an account
- Verify your email

### 2. Login to npm

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- 2FA code (if enabled)

### 3. Configure Scoped Package (Optional)

If using a scoped package like `@batchennings/weld-ui`, you can:

**Option A: Publish as Public** (Free)

```bash
npm publish --access public
```

**Option B: Set up an Organization**

1. Go to https://www.npmjs.com/org/create
2. Create organization named `batchennings`
3. Publish: `npm publish`

### 4. First Time Publishing

```bash
# Make sure everything is built
pnpm run build

# Publish (this will automatically run prepublishOnly script)
npm publish --access public
```

### 5. Publishing Updates

For subsequent releases:

```bash
# 1. Update version
npm version patch  # or minor, or major

# 2. Build and publish
pnpm run build
npm publish
```

## Automated Publishing

### Using GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
          cache: 'pnpm'
      
      - run: pnpm install
      
      - run: pnpm run build
      
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

### Set Up npm Token

1. Generate token: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Choose "Automation" token type
3. Add to GitHub Secrets as `NPM_TOKEN`

## Post-Publishing

### 1. Verify Publication

Check your package:
- Visit: https://www.npmjs.com/package/@batchennings/weld-ui
- Test install: `npm install @batchennings/weld-ui`

### 2. Add Package Badge

Add to README.md:

```markdown
![npm version](https://img.shields.io/npm/v/@batchennings/weld-ui)
![npm downloads](https://img.shields.io/npm/dm/@batchennings/weld-ui)
```

### 3. Create Release Notes

Document changes in each version:

```markdown
## v0.1.0 (2024-12-04)

### Features
- Initial release
- Button, Alert, Table components
- Full TypeScript support

### Breaking Changes
- None (initial release)
```

## Troubleshooting

### "Package name already exists"

Change the package name in `package.json` or use a scoped package.

### "You must verify your email"

Check your email and verify your npm account.

### "You do not have permission to publish"

- For scoped packages, use `--access public`
- Ensure you're logged in to the correct account
- Check organization permissions if using org scope

### Build errors

```bash
# Clean and rebuild
rm -rf dist/
rm -rf node_modules/
pnpm install
pnpm run build
```

### CSS not loading

Make sure consumers import the CSS:
```tsx
import '@batchennings/weld-ui/styles.css';
```

## Best Practices

1. **Test before publishing** - Always test locally first
2. **Keep changelog** - Document all changes
3. **Semantic versioning** - Follow semver strictly
4. **Peer dependencies** - Keep them up to date
5. **README** - Keep documentation current
6. **Examples** - Provide working examples
7. **TypeScript** - Maintain type definitions
8. **Breaking changes** - Communicate clearly

## Useful Commands

```bash
# View what will be published
npm pack --dry-run

# Check package info
npm view @batchennings/weld-ui

# Unpublish (within 72 hours)
npm unpublish @batchennings/weld-ui@0.1.0

# Deprecate a version
npm deprecate @batchennings/weld-ui@0.1.0 "Use 0.2.0 instead"
```

## Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [Creating Node Modules](https://docs.npmjs.com/creating-node-js-modules)
- [Package.json Reference](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

