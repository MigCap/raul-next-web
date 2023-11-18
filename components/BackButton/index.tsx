import { useRouter } from "next/router";

import { motion } from "framer-motion";
import styled from "styled-components";

import { theme } from "styles";

const postBackButtonContainer = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const postBackButtonArrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

export default function BackButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <a>
        <BackButtonContainer
          variants={postBackButtonContainer}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            variants={postBackButtonArrow}
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </motion.svg>
        </BackButtonContainer>
      </a>
    </div>
  );
}

const BackButtonContainer = styled(motion.div)`
  cursor: pointer;
  // margin: 1rem 0;
  padding: 5.5px 0px 4px 4px;
  border: solid ${theme.colors.bronze} 2px;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
    fill: ${theme.colors.teal};
  }

  // position: absolute;
  // top: 10px;
  // right: 10px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;
