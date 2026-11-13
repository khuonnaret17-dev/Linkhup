# LinkHub — Social Media Link Aggregator

A bilingual (Khmer / English), responsive Link-in-Bio starter built with React, TypeScript, Vite and Firebase. It is a mobile-friendly Progressive Web App (PWA) that can be installed from a supported mobile browser. It is not yet a native iOS/Android store application.

## Features included
- Email/password and Google sign-in (Firebase Authentication)
- Create a public profile with a unique username
- Add, edit, enable/disable and delete social links
- Public profile page at `/{username}`
- Khmer / English interface switch
- Light/dark profile theme and accent color
- QR code generation and copy profile URL
- Responsive desktop and mobile layout
- Starter Firestore security rules

## 1. Requirements
- Node.js 20 or later
- A Firebase project
- npm

## 2. Firebase setup
1. Open https://console.firebase.google.com/ and create a project.
2. In Project settings → General → Your apps, add a Web app.
3. Copy the Firebase config values.
4. Authentication → Sign-in method: enable **Email/Password** and **Google**.
5. Firestore Database → Create database.
6. In Firestore Rules, paste the contents of `firestore.rules` and publish.
7. Copy `.env.example` to `.env.local` and fill in your own Firebase web app values.

Example:
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Do not commit `.env.local` to a public Git repository.

## 3. Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite (usually http://localhost:5173).

## 4. Build for deployment
```bash
npm run build
```
Deploy the generated `dist/` folder to Firebase Hosting:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to: dist
# Configure as a single-page app: Yes
firebase deploy
```
For Firebase Hosting, use a rewrite from `**` to `/index.html` so React Router can serve profile routes such as `/naret`.

## Important production notes
- Firebase web configuration is public client configuration; secure access with Authentication, Firestore Rules, and App Check. Never put service-account private keys in frontend code.
- The included Firestore rules are a starter baseline, not a full production security audit.
- Username uniqueness needs a transaction or dedicated reservation collection before production launch to prevent two users claiming the same username simultaneously.
- The starter analytics page is a placeholder. Public link clicks create event documents, but reliable page-view aggregation, bot filtering, retention policies and abuse controls still need a trusted Cloud Function or server-side implementation.
- Profile photo currently accepts an image URL. Add Firebase Storage upload flow for direct uploads.
- Native Android/iOS packaging (e.g. Capacitor) is a separate release step; this project is currently a responsive installable web app.
