const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface SiteConfig {
  websiteId: number;
  projectName: string | null;
  language: string | null;
  template: string | null;
  bookingEnabled: boolean;
  newsletterEnabled: boolean;
}

export interface PageData {
  slug: string;
  title: string;
  metaTitle: string | null;
  metaDescription: string | null;
  contentJson: {
    sections: Array<{
      type: string;
      config?: Record<string, unknown>;
      items?: Array<Record<string, unknown>>;
    }>;
  };
  updatedAt: string;
}

export async function fetchSiteConfig(host: string): Promise<SiteConfig | null> {
  try {
    const res = await fetch(`${API_URL}/pub/site?host=${encodeURIComponent(host)}`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchPageData(host: string, slug: string): Promise<PageData | null> {
  try {
    const res = await fetch(`${API_URL}/pub/page?host=${encodeURIComponent(host)}&slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
