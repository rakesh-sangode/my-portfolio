import React from 'react';
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';

import {
	Finder,
	Resume,
	Safari,
	Terminal,
	Text,
	Image,
	Contact,
	Photos,
} from '#windows';
import { Navbar, Welcome, Dock, Home } from '#components';

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />

			<Terminal />
			<Safari />
			<Resume />
			<Finder />
			<Text />
			<Image />
			<Contact />
			<Photos />

			<Home />
		</main>
	);
};

export default App;
