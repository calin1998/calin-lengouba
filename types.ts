
export enum Screen {
  Home = 'Home',
  Bio = 'Bio',
  Projects = 'Projects',
  Live = 'Live',
  News = 'News',
  Gallery = 'Gallery',
  Contact = 'Contact'
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  time: string;
  imageUrl: string;
  badgeColor?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  progress: number;
  imageUrl: string;
  status: 'Actif' | 'En cours' | 'Terminé';
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  type: 'photo' | 'video';
  featured?: boolean;
}
