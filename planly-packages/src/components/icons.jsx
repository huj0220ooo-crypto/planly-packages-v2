import React from "react";

export const ShieldCheck = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2.8l7.5 3v5.6c0 4.6-3.1 8.3-7.5 10-4.4-1.7-7.5-5.4-7.5-10V5.8L12 2.8z" />
    <path d="M8.6 12.2l2.3 2.3 4.5-4.6" />
  </svg>
);

export const Clock = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 6.8V12l3.2 2" />
  </svg>
);

export const Arrow = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const Star = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.8l2.8 5.9 6.4.9-4.7 4.5 1.2 6.4L12 17.4l-5.7 3.1 1.2-6.4-4.7-4.5 6.4-.9L12 2.8z" />
  </svg>
);

export const Sparkle = ({ className = "", style, outline = false }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true"
    fill={outline ? "none" : "currentColor"} stroke="currentColor"
    strokeWidth={outline ? 1.2 : 0} strokeLinejoin="round">
    <path d="M12 1.5c.7 5.6 4 9.8 10.5 10.5C16 13 12.7 17.2 12 22.5 11.3 17.2 8 13 1.5 12 8 11.3 11.3 7.1 12 1.5z" />
  </svg>
);


export const Moon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20.2 14.6A8.4 8.4 0 019.4 3.8a8.4 8.4 0 1010.8 10.8z" />
  </svg>
);

export const Menu = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M3 6.5h18M3 12h18M3 17.5h18" />
  </svg>
);

export const Logo = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="6.9" cy="6.9" r="5.9" />
    <circle cx="17.1" cy="6.9" r="5.9" />
    <circle cx="6.9" cy="17.1" r="5.9" />
    <circle cx="17.1" cy="17.1" r="5.9" />
  </svg>
);
