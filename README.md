# WildoraLK

WildoraLK (wildoralk.com) is a student project for the Agile Team Project module at the Informatics Institute of Technology (IIT), Sri Lanka, affiliated with the University of Westminster. It explores a fairer way for licensed safari drivers to share leopard sightings in Yala National Park, so that a few jeeps view at a time and the rest wait their turn, instead of dozens racing to the same spot. It is still being designed and is not available to use yet.

## Landing page

The public landing page lives in [`apps/landing`](apps/landing). It is a Vite, React, TypeScript and Tailwind CSS single page. All of the wording is in `apps/landing/src/content/`, so it can be edited without touching the layout components.

### Run it locally

```bash
cd apps/landing
npm install
npm run dev
```

Other useful commands (run inside `apps/landing`):

```bash
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

Node.js 20.19 or newer (or 22.12 or newer) is required.
