import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Calendar, User } from "lucide-react";
import carElectricCoupe from "@/assets/car-electric-coupe.jpg";
import carSportsRed from "@/assets/car-sports-red.jpg";
import carLuxuryWhite from "@/assets/car-luxury-white.jpg";

const newsArticles = [
  {
    id: "1",
    title: "Xu hướng xe điện 2024: Tương lai của ngành công nghiệp ô tô",
    excerpt: "Khám phá những công nghệ pin mới nhất và tầm nhìn về tương lai xe điện trong năm 2024.",
    image: carElectricCoupe,
    category: "Công nghệ",
    date: "15/12/2024",
    author: "Nguyễn Minh Tuấn",
  },
  {
    id: "2",
    title: "So sánh 5 siêu xe thể thao đáng mua nhất hiện nay",
    excerpt: "Đánh giá chi tiết và so sánh các siêu xe hàng đầu về hiệu suất, giá cả và công nghệ.",
    image: carSportsRed,
    category: "Đánh giá",
    date: "12/12/2024",
    author: "Trần Văn Hùng",
  },
  {
    id: "3",
    title: "Hướng dẫn bảo dưỡng xe định kỳ cho người mới",
    excerpt: "Những điều cần biết về bảo dưỡng xe ô tô để giữ chiếc xe của bạn luôn trong tình trạng tốt nhất.",
    image: carLuxuryWhite,
    category: "Hướng dẫn",
    date: "10/12/2024",
    author: "Lê Thị Hoa",
  },
];

const NewsPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Cập nhật
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Tin tức & <span className="text-gradient-primary">Đánh giá</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cập nhật những tin tức mới nhất về ngành công nghiệp ô tô và các bài đánh giá chuyên sâu
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit mb-4">
                <span className="text-sm text-primary font-medium">{newsArticles[0].category}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                {newsArticles[0].title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {newsArticles[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {newsArticles[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {newsArticles[0].date}
                </div>
              </div>
              <Link
                to="#"
                className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Đọc tiếp <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-8">
            Bài viết <span className="text-gradient-primary">mới nhất</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Link
                key={article.id}
                to="#"
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="bg-background rounded-2xl overflow-hidden border border-border/50 card-hover">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs text-primary font-medium uppercase">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Đọc tiếp <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
