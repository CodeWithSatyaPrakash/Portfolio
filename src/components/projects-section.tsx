import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Disease Prediction Using Health Data",
    description: "Developed ML models to predict diabetes and heart disease risk from patient metrics. Focused on classification accuracy and model interpretability.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Logistic Regression", "Random Forest", "AUC/Recall"],
    dataAiHint: "health data",
  },
  {
    title: "Superstore Sales Analysis Dashboard",
    description: "Designed an interactive Power BI dashboard to analyze retail trends, aggregating sales data with SQL to deliver actionable business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["SQL", "Power BI", "Data Aggregation"],
    dataAiHint: "sales chart",
  },
  {
    title: "Titanic Survival Predictor",
    description: "A classic data science project involving exploratory data analysis (EDA) and building predictive models to determine passenger survival.",
    image: "https://images.unsplash.com/photo-1525110992723-e104331422a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["EDA", "Decision Trees", "Model Evaluation"],
    dataAiHint: "ship",
  },
  {
    title: "Movie Recommendation Engine",
    description: "Built a content-based recommendation system using NLP techniques to suggest movies based on plot summaries and genres.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["TF-IDF", "Cosine Similarity", "NLP"],
    dataAiHint: "movie clapperboard",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            A selection of my work in data science, machine learning, and analytics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
