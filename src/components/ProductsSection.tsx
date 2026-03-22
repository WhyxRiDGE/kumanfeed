import { Bird, Egg, Drumstick, Wheat } from "lucide-react";
import feedBag from "@/assets/feed-bag.jpg";
import boilerFeedImg from "@/assets/boiler-feed.png";
import kouilerFeedImg from "@/assets/kouiler-feed.png";
import counterFeedImg from "@/assets/counter-feed.png";
import henGrowFeedImg from "@/assets/hen-grow-feed.png";

const products = [
  {
    title: "Boiler Feed",
    description: "High-energy formula for rapid, healthy weight gain in broiler chickens. Delivers superior meat quality and FCR.",
    icon: Bird,
    image: boilerFeedImg,
    specs: ["22% Crude Protein", "3,100 kcal/kg Energy", "Amino Acid Balanced"],
  },
  {
    title: "Kouiler Feed",
    description: "Premium nutrition for Kouiler breed poultry. Formulated for optimal growth, health, and performance.",
    icon: Egg,
    image: kouilerFeedImg,
    specs: ["19% Crude Protein", "Breed-Specific Formula", "Mineral Enriched"],
  },
  {
    title: "Hen Grow Feed",
    description: "Specially formulated broiler finisher feed for optimal weight gain and market-ready birds.",
    icon: Wheat,
    image: henGrowFeedImg,
    specs: ["17% Crude Protein", "Broiler Finisher", "Added Vitamins A, D, E"],
  },
  {
    title: "Counter Feed",
    description: "Balanced nutrition for counter breed poultry. Supports steady growth and overall flock health.",
    icon: Drumstick,
    image: counterFeedImg,
    specs: ["20% Crude Protein", "Balanced Formula", "Growth Optimized"],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.title} className="group bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-full h-48 rounded-md overflow-hidden mb-5 bg-muted">
                <img src={p.image || feedBag} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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