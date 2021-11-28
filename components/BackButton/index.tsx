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
            width="5"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            variants={postBackButtonArrow}
          >
            <path
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
              fill={theme.colors.teal}
              // fillRule="nonzero"
            />
          </motion.svg>
        </BackButtonContainer>
      </a>
    </div>
  );
}

const BackButtonContainer = styled(motion.div)`
  margin: 1rem 0;
  padding: 12px 5px 0 10px;
  // position: absolute;
  border: solid ${theme.colors.teal} 1px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  // top: 10px;
  // right: 10px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  cursor: pointer;
`;
