import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Как да се справим с тревожността в ежедневието",
    excerpt: "Тревожността е естествена реакция на стрес, но когато стане прекомерна, може да повлияе на качеството на живот. Научете практични техники за справяне.",
    author: "Д-р Мария Иванова",
    date: "15 Декември 2024",
    category: "Психология",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Ролята на семейството в детското развитие",
    excerpt: "Семейната среда има ключово значение за емоционалното и когнитивното развитие на детето. Разберете как да създадете подкрепяща среда.",
    author: "Петър Георгиев",
    date: "10 Декември 2024",
    category: "Семейство",
    image: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "5 стъпки към по-добра комуникация в партньорството",
    excerpt: "Ефективната комуникация е основата на всяка здрава връзка. Открийте как да подобрите диалога с партньора си.",
    author: "Д-р Елена Петрова",
    date: "5 Декември 2024",
    category: "Взаимоотношения",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60"
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-12 bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Блог
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полезни статии, съвети и новини от нашите специалисти
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden bg-white border-0 shadow-card hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={`#blog-${post.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Прочетете повече
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase" asChild>
            <Link to="/blog">ВСИЧКИ СТАТИИ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
