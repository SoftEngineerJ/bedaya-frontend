import type React from "react";
import Link from "next/link";

type LinkHref = React.ComponentProps<typeof Link>["href"];

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "href"> & {
    href: LinkHref;
  };

export default function UiButton(props: ButtonProps | LinkProps) {
  const baseClassName =
    "inline-flex items-center justify-center font-bold relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 text-white";

  const shapeClassName = "rounded-none";

  const paddingClassName =
    props.size === "sm"
      ? "py-2 px-4 text-sm"
      : props.size === "lg"
        ? "py-4 px-8 text-lg"
        : "py-3 px-6";

  const surfaceClassName =
    "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 border border-amber-300/60";

  const className =
    `${baseClassName} ${shapeClassName} ${paddingClassName} ${surfaceClassName} ${props.className ?? ""}`.trim();

  const overlay = (
    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 wipe-ltr" />
  );

  const content = (
    <>
      <span className="relative z-10">{props.children}</span>
      {overlay}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, children: _children, className: _className, ...rest } = props;
    return (
      <Link href={href} className={className} {...rest}>
        {content}
      </Link>
    );
  }

  const { children: _children, className: _className, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {content}
    </button>
  );
}
