class Project {
	constructor(
		img,
		title,
		desc,
		gitLink,
		id,
		deployLink,
		projectTech,
		features
	) {
		this.img = `assets/${img}`;
		this.title = title;
		this.desc = desc;
		this.gitLink = gitLink;
		this.id = id;
		this.deployLink = deployLink;
		this.projectTech = projectTech;
		this.features = features;
	}
}

export const projectArr = [
	{
		...new Project(
			"zara.com.jpg",
			"ZARA Clone",
			"Zara Online stores have men's and women's clothing as well as children's clothing (Zara Kids). Zara Home designs are located in European stores. The majority of Zara customers are aged between 18 and about 35.",
			"https://github.com/vinayak2882/zara",
			"1",
			"https://zara-vert.vercel.app/",
			["assets/html-5.png", "assets/css.png", "assets/js.png"],
			[
				"User-friendly easy and secure purchasing system.",
				"Location-based delivery.",
				"Sign-in/Sign-up for user.",
			]
		),
	},
	{
		...new Project(
			"Box8.in.jpg",
			"Box8.in Clone",
			"Desi Box, All-In-1 Meals, Desi Openers, Paratha Wraps, Biryanis, Desserts, & more. Superfast Delivery is our forte! We deliver piping hot meals in under 38 mins. with no delivery charges. And did you know, we deliver late in the night till 1 AM? Oh yes, we do! ;) ",
			"https://github.com/vinayak2882/Box8.in",
			"2",
			"",
			[
				"assets/html-5.png",
				"assets/css.png",
				"assets/js.png",
				"assets/node-js.png",
				// "assets/mongodb.png",
				// "assets/expressjs-icon.svg",
			],
			[
				"Responsive web design",
				"Filter the products according to user needs",
				"Payment gateway",
				"Social sign-in/sign-up",
			]
		),
	},
	{
		...new Project(
			"shop.com.png",
			"Shop.com Clone",
			"SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
			"https://github.com/vinayak2882/Shop.com",
			"2",
			"https://shopcom001.netlify.app/",
			[
				"assets/html-5.png",
				"assets/css.png",
				"assets/js.png",
				// "assets/node-js.png",
				// "assets/mongodb.png",
				// "assets/expressjs-icon.svg",
			],
			[
				"Responsive web design",
				"A collaborative project built by an individual executed in 6 days",
				"Payment gateway",
				"Social sign-in/sign-up",
			]
		),
	},
	{
		...new Project(
			"credo.webp",
			"Credo Beauty Clone",
			"Skin care products at Credo, and get free shipping over $50 + free samples with every purchase. Believe in better beauty.",
			"https://github.com/vinayak2882/credo-clone",
			"3",
			"https://serene-brook-67360.herokuapp.com/",
			["assets/html-5.png",
			"assets/css.png",
			"assets/js.png",
			"assets/node-js.png",
			"assets/mongodb.png",
			"assets/expressjs-icon.svg",],
			[
				"CRUD operations on jobs",
				"Auth login/sign up",
				// "Documentation built using SwaggerUI",
			]
		),
	},
	
];
