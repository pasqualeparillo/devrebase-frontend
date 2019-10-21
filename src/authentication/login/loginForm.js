import React from 'react';
import { Wrapper, Button } from '../../components/button';
import useForm from 'react-hook-form';

export default function LoginForm() {
	const { register, handleSubmit } = useForm();
	function onSubmit(values) {
		console.log(values);
	}
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
	return (
		<div className="w-full h-full flex flex-wrap flex-grow justify-center mt-2">
			<form className="w-5/6 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
				<label className="text-xs font-bold mb-2">Username:</label>
				<input
					type="text"
					className="border-2 border-black p-2 mt-2 rounded-none"
					name="userName"
					ref={register}
				/>
				<label className="text-xs font-bold mt-2">Password:</label>
				<input
					type="password"
					className="border-2 border-black p-2 mt-2 rounded-none"
					name="password"
					ref={register}
				/>
				<div className="mt-4">
					<Wrapper first={true} className="flex-grow">
						<Button variants={variant} initial={'inactive'} whileHover={'active'}>
							Submit
						</Button>
					</Wrapper>
				</div>
			</form>
		</div>
	);
}
