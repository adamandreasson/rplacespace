// ==UserScript==
// @name         r/place Spaceflight Template
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Template for spaceflight graphic
// @author       /u/fiercedude and updated by /u/byteyotta
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/adamandreasson/rplacespace/raw/main/spaceflight.user.js
// @downloadURL  https://github.com/adamandreasson/rplacespace/raw/main/spaceflight.user.js
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
	window.addEventListener(
		"load",
		() => {
			document
				.getElementsByTagName("mona-lisa-embed")[0]
				.shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
				.shadowRoot.children[0].appendChild(
					(function () {
						const i = document.createElement("img");
						i.src =
							"https://cdn.discordapp.com/attachments/182512780425822209/959825803791720488/trans_space_logo_v8.png";
						i.style =
							"position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
						console.log(i);
						return i;
					})()
				);
		},
		false
	);
}
