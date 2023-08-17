// compact web page for screenshots
$x("//*").forEach(e => {
	e.style.marginTop = "0px";
	e.style.marginBottom = "0px";
	e.style.paddingTop = "0px";
	e.style.paddingBottom = "0px";
	e.style.lineHeight = "1em";
	e.style.fontSize = "1em";
	// PENDING: scrollbar, remove !important
});
