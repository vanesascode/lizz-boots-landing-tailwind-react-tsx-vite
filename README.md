# Boots Shop Landing Page + Tailwind + React + TypeScript + Vite

Landing page to promote a `FICTIONAL` boots brand. Pics taken from amazon and modified by vanesascode to fit into the website: However, `I DON'T OWN THE RIGHTS OF THE IMAGES`. The rest is all by vanesascode.

On progress [project](https://lizz-boots-vanesascode.vercel.app)

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

---

## 🌟TAILWIND & CSS:

### Interesting CSS Properties:

- min-h-screen (min-height: 100vh).

- lg:max-w-lg (from 1024px onwards, max width of 32rem/512px)

- xl:w-2/5 (width: 40% from 1280px onwards)

---

### Default & custom breakpoints:

Default screens:

```
 screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
 }

```

Custom screen:

```
  screens: {
       wide: "1440px",
     },
```

### General guidelines:

In general, all `sections` and ID and have the class:

```
 .max-container {
    max-width: 1440px;
    margin: 0 auto;
  }`
```

Then, we have the following class for the `paragraphs`:

```
.info-text {
    @apply font-montserrat text-dark text-lg leading-7;
  }
```

---

`Titles` have font-palanquin, while rest has font-montserrat

The word `Lizz` has font-viga.

---

## 🌟[REACT-SLICK](https://react-slick.neostack.com/)

Install the required packages:

- [x] `npm install react-slick slick-carousel`

"slick-carousel" is for the CSS

You will have to then import this:

```
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

```

If you are using Typescript, install the TypeScript declaration file for react-slick:

- [x] `npm install --save-dev @types/react-slick`

### How it works:

Inside your component you have to add the `settings`:

```
const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

```

And then wrap the elements into the component `Slider`:

```
<Slider {...settings}>

//your code

</Slider>

```

---

## 🌟Offer section

### Collage

So, on the left of the #offer section, you can see a collage of elements that are placed on top of a transparent canvas that serves as a static background. Then, I use `relative-absolute positions`, and `percentages` instead of fixed measurements to place the gray backgrounds and the pictures, as I like best. This allows for a creative responsive design that adapts to different screen sizes and resolutions.

### Button component

On the right, there is a button component rendered twice, but with different `props`. They are props that I can use if I like, or not use and then receive the default styles instead. I think it’s really handy and gives a lot of flexibility to React components.
