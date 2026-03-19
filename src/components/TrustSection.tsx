import { ShieldCheck, FlaskConical, Award, Truck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "ISO 9001 Certified", desc: "Our manufacturing facility meets international quality management standards." },
  { icon: FlaskConical, title: "Lab-Tested Nutrition", desc: "Every batch is tested for protein, moisture, and nutrient composition." },
  { icon: Award, title: "Trusted Since 2005", desc: "Nearly two decades of serving poultry farmers with reliable feed products." },
  { icon: Truck, title: "Bulk Delivery", desc: "Flexible delivery options for orders of any size, anywhere in the region." },
];

const TrustSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Why Choose GreenHarvest?
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Quality nutrition backed by science, delivered with reliability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
