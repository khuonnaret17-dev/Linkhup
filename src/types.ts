export type SocialLink = {
  id: string;
  platform: string;
  title: string;
  url: string;
  active: boolean;
  order: number;
};
export type Profile = {
  uid: string;
  username: string;
  displayName: string;
  bio: string;
  photoURL: string;
  isPublic: boolean;
  theme: 'light' | 'dark';
  accent: string;
  links: SocialLink[];
  updatedAt?: number;
};