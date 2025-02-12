import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

const Button = ({ buttonLink, buttonText, className }: Props) => {
  return (
    <PrismicNextLink
      className={` rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl ${className ?? ""}`}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
};

export default Button;
