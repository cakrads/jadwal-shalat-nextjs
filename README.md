# Jadwal Shalatku - Chrome Extension and PWA
Jadwal Shalatku is Application used for remind us about Pray Times. This Application work in Chrome Extension (Plugin) and PWA (on Development)  

## Screenshoot
![N|Solid](https://github.com/cakrads/jadwal-shalat-nextjs/blob/develop/public/images/images-1.png?raw=true)

## Fitur
There's some feature in this App:
#### Fitur pada Chrome Extension
- Show Pray Times base on Location
- Show All Praytime day by day
- Location Selection
- Selection Calculation Type
- Reminder Praytime with Adzan (will work in manifest versi 2)

#### Fitur pada PWA
- Show Pray Times base on Location
- Show All Praytime day by day
- Location Selection
- Selection Calculation Type
- Reminder Praytime with Adzan (on Development)

## Tech Stack
#### Core
- Next.js (React.js) - Core system
- React Hooks - use in Functional Component
- useContext - use for State management 
- [Tailwind](https://tailwindcss.com/) - CSS Framework
- TypeScript

#### Additional Flavour
- Next-PWA (Workbox) - to create PWA in Next.js
- [Notification Web API](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
- [Geolocation Web API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Chrome Alarm](https://developer.chrome.com/docs/extensions/reference/alarms/), this use in Extension
- [Chrome Notification](https://developer.chrome.com/docs/extensions/reference/notifications/), this use in Extension

#### Design and Terminology
- Component Structure with [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Mobile First Approach](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- Desing with [Glass Morphism](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)

## Installation and Run in Browser
This App requires [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

Installation
```bash
npm i
```

Run
```bash
npm run start
```

#### Building
Build Chrome Plugin (manifest v2, with Adzan)
```bash
npm run ex-extension
```

Build Chrome Extension (manifest v3, only sound notification)
```bash
npm run ex-extension-v3
```

Build PWA
```bash
npm run export
```

#### Installation Extenstion
Do this step to install Chrome Extension
1. extract chrome-extension.zip. 
2. Open Chrome browser and type ```chrome://extensions/```. 
3. In top right, Switch Developer on Developer Mode
4. Click ```Load Unpack``` and Choose chrome-extension folder

## Deploy
Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Additional
Logo Created in https://editor.freelogodesign.org/