import {
  shield,
  support,
  truck,
  twitter,
  facebook,
  instagram,
} from "../assets/icons";

import {
  boot1,
  boot2,
  boot3,
  boot4,
  boot5,
  boot6,
  boot7,
  customer1,
  customer2,
  customer3,
} from "../assets/images";

export const navLinks: { href: string; label: string }[] = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const salesPhrases: { title: string; subtitle: string }[] = [
  {
    title: "Discover our offers",
    subtitle: "New models available. Discover our best offers and discounts.",
  },
  {
    title: "-25% WHEN YOU BUY 2 OR MORE",
    subtitle: "Lizz Member, use the code BTS23 on not on sales products.",
  },
  {
    title: "FREE SHIPPING",
    subtitle:
      "Enjoy seamless shopping with our complimentary shipping service.",
  },
];

export const shoes = [
  {
    thumbnail: boot4,
    bigShoe: boot4,
  },
  {
    thumbnail: boot2,
    bigShoe: boot2,
  },
  {
    thumbnail: boot3,
    bigShoe: boot3,
  },
];

export const statistics: { value: string; label: string }[] = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const carrouselCards = [
  {
    id: 1,
    url: boot1,
    alt: "boot1",
    name: "Lizz Chic Fit",
    price: "$199.30",
  },
  {
    id: 2,
    url: boot2,
    alt: "boot2",
    name: "Lizz Wide Fit",
    price: "$205.20",
  },
  {
    id: 3,

    url: boot3,
    alt: "boot3",
    name: "Lizz Wide Push",
    price: "$200.20",
  },
  {
    id: 4,
    url: boot4,
    alt: "boot4",
    name: "Lizz Leather-01",
    price: "$219.40",
  },
  {
    id: 5,
    url: boot5,
    alt: "boot5",
    name: "Lizz Leather-02",
    price: "$239.40",
  },
  {
    id: 6,
    url: boot6,
    alt: "boot6",
    name: "Lizz Leather-03",
    price: "$259.40",
  },
  {
    id: 7,
    url: boot7,
    alt: "boot7",
    name: "Lizz Fluff Fit",
    price: "$227.20",
  },
];

export const products: { imgURL: string; name: string; price: string }[] = [
  {
    imgURL: boot1,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: boot2,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: boot3,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: boot4,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truck,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shield,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Flavia Orlando",
    rating: 4.7,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Patricia Concepcion",
    rating: 4.8,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer3,
    customerName: "Lauren Cruz",
    rating: 4.5,
    feedback:
      "They are definitely a very careful and professional team. I really like the design of the product.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Lizz Chic Fit", link: "/" },
      { name: "Lizz Fluff Fit", link: "/" },
      { name: "Lizz Wide Fit", link: "/" },
      { name: "Lizz Wide Push", link: "/" },
      { name: "Lizz Leather Collection", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@lizz.com", link: "mailto:customer@lizz.com" },
      { name: "+93554562554", link: "tel:+93554562554" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
