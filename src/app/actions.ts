
'use server';

import { answerResumeQuestions } from '@/ai/flows/answer-resume-questions';

export async function askAI(question: string): Promise<{ answer?: string; error?: string }> {
  if (!question || typeof question !== 'string') {
    return { error: 'Invalid question.' };
  }
  
  try {
    const result = await answerResumeQuestions({ question });
    return { answer: result.answer };
  } catch (e) {
    console.error('Error in askAI action:', e);
    return { error: 'Sorry, I am unable to answer at the moment. Please try again later.' };
  }
}
