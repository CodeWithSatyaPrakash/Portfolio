import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const certifications = [
  {
    title: "Python for Data Science, AI and Development",
    issuer: "IBM",
    url: "https://www.coursera.org/account/accomplishments/verify/DVX34TGLNYKW",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    url: "https://www.coursera.org/account/accomplishments/specialization/AX52X2WU142U",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Certifications</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            My professional certifications verifying my skills and knowledge.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
                 <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="h-full bg-card/50 border-primary/20 transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-glow-primary">
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-bold font-headline">{cert.title}</CardTitle>
                                <CardDescription className="pt-1 flex items-center justify-between">
                                    {cert.issuer}
                                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                 </a>
            ))}
        </div>
      </div>
    </section>
  );
}
