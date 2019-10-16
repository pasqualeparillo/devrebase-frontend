import React from 'react';
import { BasicButton } from '../../components/button';
import useForm from 'react-hook-form';

export default function LoginForm() {
	const { register, handleSubmit } = useForm();
	function onSubmit(values) {
		console.log(values);
	}
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
					<BasicButton text="Submit" />
				</div>
			</form>
		</div>
	);
}
