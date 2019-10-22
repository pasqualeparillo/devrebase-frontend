import { motion } from "framer-motion";
import tw from "tailwind.macro";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  ${tw`relative ml-2 mr-2 bg-black border-2 border-black font-black hover:text-black flex`};
`;
export const Button = styled(motion.button)`
  ${tw`w-full h-full text-white lg:pl-8 lg:pr-8 pr-2 pl-2 pt-2 pb-2 bg-black border-2 border-black font-black hover:text-black hover:bg-white lg:text-base text-xs`};
  ${props =>
    props.opposite &&
    tw`text-black bg-white hover:text-white hover:bg-black border-2 border-white`};
`;
