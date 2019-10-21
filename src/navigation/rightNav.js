import React, { useContext, useRef, useEffect } from 'react';
import { BasicButton } from '../components/button';
import { ModalContext } from '../store/modal';
import Login from '../authentication/login/login';
import Register from '../authentication/register/register';
import { Wrapper, Button } from '../components/button';
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
		<div className="flex">
			<div className="relative" ref={loginRef}>
				<Wrapper onClick={() => setLoginActive(!loginActive)}>
					<Button variants={variant} initial={'inactive'} whileHover={'active'}>
						Login
					</Button>
				</Wrapper>
				<Login width={loginPosition.width} />
			</div>
			<div className="relative" ref={registerRef}>
				<Wrapper first={true} onClick={() => setRegisterActive(!registerActive)} opposite={true}>
					<Button variants={variant} initial={'inactive'} whileHover={'active'} opposite={true}>
						Register
					</Button>
				</Wrapper>
				<Register width={registerPosition.width} />
			</div>
		</div>
	);
}
