import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutMe`.
 */
export type AboutMeProps = SliceComponentProps<Content.AboutMeSlice>;

/**
 * Component for "AboutMe" Slices.
 */
const AboutMe = ({ slice }: AboutMeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_me (variation: {slice.variation}) Slices
    </section>
  );
};

export default AboutMe;
