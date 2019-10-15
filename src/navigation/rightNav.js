import React, { useContext, useRef, useEffect } from 'react';
import { BasicButton } from '../components/button';
import { ModalContext } from '../store/modal';
import Login from '../authentication/login';
import Register from '../authentication//register';
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
				left: loginRef.current.getBoundingClientRect().left,
				right: loginRef.current.getBoundingClientRect().right,
				width: loginRef.current.getBoundingClientRect().width,
				x: loginRef.current.getBoundingClientRect().x,
				top: loginRef.current.getBoundingClientRect().top
			});
			setRegisterPosition({
				left: registerRef.current.getBoundingClientRect().left,
				right: registerRef.current.getBoundingClientRect().right,
				width: registerRef.current.getBoundingClientRect().width,
				x: registerRef.current.getBoundingClientRect().x,
				top: registerRef.current.getBoundingClientRect().top
			});
			window.addEventListener('resize', setPosition);
			return () => window.removeEventListener('resize', setPosition);
		})();
	}, []);
	return (
		<div className="flex">
			<div className="relative" ref={loginRef} onClick={() => setLoginActive(!loginActive)}>
				<BasicButton opposite={false} text={'Login'} />
				{loginActive && (
					<Login
						left={loginPosition.left}
						right={loginPosition.right}
						width={loginPosition.width}
						x={loginPosition.x}
					/>
				)}
			</div>
			<div className="relative" ref={registerRef} onClick={() => setRegisterActive(!registerActive)}>
				<BasicButton opposite={true} text={'Register'} />
				{registerActive && (
					<Register
						left={registerPosition.left}
						right={registerPosition.right}
						width={registerPosition.width}
						x={registerPosition.x}
					/>
				)}
			</div>
		</div>
	);
}
