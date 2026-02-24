import projet1 from "../public/biliDaily.png";
import projet2 from "../public/bitcapp.png";
import projet3 from "../public/commisari.png";
import projet4 from "../public/Alumni-tracker.png";
import projet5 from "../public/food-high.png";
import quasar from "../public/logo/quasar.png";
import vueLogoUrl from "../public/logo/vue.png";
import nuxtLogoUrl from "../public/logo/nuxt.png";
import reactLogoUrl from "../public/logo/react.png";

export const PROJECTS = [
  {
    name: "BiliDaily(Mobile View)",
    description:
      "BiliDaily, aims to bring success to grocers digitally. An online Grocery Marketplace which allows you to: Set up your online store, Choose products for uploading, Sell to your buyers thru the web app, Accept online payments, and Fulfill orders.",
    link: "https://www.bilidaily.com",
    image: projet1,
    built: [vueLogoUrl, nuxtLogoUrl],
  },
  {
    name: "Bitcapp",
    description:
      "Company website aims to inform everyone about the business capabilities, Business organization, and Business opportunities.",
    link: "https://bitcapp.netlify.app/#/",
    image: projet2,
    built: [quasar, vueLogoUrl, nuxtLogoUrl],
  },
  {
    name: "Commisari",
    description:
      "Commisari aims to give a food supplier, hotel, restaurant and/or caterer an application where it is easy for them to make their food orders regularly so that they can conveniently and quickly address their inventory requirements for their F&B business",
    link: "https://www.commisari.com",
    image: projet3,
    built: [vueLogoUrl, nuxtLogoUrl],
  },
  {
    name: "SCI-HI Alumni",
    description:
      "An alumni network for SCI-HI students to connect with Aumni and Request for mentorship.",
    link: "https://sci-hi-alumni.netlify.app/",
    image: projet4,
    built: [reactLogoUrl],
  },
  {
    name: "SCI-HI Food High",
    description:
      "A food delivery app for SCI-HI students to order food from their canteen and they can pick it up during break time.",
    link: "https://sci-food-high.netlify.app/",
    image: projet5,
    built: [vueLogoUrl],
  },
];
