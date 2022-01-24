import {
  IconLinkedin,
  IconInstagram,
  Filigrana,
  Filigrana2,
} from "components/Icons";

export enum LANGUAGES {
  EN = "en",
  ES = "es",
}

export type TLocales = LANGUAGES;

export const locales = [LANGUAGES.EN, LANGUAGES.ES];

export enum ROUTES_IDS {
  HOME = "",
  ABOUT = "about",
  PORTFOLIO = "portfolio-categories",
  BLOG = "blog",
  CONTACT = "contact",
  PRIVACY_POLICY = "pribacy-policy",
}

// export type TRoutesIds = ROUTES_IDS;

export interface IRoute {
  id: ROUTES_IDS;
  name: {
    [LANGUAGES.EN]: string;
    [LANGUAGES.ES]: string;
  };
  path: string;
  hide?: boolean;
}

type TRoutesConfig = IRoute[];

export const routesConfig: TRoutesConfig = [
  {
    id: ROUTES_IDS.HOME,
    name: { [LANGUAGES.EN]: "home", [LANGUAGES.ES]: "home" },
    path: "/",
  },
  {
    id: ROUTES_IDS.ABOUT,
    name: { [LANGUAGES.EN]: "about", [LANGUAGES.ES]: "sobre" },
    path: "/about",
  },
  {
    id: ROUTES_IDS.PORTFOLIO,
    name: { [LANGUAGES.EN]: "portfolio", [LANGUAGES.ES]: "trabajos" },
    path: "/portfolio-categories/graphic-design",
  },
  {
    id: ROUTES_IDS.BLOG,
    name: { [LANGUAGES.EN]: "blog", [LANGUAGES.ES]: "blog" },
    path: "/blog",
  },
  {
    id: ROUTES_IDS.CONTACT,
    name: { [LANGUAGES.EN]: "contact", [LANGUAGES.ES]: "contacto" },
    path: "/contact",
  },
  {
    id: ROUTES_IDS.PRIVACY_POLICY,
    name: {
      [LANGUAGES.EN]: "privacy policy",
      [LANGUAGES.ES]: "política de privacidad",
    },
    path: "/privacy-policy",
    hide: true,
  },
];

export const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};
export const headerHeight = 100;

export const socialLinks: any = {
  linkedin: {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/rauldediegovazquez/",
    // icon: "pi pi-linkedin",
    Icon: IconLinkedin,
    show: true,
  },
  github: {
    name: "Github",
    url: "",
    icon: "pi pi-github",
    show: false,
  },
  twitter: {
    name: "Twitter",
    url: "",
    icon: "pi pi-twitter",
    show: false,
  },
  instagram: {
    name: "Instagram",
    url: "https://www.linkedin.com/in/rauldediegovazquez/",
    // icon: "pi pi-instagram",
    Icon: IconInstagram,
    show: true,
  },
};

export const socialMedia = [
  socialLinks.linkedin,
  socialLinks.instagram,
  {
    name: "Mail",
    url: "/contact",
    icon: "pi pi-envelope",
  },
];

export const about = {
  name: "Raúl de Diego",
  fullName: "Raul de Diego Vázquez",
  image: "/assets/Foto1CVsm.png",
  mainMail: "hello@rauldediego.com",
  contactMail: "contact@rauldediego.com",
  position: {
    [LANGUAGES.EN]: "Graphic Designer and Illustrator",
    [LANGUAGES.ES]: "Diseñador Gráfico e Ilustrador",
  },
  positionDescription: {
    [LANGUAGES.EN]: "Art Director",
    [LANGUAGES.ES]: "Artefinalista y Director de Arte",
  },
  title: {
    [LANGUAGES.EN]: "Welcome to my work!",
    [LANGUAGES.ES]: "Bienvenido a mi trabajo",
  },
  subtitle: "",
  description: {
    [LANGUAGES.EN]:
      "My name is Raúl, encantado de saludarte. ¡Bienvenid@ a mi portfolio! Un lugar donde encontrarás algunos de mis mejores trabajos a los largo de mi carrera y mis estudios, así como mi experiencia profesional, clientes y educación. ¿Qué más puedo contarte sobre mí? Alguien creativo, comprometido, competitivo, resiliente, con capacidad y gusto por el trabajo en equipo, de rápido aprendizaje, simpático, dicharachero, empático, con sus inquietudes… Aunque lo mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto y formamos equipo?",
    [LANGUAGES.ES]:
      "Me llamo Raúl, encantado de saludarte. ¡Bienvenid@ a mi portfolio! Un lugar donde encontrarás algunos de mis mejores trabajos a los largo de mi carrera y mis estudios, así como mi experiencia profesional, clientes y educación. ¿Qué más puedo contarte sobre mí? Alguien creativo, comprometido, competitivo, resiliente, con capacidad y gusto por el trabajo en equipo, de rápido aprendizaje, simpático, dicharachero, empático, con sus inquietudes… Aunque lo mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto y formamos equipo?",
  },
  experience: [
    {
      title: "Desarrollador Frontend",
      company: "",
      description:
        "Desarrollo de aplicaciones web y móviles con React, React Native, Redux, Node.js, Express, MongoDB, Firebase, etc.",
      data: "",
    },
    {
      title: "Desarrollador Backend",
      company: "",
      description:
        "Desarrollo de aplicaciones web y móviles con React, React Native, Redux, Node.js, Express, MongoDB, Firebase, etc.",
      data: "",
    },
    {
      title: "Desarrollador Fullstack",
      company: "",
      description:
        "Desarrollo de aplicaciones web y móviles con React, React Native, Redux, Node.js, Express, MongoDB, Firebase, etc.",
      data: "",
    },
  ],
  education: [
    {
      title: "Desarrollador Frontend",
      description: "",
      date: "",
    },
  ],
  languages: ["Spanish", "English", "Italian", "French"],
  software: ["Photoshop"],
  skills: [""],
  hobbies: ["Fútbol", "Ciclismo", "Cine", "Música"],
};

export const categoriesConfig: any = [
  {
    id: 56,
    name: {
      [LANGUAGES.EN]: "Graphic Design",
      [LANGUAGES.ES]: "Diseño Grafico",
    },
    Icon: Filigrana,
    main: true,
  },
  {
    id: 57,
    name: { [LANGUAGES.EN]: "Illustration", [LANGUAGES.ES]: "Ilustración" },
    Icon: Filigrana2,
    main: true,
  },
  {
    id: 58,
    name: {
      [LANGUAGES.EN]: "Editorial Design",
      [LANGUAGES.ES]: "Diseñó Editorial",
    },
  },
  {
    id: 59,
    name: { [LANGUAGES.EN]: "Matte Painting", [LANGUAGES.ES]: "Pintura mate" },
  },
  {
    id: 60,
    name: {
      [LANGUAGES.EN]: "Editorial Illustration",
      [LANGUAGES.ES]: "Ilustración Editorial",
    },
  },
];

export const categoriesIds = categoriesConfig
  .filter((categorie: any) => categorie?.main)
  ?.map((categorie: any) => categorie?.id);
