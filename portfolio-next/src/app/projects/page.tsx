'use client'
import { RecentProjectsSection } from "@/components/projectsPage/TestProject"

export default function Project() {
    return (
        <main>
            <div className="w-full bg-background dark:bg-black">
                <div className="py-8 relative overflow-hidden">
                    <div className="py-20 bg-gradient-to-br from-background to-muted dark:from-background dark:to-card/50">
                        <RecentProjectsSection />
                    </div>
                </div>
            </div>
        </main>
    )
}