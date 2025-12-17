"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function CTA() {
    return (
        <section className="relative py-24 md:py-32 lg:py-40">
            {/* Subtle background gradient */}
            <div className="gradient-blur gradient-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

            <div className="relative mx-auto max-w-4xl px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
                    >
                        Ready to see your APIs clearly?
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
                    >
                        Start your free trial today. No credit card required.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                    >
                        <Button size="lg" className="h-12 px-8 text-base">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                            Schedule Demo
                        </Button>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 text-sm text-muted-foreground/70"
                    >
                        14-day trial · Setup in 5 minutes · Cancel anytime
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
