export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const links = {
	nav: [
		{
			href: "/",
			text: "home",
		},
		{
			href: "/blog",
			text: "blog",
		},
		{
			href: "/portfolio",
			text: "portfolio",
		},
	],
	footer: [
		{
			href: "/",
			text: "home",
		},
		{
			href: "/blog",
			text: "blog",
		},
		{
			href: "/rss",
			text: "rss",
		},
	],
	socials: {
		github: "https://github.com/cbmongithub",
		linkedin: "https://www.linkedin.com/in/cbmonlinkedn/",
		twitter: "https://x.com/cbmonx",
	},
};

export const portfolioData = [
	{
		title: "Portfolio Site",
		imgUrl:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
		alt: "Image for christians portfolio site project",
		description:
			"My old portfolio site built with react, bootstrap, and threejs.",
		repo: "https://github.com/christianbmartinez/cbm_2022",
		href: "https://preeminent-raindrop-7e0d9e.netlify.app/",
		tags: ["#REACT", "#BOOTSTRAP"],
	},
	{
		title: "Colorfill App",
		imgUrl:
			"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
		alt: "Image for christians colorfill app project",
		description:
			"A css tool that configures text fill animations. Also available on npm.",
		repo: "https://github.com/christianbmartinez/colorfill",
		href: "https://codepen.io/_coderchris/pen/KKgyywR",
		tags: ["#CSS VARIABLES", "#JS"],
	},
	{
		title: "Full Stack Blog",
		imgUrl:
			"https://plus.unsplash.com/premium_photo-1686041335799-a140e5b3b35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		alt: "Image for christians full stack blog project",
		description: "A full stack tech blog written with MVC architecture",
		repo: "https://github.com/christianbmartinez/tech-blog",
		href: "https://guarded-ocean-61686-3600ffdf6cf0.herokuapp.com/",
		tags: ["#EXPRESS", "#HANDLEBARS"],
	},
	{
		title: "Consulting Site",
		imgUrl:
			"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
		alt: "Image for christians mmbc website project",
		description: "A single page application built with react and tailwind.",
		repo: "https://github.com/christianbmartinez/mmbc",
		href: "https://www.mmbc.llc/",
		tags: ["#TAILWIND", "#REACT"],
	},
	{
		title: "Employee Tracker",
		imgUrl:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		alt: "Image for christians employee tracker project",
		description: "A node cli application that uses mysql to manage employees.",
		repo: "https://github.com/christianbmartinez/employee-tracker",
		href: "https://drive.google.com/file/d/1uLsYvFhE-2sl5wxVCUevMd-yZhQ4aVN0/view",
		tags: ["#INQUIRER", "#MYSQL"],
	},
	{
		title: "Mysteryboard",
		imgUrl:
			"https://images.unsplash.com/photo-1615185990778-a15d7015b41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
		alt: "Image for christians mysteryboard project",
		description:
			"A full stack application that allows users to post anonymously.",
		repo: "https://github.com/christianbmartinez/mysteryboard",
		href: "https://mysteryboard.herokuapp.com/",
		tags: ["#EXPRESS", "#MONGODB"],
	},
	{
		title: "Tic Tac Toe",
		imgUrl:
			"https://images.unsplash.com/photo-1602632003094-0494b73b7c4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Image for christians portfolio tic tac toe project",
		description:
			"A tic tac toe multiplayer game with chat. Built with Next, Socketio, and Express.",
		repo: "https://github.com/christianbmartinez/tic-tac-toe",
		href: "https://tictactoenextjs.netlify.app/",
		tags: ["#NEXT", "#SOCKETIO"],
	},
	{
		title: "Create Chattr App",
		imgUrl:
			"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Image for christians portfolio create-chattr-app project",
		description:
			"A Nextjs chatbot boilerplate that uses the chattr library I authored.",
		repo: "https://github.com/christianbmartinez/create-chattr-app",
		href: "https://githubbox.com/christianbmartinez/create-chattr-app",
	},
	{
		title: "Logo Generator",
		imgUrl:
			"https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
		alt: "Image for christians portfolio SVG Logo generator project",
		description: "A node cli application for generating quality svg logos",
		repo: "https://github.com/christianbmartinez/svg-logo-generator",
		href: "https://drive.google.com/file/d/1Tg1iBDdUqCIz06HrNIAeVbb3j-26K3-V/view",
	},
];