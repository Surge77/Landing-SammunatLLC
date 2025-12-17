"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden pt-24">
            {/* Background gradient blurs with ambient motion (CSS animated) */}
            <div className="gradient-blur gradient-primary absolute -left-40 top-20" />
            <div className="gradient-blur gradient-secondary absolute -right-40 bottom-40" />

            {/* Subtle abstract background shape with slow rotation */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.div
                    className="relative h-[500px] w-[500px] opacity-[0.025]"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 120,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ filter: "blur(1px)" }}
                >
                    <div className="absolute inset-0 rounded-3xl border border-current text-primary" />
                    <div className="absolute inset-12 rounded-2xl border border-current text-primary" />
                    <div className="absolute inset-24 rounded-xl border border-current text-primary" />
                </motion.div>
            </div>

            <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col items-center text-center"
                >
                    {/* Announcement Badge */}
                    <motion.div variants={fadeInUp} className="mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
                            <span className="flex h-2 w-2 rounded-full bg-primary" />
                            Now in Public Beta
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
                    >
                        Debug and monitor your{" "}
                        <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            APIs in real-time
                        </span>
                    </motion.h1>

                    {/* Supporting Text */}
                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        FlowStack gives your team complete visibility into API performance,
                        errors, and bottlenecks. Ship faster with confidence.
                    </motion.p>

                    {/* CTA Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row"
                    >
                        <Input
                            type="email"
                            placeholder="Enter your work email"
                            className="h-12 bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                        <Button size="lg" className="h-12 px-8 whitespace-nowrap">
                            Start Free Trial
                        </Button>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-sm text-muted-foreground"
                    >
                        No credit card required · 14-day free trial
                    </motion.p>

                    {/* Dashboard Preview - Integrated with soft masking */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative mt-16 w-full max-w-4xl"
                    >
                        {/* Layered shadow for depth */}
                        <div
                            className="absolute inset-x-8 -bottom-4 h-32 rounded-2xl bg-primary/5"
                            style={{ filter: "blur(24px)" }}
                        />
                        <div
                            className="absolute inset-x-4 -bottom-2 h-16 rounded-xl bg-background/50"
                            style={{ filter: "blur(12px)" }}
                        />

                        {/* Main dashboard card */}
                        <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/20">
                            {/* Window chrome */}
                            <div className="flex items-center gap-3 border-b border-border/50 bg-card/90 px-4 py-3">
                                <div className="flex gap-1.5">
                                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                                </div>
                                <div className="flex-1 text-center text-xs text-muted-foreground/70">
                                    flowstack.dev/dashboard
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                {/* Primary narrative metric */}
                                <div className="mb-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="text-xs text-muted-foreground/70">
                                                Service health · Last 7 days
                                            </div>
                                            <div className="mt-2 flex items-baseline gap-2">
                                                <span className="text-4xl font-semibold text-foreground">All clear</span>
                                                <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-500">
                                                    Healthy
                                                </span>
                                            </div>
                                            <div className="mt-1 text-sm text-muted-foreground">
                                                No critical issues detected this week
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mb-5 border-t border-border/30" />

                                {/* Secondary supporting metrics */}
                                <div className="grid gap-x-8 gap-y-4 md:grid-cols-3">
                                    <div>
                                        <div className="text-xs text-muted-foreground/60">Requests handled</div>
                                        <div className="mt-0.5 text-lg font-medium text-foreground">~2.1M</div>
                                        <div className="text-xs text-muted-foreground/50">this week</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground/60">Response time</div>
                                        <div className="mt-0.5 text-lg font-medium text-foreground">~45ms</div>
                                        <div className="text-xs text-muted-foreground/50">p50 median</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground/60">Errors caught</div>
                                        <div className="mt-0.5 text-lg font-medium text-foreground">127</div>
                                        <div className="text-xs text-muted-foreground/50">all resolved</div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom fade mask */}
                            <div
                                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                                style={{
                                    background: "linear-gradient(to top, var(--background) 0%, transparent 100%)"
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
