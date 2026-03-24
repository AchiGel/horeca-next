export interface PageDescription {
  title: string;
  descr: string;
}

export interface ArticleType {
  body: string[];
  categories: string[];
  createdAt: string;
  description: string;
  imageUrl: string;
  minutesRead: number;
  title: string;
  updatedAt: string;
  _id: string;
}

export interface BurgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export type LinksType = {
  name: string;
  path: string;
};
