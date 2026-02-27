const Footer = () => (
  <footer className="border-t border-primary/30 py-16 carbon-fiber">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-display text-2xl text-foreground tracking-wider">
            APEX <span className="text-primary">VELOCITY</span> ⚡
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-3 italic">
            Precision. Power. Intelligence.
          </p>
        </div>

        {[
          { title: "PRODUCT", links: ["Strategy Engine", "Cockpit", "Pricing", "API Docs"] },
          { title: "COMPANY", links: ["About", "Careers", "Press", "Contact"] },
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
          © 2025 APEX VELOCITY. All rights reserved. Built for speed.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
