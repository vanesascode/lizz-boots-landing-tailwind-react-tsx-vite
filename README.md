# Boots Shop Landing Page + Tailwind + React + TypeScript + Vite

Landing page to promote a `FICTIONAL` boots brand. Pics taken from amazon and modified by vanesascode to fit into the website: However, `I DON'T OWN THE RIGHTS OF THE IMAGES`. The rest is all by vanesascode.

## 🌟Configurations and rules for ESLint

See the `.eslintrc.cjs` file to see them. ESLint is a tool used for analyzing and enforcing code quality in JavaScript.

## 🌟VITE

- To create a project:

- [x] run: `npm create vite@latest`

select 'React' as the framework and select 'Javascript' as the variant.

- [x] run: `npm install` to install all the dependencies

---

- To run the project:

- [x] run: `npm run dev`

---

## 🌟TAILWIND

Go to the frameworks guides. [In this case for Vite](https://tailwindcss.com/docs/guides/vite)

- [x] `npm install -D tailwindcss postcss autoprefixer`

- [x] `npx tailwindcss init -p`

To generate a TypeScript config file, use the --ts flag:

- [x] `npx tailwindcss init --ts`

💡 Generate a complete configuration file that includes all of Tailwind’s default configuration:

- [x] `npx tailwindcss init --full`

---

### tailwind.config.js

- The `content` property is an array that specifies the files which Tailwind CSS should scan for classes.

In this case, it includes the "./index.html" file and all files matching the pattern "./src/\*_/_.{js,jsx}". This means that Tailwind CSS will scan the index.html file and all JavaScript and JSX files inside the src directory for classes to include in the final CSS output.

- The `mode` property is set to `jit`, which stands for "just-in-time" mode. This mode allows Tailwind CSS to generate styles on-demand, resulting in smaller file sizes and improved performance.

- The `theme` property is an object that allows you to customize various aspects of the default styling provided by Tailwind CSS.

In this case, the extend property is an object that includes customizations for colors and fonts. The colors object defines custom color values for the "primary", "secondary", "dimWhite", and "dimBlue" colors. The fontFamily object defines a custom font stack for the "poppins" font.

The `screens` property is an object that defines custom breakpoints for responsive design. It includes various screen sizes such as "xs", "ss", "sm", "md", "lg", and "xl", and their corresponding pixel values.

The `plugins` property is an array that allows you to add additional plugins to Tailwind CSS. In this case, the array is empty, so no additional plugins are being added.

---

## 🌟DARK MODE:

In the Tailwind configuration file:

```
module.exports = {
  content: ['auto'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

```

You apply it like this:

```
<h1 className="bg-white dark:bg-black" >
```

You program it like this:

- Example in Vanilla:

```
HTML

<button id="toggleDark" onClick="document-body.classList.toggle('dark')">Toggle Dark Mode </button>

JS

document.addEventListener("DOMContentLoaded", () => {
   const toggleDark = document.getElementById('toggleDark')
   toggleDark.addEventListener('click', function() {
      if(document.documentElement.classList.includes('dark')) {
      document.documentElement.classList.remove('dark')
      }
      else {
      document.documentElement.classList.add('dark')
      }
   });
});

```

## 🌟useEffect to render the sales phrases at the top:

```
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % salesPhrases.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

```

The useEffect hook performs side effects in the component. It takes two arguments: a callback function and a dependency array.

👉 The callback function is executed after the component is `rendered`.

In this case, the callback function sets up an interval using setInterval to update the index state variable every 5 seconds.

The clearInterval function is returned from the callback function to clean up the interval when the component is `unmounted`.

The empty dependency array [] ensures that the effect is only run once, when the component is `mounted`.

📋 `% salesPhrases.length`: This part of the expression calculates the remainder after dividing the incremented prevIndex value by the length of the salesPhrases array. 👉This ensures that the index value loops back to 0 when it reaches the end of the array, creating a circular effect.

## Interesting CSS Properties:

Interesting properties in the HERO section:

- min-h-screen (min-height: 100vh): in the section tag.

- xl:w-2/5 (width: 40% from 1280px onwards): in the left part of the hero. From 1280px (Tailwind default xl screen size) onwards, the flex is also flex-row. And while it is flex-col, the padding is (max-xl:padding-x)
