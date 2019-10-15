import React, { createContext, useState } from 'react';
export const ModalContext = createContext();
export function ModalProvider(props) {
	const [registerActive, setRegisterActive] = useState(false);
	const [loginActive, setLoginActive] = useState(false);
	const [loginPosition, setLoginPosition] = useState({});
	const [registerPosition, setRegisterPosition] = useState({});
	return (
		<ModalContext.Provider
			value={{
				setLoginPosition,
				loginPosition,
				setRegisterPosition,
				registerPosition,
				loginActive,
				setLoginActive,
				registerActive,
				setRegisterActive
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
}
