# Canine Documentation

This repository contains the official documentation for [Canine](https://github.com/CanineHQ/canine) - an open-source Kubernetes deployment platform and alternative to Heroku, Render, and Fly.io.

**Live Documentation**: [docs.canine.sh](https://docs.canine.sh)

## About Canine

Canine simplifies deploying web applications and services to Kubernetes with features like:
- GitHub auto-deployments
- Automatic SSL certificate management
- Support for databases and background services
- Zero-downtime deployments
- Connection to any Kubernetes backend

## Documentation Structure

The documentation is organized into three main sections:

1. **Getting Started** - 7-step tutorial for new users
2. **Basics** - Core concepts (clusters, projects, processes, volumes, etc.)
3. **Technical Details** - Architecture and Kubernetes crash course

## Local Development

This site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
yarn
```

### Start Development Server

```bash
yarn start
```

This command starts a local development server at `localhost:3000` with hot reload. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Production Build

```bash
yarn serve
```

Test the production build locally before deploying.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

Contributions to improve the documentation are welcome! Please:

1. Fork this repository
2. Create a branch for your changes
3. Test your changes locally with `yarn start`
4. Ensure the build succeeds with `yarn build`
5. Submit a pull request

### Adding New Documentation

1. Create a new `.md` or `.mdx` file in the appropriate `docs/` subdirectory
2. Add front matter with `id`, `title`, and optionally `sidebar_label`
3. Update `sidebars.js` if manual sidebar configuration is needed

## Support

- **Main Repository**: [github.com/CanineHQ/canine](https://github.com/CanineHQ/canine)
- **Discord**: [Join our community](https://discord.com/invite/68YthskqEz)
- **Issues**: Report documentation issues in this repository's [issue tracker](https://github.com/czhu12/canine-docs/issues)

## License

This documentation is maintained by the Canine team.
