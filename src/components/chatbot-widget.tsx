'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Bot, User, Send, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { askAI } from '@/app/actions';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
};

const initialMessages: Message[] = [
    { id: 1, role: 'assistant', content: "Hi! I'm satyagpt. Ask me anything about Satya's resume, skills, or projects." },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollAreaRef.current) {
      setTimeout(() => {
        scrollAreaRef.current!.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const newMessages: Message[] = [
      ...messages,
      { id: Date.now(), role: 'user', content: input },
    ];
    setMessages(newMessages);
    const userMessage = input;
    setInput('');

    startTransition(async () => {
      const result = await askAI(userMessage);
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
        setMessages(prev => [...prev.slice(0, -1)]);
      } else if (result.answer) {
        setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: result.answer! }]);
      }
    });
  };

  const ChatWindow = (
    <div className={cn(
        "fixed bottom-20 right-5 z-[100] w-[calc(100vw-40px)] max-w-md h-[70vh] max-h-[600px] flex flex-col rounded-xl border bg-background shadow-2xl shadow-primary/20 transition-all duration-300",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
    )}>
        <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold font-headline text-lg text-primary">satyagpt</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
            </Button>
        </div>
        <ScrollArea className="flex-1 p-4">
            <div ref={scrollAreaRef} className="space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={cn("flex items-start gap-3", message.role === 'user' && 'justify-end')}>
                        {message.role === 'assistant' && (
                            <Avatar className="w-8 h-8 border-2 border-primary">
                                <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                            </Avatar>
                        )}
                        <div className={cn(
                            "max-w-[80%] rounded-xl px-4 py-2",
                            message.role === 'user' ? "bg-primary text-primary-foreground" : "bg-card"
                        )}>
                            <p className="text-sm">{message.content}</p>
                        </div>
                        {message.role === 'user' && (
                            <Avatar className="w-8 h-8">
                                <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                            </Avatar>
                        )}
                    </div>
                ))}
                {isPending && (
                    <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8 border-2 border-primary">
                           <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                        </Avatar>
                        <div className="bg-card max-w-[80%] rounded-xl px-4 py-2 flex items-center">
                            <Loader2 className="h-5 w-5 animate-spin text-primary" />
                        </div>
                    </div>
                )}
            </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="p-4 border-t flex items-center gap-2">
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., What are your top skills?"
                className="flex-1"
                disabled={isPending}
            />
            <Button type="submit" size="icon" disabled={isPending || !input.trim()} className="glow-primary-hover shadow-glow-primary">
                {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            </Button>
        </form>
    </div>
  )

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[101] h-14 w-14 rounded-full shadow-2xl shadow-primary/50 glow-primary-hover"
        aria-label="Open AI Chat"
      >
        <Bot className="h-7 w-7" />
      </Button>
      {ChatWindow}
    </>
  );
}
