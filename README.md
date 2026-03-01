# Car Talk 🚗💬

> Anonymous inter-vehicle messaging — Android app + Progressive Web App

[![Android CI](https://github.com/djtaylor333/car-talk-web/actions/workflows/android.yml/badge.svg)](https://github.com/djtaylor333/car-talk-web/actions/workflows/android.yml)
[![Web Deploy](https://github.com/djtaylor333/car-talk-web/actions/workflows/web.yml/badge.svg)](https://github.com/djtaylor333/car-talk-web/actions/workflows/web.yml)

**Car Talk** lets drivers communicate with each other — completely anonymously — by searching a license plate number. No personal information is ever shared between users.

🌐 **PWA:** https://djtaylor333.github.io/car-talk-web  
📱 **Android APK:** See [Releases](https://github.com/djtaylor333/car-talk-web/releases)

---

## ✨ Features

| Feature | Detail |
|---|---|
| Anonymous messaging | 200-char limit, no identity revealed |
| Friend system | Send a friend request with a 100-char intro; unlock 500-char messages |
| Vehicle profiles | Up to 3 vehicles per account (plate, make, model, color) |
| License plate search | Find any registered Car Talk user instantly |
| 30-day message retention | Messages auto-expire; no permanent data storage |
| 5 msg/day limit | Per vehicle, anonymous only — friends are unlimited |
| Profanity filter | Client-side word-boundary filter on all messages |
| Push notifications | FCM — foreground, background, and Android Auto |
| Android Auto | Notification-only integration via `CarExtender` |
| PWA | Installable, offline-capable via Workbox service worker |

---

## 🏗 Project Structure

```
car-talk-web/
├── android-app/        # Kotlin + Jetpack Compose Android app
│   └── app/src/
│       ├── main/       # Production source
│       ├── test/       # JVM unit tests (JUnit4 + Mockito + Turbine)
│       └── androidTest/# Instrumented tests (Hilt + Compose UI + Room)
├── web-app/            # Vite + React 18 + TypeScript PWA
│   └── src/
│       ├── services/   # Firebase Auth / Firestore wrappers
│       ├── hooks/      # useAuth, useMessages, useFriends
│       ├── components/ # Layout, ProtectedRoute, VehicleSilhouette
│       ├── pages/      # All 9 route pages
│       └── test/       # Vitest + Testing Library
├── firebase/           # Firestore security rules + indexes
├── scripts/            # Dev utilities, seed data
└── .github/workflows/  # CI/CD — Android release + GitHub Pages deploy
```

---

## 🚀 Getting Started

### Prerequisites
- Node 20+
- Android Studio Ladybug (AGP 8.7 / Gradle 8.10)
- Java 17
- Firebase CLI (`npm i -g firebase-tools`)

### Web App

```bash
cd web-app
npm install
cp .env.example .env.local   # fill in your Firebase web credentials
npm run dev                  # http://localhost:5173/car-talk-web/
npm test                     # run Vitest unit tests
npm run test:coverage        # coverage report
npm run build                # production build
```

### Android App

1. Copy your `google-services.json` to `android-app/app/`
2. Copy `android-app/keystore.properties.example` → `android-app/keystore.properties` and fill in signing details
3. Open `android-app/` in Android Studio
4. Run on a device / emulator (API 34+)

```bash
cd android-app
./gradlew test              # JVM unit tests
./gradlew connectedTest     # instrumented tests (device required)
./gradlew assembleDebug     # debug APK
./gradlew assembleRelease   # signed release APK
```

### Firebase Setup

```bash
firebase login
firebase use cartalk-app
firebase deploy --only firestore:rules,firestore:indexes
```

### Seed Test Data (emulator)

```bash
firebase emulators:start --only firestore
node scripts/seed_test_data.js
```

---

## 🔐 Firebase Security

- **Authentication:** Email/password via Firebase Auth
- **Firestore rules:** Enforce all business logic server-side:
  - Max 3 vehicles per user
  - Message size limits (200 / 500 chars)
  - `expiresAt` required on every message
  - Users can only read/write their own messages
  - Sender/recipient scoping on friend requests
- **Profanity filter:** Word-boundary regex, client-side (upgrade to Cloud Functions on Blaze plan for server enforcement)

---

## 📦 Release Process

### Web
Push to `main` → GitHub Actions builds PWA → deploys to GitHub Pages automatically.

### Android
```powershell
.\build-release.ps1 -BumpType patch   # minor | major | patch
```
This bumps `version.json`, commits, creates a `vX.Y.Z` tag, and pushes.
The `android.yml` workflow then:
1. Runs unit tests
2. Builds signed APK + AAB
3. Creates a GitHub Release with both artifacts

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `GOOGLE_SERVICES_JSON` | Full contents of `google-services.json` |
| `KEYSTORE_BASE64` | Base64-encoded `.jks` keystore |
| `KEYSTORE_PASSWORD` | Keystore password |
| `KEY_ALIAS` | Key alias |
| `KEY_PASSWORD` | Key password |
| `VITE_FIREBASE_API_KEY` | Web Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | FCM sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |

---

## 🧪 Test Coverage

| Layer | Framework | Key tests |
|---|---|---|
| Android utils | JUnit4 + Mockito | ProfanityFilter (7), ThreadIdUtil (5) |
| Android ViewModels | Turbine + Coroutines | ComposeVM (10), SearchVM (6), AuthVM (6) |
| Android repositories | Mockito | MessageRepository (8), FriendsRepository (3) |
| Android Room | In-memory DB | MessageDao (7), VehicleDao |
| Android UI | Compose Test | LoginScreen (4) |
| Web utils | Vitest | profanityFilter (7), threadId (5) |
| Web services | Vitest + mocks | messages service (5) |
| Web components | Testing Library | VehicleSilhouette (4), ProtectedRoute (3) |

---

## 🛣 Roadmap

- [ ] Image attachments (requires Blaze plan for Firebase Storage)
- [ ] Server-side profanity filter via Cloud Functions
- [ ] In-app browser notifications (Web Push API)
- [ ] Vanity display names per vehicle
- [ ] Report / block system

---

## 📄 License

MIT © 2026 djtaylor333
