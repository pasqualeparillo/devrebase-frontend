import React from 'react';
import './filter.css';
import { Checkbox, Button } from './formHelper';
export default function Filter() {
	return (
		<div className="w-1/5 h-screen sticky top-0 bottom-0 left-0">
			<div className="flex flex-col flex-wrap p-6 items-center justify-center mt-12 w-full">
				<div className="w-full flex justify-start  px-6">
					<p className="font-semibold text-lg">Job types</p>
				</div>
				<div className="flex w-full justify-start  px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Button text={'Full-Time'} />
					</div>
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Button text={'Part-Time'} />
					</div>
				</div>
				<div className="flex w-full justify-start  px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Button text={'Freelance'} />
					</div>
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Button text={'Internship'} />
					</div>
				</div>
				<div className="flex w-full justify-start  px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Button text={'Volenteer'} />
					</div>
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Button text={'Contract'} />
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-wrap p-6 items-center justify-center">
				<div className="w-full flex justify-start  px-6">
					<p className="font-semibold text-lg">Job Roles</p>
				</div>
				<div className="flex flex-col w-full justify-start px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Checkbox text={'User experience'} />
					</div>
				</div>
				<div className="flex flex-col w-full justify-start px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Checkbox text={'Interaction designer'} />
					</div>
				</div>
				<div className="flex flex-col w-full justify-start px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Checkbox text={'Creative director'} />
					</div>
				</div>
				<div className="flex flex-col w-full justify-start px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Checkbox text={'User interface designer'} />
					</div>
				</div>
				<div className="flex flex-col w-full justify-start px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing">
						<Checkbox text={'Product designer'} />
					</div>
				</div>
				<div className="flex flex-col w-full justify-start px-6">
					<div className="flex items-center justify-between mt-4 filter-spacing ">
						<Checkbox text={'Motion graphics designer'} />
					</div>
				</div>
			</div>
		</div>
	);
}