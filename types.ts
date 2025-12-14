export enum Language {
  ENGLISH = 'en',
  ARABIC = 'ar',
  HINDI = 'hi',
}

export interface Product {
  code: string;
  name: string;
}

export interface AIResponse {
  specs: string[];
  usage: string[];
  summary: string;
}

export interface SearchResult extends Product {
  similarity: number; // 0-100
}