import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[480px] h-[700px] bg-white grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chatbot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Avatar>
              <AvatarFallback>MR</AvatarFallback>
             <AvatarImage src="https://github.com/MoniqueRomao.png" alt="@MoniqueRomao"/> 
            </Avatar>
          </div>
          <div>

          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?"/>
          <Button type="submit" variant="default">Send</Button>

        </CardFooter>
      </Card>
    </div>
  )
}
