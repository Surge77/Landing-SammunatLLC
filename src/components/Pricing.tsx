"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "For side projects and exploration",
        features: [
            "100k requests/month",
            "7-day retention",
            "3 team members",
        ],
        cta: "Get Started",
        variant: "outline" as const,
    },
    {
        name: "Pro",
        price: "$49",
        period: "/mo",
        description: "For growing teams",
        features: [
            "5M requests/month",
            "30-day retention",
            "Unlimited members",
            "Advanced analytics",
            "Priority support",
        ],
        cta: "Start Free Trial",
        variant: "default" as const,
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: [
            "Unlimited requests",
            "Custom retention",
            "SSO & SAML",
            "Dedicated support",
            "SLA guarantee",
        ],
        cta: "Contact Sales",
        variant: "outline" as const,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="relative py-16 md:py-20 bg-card/20">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl font-semibold text-foreground md:text-3xl"
                    >
                        Simple pricing
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-2 text-muted-foreground"
                    >
                        Start free, upgrade when you need to.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="mt-10 grid gap-4 lg:grid-cols-3"
                >
                    {plans.map((plan, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card
                                className={`relative h-full border-border/50 bg-card transition-colors hover:border-border ${plan.popular ? "border-primary/40" : ""
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-2.5 left-4">
                                        <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                                            Popular
                                        </span>
                                    </div>
                                )}
                                <CardContent className="flex h-full flex-col p-5">
                                    <div>
                                        <h3 className="font-medium text-foreground">
                                            {plan.name}
                                        </h3>
                                        <div className="mt-2">
                                            <span className="text-2xl font-semibold text-foreground">
                                                {plan.price}
                                            </span>
                                            {plan.period && (
                                                <span className="text-sm text-muted-foreground">{plan.period}</span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="mt-5 flex-1 space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <svg
                                                    className="h-3.5 w-3.5 shrink-0 text-primary/70"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button variant={plan.variant} size="sm" className="mt-6 w-full">
                                        {plan.cta}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
