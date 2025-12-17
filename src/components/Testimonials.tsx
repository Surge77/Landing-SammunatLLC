"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const testimonials = [
    {
        quote: "Cut our debugging time significantly. The real-time view is exactly what we needed.",
        author: "Sarah Chen",
        role: "Engineering Lead",
    },
    {
        quote: "Finally, observability that doesn't require a PhD to set up. Just works.",
        author: "Marcus Rodriguez",
        role: "CTO",
    },
    {
        quote: "Found a critical bottleneck within an hour of integration. Paid for itself immediately.",
        author: "Emma Thompson",
        role: "Backend Engineer",
    },
];

export function Testimonials() {
    return (
        <section className="relative py-14 md:py-16">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="rounded-lg border border-border/40 p-5"
                        >
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-foreground">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
