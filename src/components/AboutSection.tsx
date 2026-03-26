import { MapPin, Warehouse, Globe, Users } from "lucide-react";

const highlights = [
  { icon: Globe, value: "29", label: "States Served" },
  { icon: Warehouse, value: "4", label: "Warehouses" },
  { icon: MapPin, value: "Pan-India", label: "Presence" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            About Our Company
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 font-body text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            Our company is a trusted and growing name in the animal feed manufacturing industry, dedicated to delivering high-quality and nutritionally balanced feed products across India. With a strong commitment to innovation, quality, and customer satisfaction, we proudly supply our products to <strong className="text-foreground">29 states</strong>, ensuring farmers and livestock businesses nationwide have reliable access to superior feed solutions.
          </p>
          <p>
            As a leading manufacturer, we focus on producing a wide range of animal feed that supports the health, growth, and productivity of livestock. Our formulations are carefully developed using premium raw materials and advanced processing techniques to meet the diverse needs of poultry, cattle, and other farm animals.
          </p>
          <p>
            To support our extensive distribution network, we operate <strong className="text-foreground">four strategically located warehouses</strong> that enable efficient storage, inventory management, and timely delivery. This strong logistical backbone allows us to maintain consistency in supply and meet the growing demands of our customers, no matter their location.
          </p>
          <p>
            Driven by a vision to enhance agricultural productivity and support the farming community, our company continues to expand its reach and improve its product offerings. We believe in building long-term relationships with our clients by providing dependable products, competitive pricing, and excellent service.
          </p>
          <p>
            With a pan-India presence and a dedication to quality, we are proud to contribute to the growth and sustainability of the livestock industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-14">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display font-bold text-2xl text-foreground">{h.value}</div>
              <div className="font-body text-sm text-muted-foreground mt-1">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
