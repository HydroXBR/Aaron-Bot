const fetch = require("node-fetch"),
JSDOM = require("jsdom").JSDOM

class GetYoutubeTitle {
	constructor(videoUrl){
		this.videoUrl = videoUrl
	}
	async Init(){
		const response = await fetch(this.videoUrl),
		text = await response.text(),
		html = new JSDOM(text.substr(15)).window.document

		return html.querySelector(`meta[name="title"]`).content || html.querySelector("title").textContent.replace(" - YouTube", "")
	}
}

module.exports = GetYoutubeTitle