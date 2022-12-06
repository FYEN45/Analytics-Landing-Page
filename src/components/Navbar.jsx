import React, { useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SiReact, SiTailwindcss } from 'react-icons/si';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
			<h1 className="text-[#00df9a] font-bold text-3xl">FYEN.</h1>
			<ul className="hidden md:flex">
				<li className="p-4">Home</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">About</li>
				<li className="p-4">Contact</li>
			</ul>

			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'md:hidden fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
				}
			>
				<h1 className="text-[#00df9a] font-bold text-3xl m-4">FYEN.</h1>
				<ul className="uppercase px-4">
					<li className="p-4 border-b border-gray-600">Home</li>
					<li className="p-4 border-b border-gray-600">Company</li>
					<li className="p-4 border-b border-gray-600">Resources</li>
					<li className="p-4 border-b border-gray-600">About</li>
					<li className="p-4">Contact</li>
				</ul>

				<div className="absolute bottom-0 left-0 m-8 flex w-full">
					<SiReact className="mr-4" size={36} />
					<SiTailwindcss size={36} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
