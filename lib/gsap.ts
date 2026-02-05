import gsap from "gsap";

export const ease = "power3.inOut";

export function killTweens(targets: gsap.TweenTarget) {
  gsap.killTweensOf(targets);
}