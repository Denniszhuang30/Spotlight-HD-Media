# Spotlight HD Media

Minimal runnable, public-safe website starter for cloud onboarding. This is development setup, not the finished website or a deployment.

## Stack and hosting recommendation

- Next.js App Router, React and strict TypeScript, with pinned dependencies and an npm lockfile.
- Static export (`output: "export"`) to `out/`, keeping this first version independent of a Node hosting service.
- Plain CSS for the small starter. Tailwind and shadcn/ui are deferred until reusable UI components justify additional tooling.
- No external fonts, image services, secrets, analytics, CMS or API requirements. System fonts are a deliberate bootstrap simplification, not final brand typography.

Next.js/TypeScript supports a content-first portfolio and future case-study routes. Static output can be served by a static web host; see [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports). A final paid hosting provider or plan has not been verified. Historical Framer planning is not treated as confirmation of a current hosting contract.

For a static-capable hosting plan, the future deployment artefact is `out/`. If future requirements include server-side forms, authentication or request-time rendering, reassess the hosting plan and export mode first. Deployment, domain changes and hosting purchases require separate approval.

## Temporary local project

The temporary draft has not been imported, moved or modified. A subsequent read-only inspection found a separate Framer verification fixture using React, TypeScript and Vite, with a Framer API shim. It is a test fixture, not an exportable production website. None of its files or media were copied into this starter. The existing Figma/Framer workflow and hosting route remain unchanged; this repository is a separate code-development path. A complete audit of the unfinished draft was not performed.

## Requirements

Use Node.js 22.13 or newer in the 22.x line, or Node.js 24, and npm. `.nvmrc` selects Node.js 22 when nvm is available. Commands run from the repository root.

## Install

```sh
nvm use              # optional, if nvm is installed
npm ci               # reproducible install from package-lock.json
```

No `.env` file or credentials are needed. Network access to the npm registry is needed for a fresh install. Do not run `npm install` for routine onboarding unless deliberately updating the lockfile.

## Development

```sh
npm run dev
```

Open `http://127.0.0.1:3000`. For a cloud environment that needs a non-loopback development listener, use:

```sh
npm run dev -- --hostname 0.0.0.0
```

Use only the environment's approved preview mechanism; binding a listener does not authorise public deployment.

## Validation and build

```sh
npm run validate     # ESLint, TypeScript and two source-boundary tests
npm run build        # production compilation and static export to out/
```

Run validation again after the build if Next.js updates generated type files.

## Local production preview and smoke test

```sh
npm run preview      # requires a successful build; loopback port 3000
```

In a second terminal:

```sh
npm run smoke
```

The smoke test checks HTTP 200 for the homepage, generated framework assets, robots and favicon, plus expected section anchors and noindex metadata. To test a development server on another port:

```sh
SMOKE_URL=http://127.0.0.1:3001 npm run smoke
```

The preview script is intentionally a tiny local static server, not production hosting. `next start` is not the preview command for this static-export configuration.

## Cloud onboarding

Select `main`, use Node.js 22 or 24, run `npm ci`, then `npm run build` and `npm run validate`. No custom setup secrets are required. Any hosting output-directory field should refer to `out/`; no deployment integration is configured here.

## Files and boundaries

- `app/`: homepage, metadata and responsive styles.
- `public/`: original geometric placeholder favicon and development robots file.
- `scripts/`: local static preview and HTTP smoke test.
- `tests/`: small source-boundary checks.
- `.gitignore`: dependency, build, credentials, private-record and media exclusions.

Ignore patterns are a backstop, not a guarantee of privacy. Review every staged file; never upload credentials, private client briefs, contracts, invoices, tax/bank records, private knowledge-base exports or client media.

## Remaining limitations

Only the homepage exists; the Services, Work and Contact links are in-page anchors. About, separate service/portfolio pages, CMS, real portfolio assets, enquiry delivery and final branding remain future work. Contact does not collect or send anything. Copy is explicitly placeholder content, and no client results or testimonials are claimed.

Robots and metadata discourage indexing but do not provide access control. Production launch must deliberately review these settings. Automated checks here are smoke/source tests, not full browser, accessibility or performance certification. The final host and the unfinished draft's readiness still need verification.

The current Next.js React lint plugin does not work with ESLint 10 in this setup. ESLint 9.39.5 is pinned for compatibility; npm reports that major line as unsupported. Upgrade the lint toolchain when the plugin supports ESLint 10. This is a development-tool limitation, not an ignored validation failure.

## Verification record

Verified in a separate Linux development checkout using Node.js 22.23.3 and npm 10.8.2:

- `npm ci --no-fund --no-audit`: clean lockfile installation passed.
- `npm run validate`: ESLint, strict TypeScript and both tests passed.
- `npm run build`: production compilation and static export passed.
- `npm run preview` and `npm run dev -- --port 3101`: both started successfully during bounded local tests and were stopped afterwards.
- `npm run smoke` with `SMOKE_URL` set to the respective loopback test ports: homepage, assets, anchors, favicon, robots and noindex checks passed.
- `npm audit --omit=dev --audit-level=high`: reported zero production dependency vulnerabilities at verification time.
- `git diff --check`: passed before commit.

No hosting deployment, visual browser certification, private-record import or changes to the Mac draft were performed.

### Independent Mac verification — 30 September 2026

Another session populated `main` with the Next.js starter during setup. That existing implementation was preserved, not replaced or force-pushed. A separate fresh Mac checkout was verified with **Node 24.21.0 and npm 11.19.0**:

- `npm ci`: passed; no audit vulnerabilities. npm reported the documented unsupported ESLint 9 warning and an install-script approval warning for `unrs-resolver`; no script approval was added, and validation still passed.
- `npm run validate`: lint, strict TypeScript and both source checks passed before and after the build.
- `npm run build`: production compilation and static export to `out/` passed.
- `npm run preview` and `npm run dev -- --port 3101`: started locally; `npm run smoke` passed against both (set `SMOKE_URL=http://127.0.0.1:3101` for development).
- Additional Chromium checks at 320, 375, 768 and 1440px passed on development and production preview: rendered homepage, all section links, keyboard skip-to-content path, noindex, no horizontal overflow, and no asset-loading errors or external page requests. Browser-cancelled fetch/navigation requests (`net::ERR_ABORTED`) during anchor changes were logged separately, not counted as missing assets; HTTP errors and application errors remained failures. These checks were run from separate verification tooling, not added as repository dependencies or claimed as `npm test` coverage.
- A read-only independent review found no blocking source/privacy issues. `git diff --check` passed.

These are bounded smoke and visual checks, not full accessibility or production certification. No deployment, cloud-environment configuration, paid hosting choice, domain changes or live Framer edits were performed.
