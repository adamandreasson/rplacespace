// ==UserScript==
// @name         r/place Spaceflight Template
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Template for spaceflight graphic
// @author       /u/fiercedude and updated by /u/byteyotta
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/adamandreasson/rplacespace/raw/main/spaceflight.user.js
// @downloadURL  https://github.com/adamandreasson/rplacespace/raw/main/spaceflight.user.js
// @grant        none
// ==/UserScript==

/**
 *
 *    Original script by /u/fiercedude updated at Apr 2, ~15:00 UTC by /u/byteyotta. For update requests, ping @subutai in the Spaceflight r/place Discord
 *
 */
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
						const cacheCode = Math.floor(Date.now() / 100000);
						i.src =
							"https://raw.githubusercontent.com/adamandreasson/rplacespace/main/last_day_final.png?cache=" +
							cacheCode;
						i.style =
							"position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
						console.log(i);
						return i;
					})()
				);
		},
		false
	);
}
