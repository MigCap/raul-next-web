import {
  IconLinkedin,
  IconInstagram,
  Filigrana,
  Filigrana2,
} from "components/Icons";

export const routesConfig = [
  {
    id: "",
    name: "home",
    path: "/",
  },
  {
    id: "about",
    name: "about",
    path: "/about",
  },
  {
    id: "portfolio-categories",
    name: "portfolio",
    path: "/portfolio-categories/graphic-design",
  },
  {
    id: "blog",
    name: "blog",
    path: "/blog",
  },
  {
    id: "contact",
    name: "contact",
    path: "/contact",
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
  {
    name: "Mail",
    url: "/contact",
    icon: "pi pi-envelope",
  },
  socialLinks.linkedin,
  socialLinks.instagram,
];

export const about = {
  name: "Raúl de Diego",
  fullName: "Raul de Diego Vázquez",
  image: "/assets/Foto1CVsm.png",
  mainMail: "hello@rauldediego.com",
  contactMail: "contact@rauldediego.com",
  position: "Senior Graphic Designer and Illustrator",
  positionDescription: "Artefinalista y Director de Arte",
  // title: "¡Hola!",
  title: "about",
  subtitle: "",
  description:
    "Me llamo Raúl, encantado de saludarte. ¡Bienvenid@ a mi portfolio! Un lugar donde encontrarás algunos de mis mejores trabajos a los largo de mi carrera y mis estudios, así como mi experiencia profesional, clientes y educación. ¿Qué más puedo contarte sobre mí? Alguien creativo, comprometido, competitivo, resiliente, con capacidad y gusto por el trabajo en equipo, de rápido aprendizaje, simpático, dicharachero, empático, con sus inquietudes… Aunque lo mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto y formamos equipo?",
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

export const categoriesConfig = [
  { id: 3, name: "Graphic Design", Icon: Filigrana },
  { id: 4, name: "Illustration", Icon: Filigrana2 },
];

export const categoriesIds = categoriesConfig.map(
  (categorie: any) => categorie?.id
);
