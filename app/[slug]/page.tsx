import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { fetchSiteConfig, fetchPageData } from "@/lib/api";
import { SectionRenderer } from "@/components/SectionRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RuntimePage({ params }: Props) {
  const { slug } = await params;
  const headersList = await headers();
  const host = headersList.get("host") ?? "";

  const [siteConfig, pageData] = await Promise.all([
    fetchSiteConfig(host),
    fetchPageData(host, slug),
  ]);

  if (!siteConfig || !pageData) {
    notFound();
  }

  return (
    <main>
      <SectionRenderer sections={pageData.contentJson.sections} />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const headersList = await headers();
  const host = headersList.get("host") ?? "";

  const pageData = await fetchPageData(host, slug);

  return {
    title: pageData?.metaTitle ?? pageData?.title ?? "Page",
    description: pageData?.metaDescription ?? "",
  };
}
