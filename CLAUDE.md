# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus v3.8.1 documentation website for Canine - a Kubernetes deployment platform that simplifies deploying web applications and services. The site is built with React and uses Yarn as the package manager.

## Essential Commands

### Development
- `yarn start` - Start development server at localhost:3000 with hot reload
- `yarn build` - Build static site to `build/` directory
- `yarn serve` - Serve built site locally for testing production build

### Deployment
- `yarn deploy` - Deploy to GitHub Pages
- `USE_SSH=true yarn deploy` - Deploy using SSH
- `GIT_USER=<username> yarn deploy` - Deploy without SSH

### Utilities
- `yarn clear` - Clear Docusaurus cache (useful when encountering build issues)
- `yarn swizzle` - Customize Docusaurus components

## Architecture and Structure

### Documentation Organization
The documentation is structured into three main sections:

1. **Getting Started** (`docs/getting-started/index`) - 7-step tutorial for new users
2. **Basics** (`docs/basics/`) - Core concepts (clusters, projects, processes, volumes, etc.)
3. **Technical Details** (`docs/technical-details/`) - Architecture and Kubernetes crash course

### Key Directories
- `docs/` - All documentation content in Markdown/MDX format
- `src/components/` - Custom React components for the documentation
- `src/pages/` - Custom pages outside the docs structure
- `static/img/` - Images and screenshots used in documentation
- `blog/` - Blog posts (if used)

### Configuration Files
- `docusaurus.config.js` - Main site configuration (title, URLs, navigation, footer, etc.)
- `sidebars.js` - Sidebar structure configuration
- `package.json` - Dependencies and scripts

## Important Notes

1. **Default Template**: The site currently uses default Docusaurus template values (title: "My Site", tagline: "Dinosaurs are cool"). These need to be updated in `docusaurus.config.js` to reflect Canine branding.

2. **No Tests**: This documentation site has no test framework configured, which is standard for Docusaurus projects.

3. **Node Version**: Requires Node.js >= 18.0

4. **Markdown/MDX**: Documentation files support both standard Markdown and MDX (Markdown with JSX) for interactive components.

5. **Broken Links**: The build will fail on broken links (`onBrokenLinks: 'throw'`). Use `yarn build` to check for broken links before deploying.

## Common Tasks

### Adding New Documentation
1. Create a new `.md` or `.mdx` file in the appropriate `docs/` subdirectory
2. Add front matter with `id`, `title`, and optionally `sidebar_label`
3. Update `sidebars.js` if manual sidebar configuration is needed

### Customizing Site Appearance
1. Edit `src/css/custom.css` for global styles
2. Use `yarn swizzle` to customize Docusaurus theme components
3. Update theme colors and fonts in `docusaurus.config.js` under `themeConfig`

### Working with Images
1. Place images in `static/img/`
2. Reference in docs as `/img/filename.png` (absolute path)
3. For inline images in MDX, you can import and use as React components

## Canine Context

Canine is a Kubernetes deployment platform that:
- Connects to any Kubernetes backend
- Provides GitHub auto-deployments
- Manages SSL certificates automatically
- Supports databases and background services
- Offers zero-downtime deployments

The documentation includes a complete quickstart guide deploying a collaborative whiteboard application as an example.