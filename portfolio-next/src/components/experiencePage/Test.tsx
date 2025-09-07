import React from "react";

const journeyData = [
  {
    role: "AI & Cloud Solutions Architect",
    company: "Nexium",
    companyColor: "from-blue-500 to-cyan-500",
    badge: "Present",
    badgeColor: "from-blue-500 to-cyan-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    companyIcon: (
      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    periodIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    period: "Present",
    description: "Leading AI-driven product development and cloud architecture for next-generation SaaS platforms.",
    achievements: [
      "Architected scalable AI-powered SaaS products using Next.js and Supabase",
      "Led AI pipeline integrations including LLMs, embeddings, and cloud deployments",
      "Drove innovation across 10+ client solutions with measurable business impact",
    ],
    achievementDot: "from-blue-500 to-cyan-500",
    badgeBg: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    role: "MEAN Stack Developer",
    company: "10Pearls",
    companyColor: "from-yellow-500 to-orange-500",
    badge: "Previous Role",
    badgeColor: "from-yellow-500 to-orange-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"></path>
      </svg>
    ),
    companyIcon: (
      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    periodIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    period: "Previous Role",
    description: "Full-stack development focusing on responsive UI components and optimized RESTful APIs.",
    achievements: [
      "Built 10+ responsive UI components improving user interaction by 40%",
      "Developed 5+ RESTful APIs optimizing data flow by 30%",
      "Delivered client-focused solutions with 100% on-time delivery rate",
    ],
    achievementDot: "from-yellow-500 to-orange-500",
    badgeBg: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    role: "Junior Software Developer",
    company: "Techlogix",
    companyColor: "from-green-500 to-emerald-500",
    badge: "Previous Role",
    badgeColor: "from-green-500 to-emerald-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"></path>
      </svg>
    ),
    companyIcon: (
      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    periodIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    period: "Previous Role",
    description: "Contributed to scalable web applications and microservices with focus on performance optimization.",
    achievements: [
      "Contributed to 3+ scalable web apps using Angular and .NET Core",
      "Improved application performance by 10% through code optimization",
      "Boosted service uptime by 8% with cloud integration strategies",
    ],
    achievementDot: "from-green-500 to-emerald-500",
    badgeBg: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    role: "Unity Game Developer",
    company: "Mindstorm Studios",
    companyColor: "from-orange-500 to-red-500",
    badge: "Previous Role",
    badgeColor: "from-orange-500 to-red-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"></path>
      </svg>
    ),
    companyIcon: (
      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    periodIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    period: "Previous Role",
    description: "Game development and optimization with focus on user engagement and intuitive design.",
    achievements: [
      "Developed 2+ interactive 3D games increasing user engagement by 10%",
      "Designed intuitive interfaces improving player retention by 3%",
      "Collaborated with design teams for immersive gaming experiences",
    ],
    achievementDot: "from-orange-500 to-red-500",
    badgeBg: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];

export function MyJourneySection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          My <span className="text-primary">Journey</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A timeline of growth, innovation, and impact in the world of technology
        </p>
      </div>
      <div className="relative">
        {/* Vertical timeline line and floating dots (desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2 hidden lg:block">
          <div className="w-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 origin-top" style={{ transform: "scaleY(0.141551)" }}></div>
        </div>
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {/* Decorative floating dots */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-primary/20 rounded-full" style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              transform: `translateX(${Math.random() * 30 - 15}px) translateY(${Math.random() * 30 - 15}px)`
            }} />
          ))}
        </div>
        <div className="space-y-24">
          {journeyData.map((item, idx) => (
            <div key={item.role} className={`flex items-center gap-8 ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col lg:gap-16`}>
              <div className={`flex-1 ${idx % 2 === 1 ? "lg:pl-8" : "lg:pr-8"}`}>
                <div className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:border-primary/30 relative`}>
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.role}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        {item.companyIcon}
                        <span className="text-primary font-semibold text-lg">{item.company}</span>
                      </div>
                    </div>
                    <div className={`px-4 py-2 bg-gradient-to-r ${item.companyColor} rounded-xl text-white font-semibold shadow-lg`}>
                      <div className="flex items-center gap-2">
                        {item.periodIcon}
                        {item.badge}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">{item.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                      <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                    </div>
                    <div className="grid gap-3">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className={`flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/achievement`}>
                          <div className={`w-2 h-2 bg-gradient-to-r ${item.achievementDot} rounded-full flex-shrink-0 mt-2.5 group-hover/achievement:scale-125 transition-transform duration-300`}></div>
                          <span className="text-sm text-muted-foreground leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Decorative dots */}
                  <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${item.companyColor} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r ${item.companyColor} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>
              </div>
              {/* Avatar/Icon */}
              <div className="relative flex-shrink-0 order-first lg:order-none">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.companyColor} opacity-20 blur-lg`} style={{ opacity: 0.2 }}></div>
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.companyColor} p-1 shadow-xl ring-2 ring-primary/30`}>
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center border-2 border-primary/20">
                      {item.icon}
                    </div>
                  </div>
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary/10 border-2 border-primary/50 rounded-full text-primary text-xs font-semibold whitespace-nowrap shadow-lg`}>
                    {item.badge}
                  </div>
                </div>
              </div>
              <div className={`flex-1 hidden lg:block ${idx % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}`}></div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span className="text-lg font-semibold text-foreground">Continuous Growth</span>
          </div>
          <p className="text-muted-foreground">
            Each role has contributed to my expertise in AI, full-stack development, and innovative problem-solving
          </p>
        </div>
      </div>
    </section>
  );
}