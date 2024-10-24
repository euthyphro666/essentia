export interface PortfolioCard {
  year: number;
  month: number;
  title: string;
  subtitle: string;
  about: string;
  image: string[];
  tags?: string[];
  links?: string[][];
}
