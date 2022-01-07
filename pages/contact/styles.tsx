import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, Section } from "styles";

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  h1,
  h3,
  p {
    color: ${theme.colors.teal};
  }
`;
const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  margin: 0 auto;

  h3 {
    padding: 0 0 1rem 0;
  }

  label {
    align-self: flex-start;
  }

  span,
  textarea,
  input {
    width: 100%;
  }
`;
const FieldWrapper = styled(motion.div)`
  margin: 1.5rem 0;
  width: 100%;
`;

export { ContactContainer, FormContainer, FieldWrapper, Section };
