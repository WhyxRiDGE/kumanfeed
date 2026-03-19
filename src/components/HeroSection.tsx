import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium poultry feed with healthy chickens" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
            Premium Poultry Feeds for Healthier Flocks
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 font-body leading-relaxed">
            Kumar Feeds & Biotech Pvt. Ltd. — Scientifically formulated, quality-tested nutrition for broilers, layers, and chicks. Trusted by farmers across the region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center px-7 py-3.5 rounded-md bg-secondary text-secondary-foreground font-display font-bold text-base hover:brightness-110 transition-all duration-200">
              View Product Catalog
            </a>
            <a href="#contact" className="inline-flex items-center px-7 py-3.5 rounded-md border-2 border-primary-foreground text-primary-foreground font-display font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-200">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
