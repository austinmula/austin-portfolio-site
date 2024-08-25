import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BannerSection`.
 */
export type BannerSectionProps =
  SliceComponentProps<Content.BannerSectionSlice>;

/**
 * Component for "BannerSection" Slices.
 */
const BannerSection = ({ slice }: BannerSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for banner_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BannerSection;
