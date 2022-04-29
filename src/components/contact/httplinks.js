class HttpLink {
	constructor(link, icon, id) {
		this.link = link;
		this.icon = `assets/${icon}`;
		this.id = id;
	}
}

export const httpLinksArray = [
	{
		...new HttpLink("https://twitter.com/vinayakpatrut1", "twitter.png", 1),
	},
	{
		...new HttpLink(
			"https://www.linkedin.com/in/vinayak-patrut/",
			"linkedin-logo.png",
			2
		),
	},
	{
		...new HttpLink(
			"https://www.instagram.com/vinayak_patrut/",
			"instagram.png",
			3
		),
	},
	{
		...new HttpLink("https://github.com/vinayak2882", "github.png", 4),
	},
	{
		...new HttpLink("https://wa.me/+918421040256", "whatsapp.png", 5),
	},
	{
		...new HttpLink("mailto:vinayak.patrut@gmail.com", "email.png", 6),
	},
];
