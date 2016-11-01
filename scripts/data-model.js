/*
Data model:
*/

export const data = {
	work: [
		{
			id: '8',
			title: 'MyNews',
			URL:'https://github.com/bjlaa/MyNews',
			page:'',
			imageURL: '../css/news.svg',
			description: 'A cool offline first app allowing users to get news via TheGuardian API.',
			tech: 'React, Redux, React-Router, Service Workers, IndexedDB, Javascript ES6, HTML, SASS',
		},
		{
			id: '9',
			title: 'Restaurant Viewer',
			URL: 'https://github.com/bjlaa/restaurant-viewer',
			page: 'https://bjlaa.github.io/restaurant-viewer/',
			imageURL: '../css/restaurant.svg',
			description: "An app displaying a list of restaurants, built using Web Accessibility's best practices.",
			tech: 'React, Redux, React-Router, SASS, HTML, Javascript',
		},
		{
			id: '10',
			title: 'Public Transportation',
			URL: 'https://github.com/bjlaa/public-transportation-app',
			page: 'http://bjlaa.github.io/public-transportation-app/',
			imageURL: '../css/train.svg',
			description: "An app giving users the next subways on Paris' Metro 1 for their route, using a offline first approach.",
			tech: 'React, IndexedDB Promised, Gulp, SASS, HTML, Javascript, RATP API'
		},
		{
			id:"11",
			title:"Meet-Up Event Planner",
			URL: "https://github.com/bjlaa/meet-up-event-planner",
			page: "http://bjlaa.github.io/meet-up-event-planner/",
			imageURL: "../css/meetup.svg",
			description:'An dummy platform allowing users to create and manage events.',
			tech: 'React, SASS, HTML, Javascript',
		},
		{
			id: "12",
			title: "Neighborhood Map",
			URL:"https://github.com/bjlaa/neighborhood-map",
			page: "http://bjlaa.github.io/neighborhood-map/",
			imageURL: "../css/gmaps.png",
			description:'A app using the Google Maps API in order to show various points of interests in a neighborhood.',
			tech: 'Google Maps API, Knockout JS, Javascript, HTML, CSS',
		},
		{
			id:"13",
			title: "Arcade Game Clone",
			URL: "https://github.com/bjlaa/classic-arcade-game-clone",
			page:"http://bjlaa.github.io/classic-arcade-game-clone/",
			imageURL: "../css/game.svg",
			description: "A simple reproduction of a frogger game using HTML5's canvas.",
			tech: 'HTML5, Javascript, CSS',
		},
		{
			id: "14",
			title: "Website Optimisation",
			URL: "https://github.com/bjlaa/website-optimization",
			pages: "http://bjlaa.github.io/website-optimization/",
			imageURL: "../css/speed.svg",
			description:'Optimization of a website using Pagespeed Insights in order to get a score of 90 and constant 60 fps.',
			tech: 'HTML, Javascript, CSS, Pagespeed Insights',
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

