import React from "react";
import BlockRichText from "../shared/block-rich-text";
import BlockMedia from "../shared/block-media";
import BlockQuote from "../shared/block-quote";
import BlockSlider from "../shared/block-slider";
import Video from "../shared/video";
import ImageSectionContainer from "../star/section/image-section-container";
import SimpleSectionContainer from "../star/section/simple-section-container";
import ArticlesGridStatic from "./articles-grid-static";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";
import TitleBar from "../shared/title-bar";
import PartnerSlider from "../star/slider/partner-slider";
import BreadcrumbBar from "./breadcrumb-bar";
import ImageSlider from "../star/slider/image-slider";
import PageHeader from "../shared/page-header";

const componentsMap = {
  StrapiComponentSharedRichText: BlockRichText,
  StrapiComponentSharedMedia: BlockMedia,
  StrapiComponentSharedQuote: BlockQuote,
  StrapiComponentSharedSlider: BlockSlider,
  StrapiComponentSharedVideo: Video,
  StrapiComponentSharedImageSectionContainer: ImageSectionContainer,
  StrapiComponentStarSimpleSectionContainer: SimpleSectionContainer,
  StrapiComponentGlobalArticleGrid: ArticlesGridStatic,
  StrapiComponentGlobalContact: Contact,
  StrapiComponentGlobalHeader: Header,
  StrapiComponentGlobalFooter: Footer,
  StrapiComponentSharedTitleBar: TitleBar,
  StrapiComponentStarImageSlider: PartnerSlider,
  StrapiComponentSharedBreadcrumbBar: BreadcrumbBar,
  StrapiComponentSharedHighlightedSlider: ImageSlider,
  StrapiComponentSharedPageHeader: PageHeader,
};

const Block = ({ block }: any) => {
  // @ts-ignore
  const Component = componentsMap[block.__typename];

  if (!Component) {
    return null;
  }

  return <Component data={block} />;
};

const BlocksRenderer = ({ blocks }: any) => {
  console.log(blocks);

  return (
    <div>
      {blocks.map((block: any, index: any) => (
        <Block key={`${index}${block.__typename}`} block={block} />
      ))}
    </div>
  );
};

export default BlocksRenderer;
