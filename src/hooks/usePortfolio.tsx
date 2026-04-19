import { useState, useEffect } from 'react';

const API_BASE = 'http://127.0.0.1:8000/api/portfolio';

export interface HeroData {
  badge_text: string;
  headline_line1: string;
  headline_line2: string;
  headline_highlight_word: string;
  description: string;
  cta_button_text: string;
  cta_button_url: string;
  logo_image: string | null;
}

export interface NavItem {
  label: string;
  section_id: string;
}

export interface MarqueeItem {
  name: string;
  logo: string | null;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  brand_color: string;
  case_study_url: string | null;
  case_study_content: string | null;
  sort_order: number;
  is_featured: boolean;
  is_active: boolean;
}

export interface Skill {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: string | null;
  sort_order: number;
  is_active: boolean;
}

export interface Tool {
  id: number;
  name: string;
  icon_url: string;
  icon_bg_color: string;
  orbit_level: 'inner' | 'outer';
  sort_order: number;
  is_active: boolean;
}

export interface Role {
  id: number;
  company_id: number;
  title: string;
  period: string;
  description: string[];
  sort_order: number;
}

export interface ExperienceItem {
  id: number;
  name: string;
  logo: string | null;
  period: string;
  sort_order: number;
  is_active: boolean;
  roles: Role[];
}

export interface AboutData {
  heading: string;
  bio: string;
  years_experience: number;
  projects_count: number;
  education: string;
  email: string;
  phone: string;
  linkedin_url: string;
  instagram_url: string;
  behance_url: string;
  github_url: string | null;
  dribbble_url: string | null;
  profile_image: string | null;
}

export interface PortfolioData {
  hero: HeroData;
  nav: NavItem[];
  marquee: MarqueeItem[];
  projects: Project[];
  skills: Skill[];
  tools: Tool[];
  experience: ExperienceItem[];
  about: AboutData;
}

export function usePortfolio() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_BASE);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Portfolio API error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}