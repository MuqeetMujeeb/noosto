import { AlertCircle, FileQuestion, Users } from 'lucide-react';

const problems = [
  {
    title: "Feedback scattered everywhere",
    description: "Emails, Slack messages, support tickets, and sales calls. Feedback gets lost in the noise.",
    icon: <Users className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-500/10",
  },
  {
    title: "No clear prioritization",
    description: "When everything is important, nothing is. It's hard to know what to build next without a clear system.",
    icon: <AlertCircle className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "Users feel unheard",
    description: "When users don't see their feedback turned into features, they stop sharing and eventually churn.",
    icon: <FileQuestion className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-500/10",
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            The way we build products is broken.
          </h2>
          <p className="text-lg text-muted-foreground">
            Product teams spend more time managing tools than understanding users.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div 
              key={idx}
              className="group rounded-2xl p-8 bg-card border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${problem.color} flex items-center justify-center mb-6`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
