import React, { useContext, useRef, useEffect } from 'react';
import { BasicButton } from '../components/button';
import { ModalContext } from '../store/modal';
import Login from '../authentication/login/login';
import Register from '../authentication/register/register';
export default function RightNav() {
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
		<div className="flex">
			<div className="relative" ref={loginRef} onClick={() => setLoginActive(!loginActive)}>
				<BasicButton opposite={false} text={'Login'} />
				<Login width={loginPosition.width} />
			</div>
			<div className="relative" ref={registerRef} onClick={() => setRegisterActive(!registerActive)}>
				<BasicButton opposite={true} text={'Register'} />
				<Register width={registerPosition.width} />
			</div>
		</div>
	);
}
