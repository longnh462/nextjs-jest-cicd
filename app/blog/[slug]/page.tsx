type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export async function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'third-post' },
  ];
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <h1>Slug: {slug}</h1>;
}
