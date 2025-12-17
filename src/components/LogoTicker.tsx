// Simple logos as text with company styling - monochrome, muted
const companies = [
    "Google",
    "Amazon",
    "Netflix",
    "Meta",
    "Stripe",
    "GitHub",
    "Microsoft",
    "Uber",
    "Shopify",
    "Slack",
];

export function LogoTicker() {
    return (
        <section className="relative pt-4 pb-10 overflow-hidden">
            {/* Label */}
            <div className="text-center mb-6">
                <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">
                    Trusted by teams at
                </p>
            </div>

            {/* Ticker container */}
            <div
                className="logo-ticker relative flex opacity-40"
                aria-label="Companies using FlowStack"
            >
                {/* Fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Scrolling content - duplicated for seamless loop */}
                <div className="logo-marquee flex shrink-0">
                    {companies.map((company) => (
                        <div
                            key={company}
                            className="flex items-center justify-center px-8 md:px-12"
                        >
                            <span className="text-sm md:text-base font-medium text-muted-foreground whitespace-nowrap">
                                {company}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="logo-marquee flex shrink-0" aria-hidden="true">
                    {companies.map((company) => (
                        <div
                            key={`${company}-dup`}
                            className="flex items-center justify-center px-8 md:px-12"
                        >
                            <span className="text-sm md:text-base font-medium text-muted-foreground whitespace-nowrap">
                                {company}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
