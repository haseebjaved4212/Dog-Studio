# Dog Studio

A modern, interactive portfolio website for **Dogstudio**, a multidisciplinary creative studio at the intersection of art, design, and technology. This project showcases immersive 3D elements, smooth animations, and a clean, high-performance UI.

## 🚀 Features

*   **Immersive 3D Experience:** Features a realistic, interactive 3D dog model rendered using **React Three Fiber**.
*   **Smooth Animations:** Powered by **GSAP (GreenSock Animation Platform)** with ScrollTrigger for engaging scroll-based interactions.
*   **Dynamic Showcase:** Interactive project list highlighting key works like Tomorrowland, Navy Pier, and MSI Chicago.
*   **Modern Design:** fully responsive layout with a focus on aesthetics and user experience.
*   **High Performance:** Built with **Vite** for lightning-fast development and optimized production builds.

## 🛠️ Tech Stack

This project is built using the following technologies:

*   **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
*   **3D Graphics:** [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [Drei](https://github.com/pmndrs/drei)
*   **Animations:** [GSAP](https://gsap.com/)
*   **Icons:** [Remix Icon](https://remixicon.com/)
*   **Styling:** CSS

## 📦 Installation

To get this project running locally on your machine, follow these steps:

1.  **Clone the repository** (if applicable) or download the source code.

2.  **Navigate to the project directory:**
    ```bash
    cd "Dog Studio"
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## 🖥️ Usage

### Development Server
Start the local development server with hot-reloading:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build
Build the project for production:
```bash
npm run build
```

### Preview Production Build
Preview the built application locally:
```bash
npm run preview
```

### Linting
Run the linter to catch errors and enforce code style:
```bash
npm run lint
```

## 📂 Project Structure

```
Dog Studio/
├── public
    ├── kikk.png
    ├── kennedy.png
    ├── opera.png
    ├── phone.png
    ├── navy-pier.png
    ├── background-1.png
    ├── dog_normals.jpg
    ├── msi-chicago.png
    ├── tommorowland.png
    ├── met-cap
    │   ├── mat-1.png
    │   ├── mat-10.png
    │   ├── mat-11.png
    │   ├── mat-12.png
    │   ├── mat-13.png
    │   ├── mat-14.png
    │   ├── mat-15.png
    │   ├── mat-16.png
    │   ├── mat-17.png
    │   ├── mat-18.png
    │   ├── mat-19.png
    │   ├── mat-2.png
    │   ├── mat-20.png
    │   ├── mat-3.png
    │   ├── mat-4.png
    │   ├── mat-5.png
    │   ├── mat-6.png
    │   ├── mat-7.png
    │   ├── mat-8.png
    │   ├── mat-9.png
    │   └── sample.png
    ├── models
    │   └── dog.drc.glb
    ├── branches_diffuse.jpg
    ├── branches_normals.jpg
    └── vite.svg
├── vite.config.js
├── src
    ├── main.jsx
    ├── components
    │   ├── Footer.jsx
    │   └── Dog.jsx
    ├── assets
    │   └── react.svg
    ├── App.css
    └── App.jsx
├── .gitignore
├── index.html
├── eslint.config.js
├── package.json
└── README.md
```

## 📄 License

This project is for educational and portfolio purposes. All rights reserved by the original creators.


---

<h3 align="center">Happy Coding ❤️</h3>