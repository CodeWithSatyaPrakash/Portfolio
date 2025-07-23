import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

const stats = [
    { value: "4+", label: "Years Learning" },
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Certifications" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-[350px] h-[350px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse"></div>
            <Image
              src="https://placehold.co/300x300.png"
              alt="AI Coder Avatar"
              width={300}
              height={300}
              data-ai-hint="ai coder"
              className="rounded-full object-cover z-10"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center bg-card/50 border-primary/20 p-4">
                <CardContent className="p-0">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">
                    Profile Summary
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                    A passionate, detail-oriented data science undergraduate focused on
                    deriving insights and solving real-world problems using ML, CV, and
                    NLP. Strong in teamwork, leadership, and model optimization.
                </p>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Education</h3>
                <Card className="bg-card/50 border-primary/20 p-6">
                    <div className="flex justify-between items-baseline">
                        <h4 className="font-semibold text-lg">{education.degree}</h4>
                        <span className="text-sm text-primary font-mono whitespace-nowrap">{education.duration}</span>
                    </div>
                    <p className="text-muted-foreground mt-1">{education.status}</p>
                </Card>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Community Involvement</h3>
                <div className="space-y-4">
                {communityInvolvements.map((item) => (
                    <Card key={item.role} className="bg-card/50 border-primary/20 p-6">
                        <div className="flex justify-between items-baseline">
                            <h4 className="font-semibold text-lg">{item.role}</h4>
                            <span className="text-sm text-primary font-mono whitespace-nowrap">{item.duration}</span>
                        </div>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                    </Card>
                ))}
                </div>
            </div>

            <div className="mt-8">
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
                        View Full Resume <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
