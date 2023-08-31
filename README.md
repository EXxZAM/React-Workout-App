# Workout React App 

## Final Project Demo:

![Untitled](readmeAssets/Untitled.png)

**_Visit Live Websites:_**

| Workout-app-Farsi   | https://workout-react-fa.netlify.app/ |
| ------------------- | ------------------------------------- |
| Workout-app-English | https://workout-react.netlify.app/    |

## Usefull Links:

| NPM         | https://npmjs.com/                        | Package Manager                                   |
| ----------- | ----------------------------------------- | ------------------------------------------------- |
| Vite.js     | https://vitejs.dev/                       | Next Generation Frontend Tooling                  |
| React.js    | https://reactjs.org/                      | A JavaScript library for building user interfaces |
| Tailwindcss | https://tailwindcss.com/docs/installation | A utility-first CSS framework                     |

## Images:

![blog-home.webp](readmeAssets/blog-home.webp)

![card-arrow.png](readmeAssets/card-arrow.png)

![blog-program.png](readmeAssets/blog-program.png)

![hero-tutorials.png](readmeAssets/hero-tutorials.png)

![hero-videos.png](readmeAssets/hero-videos.png)

![hero-km.png](readmeAssets/hero-km.png)

![hero-logo.png](readmeAssets/hero-logo.png)

![back.png](readmeAssets/back.png)

![hero-man.png](readmeAssets/hero-man.png)

## Google Fonts:

```html
<link
    href="https://fonts.googleapis.com/css2?family=Alexandria&display=swap"
    rel="stylesheet"
/>
```

## Step By Step Guide:

<aside>
📦 install npm

[npm](https://npmjs.com/)

</aside>

<aside>
💡 install vite →

[Vite](https://vitejs.dev/)

</aside>

<aside>
⚛️ install react

```bash
npm install -g react
```

</aside>

<aside>
➕ create a react project

```bash
npm create vite@latest
```

</aside>

<aside>
💈 install Tailwindcss

[Installation - Tailwind CSS](https://tailwindcss.com/docs/installation)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

-   create a `postcss.config.js` file and add the following:
    ```jsx
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    };
    ```
-   add the following config to `tailwind.config.js`:
    ```jsx
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
    };
    ```
-   then add the following commands to index.css:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

</aside>

> Made by Mahdi Olamaei (exxzam)
> [https://aparat.com/exxzamTutorials](https://aparat.com/exxzamTutorials)
