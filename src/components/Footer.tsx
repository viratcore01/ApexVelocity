const Footer = () => (
  <footer className="border-t border-primary/30 py-16 carbon-fiber">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-display text-2xl text-foreground tracking-wider">
            APEX<span className="text-primary">PULSE</span>
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-3 italic">
            Detect. Alert. Protect.
          </p>
        </div>

        {[
          { title: "PRODUCT", links: ["Helmet Sensor", "Wrist Band", "Mobile App", "Pricing"] },
          { title: "SCIENCE", links: ["Research", "Clinical Trials", "Safety Standards", "Publications"] },
          { title: "CONNECT", links: ["Twitter/X", "Discord", "GitHub", "Newsletter"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="font-body text-xs text-muted-foreground">
          © 2025 APEXPULSE | Saving Riders at Every Speed
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
