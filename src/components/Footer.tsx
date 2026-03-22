import kfLogo from "@/assets/kf-logo.png";

const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <img src={kfLogo} alt="Kumar Feeds Logo" className="h-10 w-10 object-contain brightness-0 invert" />
        <p className="font-display font-bold text-lg text-primary-foreground">Kumar Feeds & Biotech Pvt. Ltd.</p>
      </div>
      <p className="font-body text-sm text-primary-foreground/70">
        © {new Date().getFullYear()} Kumar Feeds & Biotech Private Limited. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
