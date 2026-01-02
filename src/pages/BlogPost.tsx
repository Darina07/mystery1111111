import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  
  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="aspect-[21/9] max-h-[500px] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#221A42] via-[#221A42]/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Back button, date and category below header */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#8F7BBF] hover:text-[#7F96C3] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад към блога</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#3B3A64]/70">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <Badge className="bg-[#8F7BBF]/20 text-[#8F7BBF] hover:bg-[#8F7BBF]/30">
              {post.categoryLabel}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-[#221A42] prose-p:text-[#3B3A64] prose-li:text-[#3B3A64] prose-strong:text-[#221A42] prose-h2:text-2xl prose-h3:text-xl">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {prevPost ? (
              <Link 
                to={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-3 text-[#3B3A64] hover:text-[#8F7BBF] transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="text-sm text-[#3B3A64]/60">Предишна статия</span>
                  <p className="font-medium line-clamp-1 max-w-[200px] md:max-w-[300px]">{prevPost.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPost ? (
              <Link 
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-3 text-[#3B3A64] hover:text-[#8F7BBF] transition-colors"
              >
                <div className="text-right">
                  <span className="text-sm text-[#3B3A64]/60">Следваща статия</span>
                  <p className="font-medium line-clamp-1 max-w-[200px] md:max-w-[300px]">{nextPost.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#221A42] mb-8 font-playfair text-center">
              Свързани статии
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge className="mb-3 bg-[#8F7BBF]/20 text-[#8F7BBF] hover:bg-[#8F7BBF]/30">
                        {relatedPost.categoryLabel}
                      </Badge>
                      <h3 className="text-lg font-semibold text-[#221A42] mb-2 line-clamp-2 group-hover:text-[#8F7BBF] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#3B3A64]/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{relatedPost.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#221A42] mb-4 font-playfair">
            Нуждаете се от професионална подкрепа?
          </h2>
          <p className="text-[#3B3A64] mb-6 max-w-xl mx-auto">
            Свържете се с нас за консултация или запишете час при наш специалист.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white">
              Запишете консултация
            </Button>
            <Button variant="outline" className="border-[#8F7BBF] text-[#8F7BBF] hover:bg-[#8F7BBF]/10">
              Вижте услугите ни
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
