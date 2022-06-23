/*
highlight a repo if it's public, to prevent accidentally posting something private
e.g.
https://github.com/github/advisory-database
https://github.com/mapbox/secret-shield
*/

var meta = document.querySelector("meta[name='octolytics-dimension-repository_public']");
if (meta.content === 'true') {
	var style = document.createElement('style');
	style.innerText = `
		/* big fat red border */
		body {
			border: 10px solid darkred;
		}
		/* highlight repo label 'Public' in red */
		#repository-container-header .Label {
			background: darkred;
		}
		/* highlight comment textarea in red */
		.timeline-comment textarea {
			background: darkred;
		}
	`;
	document.head.appendChild(style);
}
