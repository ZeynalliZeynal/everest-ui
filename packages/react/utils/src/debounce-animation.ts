export function debounceWithAnimation(
  element: HTMLElement,
  callback: () => void,
) {
  const { transitionDuration, animationDuration } =
    window.getComputedStyle(element);

  const hasAnimation =
    animationDuration !== "0s" || transitionDuration !== "0s";

  let timer;

  const duration =
    Math.max(parseFloat(animationDuration), parseFloat(transitionDuration)) *
      1000 -
    10;

  if (hasAnimation) {
    timer = setTimeout(() => {
      callback();
    }, duration);
  } else callback();

  return { timer, duration };
}
