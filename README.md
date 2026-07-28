# SpeakFall

Voice-powered English learning game featuring sentence practice, pronunciation
feedback, and a fast-paced falling-word challenge. Built with React, Vite,
Vitest, and the Web Speech API.

[![CI](https://github.com/kbyunghak/SpeakFall/actions/workflows/ci.yml/badge.svg)](https://github.com/kbyunghak/SpeakFall/actions/workflows/ci.yml)
[![Deploy](https://github.com/kbyunghak/SpeakFall/actions/workflows/deploy.yml/badge.svg)](https://github.com/kbyunghak/SpeakFall/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-0969da)](https://kbyunghak.github.io/SpeakFall/)

브라우저의 Web Speech API를 이용해 영어 문장과 단어 발음을 연습할 수
있습니다.

> **Speak. Score. Improve.**

## 주요 기능

- 난이도별 영어 문장 발음 연습
- 음성 인식 결과와 기준 문장의 단어별 비교
- 발음 정확도 및 틀린 단어 표시
- 화면에서 떨어지는 단어를 발음하는 게임
- 점수, 레벨, 생명 및 놓친 단어 기록
- 영어 발음 학습 자료 제공

## 실행 환경

- Node.js 20 이상
- npm
- 마이크를 사용할 수 있는 최신 Chromium 기반 브라우저 권장

Web Speech API 지원 범위는 브라우저마다 다릅니다. 음성 인식 기능을
사용하려면 브라우저의 마이크 권한을 허용해야 합니다.

## 로컬 실행

```bash
npm ci
npm start
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 테스트와 빌드

```bash
# 대화형 테스트
npm test

# CI용 테스트와 커버리지
npm run test:ci

# 프로덕션 빌드
npm run build

# 문장·단어 데이터 검증
npm run data:validate
```

프로덕션 결과물은 `dist/`에 생성됩니다.

## 프로젝트 구조

```text
src/
├─ components/
│  ├─ common/              공통 UI 컴포넌트
│  └─ layout/              Header, Footer
├─ data/                   문장 및 단어 데이터
├─ pages/
│  ├─ HomePage/
│  ├─ PronunciationResourcesPage/
│  ├─ SentenceGamePage/
│  └─ VocabularyGamePage/
├─ services/               Web Speech API 접근
├─ utils/                  발음 평가 및 게임 계산
├─ App.js                  라우트와 전체 레이아웃
├─ App.test.js             앱 통합 테스트
└─ index.js                React 진입점
```

React 컴포넌트는 화면과 상태 조합을 담당하고, 브라우저 API는
`services/`, React에 의존하지 않는 계산은 `utils/`에 둡니다.

## 데이터

`src/data/sentences.json`은 다음 카테고리를 포함합니다.

- `beginner`
- `intermediate`
- `advanced`
- `hardWords`

CI에서 각 카테고리가 비어 있지 않고 유효한 문자열만 포함하는지,
중복 항목이 없는지 검증합니다. 문장을 추가할 때 기존 JSON 구조를
유지해야 합니다.

## CI/CD

### CI

`.github/workflows/ci.yml`은 `main` 또는 `master` 브랜치의 push와
pull request에서 다음 작업을 실행합니다.

1. `npm ci`
2. 테스트 및 커버리지 생성
3. 문장·단어 데이터 검증
4. 프로덕션 빌드

### GitHub Pages 배포

`.github/workflows/deploy.yml`은 기본 브랜치 push 또는 수동 실행 시
테스트와 빌드를 수행한 뒤 `dist/`를 GitHub Pages에 배포합니다.

저장소의 **Settings → Pages → Build and deployment → Source**를
`GitHub Actions`로 설정해야 합니다.

라우팅은 GitHub Pages에서 새로고침 404가 발생하지 않도록
가벼운 내부 해시 라우팅을 사용합니다.

현재 `package.json`의 배포 경로는 다음 저장소명을 기준으로 합니다.

```text
https://kbyunghak.github.io/SpeakFall/
```

저장소 이름을 변경하면 `package.json`의 `homepage`와 README의 배포
링크도 함께 변경해야 합니다.

## 알려진 제한사항

- 음성 인식 정확도는 브라우저, 마이크 및 주변 소음의 영향을 받습니다.
- Safari와 Firefox에서는 일부 Web Speech API 기능이 제한될 수 있습니다.
- 문장 비교는 현재 단어 순서를 기준으로 한 단순 일치 방식입니다.
- 최신 Vite 기반이므로 구형 브라우저는 별도 legacy 설정이 필요할 수 있습니다.

## 향후 개선

- 문장 콘텐츠의 문법 및 자연스러움 검수
- 발음 비교 알고리즘 개선
- 페이지별 컴포넌트 테스트 확대
- 접근성 및 모바일 레이아웃 개선
- 브라우저 자동화 기반의 실제 음성 게임 흐름 테스트

## 기여

커밋 메시지와 변경 범위 규칙은 [CONTRIBUTING.md](./CONTRIBUTING.md)를
참고해 주세요.
