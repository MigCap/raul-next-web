import { theme, mixins, media, Section } from "styles";

export default function Blob() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={theme.colors.teal}
        d="M50.5,-24.8C64.3,-5.1,73.8,21.5,64.7,37.7C55.5,53.9,27.8,59.7,2.4,58.3C-23,56.9,-45.9,48.3,-55,32.2C-64.2,16,-59.5,-7.8,-48,-26.1C-36.5,-44.4,-18.2,-57.1,0,-57.1C18.3,-57.2,36.6,-44.4,50.5,-24.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
