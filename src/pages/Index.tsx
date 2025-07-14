import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Box" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-secondary">nanoCAD</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О nanoCAD</a>
              <a href="#program" className="text-gray-600 hover:text-primary transition-colors">Программа</a>
              <a href="#register" className="text-gray-600 hover:text-primary transition-colors">Записаться</a>
            </div>
            <Icon name="Menu" className="h-6 w-6 md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                Бизнес-ужин
                <span className="block text-primary">nanoCAD</span>
                <span className="block text-3xl text-gray-600">в Оренбурге</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Присоединяйтесь к нетворкингу инженеров и проектировщиков. 
                Обсуждаем будущее САПР, делимся опытом и строим профессиональные связи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-white hover:bg-blue-600 px-8 py-3 text-lg">
                  <Icon name="UserPlus" className="mr-2 h-5 w-5" />
                  Записаться на ужин
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Добавить в календарь
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/68f1204e-b144-4f62-97b1-a9e776129d87.jpg" 
                alt="Бизнес-ужин nanoCAD" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-5 w-5" />
                  <span className="font-semibold">Оренбург</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About nanoCAD Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">О nanoCAD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современная российская САПР-платформа для проектирования и инженерных расчетов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/2e1a01a2-7ba3-48a9-a87a-99bdb7faa6d7.jpg" 
                alt="nanoCAD интерфейс" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Zap" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Высокая производительность</h3>
                    <p className="text-gray-600">Быстрая работа с большими чертежами и сложными моделями</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Shield" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Импортозамещение</h3>
                    <p className="text-gray-600">Российская разработка с поддержкой международных стандартов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Users" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Командная работа</h3>
                    <p className="text-gray-600">Инструменты для совместной работы над проектами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Программа ужина</h2>
            <p className="text-xl text-gray-600">Вечер полезного общения и профессионального развития</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary">18:00 - 19:00</CardTitle>
                  <Icon name="Coffee" className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Приветственный коктейль</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Знакомство участников, неформальное общение. Регистрация и получение материалов мероприятия.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary">19:00 - 20:00</CardTitle>
                  <Icon name="Monitor" className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Презентация nanoCAD</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обзор новых возможностей платформы, демонстрация инструментов, планы развития продукта.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary">20:00 - 21:30</CardTitle>
                  <Icon name="Utensils" className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Деловой ужин</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Основное мероприятие: обсуждение кейсов, обмен опытом, построение профессиональных связей.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Темы для обсуждения</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Settings" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Автоматизация проектирования</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Layers" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">BIM-технологии в России</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Импортозамещение в САПР</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingUp" className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Будущее инженерии</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Записаться на ужин</h2>
            <p className="text-xl text-gray-600">Количество мест ограничено</p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Форма регистрации</CardTitle>
              <CardDescription className="text-center">
                Заполните форму для участия в бизнес-ужине nanoCAD
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input id="firstName" placeholder="Ваше имя" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input id="lastName" placeholder="Ваша фамилия" className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="example@company.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Компания *</Label>
                    <Input id="company" placeholder="Название компании" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="position">Должность *</Label>
                    <Input id="position" placeholder="Ваша должность" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Опыт работы с САПР</Label>
                  <Textarea 
                    id="experience" 
                    placeholder="Расскажите о вашем опыте работы с САПР-системами..."
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="expectations">Ожидания от мероприятия</Label>
                  <Textarea 
                    id="expectations" 
                    placeholder="Что вы хотели бы узнать или обсудить на ужине?"
                    className="mt-2"
                  />
                </div>

                <Button className="w-full bg-primary text-white hover:bg-blue-600 py-3 text-lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Box" className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">nanoCAD</span>
              </div>
              <p className="text-gray-300">
                Современная российская САПР-платформа для инженерного проектирования
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">Оренбург, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">15 марта 2024, 18:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">+7 (3532) 123-456</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Globe" className="h-6 w-6 text-primary hover:text-blue-400 cursor-pointer" />
                <Icon name="Mail" className="h-6 w-6 text-primary hover:text-blue-400 cursor-pointer" />
                <Icon name="MessageCircle" className="h-6 w-6 text-primary hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 nanoCAD Business Dinner. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;