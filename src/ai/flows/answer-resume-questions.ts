'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering questions about Satya's resume.
 *
 * The flow uses a prompt trained on Satya's resume data to provide accurate and informative answers.
 *
 * @exports {
 *   answerResumeQuestions,
 *   AnswerResumeQuestionsInput,
 *   AnswerResumeQuestionsOutput
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerResumeQuestionsInputSchema = z.object({
  question: z.string().describe('The question about Satya Mohanty resume.')
});

export type AnswerResumeQuestionsInput = z.infer<typeof AnswerResumeQuestionsInputSchema>;

const AnswerResumeQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Satya Mohanty resume.')
});

export type AnswerResumeQuestionsOutput = z.infer<typeof AnswerResumeQuestionsOutputSchema>;

export async function answerResumeQuestions(input: AnswerResumeQuestionsInput): Promise<AnswerResumeQuestionsOutput> {
  return answerResumeQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerResumeQuestionsPrompt',
  input: {
    schema: AnswerResumeQuestionsInputSchema
  },
  output: {
    schema: AnswerResumeQuestionsOutputSchema
  },
  prompt: `You are a chatbot trained on the resume of Satya Prakash Mohanty, a final-year B.Tech Computer Science (Data Science specialization) student. Use the following resume data to answer the question.\n\nResume Data:\nProfile Summary: A passionate, detail-oriented data science undergraduate focused on deriving insights and solving real-world problems using ML, CV, and NLP. Strong in teamwork, leadership, and model optimization.\nContact Information: Email is satyaprakashmohanty97@gmail.com. Phone number is 7008287523.\nSkills: Programming: Python, Java, C++, C, SQL, HTML, CSS, Unix. ML/AI Tools: pandas, NumPy, seaborn, scikit-learn, Power BI. Techniques: Data cleaning, feature engineering, classification, regression, clustering, visualization. Soft Skills: Leadership, problem-solving, communication, event planning\nCertifications: Python for Data Science, AI and Development – IBM. Machine Learning Specialization – DeepLearning.AI\nProjects: Disease Prediction Using Health Data: ML models for predicting diabetes & heart risk using patient metrics. Used: Logistic Regression, Random Forest, AUC/Recall visualization. Superstore Sales Analysis Dashboard: Tools: SQL + Power BI. Retail trend analysis with aggregation and storytelling. Titanic Survival Predictor: Tools: EDA, Logistic Regression, Decision Trees, model evaluation. Movie Recommendation Engine (Content-Based): Tools: TF-IDF, Cosine Similarity, NLP. Built using pandas, scikit-learn, TF-IDF matrix\nCommunity Involvement: Core Member, GDSC ITER – Organized tech events and coding quizzes. Core Member, TFUG Bhubaneswar – Focused on ML model tuning and community discussions\n\nQuestion: {{{question}}}`
});

const answerResumeQuestionsFlow = ai.defineFlow({
    name: 'answerResumeQuestionsFlow',
    inputSchema: AnswerResumeQuestionsInputSchema,
    outputSchema: AnswerResumeQuestionsOutputSchema
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  });
