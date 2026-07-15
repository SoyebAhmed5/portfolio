export interface GithubUser {
  login: string;
  id: number;

  avatar_url: string;

  html_url: string;

  name: string;

  company: string | null;

  blog: string;

  location: string | null;

  email: string | null;

  bio: string | null;

  public_repos: number;

  followers: number;

  following: number;

  created_at: string;
}

export interface GithubRepository {
   id: number;

  name: string;

  html_url: string;

  description: string | null;

  language: string | null;

  stargazers_count: number;
  

  forks_count: number;

  updated_at: string;

  homepage: string | null;

  topics: string[];

  visibility: string;

  fork: boolean;
}

export interface GithubStatistics {
  totalStars: number;
  totalForks: number;
  totalRepositories: number;
  primaryLanguage: string;
  lastUpdated: string;
}

export interface GithubLanguage {
  name: string;
  count: number;
  percentage: number;
}

