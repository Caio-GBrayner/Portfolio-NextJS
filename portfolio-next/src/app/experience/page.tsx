'use client'
import { MyJourneySection } from "@/components/experiencePage/Test"

export default function Experience() {
  return (
    <main>
      <div className="w-full bg-background dark:bg-black">
        <div className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
          <MyJourneySection/>
        </div>
      </div>
    </main>
  );
}