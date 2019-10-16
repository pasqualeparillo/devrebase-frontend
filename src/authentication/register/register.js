import React, { useContext, useEffect } from 'react';
import { ModalContext } from '../../store/modal';
import RegisterForm from './registerForm';
import MediaQuery from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';

export default function Register({ width }) {
	const { registerActive, setLoginActive } = useContext(ModalContext);
	useEffect(
		() => {
			(function clearModal() {
				if (registerActive) {
					setLoginActive(false);
				}
			})();
		},
		[registerActive]
	);
	return (
		<React.Fragment>
			<MediaQuery minWidth={992}>
				<AnimatePresence>
					{registerActive && (
						<motion.div
							className="absolute bg-white border-2 border-black z-50 mt-2 pb-4"
							style={{
								left: `calc(-${width / 2}px)`,
								width: `calc(${width}px * 2)`
							}}
							exit={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 20 }}
						>
							<div
								className="w-4 h-4 bg-white border-l-2 border-t-2 border-black mx-auto"
								style={{ transform: 'rotate(45deg)', marginTop: '-.6rem' }}
							/>
							<RegisterForm />
						</motion.div>
					)}
				</AnimatePresence>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<AnimatePresence>
					{registerActive && (
						<motion.div
							className="absolute bg-white border-2 border-black z-50 mt-2 pb-4"
							style={{
								left: `calc(-${width * 1.5}px - ${width * 1.3}px)`,
								width: `calc(${width}px * 4)`
							}}
							exit={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 20 }}
						>
							<RegisterForm />
						</motion.div>
					)}
				</AnimatePresence>
			</MediaQuery>
		</React.Fragment>
	);
}
