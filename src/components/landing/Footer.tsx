import React from "react";

const columns = [
  { title: "PRODUCT", items: ["Forex", "Metals", "Indices", "Bonds"] },
  { title: "PLATFORMS", items: ["App", "MT4", "MT5", "WebTrader"] },
  { title: "LEARN", items: ["Academy", "Webinar", "Tutorials"] },
  { title: "CORPORATE", items: ["About Us", "Contact", "ESG"] },
];

const SocialIcon = ({ children, label }) => (
  <button aria-label={label} className="w-9 h-9 rounded flex items-center justify-center bg-white">
    <span className="w-4 h-4 text-[#062B3F]">{children}</span>
  </button>
);

export function Footer() {
  return (
    <footer className="bg-[#062B3F] text-white px-6 md:px-16 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((it, i) => (
                  <li key={i} className="text-sm text-white/90">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/80">© {new Date().getFullYear()} SIGNALTRADE. All rights reserved.</div>

          <div className="flex items-center gap-2">
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.22 10.44 22v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.88h2.77l-.44 2.9h-2.33V22C18.34 21.22 22 17.09 22 12.07z"/></svg>
            </SocialIcon>
            <SocialIcon label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.6V24H.2zM8.98 8.98h4.42v2.05h.06c.62-1.18 2.14-2.42 4.4-2.42 4.7 0 5.57 3.09 5.57 7.11V24h-4.6v-7.32c0-1.75-.03-4-2.44-4-2.45 0-2.83 1.92-2.83 3.9V24H8.98z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
