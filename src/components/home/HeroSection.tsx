import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury sports car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Xe mới 2024 đã có mặt</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up delay-100">
            <span className="text-gradient">TỐC ĐỘ</span>
            <br />
            <span className="text-foreground">ĐẲNG CẤP</span>
            <br />
            <span className="text-gradient-primary">CÔNG NGHỆ</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up delay-200">
            Khám phá bộ sưu tập xe hơi cao cấp với công nghệ tiên tiến nhất. 
            Từ siêu xe thể thao đến SUV điện đẳng cấp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/cars">
                Khám phá xe
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Đặt lịch lái thử</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-up delay-400">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Năm kinh nghiệm</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Xe đã bán</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Mẫu xe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
