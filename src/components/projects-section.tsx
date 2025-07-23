import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Disease Prediction Using Health Data",
    description: "Developed ML models to predict diabetes and heart disease risk from patient metrics. Focused on classification accuracy and model interpretability.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2N0b3J8ZW58MHx8fHwxNzUzMjc3NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Logistic Regression", "Random Forest", "AUC/Recall", "Python", "Scikit-learn"],
    dataAiHint: "health data",
    features: ["Predictive modeling for health outcomes", "Feature importance analysis", "Model evaluation with ROC/AUC curves"],
    githubUrl: "https://github.com/CodeWithSatyaPrakash",
  },
  {
    title: "Superstore Sales Analysis Dashboard",
    description: "Designed an interactive Power BI dashboard to analyze retail trends, aggregating sales data with SQL to deliver actionable business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["SQL", "Power BI", "Data Aggregation", "Data Visualization"],
    dataAiHint: "sales chart",
    features: ["Sales performance tracking", "Customer segmentation", "Product trend analysis"],
    demoUrl: "#",
  },
  {
    title: "Titanic Survival Predictor",
    description: "A classic data science project involving exploratory data analysis (EDA) and building predictive models to determine passenger survival.",
    image: "https://images.unsplash.com/photo-1590880449155-b54f958ce314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8c2hpcHxlbnwwfHx8fDE3NTMyNzc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["EDA", "Decision Trees", "Model Evaluation", "Python", "Pandas"],
    dataAiHint: "ship",
    features: ["Survival prediction modeling", "Exploratory Data Analysis", "Feature engineering from raw data"],
    githubUrl: "https://github.com/CodeWithSatyaPrakash",
  },
  {
    title: "Movie Recommendation Engine",
    description: "Built a content-based recommendation system using NLP techniques to suggest movies based on plot summaries and genres.",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8bW92aWUlMjB8ZW58MHx8fHwxNzUzMjc3NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["TF-IDF", "Cosine Similarity", "NLP", "Python", "Scikit-learn"],
    dataAiHint: "movie clapperboard",
    features: ["Content-based filtering", "Movie similarity scoring", "Personalized movie suggestions"],
    githubUrl: "https://github.com/CodeWithSatyaPrakash",
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