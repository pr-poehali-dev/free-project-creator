import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("my-projects");

  const mockProjects = [
    { id: 1, title: "Интернет-магазин", author: "Вы", views: 234, likes: 45, image: "🛍️" },
    { id: 2, title: "Блог о путешествиях", author: "Вы", views: 189, likes: 32, image: "✈️" },
    { id: 3, title: "Лендинг стартапа", author: "Вы", views: 567, likes: 89, image: "🚀" },
  ];

  const communityProjects = [
    { id: 4, title: "Портфолио дизайнера", author: "@maria_design", views: 1234, likes: 234, image: "🎨" },
    { id: 5, title: "Ресторан суши", author: "@chef_tokyo", views: 890, likes: 156, image: "🍱" },
    { id: 6, title: "Фитнес-клуб", author: "@power_gym", views: 2345, likes: 456, image: "💪" },
  ];

  const features = [
    { icon: "Sparkles", title: "ИИ-генерация", description: "Создавайте сайты из текстового описания за минуты" },
    { icon: "Zap", title: "Мгновенная публикация", description: "Выкладывайте проект в интернет одним кликом" },
    { icon: "Users", title: "Сообщество", description: "Делитесь проектами и находите вдохновение" },
    { icon: "Code", title: "Полный контроль", description: "Экспортируйте код и редактируйте вручную" },
    { icon: "Palette", title: "Готовые стили", description: "Библиотека компонентов и шаблонов" },
    { icon: "Shield", title: "Бесплатно", description: "Все возможности без ограничений" },
  ];

  const testimonials = [
    { name: "Алексей М.", role: "Предприниматель", text: "За 2 часа создал сайт для своего бизнеса. Раньше уходило 2 недели!", avatar: "АМ" },
    { name: "Мария К.", role: "Дизайнер", text: "Теперь могу быстро прототипировать идеи и показывать клиентам", avatar: "МК" },
    { name: "Дмитрий С.", role: "Студент", text: "Создал портфолио за вечер. Друзья не поверили, что я не программист", avatar: "ДС" },
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🚀</div>
            <h1 className="text-2xl font-heading font-bold text-gradient">poehali.free</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#community" className="text-sm hover:text-primary transition-colors">Сообщество</a>
            <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
            <a href="#career" className="text-sm hover:text-primary transition-colors">Карьера</a>
            <Button variant="ghost" size="sm">Войти</Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent">Начать</Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">100% Бесплатно</Badge>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient leading-tight">
              Создавайте сайты через русский язык
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Бесплатная альтернатива poehali.dev. Опишите идею — ИИ создаст готовый сайт за минуты. Без программирования.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity">
                <Icon name="Rocket" className="mr-2" size={20} />
                Создать сайт бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-primary/30">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>5,000+ пользователей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="FolderOpen" size={16} />
                <span>12,000+ проектов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4">Преимущества платформы</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для создания и публикации сайтов в одном месте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-4xl font-heading font-bold">Проекты</h3>
              <TabsList className="bg-muted">
                <TabsTrigger value="my-projects">Мои проекты</TabsTrigger>
                <TabsTrigger value="community">Сообщество</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="my-projects" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProjects.map((project, index) => (
                  <Card key={project.id} className="group hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform">
                        {project.image}
                      </div>
                      <CardTitle className="font-heading">{project.title}</CardTitle>
                      <CardDescription>Автор: {project.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Heart" size={14} />
                          <span>{project.likes}</span>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Icon name="ExternalLink" size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityProjects.map((project, index) => (
                  <Card key={project.id} className="group hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform">
                        {project.image}
                      </div>
                      <CardTitle className="font-heading">{project.title}</CardTitle>
                      <CardDescription>Автор: {project.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Heart" size={14} />
                          <span>{project.likes}</span>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Icon name="ExternalLink" size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold mb-4">Отзывы пользователей</h3>
            <p className="text-xl text-muted-foreground">Что говорят наши пользователи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold mb-4">Вопросы и ответы</h3>
            <p className="text-xl text-muted-foreground">Ответы на частые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">Действительно ли это бесплатно?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, платформа полностью бесплатна. Все функции доступны без ограничений: создание сайтов через ИИ, публикация, экспорт кода и работа с сообществом.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">Нужно ли знать программирование?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, наша ИИ-система создаёт сайты из текстового описания. Просто опишите, что вам нужно, и получите готовый результат. Программирование не требуется.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">Как работает совместная работа?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вы можете приглашать других пользователей к своим проектам, давать им доступ на просмотр или редактирование. Все изменения синхронизируются в реальном времени.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">Могу ли я экспортировать код?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, вы можете в любой момент скачать исходный код проекта и развернуть его на своём хостинге. Код полностью ваш.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">Чем отличается от оригинального poehali.dev?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы предлагаем те же возможности, но полностью бесплатно. Это альтернатива для тех, кто хочет создавать сайты без платной подписки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              Начните создавать прямо сейчас
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже создают сайты через ИИ
            </p>
            <Button size="lg" className="text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity">
              <Icon name="Rocket" className="mr-2" size={20} />
              Создать первый сайт
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🚀</div>
                <h4 className="font-heading font-bold text-lg">poehali.free</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Бесплатная платформа для создания сайтов через ИИ
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продукт</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Проекты</a></li>
                <li><a href="#community" className="hover:text-primary transition-colors">Сообщество</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#career" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#docs" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#help" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 poehali.free. Бесплатная альтернатива для создания сайтов.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
