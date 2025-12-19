import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Bắt đầu ngay
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            Sẵn sàng sở hữu
            <br />
            <span className="text-gradient-primary">chiếc xe mơ ước?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Liên hệ ngay với chúng tôi để được tư vấn và trải nghiệm lái thử miễn phí
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Đặt lịch lái thử
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:19001234">
                <Phone className="w-5 h-5" />
                1900 1234 56
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
