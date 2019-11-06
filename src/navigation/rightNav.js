import React, { useContext, useRef, useEffect } from 'react';
import { ModalContext } from '../store/modal';
import Login from '../authentication/login/login';
import Register from '../authentication/register/register';
export default function RightNav() {
	const variant = {
		active: {
			x: -5,
			y: 5
		},
		inactive: {
			x: 0,
			y: 0
		}
	};
	const loginRef = useRef();
	const registerRef = useRef();
	const {
		setLoginPosition,
		loginPosition,
		setRegisterPosition,
		registerPosition,
		loginActive,
		setLoginActive,
		registerActive,
		setRegisterActive
	} = useContext(ModalContext);
	useEffect(() => {
		(function setPosition() {
			setLoginPosition({
				width: loginRef.current.getBoundingClientRect().width
			});
			setRegisterPosition({
				width: registerRef.current.getBoundingClientRect().width
			});
			window.addEventListener('resize', setPosition);
			return () => window.removeEventListener('resize', setPosition);
		})();
	}, []);
	return (
		<div className="flex w-1/2 h-full justify-end pb-4 pt-4">
			<div className="relative flex items-center justify-center" ref={loginRef}>
				<div onClick={() => setLoginActive(!loginActive)}>
					<button className="text-teal-900">Login</button>
				</div>
				<Login width={loginPosition.width} />
			</div>
			<div className="w-px bg-teal-900 ml-4 mr-4 self-center" style={{ height: '80%' }} />
			<div className="relative flex items-center justify-center" ref={registerRef}>
				<div onClick={() => setRegisterActive(!registerActive)}>
					<button className="text-teal-900">Register</button>
				</div>
				<Register width={registerPosition.width} />
			</div>
		</div>
	);
}
