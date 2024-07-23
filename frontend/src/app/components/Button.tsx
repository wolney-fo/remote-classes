import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"a"> {
  children: string;
  href: string;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className="py-8 w-full sm:max-w-80 text-center text-2xl text-lime-500 bg-neutral-900 hover:text-neutral-900 hover:bg-lime-500 duration-200 border-2 border-lime-500 rounded-lg"
    >
      {props.children}
    </a>
  );
}
