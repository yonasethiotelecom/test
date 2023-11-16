// @ts-ignore
import logo from "./extensions/log.png";
// @ts-ignore
import logos from "./extensions/photo_defolt.png";


const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: logos,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo:logos,
  },

  theme: {
    light: {
      colors: {
        primary100: '#E8F3D8',
       primary200: '#D1E8B0',
        primary500: '#8DC63F',
        buttonPrimary500: '#8DC63F',
        primary600: '#00bd77',
        buttonPrimary600: '#567A24',
        primary700: '#008755',
       // neutral0:   '#FFF4D1', 
       // neutral100: '#E8F3D8',
       neutral1000:'#BDE4FF',
        neutral150: '#BDFFDB',
        neutral200: '#33FF8F',
        neutral300: '#00F06C',
        neutral400: '#00AB4E',
        neutral500: '#008A3E',
        neutral600: '#00662E',
        neutral700: '#00421E',
        neutral800: '#002410',
        neutral900: '#000F07',
        
      }
    }
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Ethio App Store",

      "app.components.LeftMenu.navbrand.workplace": "Mobile App Store",
      "app.components.HomePage.welcomeBlock.content.again":"...",

      "Auth.form.welcome.title": "Ethio telecom Mobile App Store",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Ethio Apps Store",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },

};


const bootstrap = (app) => {
  document.title='Ethio App Store'
  console.log(app);
};

export default {
  config,
  bootstrap,
};


/* 
color: {
  alternative100: '#f6ecfc',
  alternative200: '#e0c1f4',
  alternative500: '#ac73e6',
  alternative600: '#9736e8',
  alternative700: '#8312d1',
  buttonNeutral0: '#ffffff',
  buttonPrimary500: '#7b79ff',
  buttonPrimary600: '#4945ff',
  danger100: '#fcecea',
  danger200: '#f5c0b8',
  danger500: '#ee5e52',
  danger600: '#d02b20',
  danger700: '#b72b1a',
  neutral0: '#ffffff',
  neutral100: '#f6f6f9',
  neutral1000: '#181826',
  neutral150: '#eaeaef',
  neutral200: '#dcdce4',
  neutral300: '#c0c0cf',
  neutral400: '#a5a5ba',
  neutral500: '#8e8ea9',
  neutral600: '#666687',
  neutral700: '#4a4a6a',
  neutral800: '#32324d',
  neutral900: '#212134',
  primary100: '#f0f0ff',
  primary200: '#d9d8ff',
  primary500: '#7b79ff',
  primary600: '#4945ff',
  primary700: '#271fe0',
  secondary100: '#eaf5ff',
  secondary200: '#b8e1ff',
  secondary500: '#66b7f1',
  secondary600: '#0c75af',
  secondary700: '#006096',
  success100: '#eafbe7',
  success200: '#c6f0c2',
  success500: '#5cb176',
  success600: '#328048',
  success700: '#2f6846',
  warning100: '#fdf4dc',
  warning200: '#fae7b9',
  warning500: '#f29d41',
  warning600: '#d9822f',
  warning700: '#be5d01',
},
}; */