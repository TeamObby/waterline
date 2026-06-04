import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-5 w-5";

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M5 4.5c0-.83.67-1.5 1.5-1.5h2.1c.7 0 1.3.48 1.46 1.16l.78 3.3c.14.6-.07 1.22-.55 1.6l-1.4 1.13a12 12 0 0 0 5.42 5.42l1.13-1.4a1.5 1.5 0 0 1 1.6-.55l3.3.78A1.5 1.5 0 0 1 21 15.9V18a1.5 1.5 0 0 1-1.5 1.5C11.5 19.5 4.5 12.5 4.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VoicemailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <circle cx="7" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 17.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 16h-5.6l-3.9 3v-3H7A2.5 2.5 0 0 1 4.5 13.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="m5 12.5 4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M12 3 5 5.5v5c0 4.5 3 8.4 7 9.5 4-1.1 7-5 7-9.5v-5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2.2 2.2L15 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M12 3c3.5 4.3 6.5 7.9 6.5 11.3a6.5 6.5 0 1 1-13 0C5.5 10.9 8.5 7.3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DollarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M12 3v18M16.5 7.5c-1-1.4-2.6-2-4.5-2-2.5 0-4.5 1.3-4.5 3.4 0 4.6 9 2.7 9 7.2 0 2.1-2 3.4-4.5 3.4-1.9 0-3.5-.6-4.5-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M14.7 4.3a4.5 4.5 0 0 0-5.4 5.7L4 15.3a2 2 0 1 0 2.8 2.8l5.3-5.3a4.5 4.5 0 0 0 5.7-5.4l-2.6 2.6-2.2-2.2 2.6-2.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ListIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
