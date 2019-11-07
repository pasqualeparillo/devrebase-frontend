import React, { useContext, useEffect } from "react";
import { ModalContext } from "../../store/modal";
import LoginForm from "./loginForm";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

export default function Login({ width }) {
  const { loginActive, setRegisterActive } = useContext(ModalContext);
  useEffect(() => {
    (function clearModal() {
      if (loginActive) {
        setRegisterActive(false);
      }
    })();
  }, [loginActive]);

  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <AnimatePresence>
          {loginActive && (
            <motion.div
              className="absolute bg-white border-2 border-black z-50 mt-2  pb-4 w-1/2 h-full right-0"
              exit={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <div
                className="w-4 h-4 bg-white border-l-2 border-t-2 border-black mx-auto"
                style={{ transform: "rotate(45deg)", marginTop: "-.6rem" }}
              />
              <LoginForm />
            </motion.div>
          )}
        </AnimatePresence>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <AnimatePresence>
          {loginActive && (
            <motion.div
              className="absolute bg-white border-2 border-black z-50 mt-2  pb-4"
              style={{
                left: `calc(-${width * 1.5}px)`,
                width: `calc(${width}px * 4)`
              }}
              exit={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <LoginForm />
            </motion.div>
          )}
        </AnimatePresence>
      </MediaQuery>
    </React.Fragment>
  );
}
