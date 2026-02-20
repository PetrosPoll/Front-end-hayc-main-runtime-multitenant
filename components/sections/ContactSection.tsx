interface Props {
  config?: Record<string, unknown>;
}

export function ContactSection({ config }: Props) {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 text-center">
      {config?.heading && (
        <h2 className="text-3xl font-bold mb-6">{String(config.heading)}</h2>
      )}
      {config?.phone && (
        <p className="text-gray-600 mb-2">📞 {String(config.phone)}</p>
      )}
      {config?.email && (
        <p className="text-gray-600">✉️ {String(config.email)}</p>
      )}
    </section>
  );
}
