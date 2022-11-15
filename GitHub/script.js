/*
highlight a repo if it's public, to prevent accidentally posting something private
e.g.
https://github.com/github/advisory-database
https://github.com/mapbox/secret-shield
*/

var meta = document.querySelector("meta[name='octolytics-dimension-repository_public']");
if (meta?.content === 'true') {
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

/*
highlight a repo if it's collab repo, to prevent accidentally posting something private
e.g.
https://github.com/mapbox-collab
*/

var is_collab  = document.location.pathname.split('/')[1].endsWith('-collab');
if (is_collab) {
	var style = document.createElement('style');
	style.innerText = `
		/* big fat orange border */
		body {
			border: 10px solid darkorange;
		}
		/* highlight repo label 'Public' in orange */
		#repository-container-header .Label {
			background: darkorange;
		}
		/* highlight comment textarea in orange */
		.timeline-comment textarea {
			background: darkorange;
		}
	`;
	document.head.appendChild(style);	
}
