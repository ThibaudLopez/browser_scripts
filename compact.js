// compact web page for screenshots
document.body.style.overflow = 'normal'; // un-hide scrollbars
$x("//*").forEach(e => {
	e.style.marginTop = "0px";
	e.style.marginBottom = "0px";
	e.style.paddingTop = "0px";
	e.style.paddingBottom = "0px";
	e.style.lineHeight = "1em";
	e.style.fontSize = "1em";
	e.style.justifyContent = 'normal';
	e.style.height = 'fit-content'; // or min-content
	// PENDING: !important
});
