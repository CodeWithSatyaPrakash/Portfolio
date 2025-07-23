"use client"

import React from "react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const proficiencyData = [
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'Machine Learn', A: 85, fullMark: 100 },
  { subject: 'Data Analysis', A: 88, fullMark: 100 },
  { subject: 'NLP', A: 78, fullMark: 100 },
  { subject: 'Computer Vision', A: 76, fullMark: 100 },
  { subject: 'Data Visualization', A: 82, fullMark: 100 },
]

const skillCategories = [
    {
        name: "Programming",
        level: 90,
        skills: ["Python", "Java", "C++", "C", "SQL", "HTML", "CSS", "Unix"]
    },
    {
        name: "ML/AI Tools",
        level: 85,
        skills: ["pandas", "NumPy", "seaborn", "scikit-learn", "Power BI"]
    },
    {
        name: "Techniques",
        level: 80,
        skills: ["Data cleaning", "Feature Engineering", "Classification", "Regression", "Clustering"]
    }
]


export function SkillsSection() {
  return (
    <section id="skills" className="bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Skillset</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            A visual overview of my technical capabilities and tools I use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-headline">Technical Proficiency</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={proficiencyData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))' }} />
                  <Radar name="Mike" dataKey="A" stroke="hsl(var(--primary))" fill="url(#colorUv)" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-headline">Skill Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                {skillCategories.map(category => (
                    <div key={category.name}>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-lg">{category.name}</h3>
                            <span className="text-primary font-bold">{category.level}%</span>
                        </div>
                        <Progress value={category.level} className="h-2 [&>div]:bg-primary" />
                        <div className="mt-4 flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <Badge key={skill} variant="secondary" className="font-code bg-primary/10 text-primary border border-primary/20">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
