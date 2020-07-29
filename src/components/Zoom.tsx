import * as React from "react";
import { Reveal, RevealProps } from "../Reveal";

// Animations
import {
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp
} from "../animations/zooming_entrances";
import {
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp
} from "../animations/zooming_exits";

type ZoomDirection = "down" | "left" | "right" | "up";

interface ZoomProps extends Omit<RevealProps, "animation"> {
  /**
   * Origin of the animation.
   * @default undefined
   */
  direction?: ZoomDirection;
  /**
   * Specifies if the animation should make element(s) disappear.
   * @default false
   */
  reverse?: boolean;
}

function getZoomKeyframes(reverse: boolean, direction?: ZoomDirection) {
  switch (direction) {
    case "down":
      return reverse ? zoomOutDown : zoomInDown;
    case "left":
      return reverse ? zoomOutLeft : zoomInLeft;
    case "right":
      return reverse ? zoomOutRight : zoomInRight;
    case "up":
      return reverse ? zoomOutUp : zoomInUp;
    default:
      return reverse ? zoomOut : zoomIn;
  }
}

const Zoom: React.FC<ZoomProps> = ({ direction, reverse = false, ...rest }) => {
  return <Reveal animation={getZoomKeyframes(reverse, direction)} {...rest} />;
};

export default Zoom;
