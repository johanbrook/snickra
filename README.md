# Snickra

[![Dependency Status][david_img]][david_site]

## Develop

Clone the repo and get set up with the dependencies:

```bash
git clone https://github.com/johanbrook/snickra.git
cd snickra
npm install
```

All commands:

```bash
npm run dev # Start app for developing
npm run server # Start dev server for hot reloading
npm run start # Start app in production
npm run lint # Lint whole app
npm run build # Build app into /dist
npm run package # Package app into /release for current platform
npm run package-all # Package app for all platforms
```

To start the app locally (in dev mode), we need a dev server for hot reloading, as well as running the actual Electron app. So run these commands in two separate shells:

```bash
npm run server
# Starts dev server on http://localhost:8080
```

```bash
npm run dev
# Starts Electron menu bar app
```

You will also be able to access Chrome DevTools when in dev mode. It'll open on app startup, but also with <kbd>cmd+alt+I</kbd>.

Lint the whole app (including `.vue` files) with:

```bash
npm run lint
```

### Build

To generate a production build, run:

```bash
npm run build
```

This will generate `dist/bundle.js`.

You can then start the app in production mode with:

```bash
npm start
```

### Package

Package the app for the current platform with:

```bash
npm run package
```

This generates a package into `release`.

## License

MIT © [Johan Brook](http://johanbrook.com)

[david_img]: https://img.shields.io/david/johanbrook/snickra.svg
[david_site]: https://david-dm.org/johanbrook/snickra
