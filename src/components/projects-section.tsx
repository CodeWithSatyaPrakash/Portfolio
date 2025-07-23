import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Disease Prediction Using Health Data",
    description: "Developed ML models to predict diabetes and heart disease risk from patient metrics. Focused on classification accuracy and model interpretability.",
    image: "https://placehold.co/600x400.png",
    tags: ["Logistic Regression", "Random Forest", "AUC/Recall"],
    dataAiHint: "health data",
  },
  {
    title: "Superstore Sales Analysis Dashboard",
    description: "Designed an interactive Power BI dashboard to analyze retail trends, aggregating sales data with SQL to deliver actionable business insights.",
    image: "https://placehold.co/600x400.png",
    tags: ["SQL", "Power BI", "Data Aggregation"],
    dataAiHint: "sales chart",
  },
  {
    title: "Titanic Survival Predictor",
    description: "A classic data science project involving exploratory data analysis (EDA) and building predictive models to determine passenger survival.",
    image: "https://placehold.co/600x400.png",
    tags: ["EDA", "Decision Trees", "Model Evaluation"],
    dataAiHint: "titanic ship",
  },
  {
    title: "Movie Recommendation Engine",
    description: "Built a content-based recommendation system using NLP techniques to suggest movies based on plot summaries and genres.",
    image: "https://placehold.co/600x400.png",
    tags: ["TF-IDF", "Cosine Similarity", "NLP"],
    dataAiHint: "movie film",
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
