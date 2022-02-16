type Link = {
  url: string;
  name: 'github' | 'website' | 'playstore' | 'appstore';
};

type Media = {
  name: string;
  src: string;
};

type Tool = string;

export type Project = {
  title: string;
  description: string;
  links: Link[];
  media: Media[];
  tools: Tool[];
};
