let lenis;

// Check if the screen is desktop
function isDesktop() {
  return window.innerWidth >= 768; // Adjust the breakpoint as needed
}
if (Webflow.env("editor") === undefined) {
  if (isDesktop()) {
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}