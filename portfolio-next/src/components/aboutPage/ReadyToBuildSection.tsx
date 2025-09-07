import Link from "next/link";

export function ReadyToBuildSection() {
  return (
    <div className="py-6 w-full bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something <span className="text-primary">Amazing?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mx-auto mb-8">
              Let's discuss how these cutting-edge AI technologies can transform your business and create innovative solutions.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}