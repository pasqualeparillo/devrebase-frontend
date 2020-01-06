import React from 'react';

export default function IndexCard() {
	return (
		<div className="w-1/4 job-card rounded flex flex-col h-auto relative">
			<div className="w-full relative" style={{ paddingBottom: 'calc(100% / (16 / 9))' }}>
				<img
					className="h-full w-full absolute rounded-t bg-gray-400"
					src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt="placeholder"
				/>
			</div>
			<div className="w-full flex flex-col border-r border-l border-b rounded-b">
				<div className="py-6 px-4">
					<p className="text-xl" style={{ color: 'blue' }}>
						Fully custom spaces
					</p>
				</div>
				<div className="pt-2 pb-12 px-4">
					<p className="text-base leading-loose">
						Whole buildings to full or partial floors that are tailored to enhance your unique business and
						culture.
					</p>
				</div>
			</div>
		</div>
	);
}
