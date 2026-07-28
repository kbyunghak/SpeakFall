# SpeakFall

Voice-powered English learning game featuring sentence practice, pronunciation
feedback, and a fast-paced falling-word challenge. Built with React, Vite,
Vitest, and the Web Speech API.

[![CI](https://github.com/kbyunghak/SpeakFall/actions/workflows/ci.yml/badge.svg)](https://github.com/kbyunghak/SpeakFall/actions/workflows/ci.yml)
[![Deploy](https://github.com/kbyunghak/SpeakFall/actions/workflows/deploy.yml/badge.svg)](https://github.com/kbyunghak/SpeakFall/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-0969da)](https://kbyunghak.github.io/SpeakFall/)

Practice English sentences and vocabulary through browser-based speech
recognition and interactive gameplay.

> **Speak. Score. Improve.**

## Features

- Practice English sentences at multiple difficulty levels
- Compare recognized speech with the target sentence word by word
- View pronunciation accuracy and identify missed words
- Play a voice-controlled falling-word challenge
- Track score, level, lives, correct words, and missed words
- Explore curated English pronunciation resources

## Requirements

- Node.js 20 or later
- npm
- A microphone
- A modern Chromium-based browser is recommended

Web Speech API support varies by browser. Microphone permission is required to
use speech recognition.

## Getting Started

```bash
npm ci
npm start
```

The development server runs at `http://localhost:5173` by default.

## Testing and Building

```bash
# Run tests in watch mode
npm test

# Run the CI test suite with coverage
npm run test:ci

# Create a production build
npm run build

# Validate sentence and vocabulary data
npm run data:validate
```

Production files are generated in `dist/`.

## Project Structure

```text
src/
├─ components/
│  ├─ common/              Shared UI components
│  └─ layout/              Header and footer
├─ data/                   Sentence and vocabulary data
├─ pages/
│  ├─ HomePage/
│  ├─ PronunciationResourcesPage/
│  ├─ SentenceGamePage/
│  └─ VocabularyGamePage/
├─ services/               Web Speech API integration
├─ utils/                  Pronunciation and game calculations
├─ App.jsx                 Routes and application layout
├─ App.test.jsx            Application integration tests
└─ index.jsx               React entry point
```

React components handle presentation and state composition. Browser APIs are
isolated in `services/`, while framework-independent calculations live in
`utils/`.

## Data

`src/data/sentences.json` contains the following categories:

- `beginner`
- `intermediate`
- `advanced`
- `hardWords`

CI verifies that every category is non-empty, contains valid strings, and has
no duplicate entries. New content must preserve the existing JSON structure.

## CI/CD

### Continuous Integration

`.github/workflows/ci.yml` runs for pushes and pull requests targeting `main`
or `master`. It performs the following checks:

1. Install dependencies with `npm ci`
2. Run tests and generate coverage
3. Validate sentence and vocabulary data
4. Create a production build

### GitHub Pages Deployment

`.github/workflows/deploy.yml` runs on pushes to the default branch or through
manual dispatch. It tests and builds the application, then deploys `dist/` to
GitHub Pages.

The repository's **Settings → Pages → Build and deployment → Source** option
must be set to `GitHub Actions`.

SpeakFall uses lightweight hash-based routing to prevent refresh-related 404
errors on GitHub Pages.

The current deployment URL is:

```text
https://kbyunghak.github.io/SpeakFall/
```

If the repository is renamed, update the `homepage` field in `package.json`,
the `base` setting in `vite.config.js`, and the links in this README.

## Known Limitations

- Recognition accuracy depends on the browser, microphone quality, and ambient
  noise.
- Some Web Speech API features may be limited in Safari and Firefox.
- Sentence scoring currently uses ordered word matching.
- Legacy browsers may require additional Vite compatibility configuration.

## Roadmap

- Review sentence content for grammar and natural phrasing
- Improve the pronunciation comparison algorithm
- Expand page-level component test coverage
- Improve accessibility and mobile layouts
- Add browser automation for complete voice-game flows

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for commit message and change-scope
guidelines.
