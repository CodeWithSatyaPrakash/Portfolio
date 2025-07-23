const skillsData = {
  programming: ["Python", "Java", "C++", "C", "SQL", "HTML/CSS", "Unix"],
  mlTools: ["pandas", "NumPy", "seaborn", "scikit-learn", "Power BI"],
  techniques: ["Data Cleaning", "Feature Engineering", "Classification", "Regression", "Clustering", "Visualization"],
  softSkills: ["Leadership", "Problem-solving", "Communication", "Event Planning"],
};

const SkillBubble = ({ name, delay }: { name: string, delay: number }) => (
  <div
    className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium font-code
               hover:bg-primary/20 hover:shadow-glow-primary transition-all duration-300 cursor-default
               animate-[float_5s_ease-in-out_infinite]"
    style={{ animationDelay: `${delay}s` }}
  >
    {name}
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Skillset</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            The tools and technologies I use to build data-driven solutions.
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold text-center mb-6 text-primary font-headline">Programming & Databases</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {skillsData.programming.map((skill, i) => <SkillBubble key={skill} name={skill} delay={i * 0.1} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-6 text-primary font-headline">ML/AI Tools & Frameworks</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {skillsData.mlTools.map((skill, i) => <SkillBubble key={skill} name={skill} delay={i * 0.15} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-6 text-primary font-headline">Techniques & Methodologies</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {skillsData.techniques.map((skill, i) => <SkillBubble key={skill} name={skill} delay={i * 0.12} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
