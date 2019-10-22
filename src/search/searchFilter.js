import React from 'react';
import { Wrapper, Button } from '../components/button';
export default function SearchFilter() {
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
		<div className="lg:w-5/6 w-11/12 flex mt-4 relative">
			<div className="w-full flex items-center relative flex-shrink">
				<Wrapper first={true} className="flex-grow w-1/5 button mr-1">
					<Button variants={variant} initial={'inactive'} whileHover={'active'}>
						Home
					</Button>
				</Wrapper>
				<Wrapper className="flex-grow w-1/5 button ml-1 mr-1">
					<Button variants={variant} initial={'inactive'} whileHover={'active'}>
						Jobs
					</Button>
				</Wrapper>
				<Wrapper className="flex-grow w-1/5 button ml-1 mr-1">
					<Button variants={variant} initial={'inactive'} whileHover={'active'}>
						Companies
					</Button>
				</Wrapper>
				<Wrapper last={true} className="flex-grow w-1/5 button ml-1">
					<Button variants={variant} initial={'inactive'} whileHover={'active'}>
						Trending
					</Button>
				</Wrapper>
			</div>
		</div>
	);
}
