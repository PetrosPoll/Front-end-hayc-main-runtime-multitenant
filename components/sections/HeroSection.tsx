interface Props {
  config?: Record<string, unknown>;
}

export function HeroSection({ config }: Props) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-20">
      {config?.heading && (
        <h1 className="text-5xl font-bold mb-4">{String(config.heading)}</h1>
      )}
      {config?.subheading && (
        <p className="text-xl text-gray-600 max-w-2xl">{String(config.subheading)}</p>
      )}
    </section>
  );
}
