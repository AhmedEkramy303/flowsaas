import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 dark:bg-gray-900/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#integrations", label: "Integrations" },
                { href: "#changelog", label: "Changelog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((label) => (
                <li key={label}>
                  <Link
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "API Reference", "Support", "Status"].map((label) => (
                <li key={label}>
                  <Link
                    href={`#${label.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Security", "Cookies"].map((label) => (
                <li key={label}>
                  <Link
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} FlowSaaS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {[{ icon: Twitter, href: "https://twitter.com" },
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
