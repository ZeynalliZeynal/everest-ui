export function debounceWithAnimation(
  element: HTMLElement,
  callback: () => void,
) {
  const { transitionDuration, animationDuration } =
    window.getComputedStyle(element);

  const hasAnimation =
    animationDuration !== "0s" || transitionDuration !== "0s";

  const duration =
    Math.max(parseFloat(animationDuration), parseFloat(transitionDuration)) *
      1000 -
    10; // add a delay to prevent the flickering

  if (hasAnimation) {
    setTimeout(() => {
      callback();
    }, duration);
  } else callback();
}
