interface Props {
  config?: Record<string, unknown>;
}

export function TextSection({ config }: Props) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      {config?.heading && (
        <h2 className="text-3xl font-bold mb-6">{String(config.heading)}</h2>
      )}
      {config?.body && (
        <p className="text-gray-600 leading-relaxed">{String(config.body)}</p>
      )}
    </section>
  );
}
