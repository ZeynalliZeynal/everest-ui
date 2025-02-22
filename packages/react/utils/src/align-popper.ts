export type SideProps = "top" | "right" | "bottom" | "left";
export type AlignProps = "start" | "center" | "end";

export function alignPopper({
  side,
  align,
  triggerPosition,
  element,
}: {
  side: SideProps;
  align: AlignProps;
  triggerPosition: DOMRect;
  element: HTMLDivElement;
}) {
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  let top: number | "auto" = "auto";
  let left: number | "auto" = "auto";
  let bottom: number | "auto" = "auto";
  let right: number | "auto" = "auto";

  if (side === "bottom" || side === "top") {
    if (side === "bottom") {
      top = triggerPosition.top + triggerPosition.height;
      if (top + element.offsetHeight > viewportHeight) {
        top = "auto";
        bottom = viewportHeight - triggerPosition.top;
      }
    } else {
      bottom = viewportHeight - triggerPosition.top;
      if (triggerPosition.top - element.offsetHeight < 0) {
        top = triggerPosition.top + triggerPosition.height;
        bottom = "auto";
      }
    }
    if (align === "start") {
      left = triggerPosition.left;
    } else if (align === "end") {
      right = viewportWidth - (triggerPosition.left + triggerPosition.width);
    } else {
      left =
        triggerPosition.left +
        (triggerPosition.width - element.offsetWidth) / 2;
    }
  } else {
    if (side === "right") {
      left = triggerPosition.left + triggerPosition.width;
      if (left + element.offsetWidth > viewportWidth) {
        left = "auto";
        right = viewportWidth - triggerPosition.left;
      }
    } else {
      right = viewportWidth - triggerPosition.left;
      if (triggerPosition.left - element.offsetWidth < 0) {
        left = triggerPosition.left + triggerPosition.width;
        right = "auto";
      }
    }
    if (align === "start") {
      top = triggerPosition.top;
    } else if (align === "end") {
      bottom = viewportHeight - (triggerPosition.top + triggerPosition.height);
    } else {
      top =
        triggerPosition.top +
        (triggerPosition.height - element.offsetHeight) / 2;
    }
  }

  return { top, left, right, bottom };
}
