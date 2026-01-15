# AI Coding Guidelines for Películas Front App

## Project Overview
This is an Ionic Angular application for managing a movie watchlist ("Agenda Películas"). It uses standalone components with lazy-loaded routing, Capacitor for mobile deployment, and follows Angular 21 + Ionic 8 best practices.

## Architecture
- **Standalone Components**: All components are standalone with explicit imports in decorators (e.g., `imports: [IonContent, IonHeader, CommonModule, FormsModule]`)
- **Routing Structure**: 
  - Auth routes: `/auth/login`, `/auth/register`, `/auth/landing`
  - App routes: `/home`, `/profile`, `/watch-list` (currently auth-only in main routes)
- **Mobile-First**: Capacitor integration with plugins (haptics, keyboard, status-bar)
- **Styling**: SCSS with global styles in `src/global.scss` and theme variables in `src/theme/variables.scss`

## Key Patterns
- **Component Structure**: Follow `component.page.ts`, `component.page.html`, `component.page.scss`, `component.page.spec.ts`
- **Imports**: Use Angular standalone imports pattern, import Ionic components explicitly
- **Prefix**: Use `app-` prefix for selectors
- **Lazy Loading**: Routes use `loadComponent` for dynamic imports (e.g., `loadComponent: () => import('./login/login.page').then((m) => m.LoginPage)`)
- **Storage**: Use `@ionic/storage-angular` for local data persistence

## Development Workflow
- **Package Manager**: Use `pnpm` (lockfile: `pnpm-lock.yaml`)
- **Serve**: `pnpm start` or `ng serve` (runs on localhost:4200)
- **Build**: `pnpm build` or `ng build` (outputs to `www/` for Capacitor)
- **Test**: `pnpm test` or `ng test` (Karma + Jasmine)
- **Lint**: `pnpm lint` or `ng lint` (ESLint with Angular rules)
- **Mobile Build**: 
  - `ionic capacitor build android` / `ionic capacitor build ios`
  - `ionic capacitor run android` / `ionic capacitor run ios`

## Configuration
- **Environments**: Use `src/environments/` for API endpoints and config (replaced during build)
- **Capacitor**: Config in `capacitor.config.ts` (webDir: 'www', appId: 'io.ionic.starter')
- **Angular**: Strict mode enabled, TypeScript target ES2022
- **Ionic**: Standalone mode, schematics configured for SCSS and standalone components

## Conventions
- **File Naming**: Kebab-case for files (e.g., `watch-list.page.ts`), PascalCase for classes
- **SCSS**: Component-specific styles in `.page.scss`, global in `global.scss`
- **Testing**: Spec files alongside components, use Jasmine for unit tests
- **Assets**: Static files in `src/assets/`, icons in `src/assets/icon/`

## Key Files
- `src/app/app.routes.ts`: Main routing configuration
- `src/environments/environment.ts`: Development configuration
- `angular.json`: Build configuration (output to `www/`)
- `ionic.config.json`: Ionic project settings
- `capacitor.config.ts`: Mobile app configuration

When adding features, ensure components are standalone, routes are lazy-loaded, and mobile compatibility is maintained.