import Link from "next/link";

const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter", href: "#" },
];

export function Footer() {
    return (
        <footer className="border-t border-border/40">
            <div className="mx-auto max-w-6xl px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Logo */}
                    <Link href="/" className="text-sm font-medium text-foreground">
                        flow<span className="text-primary">stack</span>
                    </Link>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-xs text-muted-foreground/60">
                        © {new Date().getFullYear()} flowstack
                    </p>
                </div>
            </div>
        </footer>
    );
}
