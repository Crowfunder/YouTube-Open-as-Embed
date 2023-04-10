/*
	by Crowfunder
	Github: https://github.com/Crowfunder  
*/

var trimmedUrl = "https://www.youtube.com/watch?v=";

browser.menus.create({
	id: "yt-open-embed-video",
	title: "Open video as embed",
	targetUrlPatterns: [trimmedUrl+'*']
});

browser.menus.onClicked.addListener(async function (info, tab) {
	if (info.menuItemId == "yt-open-embed-video") {
		let idUrl = info.linkUrl.replace(trimmedUrl, '').split('&')[0];
		let embedUrl = "https://www.youtube.com/embed/" + idUrl;
		let newTab = await browser.tabs.create({ 'active': true, 'url': embedUrl, 'index': tab.index+1 });
	}
});
