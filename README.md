# DORA — What If? Earth & Moon Explorer

**DORA** is an Android application (built with Apache Cordova) that lets you explore a 3D rendering of Earth and the Moon, using **CesiumJS** for terrain and globe visualisation. Built by Team "What If?".

## What it does

- Renders an interactive, explorable 3D globe using CesiumJS terrain data
- Supports device motion/gyroscope input for an immersive, VR-style viewing experience
- Packaged as a native Android app via Apache Cordova

## Tech stack

- **Framework:** Apache Cordova (Android platform)
- **3D rendering:** CesiumJS
- **Frontend:** HTML, JavaScript, CSS
- **Cordova plugins:** `cordova-plugin-device`, `cordova-plugin-device-motion`, `cordova-plugin-device-gyroscope`, `cordova-plugin-whitelist`

## Project structure

```
NM385_What-If/
├── config.xml          # Cordova app configuration
├── package.json        # Project metadata & dependencies
├── www/
│   ├── index.html       # Main app entry (CesiumJS viewer)
│   ├── css/ js/ img/    # Frontend assets
├── platforms/android/  # Generated Android platform files
└── plugins/            # Installed Cordova plugins
```

## Getting started

```bash
npm install -g cordova
npm install
cordova platform add android
cordova build android
cordova run android
```
## License

Apache-2.0 (see `package.json`).
