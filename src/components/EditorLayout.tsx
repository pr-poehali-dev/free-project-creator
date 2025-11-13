import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface EditorLayoutProps {
  username: string;
  onBack: () => void;
}

interface Message {
  id: string;
  sender: "user" | "yura";
  text: string;
  timestamp: Date;
}

const EditorLayout = ({ username, onBack }: EditorLayoutProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "yura",
      text: "Привет! Я Юра, твой личный разработчик. Опиши, какой сайт хочешь создать, и я сделаю его за минуты! 🚀",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [buildVersion, setBuildVersion] = useState("none");
  const [activeView, setActiveView] = useState<"preview" | "code" | "core">("preview");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const yuraResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "yura",
        text: `Отлично! Я понял твой запрос: "${inputMessage}". Создаю проект... ✨\n\nДобавил:\n• Главную страницу\n• Адаптивный дизайн\n• Современные анимации\n\nПредлагаю добавить:\n- Форму обратной связи\n- Галерею изображений\n- Раздел "О нас"`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, yuraResponse]);
      setBuildVersion(`build-${Date.now().toString().slice(-6)}`);
    }, 1500);

    setInputMessage("");
  };

  const handleDownload = () => {
    alert("Скачивание кода проекта начнётся через секунду...");
  };

  const handlePublish = () => {
    alert("Проект опубликован! Ссылка: https://your-project.poehali.free");
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="w-80 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
            <div className="flex items-center gap-2">
              <div className="text-xl">🚀</div>
              <span className="font-heading font-bold text-gradient">Юра</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="User" size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">@{username}</span>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "yura"
                      ? "bg-gradient-to-br from-primary/20 to-accent/20 text-primary"
                      : "bg-muted"
                  }`}
                >
                  {message.sender === "yura" ? "🧑‍🚀" : "👤"}
                </div>
                <Card
                  className={`p-3 max-w-[240px] ${
                    message.sender === "user"
                      ? "bg-primary/10 border-primary/30"
                      : "bg-muted/50"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {message.timestamp.toLocaleTimeString("ru-RU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border space-y-3">
          <Textarea
            placeholder="Опишите, что хотите добавить или изменить..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="min-h-[80px] resize-none"
          />
          <Button
            onClick={handleSendMessage}
            className="w-full bg-gradient-to-r from-primary to-accent"
            disabled={!inputMessage.trim()}
          >
            <Icon name="Send" size={16} className="mr-2" />
            Отправить
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="font-heading font-bold text-xl">Мой проект</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {buildVersion}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent" onClick={handlePublish}>
              <Icon name="Globe" size={16} className="mr-2" />
              Опубликовать
            </Button>
          </div>
        </div>

        <Tabs value={activeView} onValueChange={(v) => setActiveView(v as any)} className="flex-1 flex flex-col">
          <TabsList className="mx-4 mt-4 w-fit">
            <TabsTrigger value="preview">
              <Icon name="Eye" size={16} className="mr-2" />
              Сайт
            </TabsTrigger>
            <TabsTrigger value="core">
              <Icon name="Cpu" size={16} className="mr-2" />
              Ядро
            </TabsTrigger>
            <TabsTrigger value="code">
              <Icon name="Code" size={16} className="mr-2" />
              Код
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-hidden">
            <TabsContent value="preview" className="h-full m-0 p-4">
              <Card className="h-full flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌐</div>
                  <p className="text-2xl font-heading font-bold text-black">Тут будет ваш проект!</p>
                  <p className="text-muted-foreground mt-2">
                    Опишите Юре, что хотите создать
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="core" className="h-full m-0 p-4">
              <Card className="h-full overflow-auto">
                <ScrollArea className="h-full">
                  <div className="p-6 font-mono text-sm space-y-3">
                    <div className="text-muted-foreground">// Структура проекта</div>
                    <div>📁 src/</div>
                    <div className="ml-4">📄 App.tsx - Главный компонент приложения</div>
                    <div className="ml-4">📄 index.css - Глобальные стили</div>
                    <div className="ml-4">📁 components/ - React компоненты</div>
                    <div className="ml-8">📄 Header.tsx</div>
                    <div className="ml-8">📄 Footer.tsx</div>
                    <div className="ml-4">📁 pages/ - Страницы сайта</div>
                    <div className="ml-8">📄 Index.tsx</div>
                    <div className="mt-4 text-muted-foreground">// Используемые технологии</div>
                    <div>⚛️ React 18 + TypeScript</div>
                    <div>🎨 Tailwind CSS</div>
                    <div>⚡ Vite</div>
                    <div>🎭 shadcn/ui компоненты</div>
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>

            <TabsContent value="code" className="h-full m-0 p-4">
              <Card className="h-full overflow-auto bg-slate-950">
                <ScrollArea className="h-full">
                  <pre className="p-6 text-sm text-green-400 font-mono">
{`import React from 'react';
import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b p-4">
        <h1 className="text-2xl font-bold">
          Мой сайт
        </h1>
      </header>
      
      <main className="container mx-auto p-8">
        <h2 className="text-4xl font-heading mb-4">
          Добро пожаловать!
        </h2>
        <p className="text-muted-foreground">
          Этот сайт создан с помощью ИИ
        </p>
        <Button className="mt-4">
          Узнать больше
        </Button>
      </main>
    </div>
  );
};

export default App;`}
                  </pre>
                </ScrollArea>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default EditorLayout;
