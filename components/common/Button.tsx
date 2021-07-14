import Link from "next/link";
type LinkBtnProps = {
  href: string;
  text: string;
};
export const LinkButton = ({ href, text, ...props }: LinkBtnProps) => {
  return (
    <Link href={href} {...props}>
      <a className="text-white bg-purple hover:bg-tintPurple rounded-xl p-2">
        {text}
      </a>
    </Link>
  );
};
