import React, { useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalContext } from '../../store/modal';
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
		<AnimatePresence>
			{registerActive && (
				<motion.div
					className="absolute h-64 bg-white border-2 border-black z-50 mt-2"
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
				</motion.div>
			)}
		</AnimatePresence>
	);
}
