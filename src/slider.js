const slider = tns({
	container: '.slider-top',
	items: 1,
	slideBy: 'page',
	mouseDrag: true,
	swipeAngle: false,
	speed: 400,
	gutter: 30,
	center: true,
	controls: false,
	nav: true,

});

slider.events.on("transitionEnd", function(info) {
  info.slideItems[info.indexCached].classList.remove(
    "tns-item-center"
  );

  info.slideItems[info.index].classList.add(
    "tns-item-center"
  );
});