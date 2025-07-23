import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = {
  degree: "B.Tech in Computer Science (Data Science)",
  duration: "2020 - 2024",
  status: "Final Year Student",
};

const communityInvolvements = [
  {
    role: "Core Member, GDSC ITER",
    duration: "2022 - Present",
    description: "Organized tech events and coding quizzes",
  },
  {
    role: "Core Member, TFUG Bhubaneswar",
    duration: "2022 - Present",
    description: "Focused on ML model tuning and community discussions",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Profile Summary
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            A passionate, detail-oriented data science undergraduate focused on
            deriving insights and solving real-world problems using ML, CV, and
            NLP. Strong in teamwork, leadership, and model optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-headline">Education</h3>
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex justify-between items-baseline text-xl">
                  <span>{education.degree}</span>
                  <span className="text-sm text-primary font-mono whitespace-nowrap">{education.duration}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{education.status}</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 font-headline">Community Involvement</h3>
            <div className="space-y-4">
              {communityInvolvements.map((item) => (
                <Card key={item.role} className="bg-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-baseline text-xl">
                      <span>{item.role}</span>
                      <span className="text-sm text-primary font-mono whitespace-nowrap">{item.duration}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
