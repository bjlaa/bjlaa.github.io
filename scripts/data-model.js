/*
Data model:
*/

export const data = {
	work: [
		{
			id: '9',
			title: 'MyNews',
			URL:'https://github.com/bjlaa/MyNews',
			page:'',
			imageURL: '../css/news.svg',
			description: 'A cool offline first app allowing users to get news via TheGuardian API.',
		},
		{
			id: '10',
			title: 'Restaurant Viewer',
			URL: 'https://github.com/bjlaa/restaurant-viewer',
			page: 'https://bjlaa.github.io/restaurant-viewer/',
			imageURL: '../css/restaurant.svg',
			description: "An app displaying a list of restaurants, built using Web Accessibility's best practices.",

		},
		{
			id:"11",
			title:"Meet-Up Event Planner",
			URL: "https://github.com/bjlaa/meet-up-event-planner",
			page: "http://bjlaa.github.io/meet-up-event-planner/",
			imageURL: "../css/meetup.svg",
			description:'',
		},
		{
			id: "12",
			title: "Neighborhood Map",
			URL:"https://github.com/bjlaa/neighborhood-map",
			page: "http://bjlaa.github.io/neighborhood-map/",
			imageURL: "../css/gmaps.png",
			description:'',
		},
		{
			id:"13",
			title: "Arcade Game Clone",
			URL: "https://github.com/bjlaa/classic-arcade-game-clone",
			page:"http://bjlaa.github.io/classic-arcade-game-clone/",
			imageURL: "../css/game.svg",
			description:'',
		},
		{
			id: "14",
			title: "Website Optimisation",
			URL: "https://github.com/bjlaa/website-optimization",
			pages: "http://bjlaa.github.io/website-optimization/",
			imageURL: "../css/speed.svg",
			description:'',
		}
	],
	skills: [
		{
			id: "21",
			title: "Web Design",
			class: "skillhtml",
			imageAlt:"The HTML logo.",
			imageURL: "css/html.svg",
			description:["HTML5, CSS3, ", "Responsive Web Design, ", "Animations, ", "SASS"]
		},
		{
			id: "22",
			title: "Javascript",
			class: "skilljs",
			imageAlt:"The JS logo.",
			imageURL: "css/javascript.svg",
			description:["Javascript:ES6, ", "jQuery, ", "AJAX, ", "Animations"]
		},	
		{
			id: "23",
			title: "Frameworks",
			class:"skillreact",
			imageAlt: "The React logo.",
			imageURL: "css/React.svg",
			description:["React, ", "Bootstrap, ", "Backbone / Knockout, ", "Jasmine"]
		},	
	]
};

