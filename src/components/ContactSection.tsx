import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Ready to place a bulk order or become a distributor? Reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Phone</h4>
                <p className="font-body text-muted-foreground">Contact us for details</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Email</h4>
                <p className="font-body text-muted-foreground">info@kumarfeeds.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">Location</h4>
                <p className="font-body text-muted-foreground">PLOT NO. F-3, KHATA NO.- 37<br />INDUSTRIAL AREA, JASIDIH, DEOGHAR<br />Jharkhand, India - 814142</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center bg-primary/5 rounded-lg p-10 border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Thank You!</h3>
                <p className="font-body text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <input type="text" placeholder="Company Name (Optional)" className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <select className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Select Product Interest</option>
                <option>Broiler Feed</option>
                <option>Layer Feed</option>
                <option>Chick Starter</option>
                <option>All Products</option>
              </select>
              <textarea required rows={4} placeholder="Your Message or Order Details" className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <button type="submit" className="w-full py-3.5 rounded-md bg-primary text-primary-foreground font-display font-bold text-base hover:brightness-110 transition-all duration-200">
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
