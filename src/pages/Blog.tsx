import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

type Category = "all" | "psychology" | "family" | "children" | "career" | "corporate" | "wellness";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Category;
  categoryLabel: string;
  date: string;
  image: string;
  slug: string;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "Всички" },
    { value: "psychology", label: "Психология" },
    { value: "family", label: "Семейство" },
    { value: "children", label: "Деца" },
    { value: "career", label: "Кариера" },
    { value: "corporate", label: "Бизнес" },
    { value: "wellness", label: "Благополучие" }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Как да се справим със стреса на работното място",
      excerpt: "Практически съвети за управление на стреса и постигане на баланс между работа и личен живот.",
      category: "wellness",
      categoryLabel: "Благополучие",
      date: "15 Декември 2024",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=500&fit=crop",
      slug: "stress-management"
    },
    {
      id: 2,
      title: "Ефективна комуникация в семейството",
      excerpt: "Научете как да подобрите комуникацията с партньора и децата си за по-здрави взаимоотношения.",
      category: "family",
      categoryLabel: "Семейство",
      date: "10 Декември 2024",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=500&fit=crop",
      slug: "family-communication"
    },
    {
      id: 3,
      title: "Детското развитие: Какво да очакваме на всеки етап",
      excerpt: "Разберете ключовите етапи в развитието на детето и как да подкрепите растежа му.",
      category: "children",
      categoryLabel: "Деца",
      date: "5 Декември 2024",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
      slug: "child-development"
    },
    {
      id: 4,
      title: "Как да напишем успешно CV",
      excerpt: "Стъпка по стъпка ръководство за създаване на професионално CV, което привлича внимание.",
      category: "career",
      categoryLabel: "Кариера",
      date: "1 Декември 2024",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
      slug: "cv-writing"
    },
    {
      id: 5,
      title: "Лидерство в съвременния бизнес",
      excerpt: "Какви качества трябва да притежава съвременният лидер и как да ги развием.",
      category: "corporate",
      categoryLabel: "Бизнес",
      date: "28 Ноември 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
      slug: "modern-leadership"
    },
    {
      id: 6,
      title: "Разбиране на тревожността",
      excerpt: "Какво представлява тревожността, как да я разпознаем и какви са методите за справяне.",
      category: "psychology",
      categoryLabel: "Психология",
      date: "25 Ноември 2024",
      image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&h=500&fit=crop",
      slug: "understanding-anxiety"
    },
    {
      id: 7,
      title: "Тиймбилдинг активности, които работят",
      excerpt: "Ефективни тиймбилдинг упражнения за укрепване на екипния дух във вашата компания.",
      category: "corporate",
      categoryLabel: "Бизнес",
      date: "20 Ноември 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      slug: "team-building"
    },
    {
      id: 8,
      title: "Подготовка на детето за първи учебен ден",
      excerpt: "Съвети за родители как да подготвят детето емоционално и практически за училище.",
      category: "children",
      categoryLabel: "Деца",
      date: "15 Ноември 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
      slug: "first-school-day"
    },
    {
      id: 9,
      title: "Медитация за начинаещи",
      excerpt: "Лесни техники за медитация, които можете да практикувате всеки ден за по-добро здраве.",
      category: "wellness",
      categoryLabel: "Благополучие",
      date: "10 Ноември 2024",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
      slug: "meditation-beginners"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#221A42] via-[#3B3A64] to-[#221A42]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
            Блог
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Полезни статии, съвети и ресурси за личностно и професионално развитие
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B3A64]/50" />
              <Input
                type="text"
                placeholder="Търсене на статии..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-[#8F7BBF]/30 focus:border-[#8F7BBF]"
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className={activeCategory === category.value 
                  ? "bg-[#8F7BBF] hover:bg-[#7F96C3] text-white" 
                  : "border-[#8F7BBF]/30 text-[#3B3A64] hover:bg-[#8F7BBF]/10"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#221A42] mb-6 font-playfair">Избрана статия</h2>
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-[#8F7BBF]/20 text-[#8F7BBF] hover:bg-[#8F7BBF]/30">
                    {featuredPost.categoryLabel}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#221A42] mb-4 font-playfair">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[#3B3A64] mb-4 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#3B3A64]/70 mb-6">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <Button className="w-fit bg-[#8F7BBF] hover:bg-[#7F96C3] text-white">
                    Прочети повече
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#221A42] font-playfair">
              {activeCategory === "all" ? "Всички статии" : categories.find(c => c.value === activeCategory)?.label}
            </h2>
            <span className="text-[#3B3A64]/70">{filteredPosts.length} статии</span>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#8F7BBF]/20 text-[#8F7BBF] hover:bg-[#8F7BBF]/30">
                      {post.categoryLabel}
                    </Badge>
                    <h3 className="text-xl font-semibold text-[#221A42] mb-3 line-clamp-2 group-hover:text-[#8F7BBF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#3B3A64] mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#3B3A64]/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#8F7BBF] hover:text-[#7F96C3] p-0">
                        Прочети
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#3B3A64] text-lg">Няма намерени статии за тази категория.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-[#8F7BBF] text-[#8F7BBF]"
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              >
                Покажи всички статии
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#221A42] to-[#3B3A64]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-playfair">
              Абонирайте се за нашия бюлетин
            </h2>
            <p className="text-white/80 mb-8">
              Получавайте най-новите статии и съвети директно във вашата пощенска кутия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Вашият имейл адрес"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
              <Button className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white whitespace-nowrap">
                Абонирай се
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;