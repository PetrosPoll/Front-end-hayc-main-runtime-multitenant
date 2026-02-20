interface Props {
  config?: Record<string, unknown>;
  items?: Array<Record<string, unknown>>;
}

export function FeaturesSection({ config, items = [] }: Props) {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {config?.heading && (
        <h2 className="text-3xl font-bold text-center mb-12">{String(config.heading)}</h2>
      )}
      {items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              {item.title && <h3 className="font-semibold text-lg mb-2">{String(item.title)}</h3>}
              {item.text && <p className="text-gray-600">{String(item.text)}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
