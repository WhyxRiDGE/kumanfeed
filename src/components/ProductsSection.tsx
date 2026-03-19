import { Bird, Egg } from "lucide-react";
import feedBag from "@/assets/feed-bag.jpg";

const products = [
  {
    title: "Counter Feed",
    description: "Balanced nutrition feed designed for optimal growth and health maintenance in poultry. Ideal for everyday feeding routines.",
    icon: Bird,
    specs: ["20% Crude Protein", "3,000 kcal/kg Energy", "Vitamin Enriched"],
  },
  {
    title: "Kouriler Feed",
    description: "Premium high-protein formula engineered for rapid, healthy weight gain and superior meat quality in broiler chickens.",
    icon: Egg,
    specs: ["22% Crude Protein", "3,100 kcal/kg Energy", "Amino Acid Balanced"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Our Product Range
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Every bag is manufactured under strict quality control to deliver consistent nutrition your flock can depend on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((p) => (
            <div key={p.title} className="group bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-full h-48 rounded-md overflow-hidden mb-5 bg-muted">
                <img src={feedBag} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">{p.title}</h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <ul className="space-y-1.5">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;