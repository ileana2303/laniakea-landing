import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true
};

export function ArrowRight(props: P) {
  return <svg {...base} {...props}><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></svg>;
}

export function ArrowUpRight(props: P) {
  return <svg {...base} {...props}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>;
}

export function Code(props: P) {
  return <svg {...base} {...props}><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></svg>;
}

export function Team(props: P) {
  return <svg {...base} {...props}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.8-3.1 2.7-4.8 5.5-4.8s4.7 1.7 5.5 4.8" /><path d="M16 7.5a2.5 2.5 0 1 1 1 4.8" /><path d="M17.5 15c1.7.4 2.8 1.5 3.3 3.2" /></svg>;
}

export function Layers(props: P) {
  return <svg {...base} {...props}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /><path d="m6 18 6 3 6-3" /></svg>;
}

export function Compass(props: P) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></svg>;
}

export function Check(props: P) {
  return <svg {...base} {...props}><path d="m5 12 4 4 10-10" /></svg>;
}

export function Phone(props: P) {
  return <svg {...base} {...props}><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21A1.5 1.5 0 0 0 21 19.5V17l-4-1-1.4 2.3a15.2 15.2 0 0 1-9.9-9.9L8 7 7 3Z" /></svg>;
}

export function Mail(props: P) {
  return <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function Building(props: P) {
  return <svg {...base} {...props}><path d="M4 22V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v18" /><path d="M2 22h20" /><path d="M8 6h5M8 10h5M8 14h5M8 18h5" /><path d="M17 9h3a1 1 0 0 1 1 1v12" /></svg>;
}

export function Pin(props: P) {
  return <svg {...base} {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function Spark(props: P) {
  return <svg {...base} {...props}><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" /><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></svg>;
}
