import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar, ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { blogPosts, categories, Category } from "@/data/blogPosts";

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-[#221A42] via-[#3B3A64] to-[#221A42]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <PageBreadcrumb 
              items={[
                { label: "Блог" }
              ]} 
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">БЛОГ</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Полезни статии, съвети и ресурси за личностно и професионално развитие</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B3A64]/50" />
              <Input type="text" placeholder="Търсене на статии..." value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)} className="pl-10 border-[#8F7BBF]/30 focus:border-[#8F7BBF]" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category.value} variant={activeCategory === category.value ? "default" : "outline"} onClick={() => handleCategoryChange(category.value)} className={activeCategory === category.value ? "bg-[#8F7BBF] hover:bg-[#7F96C3] text-white" : "border-[#8F7BBF]/30 text-[#3B3A64] hover:bg-[#8F7BBF]/10"}>
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-gradient-to-br from-[#8F7BBF]/10 via-white to-[#7F96C3]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#221A42] mb-6 font-playfair">Популярна статия</h2>
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-[#8F7BBF]/20 text-[#8F7BBF] hover:bg-[#8F7BBF]/30">{featuredPost.categoryLabel}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#221A42] mb-4 font-playfair">{featuredPost.title}</h3>
                  <p className="text-[#3B3A64] mb-4 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#3B3A64]/70 mb-6">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <Button className="w-fit bg-[#8F7BBF] hover:bg-[#7F96C3] text-white">
                      Прочети повече <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#221A42] font-playfair">
              {activeCategory === "all" ? "Всички статии" : categories.find(c => c.value === activeCategory)?.label}
            </h2>
            <span className="text-[#3B3A64]/70">{filteredPosts.length} статии</span>
          </div>
          
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="aspect-video overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-[#8F7BBF]/20 text-[#8F7BBF] hover:bg-[#8F7BBF]/30">{post.categoryLabel}</Badge>
                        <h3 className="text-xl font-semibold text-[#221A42] mb-3 line-clamp-2 group-hover:text-[#8F7BBF] transition-colors">{post.title}</h3>
                        <p className="text-[#3B3A64] mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[#3B3A64]/70">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{post.date}</span>
                          </div>
                          <span className="text-[#8F7BBF] hover:text-[#7F96C3] flex items-center">
                            Прочети <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button variant="outline" size="icon" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="border-[#8F7BBF]/30 text-[#3B3A64] hover:bg-[#8F7BBF]/10 disabled:opacity-50">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button key={page} variant={currentPage === page ? "default" : "outline"} size="icon" onClick={() => setCurrentPage(page)} className={currentPage === page ? "bg-[#8F7BBF] hover:bg-[#7F96C3] text-white" : "border-[#8F7BBF]/30 text-[#3B3A64] hover:bg-[#8F7BBF]/10"}>
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="icon" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="border-[#8F7BBF]/30 text-[#3B3A64] hover:bg-[#8F7BBF]/10 disabled:opacity-50">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#3B3A64] text-lg">Няма намерени статии за тази категория.</p>
              <Button variant="outline" className="mt-4 border-[#8F7BBF] text-[#8F7BBF]" onClick={() => { handleCategoryChange("all"); setSearchQuery(""); }}>
                Покажи всички статии
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#221A42] to-[#3B3A64]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-playfair">Абонирайте се за нашия бюлетин</h2>
            <p className="text-white/80 mb-8">Получавайте най-новите статии и съвети директно във вашата пощенска кутия.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Вашият имейл адрес" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white" />
              <Button className="bg-[#8F7BBF] hover:bg-[#7F96C3] text-white whitespace-nowrap">Абонирай се</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
