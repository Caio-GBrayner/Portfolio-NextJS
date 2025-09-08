import React, { useState } from "react";

const projects = [
  {
    title: "Stylique Technologies Intelligent Recommendations",
    description:
      "An advanced AI-powered recommendation engine built with modern ML algorithms, delivering personalized product suggestions across multiple e-commerce platforms. Features real-time analytics, user behavior tracking, and dynamic content optimization.",
    tags: [
      { name: "Python", color: "text-rose-700 dark:text-rose-300", bg: "bg-white/95 dark:bg-gray-800/90", border: "border-rose-200 dark:border-rose-600/30" },
      { name: "TensorFlow", color: "text-fuchsia-700 dark:text-fuchsia-300", bg: "bg-white/95 dark:bg-gray-800/90", border: "border-fuchsia-200 dark:border-fuchsia-600/30" },
      { name: "FastAPI", color: "text-blue-700 dark:text-blue-300", bg: "bg-white/95 dark:bg-gray-800/90", border: "border-blue-200 dark:border-blue-600/30" },
      { name: "React", color: "text-cyan-700 dark:text-cyan-300", bg: "bg-white/95 dark:bg-gray-800/90", border: "border-cyan-200 dark:border-cyan-600/30" },
    ],
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    image: (
      <div className="relative w-full h-full bg-gradient-to-br from-rose-500/30 to-fuchsia-600/30 dark:from-rose-500/20 dark:to-fuchsia-600/20 flex items-center justify-center overflow-hidden">
        {/* Decorative dots and lines */}
        <div className="absolute inset-0 opacity-15 dark:opacity-10">
          <div className="relative w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white/60 rounded-full"
                style={{
                  left: `${15 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 30}%`,
                  transform: `scale(${1 + Math.random() * 0.3})`,
                }}
              />
            ))}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="20%" y1="25%" x2="45%" y2="25%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="50%" y1="25%" x2="75%" y2="25%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="80%" y1="25%" x2="105%" y2="25%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="20%" y1="60%" x2="45%" y2="60%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="50%" y1="60%" x2="75%" y2="60%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="80%" y1="60%" x2="105%" y2="60%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="20%" y1="95%" x2="45%" y2="95%" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="50%" y1="95%" x2="75%" y2="95%" stroke="white" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>
        {/* Decorative squares */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/40 rounded-lg"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                transform: `translateX(${Math.random() * 20 - 10}px) translateY(${Math.random() * 20 - 10}px) rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
        {/* Project Icon */}
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-fuchsia-600 rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
            {/* Example icon */}
            <svg className="w-14 h-14 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <span className="px-4 py-2 bg-white/95 dark:bg-gray-800/90 text-rose-700 dark:text-rose-300 rounded-full border border-rose-200 dark:border-rose-600/30 backdrop-blur-sm shadow-lg">Smart AI</span>
            <span className="px-4 py-2 bg-white/95 dark:bg-gray-800/90 text-fuchsia-700 dark:text-fuchsia-300 rounded-full border border-fuchsia-200 dark:border-fuchsia-600/30 backdrop-blur-sm shadow-lg">Recommendations</span>
          </div>
        </div>
      </div>
    ),
    badge: "View Details",
    badgeColor: "text-primary font-medium text-sm group-hover:underline",
    link: "#",
    gradient: "from-card/95 to-muted/60",
    hoverGradient: "from-primary/5 to-blue-500/5",
    border: "border-border/50",
    shadow: "hover:shadow-2xl",
    borderHover: "hover:border-primary/30",
    // Dados extras para o modal:
    objective: "Develop an advanced AI-powered recommendation system that analyzes user behavior, preferences, and contextual data to deliver highly personalized product suggestions with unprecedented accuracy.",
    achievements: [
      "Implemented sophisticated ML algorithms achieving 92% recommendation accuracy",
      "Built real-time user behavior tracking and analysis system",
      "Created dynamic recommendation engine with A/B testing capabilities",
      "Developed intelligent product similarity matching using vector embeddings",
      "Integrated advanced analytics dashboard for business insights",
      "Deployed scalable microservices architecture handling 10K+ requests/hour",
    ],
    technologies: [
      { name: "Python", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path></svg> },
      { name: "TensorFlow", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path></svg> },
      { name: "FastAPI", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"></path></svg> },
      { name: "React", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg> },
      { name: "PostgreSQL", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"></path></svg> },
      { name: "Redis", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"></path></svg> },
    ],
    impact: "Revolutionizes e-commerce personalization by increasing conversion rates by 45% and customer engagement by 60%. The system processes millions of data points to deliver recommendations that feel truly personal and relevant to each user.",
    nda: true,
    live: false,
  },
  // Adicione outros projetos aqui seguindo o mesmo padrão...
];

export function RecentProjectsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" id="projects" style={{ scrollMarginTop: 80 }}>
              A small selection of <span className="text-primary">Recent Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore detailed case studies of projects that showcase technical expertise and real-world impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-card/95 to-muted/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:border-primary/30 cursor-pointer overflow-hidden"
                onClick={() => setOpenIdx(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${project.title}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-border/20 shadow-lg">
                  {project.image}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`flex items-center gap-1 px-2 py-1 ${tag.bg} ${tag.color} rounded-lg text-xs ${tag.border}`}>
                        {tag.name}
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground">+2 more</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={project.badgeColor}>{project.badge}</span>
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Modal */}
      {openIdx !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{projects[openIdx].title}</h2>
                <p className="text-muted-foreground">{projects[openIdx].description}</p>
              </div>
              <button
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setOpenIdx(null)}
                aria-label="Close details"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-background">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-border/20 shadow-lg">
                  {projects[openIdx].image}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Project Objective</h3>
                <p className="text-muted-foreground leading-relaxed">{projects[openIdx].objective}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {projects[openIdx].achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technologies &amp; Implementation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Engineered with Python for ML backend, TensorFlow for deep learning models, FastAPI for high-performance APIs, React for dynamic frontend, PostgreSQL for data persistence, and Redis for real-time caching and session management.
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {projects[openIdx].technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg">
                      {tech.icon}
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">📝 Project Confidentiality</h3>
                <p className="text-amber-700 dark:text-amber-300">Can only share small parts due to NDA restrictions</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Impact &amp; Results</h3>
                <p className="text-muted-foreground leading-relaxed">{projects[openIdx].impact}</p>
              </div>
              <div className="flex gap-4 pt-4">
                <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                  </svg>
                  View Live Site
                </button>
                <div className="flex items-center gap-2 bg-muted/50 text-muted-foreground px-6 py-3 rounded-xl font-semibold cursor-not-allowed">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                  NDA Restriction
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}