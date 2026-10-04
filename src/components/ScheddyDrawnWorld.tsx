"use client";

type Trace = { d: string; delay: number; duration?: number };

const traces: Trace[] = [
  // LEFT: room/window frame + major panes
  { d:"M42 0 L42 287", delay:100, duration:900 },
  { d:"M42 0 L303 72", delay:180, duration:1000 },
  { d:"M99 16 L99 279 M151 31 L151 279 M201 45 L201 279 M249 58 L249 279 M296 70 L296 279", delay:300, duration:1500 },
  { d:"M43 48 L303 111 M43 94 L303 147 M43 141 L303 184 M43 188 L303 221 M43 235 L303 257", delay:520, duration:1600 },

  // LEFT: large plant silhouette
  { d:"M15 410 C2 350 2 266 17 165 C42 193 56 232 56 286 C63 224 92 185 126 178 C111 219 91 250 69 279 C96 238 126 219 157 222 C131 255 104 277 74 293 C106 278 137 281 161 300 C128 314 98 317 67 309 C80 345 78 382 69 410 Z", delay:850, duration:1900 },

  // LEFT: rolling cabinet
  { d:"M111 286 L245 286 L245 392 L112 392 Z", delay:1200, duration:1100 },
  { d:"M126 301 L231 301 M126 314 L231 314 M126 327 L231 327 M126 340 L231 340 M126 353 L231 353 M126 366 L231 366", delay:1400, duration:1250 },
  { d:"M121 392 L121 405 M235 392 L235 405", delay:1650, duration:650 },

  // stool
  { d:"M255 319 C266 310 300 310 310 319 C300 329 266 329 255 319 Z M283 329 L283 391 M283 376 L253 401 M283 376 L316 401", delay:1900, duration:1250 },

  // center-left plant / counter / carts
  { d:"M279 287 C278 253 285 229 301 211 C309 233 309 257 303 287 M303 287 C309 251 322 229 337 218 C338 247 330 269 317 287", delay:2150, duration:1200 },
  { d:"M329 286 L441 286 L441 383 L329 383 Z M343 300 L425 300 M343 319 L425 319 M343 338 L425 338 M343 357 L425 357", delay:2400, duration:1400 },

  // pendant 1 / 2
  { d:"M338 0 L338 53 M306 93 C313 64 361 64 370 93 C354 107 321 107 306 93 Z", delay:2550, duration:950 },
  { d:"M454 31 L454 81 M427 112 C435 89 473 89 481 112 C468 124 440 124 427 112 Z", delay:2750, duration:900 },

  // three framed tattoo artworks
  { d:"M424 137 L491 137 L491 241 L424 241 Z", delay:2950, duration:900 },
  { d:"M507 128 L590 128 L590 240 L507 240 Z", delay:3100, duration:950 },
  { d:"M607 116 L690 116 L690 238 L607 238 Z", delay:3250, duration:950 },
  // simplified art marks
  { d:"M456 149 L456 215 M445 176 L467 176 M446 186 C456 199 458 208 456 222 C452 207 447 199 443 190", delay:3300, duration:900 },
  { d:"M548 144 C526 151 522 176 540 186 C521 193 526 221 549 228 C572 214 574 193 557 184 C575 171 568 150 548 144 Z", delay:3450, duration:1100 },
  { d:"M648 137 L648 220 M648 170 C632 151 620 143 614 139 M648 170 C664 151 676 143 682 139 M648 184 C630 177 618 167 611 157 M648 184 C666 177 678 167 685 157", delay:3600, duration:1150 },

  // center hero chair: major silhouette only
  { d:"M382 349 L471 309 L526 309 L559 269 L586 231 L623 232 L638 250 L602 319 L568 346 L479 376 L400 371 Z", delay:3700, duration:1700 },
  { d:"M401 371 L467 382 L557 350 L568 346", delay:3920, duration:900 },
  { d:"M487 379 L459 416 L574 416 L553 352", delay:4100, duration:1000 },
  { d:"M459 416 L425 430 M574 416 L595 429", delay:4250, duration:700 },

  // pendant 3
  { d:"M645 14 L645 74 M616 105 C623 78 668 78 676 105 C662 117 630 117 616 105 Z", delay:4300, duration:900 },

  // right cabinetry
  { d:"M592 286 L686 286 L686 379 L592 379 Z M608 304 L670 304 M608 326 L670 326 M608 349 L670 349", delay:4450, duration:1100 },

  // doorway
  { d:"M723 0 L723 387 M723 0 L886 0 M744 48 L744 384 M744 48 L886 15", delay:4650, duration:1400 },

  // right shelves + bottles
  { d:"M780 151 L860 151 M780 202 L860 202", delay:4900, duration:750 },
  { d:"M790 137 L790 151 M802 132 L802 151 M814 135 L814 151 M826 131 L826 151 M838 134 L838 151 M850 130 L850 151", delay:5050, duration:850 },
  { d:"M790 186 L790 202 M802 181 L802 202 M814 184 L814 202 M826 180 L826 202 M838 183 L838 202 M850 179 L850 202", delay:5150, duration:850 },

  // right plant + stool
  { d:"M850 385 C846 334 852 278 873 236 C884 264 884 307 877 339 M876 274 C854 253 840 241 828 237 M874 297 C890 274 899 262 906 257", delay:5250, duration:1200 },
  { d:"M790 310 C803 303 826 303 838 310 C830 319 800 319 790 310 Z M814 319 L814 383 M794 383 L835 383", delay:5400, duration:950 },

  // floor/rug anchors — sparse, no texture
  { d:"M0 411 L425 411 M596 395 L887 395", delay:5550, duration:950 },
  { d:"M600 395 L887 395 L887 443 L598 443 Z", delay:5650, duration:1000 }
];

export default function ScheddyDrawnWorld() {
  return (
    <svg
      className="scheddyDrawnWorld"
      viewBox="0 0 887 443"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      {traces.map((trace, i) => (
        <path
          key={i}
          className="scheddyMajorTrace"
          d={trace.d}
          pathLength="1"
          style={{
            ["--trace-delay" as string]: `${trace.delay}ms`,
            ["--trace-duration" as string]: `${trace.duration ?? 1000}ms`,
          }}
        />
      ))}
    </svg>
  );
}
