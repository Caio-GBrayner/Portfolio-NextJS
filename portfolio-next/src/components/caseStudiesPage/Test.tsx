'use client'
import React, { useState } from "react";

const caseStudies = [
  {
    title: "AI-Powered Trading Algorithm",
    subtitle: "Quantitative Analysis",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    description: "Revolutionary trading system using reinforcement learning and multi-agent AI for cryptocurrency and forex markets.",
    duration: "9 months",
    role: "Lead AI Engineer",
    client: "AlphaFund Capital",
    problem: "AlphaFund Capital needed an intelligent trading system that could adapt to volatile cryptocurrency and forex markets while maintaining consistent profitability. Traditional algorithmic trading systems failed to account for market sentiment, news events, and complex inter-market correlations.",
    solution: "Implemented a sophisticated multi-agent reinforcement learning system with three key components: a market sentiment analyzer using NLP on news feeds and social media, a risk management module with dynamic stop-loss calculations, and a portfolio optimization engine that rebalances positions in real-time based on market conditions.",
    challenges: [
      "Market volatility causing traditional models to fail during high-stress periods",
      "Integration of multiple data sources (price feeds, news, social sentiment) in real-time",
      "Regulatory compliance requirements across different trading jurisdictions",
      "Minimizing latency while processing complex ML models for high-frequency trading"
    ],
    results: [
      "12.8% average monthly returns with 1.8 Sharpe ratio",
      "Processing 25,000+ trades daily across 15 currency pairs",
      "Zero downtime in 18 months of operation",
      "Successfully navigated 3 major market crashes with minimal losses"
    ],
    lessons: [
      "Importance of robust risk management in AI trading systems",
      "Real-time data quality is crucial for model performance",
      "Multi-agent systems provide better resilience than single-model approaches",
      "Continuous model retraining is essential in dynamic financial markets"
    ],
    stack: [
      "Python", "TensorFlow", "Ray", "PostgreSQL", "Redis", "WebSocket", "Docker", "Kubernetes"
    ],
    impact: "Generated $2.3M in additional revenue"
  },
  // Adicione outros estudos de caso aqui seguindo o mesmo padrão...
];

export function CaseStudiesGrid() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Case <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-world insights showcasing advanced AI solutions and cutting-edge implementations that drive business value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-0 sm:px-2">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="group relative cursor-pointer"
                onClick={() => setOpenIdx(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${cs.title}`}
              >
                <div className={`relative h-[550px] bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cs.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 opacity-[0.03] bg-grid-white/5 bg-[length:20px_20px] group-hover:scale-[1.02] transition-transform duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-xl"></div>
                  <div className="relative z-10 p-5 sm:p-6 lg:p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 mb-3">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-border/30 bg-gradient-to-br ${cs.gradient}`}>
                          {cs.icon}
                        </div>
                        <span className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">{cs.subtitle}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">{cs.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2 max-h-12 overflow-hidden">{cs.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3 h-8">
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-card/70 hover:bg-card/90 text-muted-foreground text-xs rounded-lg border border-border/20 transition-colors">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-primary/80" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <span>{cs.client}</span>
                      </span>
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-card/70 hover:bg-card/90 text-muted-foreground text-xs rounded-lg border border-border/20 transition-colors">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-primary/80" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>{cs.duration}</span>
                      </span>
                    </div>
                    <div className="mb-3 sm:mb-4 h-20">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 h-20 mb-3 sm:mb-4">
                        <div className="text-center p-2 sm:p-3 bg-muted/40 rounded-lg sm:rounded-xl border border-border/40 hover:bg-muted/60 hover:border-border/60 transition-all duration-300">
                            <div className="text-base sm:text-lg font-bold text-foreground">12.8%</div>
                            <div className="text-xs text-muted-foreground capitalize leading-tight">returns</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-muted/40 rounded-lg sm:rounded-xl border border-border/40 hover:bg-muted/60 hover:border-border/60 transition-all duration-300">
                            <div className="text-base sm:text-lg font-bold text-foreground">25K+</div>
                            <div className="text-xs text-muted-foreground capitalize leading-tight">trades</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-muted/40 rounded-lg sm:rounded-xl border border-border/40 hover:bg-muted/60 hover:border-border/60 transition-all duration-300">
                            <div className="text-base sm:text-lg font-bold text-foreground">100%</div>
                            <div className="text-xs text-muted-foreground capitalize leading-tight">uptime</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {cs.stack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2 sm:px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-md sm:rounded-lg border border-secondary/30 hover:border-secondary/50 transition-all duration-300">{tech}</span>
                        ))}
                        <span className="px-2 sm:px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-md sm:rounded-lg">+{cs.stack.length - 4} more</span>
                    </div>
                    </div>
                    <div className="mb-3 sm:mb-4 h-16">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {cs.stack.slice(0, 4).map((tech, i) => (
                          <span key={i} className="px-2 sm:px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-md sm:rounded-lg border border-secondary/30 hover:border-secondary/50 transition-all duration-300">{tech}</span>
                        ))}
                        <span className="px-2 sm:px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-md sm:rounded-lg">+{cs.stack.length - 4} more</span>
                      </div>
                    </div>
                    <button className="relative w-full h-[50px] rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 overflow-hidden group mt-auto">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                        <span>READ FULL CASE STUDY</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {openIdx !== null && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4">
          <div className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl">
            {/* Header */}
            <div className={`relative p-8 bg-gradient-to-r ${caseStudies[openIdx].gradient} text-white overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      {caseStudies[openIdx].icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full border border-white/30 mb-2">{caseStudies[openIdx].subtitle}</span>
                      <h1 className="text-3xl md:text-4xl font-bold leading-tight">{caseStudies[openIdx].title}</h1>
                    </div>
                  </div>
                  <button
                    className="text-white/80 hover:text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-200 shrink-0"
                    aria-label="Close modal"
                    onClick={() => setOpenIdx(null)}
                  >×</button>
                </div>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-4">{caseStudies[openIdx].description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-white/80">Duration</div>
                    <div className="text-xl font-bold">{caseStudies[openIdx].duration}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-white/80">Role</div>
                    <div className="text-xl font-bold">{caseStudies[openIdx].role}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-white/80">Client</div>
                    <div className="text-xl font-bold">{caseStudies[openIdx].client}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="p-8 space-y-8">
              {/* Problem */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Problem Statement</h2>
                </div>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-muted-foreground leading-relaxed text-lg">{caseStudies[openIdx].problem}</p>
                </div>
              </section>
              {/* Solution */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Solution Approach</h2>
                </div>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-muted-foreground leading-relaxed text-lg">{caseStudies[openIdx].solution}</p>
                </div>
              </section>
              {/* Challenges */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange-600 dark:text-orange-400" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Challenges Faced</h2>
                </div>
                <div className="grid gap-4">
                  {caseStudies[openIdx].challenges.map((ch, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-border/50 hover:bg-muted/30 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">{i + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{ch}</p>
                    </div>
                  ))}
                </div>
              </section>
              {/* Results */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Results Achieved</h2>
                </div>
                <div className="grid gap-4">
                  {caseStudies[openIdx].results.map((res, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-green-50/50 dark:bg-green-900/10 rounded-xl border border-green-200/50 dark:border-green-800/30">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </div>
                      <p className="text-foreground leading-relaxed font-medium">{res}</p>
                    </div>
                  ))}
                </div>
              </section>
              {/* Lessons */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Lessons Learned</h2>
                </div>
                <div className="grid gap-4">
                  {caseStudies[openIdx].lessons.map((ls, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-purple-600 dark:text-purple-400 text-sm">💡</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{ls}</p>
                    </div>
                  ))}
                </div>
              </section>
              {/* Stack */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Technology Stack</h2>
                </div>
                <div className="bg-muted/20 rounded-xl p-6 border border-border">
                  <div className="flex flex-wrap gap-3">
                    {caseStudies[openIdx].stack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">{tech}</span>
                    ))}
                  </div>
                </div>
              </section>
              {/* Impact */}
              <section className="border-t border-border pt-8">
                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Business Impact</h2>
                  </div>
                  <p className="text-xl font-semibold text-primary leading-relaxed">{caseStudies[openIdx].impact}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}