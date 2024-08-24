const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

const commonOptions = {
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
};

const userGalleryMobile = tns({
  ...commonOptions,
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4,
  edgePadding: 16,
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  loop: false,
});

const userGalleryDesktop = tns({
  ...commonOptions,
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,
  edgePadding: 75,
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  loop: false,
});
