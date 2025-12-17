"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const steps = [
    {
        number: "01",
        title: "Install",
        description: "Add FlowStack to your project with npm. Works with Node, Python, Go, and Rust.",
        code: `npm install @flowstack/sdk`,
    },
    {
        number: "02",
        title: "Initialize",
        description: "One line to start capturing API data automatically.",
        code: `FlowStack.init({ apiKey: process.env.FLOWSTACK_KEY })`,
    },
    {
        number: "03",
        title: "Monitor",
        description: "Open your dashboard and see requests flowing in real-time.",
        code: `// That's it. No additional configuration needed.`,
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-16 md:py-20 bg-card/20">
            <div className="mx-auto max-w-4xl px-6">
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
                        Up and running in minutes
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="mt-12 space-y-6"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex gap-6"
                        >
                            {/* Step number */}
                            <div className="flex-shrink-0 w-10 text-right">
                                <span className="text-sm font-medium text-primary/60">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-6 border-b border-border/30 last:border-0">
                                <h3 className="font-medium text-foreground">
                                    {step.title}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                                <code className="mt-3 block text-xs text-muted-foreground/80 font-mono">
                                    {step.code}
                                </code>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
