import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);

  const services = [
    {
      icon: 'CheckCircle2',
      title: 'Онлайн-тесты',
      description: 'Прохождение промежуточных и итоговых тестов с гарантией результата',
      features: ['Быстрое выполнение', 'Высокие баллы', 'Отчёт о прохождении'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'FileText',
      title: 'Курсовые работы',
      description: 'Написание работ с учётом всех требований вашего вуза',
      features: ['Уникальность', 'Соблюдение ГОСТов', 'Бесплатные правки'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'Flask',
      title: 'Лабораторные',
      description: 'Выполнение практических и лабораторных работ любой сложности',
      features: ['Подробные отчёты', 'Расчёты', 'Графики и схемы'],
      color: 'from-orange-500 to-pink-500'
    },
    {
      icon: 'Calculator',
      title: 'Контрольные',
      description: 'Решение контрольных работ и расчётных заданий',
      features: ['Все дисциплины', 'Оформление', 'Пошаговые решения'],
      color: 'from-green-500 to-blue-500'
    }
  ];

  const universities = [
    { name: 'Синергия', tests: 450, rating: 4.9 },
    { name: 'МТИ', tests: 380, rating: 4.8 },
    { name: 'МОСАП', tests: 320, rating: 4.9 },
    { name: 'НСПК', tests: 290, rating: 4.7 },
    { name: 'ТУСУР', tests: 250, rating: 4.8 },
    { name: 'Росдистант', tests: 410, rating: 4.9 }
  ];

  const pricing = [
    {
      name: 'Тест',
      price: 'от 500₽',
      features: ['Быстрое прохождение', 'Скриншоты результатов', 'Гарантия баллов'],
      popular: false
    },
    {
      name: 'Курсовая',
      price: 'от 3000₽',
      features: ['Уникальность 70%+', 'Все правки включены', 'Поддержка до защиты', 'Презентация в подарок'],
      popular: true
    },
    {
      name: 'Комплекс',
      price: 'от 8000₽',
      features: ['Все виды работ', 'Приоритет в очереди', 'Скидка 15%', 'Персональный менеджер'],
      popular: false
    }
  ];

  const reviews = [
    { name: 'Анна К.', university: 'Синергия', text: 'Сдала 12 тестов на отлично! Быстро и качественно 🎉', rating: 5 },
    { name: 'Михаил П.', university: 'МТИ', text: 'Курсовая защищена с первого раза. Спасибо за помощь!', rating: 5 },
    { name: 'Елена С.', university: 'Росдистант', text: 'Выручили с лабораторными перед сессией. Рекомендую!', rating: 5 },
    { name: 'Дмитрий В.', university: 'ТУСУР', text: 'Профессиональный подход, всё в срок. Буду обращаться ещё', rating: 5 }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/projects/20fc73d8-2714-4fee-b367-d29446655ebe/files/e142dea1-f888-4286-ab67-b30f8c352c47.jpg" alt="StudyHelper" className="w-12 h-12 rounded-full object-cover" />
              <span className="text-xs text-purple-600 font-semibold">Сессия под ключ</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Услуги
              </button>
              <button onClick={() => scrollToSection('universities')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Вузы
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Цены
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Контакты
              </button>
            </div>
            <Button className="gradient-primary text-white hover:opacity-90" onClick={() => setOrderDialogOpen(true)}>
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                ⚡ Быстрее конкурентов в 3 раза
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Помощь студентам
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Сдадим тесты, напишем курсовые и выполним лабораторные работы. 
                Работаем с 6 ведущими вузами. Гарантия качества и сроков 💪
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <Icon name="CheckCircle2" className="text-green-500" size={24} />
                  <span className="font-semibold">450+ тестов сдано</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <Icon name="Star" className="text-yellow-500" size={24} />
                  <span className="font-semibold">Рейтинг 4.9/5</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <Icon name="Clock" className="text-blue-500" size={24} />
                  <span className="font-semibold">Ответ за 5 минут</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 text-lg px-8" onClick={() => setOrderDialogOpen(true)}>
                  Написать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50" onClick={() => setOrderDialogOpen(true)}>
                  Узнать цену
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/20fc73d8-2714-4fee-b367-d29446655ebe/files/d9d207cf-195e-4740-aec9-0efc854e0c5f.jpg"
                alt="Успешная сдача тестов"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Наши услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-gray-600">Полный спектр учебных услуг для вашего успеха</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-green-500" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="universities" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Партнёры</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">С какими вузами работаем</h2>
            <p className="text-xl text-gray-600">Знаем все особенности и требования</p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Реальные результаты наших клиентов</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-purple-200">
                <img src="https://cdn.poehali.dev/files/5b09885b-26a6-406c-bf45-2a26f56e5b1b.jpeg" alt="Результаты тестов - 100% по всем предметам" className="w-full" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-purple-200">
                <img src="https://cdn.poehali.dev/files/7ad3edd8-2b6f-4bd8-979a-8fc68616cb13.jpeg" alt="Результаты тестов - высокие баллы" className="w-full" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-green-200">
                <img src="https://cdn.poehali.dev/files/eb6cfff9-a69e-463c-9cb1-b2d846c75022.jpeg" alt="Оценка 5 - Бизнес-планирование" className="w-full" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-green-200">
                <img src="https://cdn.poehali.dev/files/bbaad6c8-fa42-4f55-9c13-7cf5dd44ac7d.jpeg" alt="Зачет по финансовому менеджменту" className="w-full" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-green-200">
                <img src="https://cdn.poehali.dev/files/46156ac6-226c-4fde-b5fe-a36e4b404442.jpeg" alt="Итоговая оценка 93,36%" className="w-full" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-purple-100"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{uni.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                      <Icon name="Star" className="text-yellow-500" size={16} />
                      <span className="font-bold text-yellow-700">{uni.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="CheckCircle2" className="text-green-500" size={20} />
                    <span className="font-semibold">{uni.tests}+ тестов выполнено</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Прозрачные цены</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-xl text-gray-600">Выберите подходящий вариант</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all ${
                  plan.popular ? 'border-4 border-purple-500 scale-105' : 'border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-primary text-white px-4 py-1">
                      🔥 Популярно
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'gradient-primary text-white hover:opacity-90' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setOrderDialogOpen(true)}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700">Отзывы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Что говорят студенты</h2>
            <p className="text-xl text-gray-600">Реальные отзывы наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-purple-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{review.university}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">Напишите нам прямо сейчас и получите консультацию</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8" asChild>
              <a href="https://t.me/vladislav_vv2" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram: @vladislav_vv2
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8" asChild>
              <a href="https://vk.com/heltest" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                VK: vk.com/heltest
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Icon name="Clock" size={40} className="mb-3" />
              <h3 className="font-bold text-lg mb-2">Быстрый ответ</h3>
              <p className="opacity-90">Отвечаем в течение 5 минут</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Shield" size={40} className="mb-3" />
              <h3 className="font-bold text-lg mb-2">Конфиденциально</h3>
              <p className="opacity-90">Гарантия полной анонимности</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="ThumbsUp" size={40} className="mb-3" />
              <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
              <p className="opacity-90">Бесплатные правки до защиты</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="https://cdn.poehali.dev/projects/20fc73d8-2714-4fee-b367-d29446655ebe/files/e142dea1-f888-4286-ab67-b30f8c352c47.jpg" alt="StudyHelper" className="w-12 h-12 rounded-full object-cover" />
            <span className="text-2xl font-bold">StudyHelper</span>
          </div>
          <p className="text-gray-400 mb-4">Помогаем студентам достигать успеха с 2024 года</p>
          <p className="text-sm text-gray-500">© 2024 StudyHelper. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">Связаться с нами</DialogTitle>
            <DialogDescription className="text-base">
              Выберите удобный способ связи. Мы ответим в течение 5 минут!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button size="lg" className="gradient-primary text-white hover:opacity-90 h-16 text-lg" asChild>
              <a href="https://t.me/vladislav_vv2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <Icon name="Send" size={24} />
                <div className="flex flex-col items-start">
                  <span className="font-bold">Telegram</span>
                  <span className="text-sm opacity-90">@vladislav_vv2</span>
                </div>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 h-16 text-lg" asChild>
              <a href="https://vk.com/heltest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <Icon name="MessageCircle" size={24} />
                <div className="flex flex-col items-start">
                  <span className="font-bold">ВКонтакте</span>
                  <span className="text-sm opacity-90">vk.com/heltest</span>
                </div>
              </a>
            </Button>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <div className="flex items-start gap-3">
              <Icon name="Clock" className="text-purple-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-purple-900 mb-1">Быстрый ответ</p>
                <p className="text-sm text-purple-700">Отвечаем в течение 5 минут. Конфиденциальность гарантирована 🔒</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;