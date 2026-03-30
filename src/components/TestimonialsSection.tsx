import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "ИнфоТех+ сделали нам корпоративный сайт быстро и качественно. Всё строго по ТЗ, без лишних вопросов. Уже получаем заявки с сайта — очень доволен результатом!",
    name: "Александр К.",
    role: "Директор строительной компании",
  },
  {
    quote:
      "Обратились за разработкой личного кабинета для клиентов. Команда вникла в задачу с первого брифа, предложила умные решения и уложилась в срок. Рекомендую всем!",
    name: "Наталья В.",
    role: "Руководитель сервисного центра",
  },
  {
    quote:
      "Долго искали IT-партнёра, которому можно доверять. ИнфоТех+ оказались именно такими — честные сроки, прозрачные цены, отличный результат. Теперь работаем только с ними.",
    name: "Дмитрий Р.",
    role: "Владелец интернет-магазина",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Мы гордимся каждым проектом и ценим доверие наших клиентов. Вот что говорят те, кто уже работал с ИнфоТех+.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}