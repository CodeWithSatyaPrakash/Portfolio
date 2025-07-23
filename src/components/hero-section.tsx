import { NeuralNetworkAnimation } from "./neural-network-animation";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
      <NeuralNetworkAnimation />
      <div className="container relative z-10 text-center animate-fadeIn">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
          Satya Prakash Mohanty
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          A passionate data science student weaving insights from data through Machine Learning, CV, and NLP to solve real-world problems.
        </p>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
