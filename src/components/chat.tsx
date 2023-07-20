'use client'
import { useChat } from "ai/react"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleSubmit, handleInputChange } = useChat()

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a PersonalGPT</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          { messages.map(message => (
            <div key={message.id} className="flex gap-3 text-neutral-600 text-sm ,b-4">

              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>HM</AvatarFallback>
                  <AvatarImage src="https://github.com/thiagomurtinho.png" />
                </Avatar>
              )}
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://github.com/openai.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-zinc-700">
                  {message.role === 'user'? 'Me': 'AI'}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>  
      <CardFooter className="space-x-2"> 
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
         <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
         <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  ) 
}
