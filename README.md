# mwa-angular-example

Small Angular 21 standalone demo for a healthcare follow-up planner.

The app lets a user review a small catalog of care services, add services to a care plan, and remove planned visits one at a time. State is managed with Angular signals in a small store service.

## Stack

- Angular 21 standalone components
- TypeScript
- Angular signals for local state management

## Features

- Header with patient context and live plan summary
- Care service catalog with sample healthcare services
- Care plan panel with add and remove interactions
- Derived planned-visit count computed from store state

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

The development server uses the Angular CLI. The production build output is written to `dist/demo`.

## Project structure

```text
src/app/
	app.component.*        Application shell
	app-content.ts         Static app copy
	care-services.data.ts  Sample service catalog
	care-plan.store.ts     Signal-based state container
	care-plan.utils.ts     Care-plan update helpers
	models.ts              Shared TypeScript models
```

## Notes

- The current workspace includes local build artifacts such as `dist/`, `.angular/`, and `node_modules/`; these are now ignored through the repository gitignore.
- There is no dedicated test script configured in `package.json` at the moment.
