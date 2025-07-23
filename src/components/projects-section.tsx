import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Disease Prediction Using Health Data",
    description: "Developed ML models to predict diabetes and heart disease risk from patient metrics. Focused on classification accuracy and model interpretability.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2N0b3J8ZW58MHx8fHwxNzUzMjc3NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "pandas", "scikit-learn", "Logistic Regression", "Random Forest", "Data Visualization"],
    dataAiHint: "health data",
    modalImage: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzMjc5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    modalDataAiHint: "health dashboard",
    modalDescription: "This project focuses on predicting diabetes and heart disease risk using patient health metrics. I implemented multiple machine learning models including Logistic Regression and Random Forest to achieve high accuracy in predictions.",
    features: [
      "Data preprocessing and feature engineering on health metrics",
      "Implementation of multiple classification algorithms", 
      "Model evaluation using AUC and Recall metrics",
      "Visualization of prediction results and feature importance"
    ],
    githubUrl: "https://github.com/CodeWithSatyaPrakash",
  },
  {
    title: "Superstore Sales Analysis Dashboard",
    description: "Designed an interactive Power BI dashboard to analyze retail trends, aggregating sales data with SQL to deliver actionable business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["SQL", "Power BI", "Data Aggregation", "Data Visualization"],
    dataAiHint: "sales chart",
    modalImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTMyNzg4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    modalDataAiHint: "business dashboard",
    modalDescription: "This project showcases an interactive Power BI dashboard built to dissect and visualize superstore sales data. By leveraging SQL for data aggregation and Power BI for dynamic visualization, the dashboard provides critical insights into sales performance, customer behavior, and product trends, helping to drive informed business decisions.",
    features: ["Sales performance tracking over time", "Geographical sales distribution analysis", "Customer segmentation and profitability analysis", "Product category performance breakdown"],
    demoUrl: "#",
    githubUrl: "https://github.com/CodeWithSatyaPrakash",
  },
  {
    title: "Titanic Survival Predictor",
    description: "A classic data science project involving exploratory data analysis (EDA) and building predictive models to determine passenger survival.",
    image: "https://images.unsplash.com/photo-1590880449155-b54f958ce314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8c2hpcHxlbnwwfHx8fDE3NTMyNzc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["EDA", "Decision Trees", "Model Evaluation", "Python", "Pandas"],
    dataAiHint: "ship",
    modalImage: "https://images.unsplash.com/photo-1612422596484-85cb8b2c2445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc2hpcHxlbnwwfHx8fDE3NTMyNzkyODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    modalDataAiHint: "vintage ship",
    modalDescription: "This project tackles the famous Titanic survival prediction challenge. It involves a comprehensive Exploratory Data Analysis (EDA) to uncover insights from the passenger data, followed by the implementation of various classification models like Logistic Regression and Decision Trees to predict survival outcomes. The focus is on feature engineering, model selection, and evaluation.",
    features: ["Survival prediction modeling", "Exploratory Data Analysis and visualization", "Feature engineering from raw passenger data", "Comparison of different classification models"],
    githubUrl: "https://github.com/CodeWithSatyaPrakash",
  },
  {
    title: "Movie Recommendation Engine",
    description: "Built a content-based recommendation system using NLP techniques to suggest movies based on plot summaries and genres.",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8bW92aWUlMjB8ZW58MHx8fHwxNzUzMjc3NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["TF-IDF", "Cosine Similarity", "NLP", "Python", "Scikit-learn"],
    dataAiHint: "movie clapperboard",
    modalImage: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHJlZWx8ZW58MHx8fHwxNzUzMjc5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    modalDataAiHint: "movie reel",
    modalDescription: "This project introduces a content-based movie recommendation engine. It leverages Natural Language Processing (NLP) techniques, specifically TF-IDF vectorization and cosine similarity, to analyze movie metadata like plot summaries and genres. The system then recommends movies that are most similar to a user's choice, providing a personalized viewing experience.",
    features: ["Content-based filtering using text data", "Movie similarity scoring with cosine similarity", "TF-IDF for text feature extraction", "Personalized movie suggestions based on input"],
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
