import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts as allBlogPosts } from "@/data/blogPosts";

// Get the 3 newest blog posts for the homepage
const featuredPosts = allBlogPosts.slice(-3).reverse();

export const Blog = () => {
  return (
    <section id="blog" className="py-12 bg-cream">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Блог
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полезни статии, съвети и новини от нашите специалисти
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="group overflow-hidden bg-white border-0 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {post.categoryLabel}
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
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Прочетете повече
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
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
