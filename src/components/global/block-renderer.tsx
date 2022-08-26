import React from "react";
import BlockRichText from "../shared/block-rich-text";
import BlockMedia from "../shared/block-media";
import BlockQuote from "../shared/block-quote";
import BlockSlider from "../shared/block-slider";
import Video from "../shared/video";
import ArticlesGridStatic from "./articles-grid-static";
import Contact from "./contact";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import TitleBar from "../shared/title-bar";
import PartnerSlider from "../star/partner-slider";
import BreadcrumbBar from "./breadcrumb-bar";
import ImageSlider from "../star/image-slider";
import PageHeader from "../shared/page-header";
import ServiceSlider from "../star/service-slider";
import ExperienceBlock from "../star/experience-block";


const componentsMap = {
  StrapiComponentSharedRichText: BlockRichText,
  StrapiComponentSharedMedia: BlockMedia,
  StrapiComponentSharedQuote: BlockQuote,
  StrapiComponentSharedSlider: BlockSlider,
  StrapiComponentSharedVideo: Video,
  StrapiComponentGlobalArticleGrid: ArticlesGridStatic,
  StrapiComponentGlobalContact: Contact,
  StrapiComponentGlobalHeader: Header,
  StrapiComponentGlobalFooter: Footer,
  StrapiComponentSharedTitleBar: TitleBar,
  StrapiComponentStarImageSlider: PartnerSlider,
  StrapiComponentSharedBreadcrumbBar: BreadcrumbBar,
  StrapiComponentSharedHighlightedSlider: ImageSlider,
  StrapiComponentSharedPageHeader: PageHeader,
  StrapiComponentGlobalHero: Hero,
  StrapiComponentStarServiceSlider: ServiceSlider,
  StrapiComponentStarExperience: ExperienceBlock,
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
  //console.log(blocks);

  return (
    <div className="content-wrapper">
      {blocks.map((block: any, index: any) => (
        <Block key={`${index}${block.__typename}`} block={block} />
      ))}
    </div>
  );
};

export default BlocksRenderer;
