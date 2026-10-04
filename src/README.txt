HIGHER ENTERPRISES — DIVISIONS EXPERIENCE

Files:
- components/DivisionsExperience.tsx
- app/divisions/page.tsx
- styles/divisions.css
- public/assets/divisions/*

Integration:
1. Copy components/DivisionsExperience.tsx to src/components/.
2. Copy styles/divisions.css to src/styles/ (or merge it into your global stylesheet).
3. Copy public/assets/divisions/ into your project's public/assets/divisions/.
4. Place page.tsx at the route your project uses for /divisions. If your app already has a route-group page for /divisions, replace that existing page instead of creating a duplicate route.
5. The component imports ../styles/divisions.css. If your project disallows global CSS imports from components, move that import to your root layout or merge the CSS into src/app/globals.css.

Behavior:
- Fixed vertical division navigation beneath the logo area
- 7 horizontal 100vw slides
- Click division names to switch
- Wheel / trackpad navigation
- Arrow / PageUp / PageDown / Home / End keyboard navigation
- Touch swipe navigation
- Active teal indicator

IMPORTANT: The Higher global header/cloud system is intentionally not recreated in the component. It is expected to remain supplied by the existing parent site.
