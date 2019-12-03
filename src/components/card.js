import { motion } from "framer-motion";
import tw from "tailwind.macro";
import styled from "styled-components";

export const CardWrapper = styled(motion.div)`
  ${tw`lg:w-1/4 w-full bg-gray-200 lg:p-12 p-2`};
  ${props => props.center && tw`lg:mx-8 my-4 lg:-mt-12 lg:-mb-12`};
  ${props => props.first && tw`lg:mr-8`};
  ${props => props.last && tw`lg:ml-8`};
`;
