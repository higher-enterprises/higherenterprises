SCHEddy DRAWN WORLD PROTOTYPE

Built from the exact src(4).zip supplied by the user.

Changed:
- src/components/Hero.tsx
- src/components/ScheddyDrawnWorld.tsx (new)
- src/app/globals.css (Scheddy Hero world block only)

Included production assets:
- public/assets/home/backgrounds/scheddy/scheddy-studio-line-art.png
  This is the exact approved sparse black-line studio background shown before coding.
- public/assets/home/backgrounds/scheddy/scheddy-studio-photo.png

Behavior:
- Owner rises using the existing Hero rise.
- At the same time, the approved line-art studio is progressively revealed through an animated SVG mask.
- The drawing does NOT restart when Hero changes from entering to holding.
- Completed drawing holds.
- Drawing crossfades to the real studio.
- Real studio holds, then clears before the existing Hero fade/gap/next venture sequence.

Not changed:
- CloudHorizon
- SiteShell
- Header/navigation
- Hero phase/state machine
- Venture owner asset
- Existing copy/layout

Global Hero timing remains:
ENTER_MS = 1250
HOLD_MS = 10000
FADE_MS = 1900
WANNA_GO_MS = 1150
