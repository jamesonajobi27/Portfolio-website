# Portfolio-website
My altshool frontend exam project
The website link (https://portfolio-website-eta-neon.vercel.app/)

## Resume-ready bullet points (derived from this codebase)
- Built a React + Vite single-page portfolio app with nested routing that supports Home, Repositories, per-repository detail pages, a testing route, and a custom 404 fallback.
- Integrated the public GitHub REST API (`/users/jamesonajobi27/repos`) to fetch live repository data and render project content dynamically instead of hardcoding entries.
- Implemented a repository listing flow that maps API results into clickable cards and routes users to `/Repositories/:OneRepo` for item-level project exploration.
- Developed a repository detail view that surfaces practical project metadata (name, description, main language, fork status, and source URL) to improve recruiter-friendly project scanning.
- Added async UX handling with loading states and conditional rendering so users get immediate feedback while data is being fetched.
- Implemented an Error Boundary with route-change recovery behavior so runtime UI crashes are caught and the app can recover on navigation.
- Included a dedicated `TestingError` route that intentionally throws, enabling validation of the Error Boundary behavior during development/demo.

## Project scope (from implementation)
- **Project type:** Frontend portfolio/repository viewer.
- **Data involved:** Yes — read-only consumption of public GitHub repository data.
- **Login/auth:** Not implemented in this project.
- **Security scope:** No backend auth/session handling; reliability focus is client-side crash containment via Error Boundary.


## How to change the profile picture
1. Add your new image file to `public/` (example: `public/my-new-photo.jpg`).
2. Open `src/Pages/HomePage.jsx` and update `PROFILE_IMAGE_PATH` to your new file path (example: `"/my-new-photo.jpg"`).
3. Save and run the app (`npm run dev`) or build (`npm run build`) to confirm the new picture appears.

Note: In Vite, files inside `public/` are referenced from the site root with `/filename`.


## How the profile picture change works (internally)
When the Home page renders, it reads the value in `PROFILE_IMAGE_PATH` from `src/Pages/HomePage.jsx` and passes it into the `<img>` tag as the `src`.

- Current config is `const PROFILE_IMAGE_PATH = "/dancer.jpg"`.
- Because Vite serves files inside `public/` from the web root, `"/dancer.jpg"` maps to `public/dancer.jpg`.
- So if you change `PROFILE_IMAGE_PATH` to `"/my-new-photo.jpg"`, the app will load `public/my-new-photo.jpg`.

In short: **`PROFILE_IMAGE_PATH` -> `<img src=...>` -> file in `public/` with the same filename**.
