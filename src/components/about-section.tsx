import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { AboutAvatar } from "./about-avatar";
import React from "react";

const stats = [
    { value: "4+", label: "Years Learning" },
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Certifications" },
];

const education = {
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "Final Year Student",
    years: "2020 - 2024"
}

const community = [
    {
        role: "Core Member, GDSC ITER",
        description: "Organized tech events and coding quizzes",
        years: "2022 - Present"
    },
    {
        role: "Core Member, TFUG Bhubaneswar",
        description: "Focused on ML model tuning and community discussions",
        years: "2022 - Present"
    }
]

const InfoCard = ({ title, subtitle, years }: { title: string, subtitle: string, years?: string }) => (
    <div className="bg-card/30 p-4 rounded-lg border border-primary/20 transition-all hover:border-primary/50 hover:bg-primary/10">
        <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">{title}</h4>
            {years && <p className="text-sm text-muted-foreground">{years}</p>}
        </div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
)

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
            <div className="mx-auto mt-2 h-1.5 w-24 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="flex justify-center">
                <AboutAvatar />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map(stat => (
                    <div key={stat.label} className="bg-card/30 p-4 rounded-lg border border-primary/20">
                        <p className="text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Profile Summary</h3>
              <p className="text-lg text-muted-foreground">
                A passionate, detail-oriented data science undergraduate focused on deriving insights and solving real-world problems using ML, CV, and NLP. Strong in teamwork, leadership, and model optimization.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Education</h3>
              <InfoCard title={education.degree} subtitle={education.institution} years={education.years} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Community Involvement</h3>
              <div className="space-y-4">
                {community.map(item => (
                    <InfoCard key={item.role} title={item.role} subtitle={item.description} years={item.years} />
                ))}
              </div>
            </div>
            
            <div className="text-left mt-8">
                 <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
                        View Full Resume <ArrowRight className="ml-2"/>
                    </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
