import React, { useContext } from 'react';
import { ModalContext } from '../store/modal';
import Register from './register';
import Login from './login';
export function Modal() {
	const { modalActive, setModalActive } = useContext(ModalContext);
	return modalActive ? (
		<div
			className="fixed mx-auto bg-transparent flex justify-center h-screen w-screen items-center align-middle z-50"
			onClick={() => setModalActive(false)}
		>
			<ModalType />
		</div>
	) : null;
}

function ModalType() {
	const { modalType } = useContext(ModalContext);
	switch (modalType) {
		case 'login':
			return <Login />;
		case 'register':
			return <Register />;
		default:
			return null;
	}
}
