import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Веб-дизайн",
    description:
      "Создаём современные, визуально сильные интерфейсы. Каждый проект — уникальный дизайн под ваш бренд, который привлекает клиентов и формирует доверие с первого взгляда.",
  },
  {
    icon: Code,
    title: "Веб-разработка",
    description:
      "Разрабатываем надёжные и быстрые сайты и веб-приложения. Используем современный стек технологий — ваш продукт будет работать стабильно и масштабироваться вместе с бизнесом.",
  },
  {
    icon: Palette,
    title: "Фирменный стиль",
    description:
      "От логотипа до брендбука — создаём цельный визуальный образ компании. Ваш бренд будет узнаваемым и запоминающимся на любой платформе.",
  },
  {
    icon: Target,
    title: "Бизнес-автоматизация",
    description:
      "Разрабатываем CRM-системы, личные кабинеты и корпоративные порталы. Автоматизируем рутину — вы тратите время на развитие, а не на ручные процессы.",
  },
  {
    icon: Search,
    title: "SEO-продвижение",
    description:
      "Выводим сайты в топ поисковых систем. Комплексная оптимизация: технический аудит, контент, ссылки — ваши клиенты найдут вас раньше конкурентов.",
  },
  {
    icon: Share2,
    title: "Поддержка и развитие",
    description:
      "Обеспечиваем бесперебойную работу ваших проектов. Оперативно реагируем на запросы, регулярно обновляем и улучшаем продукт после запуска.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный цикл создания цифровых продуктов: от идеи и дизайна до запуска и масштабирования. ИнфоТех+ берёт на себя всё техническое — вы фокусируетесь на бизнесе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}