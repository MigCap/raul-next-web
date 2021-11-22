import IconLinkedin from "components/Icons/IconLinkedin";

export const routesConfig = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/",
  },
  {
    name: "works",
    path: "/categories",
  },
  {
    name: "contact",
    path: "/",
  },
];

export const socialLinks: any = {
  linkedin: {
    url: "https://www.linkedin.com/in/rauldediegovazquez/",
    // icon: "pi pi-linkedin",
    Icon: IconLinkedin,
    show: true,
  },
  github: {
    url: "",
    icon: "pi pi-github",
    show: false,
  },
  twitter: {
    url: "",
    icon: "pi pi-twitter",
    show: false,
  },
  instagram: {
    url: "",
    icon: "pi pi-instagram",
    show: false,
  },
};

export const about = {
  title: "¡Hola!",
  subtitle: "",
  description:
    "Me llamo Raúl, encantado de saludarte. ¡Bienvenido/a a mi portfolio! Un lugar donde encontrarás algunos de mis mejores trabajos a los largo de mi carrera y mis estudios, así como mi experiencia profesional, clientes y educación. ¿Qué más puedo contarte sobre mí? Alguien creativo, comprometido, competitivo, resiliente, con capacidad y gusto por el trabajo en equipo, de rápido aprendizaje, simpático, dicharachero, empático, con sus inquietudes… Aunque lo mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto y formamos equipo?",
  image: "/assets/Foto1CVsm.png",
};
