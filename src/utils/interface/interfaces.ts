export interface Box {
  id: string;
  title: string;
  slug: string;
  background: {
    alternativeText?: string;
    localFile: {
      url: string;
    };
  };
  logo?: {
    alternativeText?: string;
    localFile: {
      url: string;
    };
  };
  boxGroup: {
    title: string;
    id: string;
    slug: string;
  };
};