import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { cars, formatPrice } from "@/data/cars";
import { 
  ArrowLeft, 
  Gauge, 
  Zap, 
  Fuel, 
  Timer,
  Check,
  Phone,
  Calendar,
  Share2
} from "lucide-react";

const CarDetailPage = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Không tìm thấy xe</h1>
            <Button asChild>
              <Link to="/cars">Quay lại danh sách</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 bg-card">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Car Info */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm text-primary font-medium uppercase">
                  {car.type === "electric" ? "Xe điện" : car.type === "sports" ? "Xe thể thao" : car.type === "suv" ? "SUV" : "Sedan"}
                </span>
              </div>

              {/* Title */}
              <div>
                <p className="text-muted-foreground">{car.brand}</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {car.name}
                </h1>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl font-bold text-primary">
                  {formatPrice(car.price)}
                </span>
                <span className="text-muted-foreground">Năm {car.year}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {car.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Gauge className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Công suất</span>
                  </div>
                  <span className="font-display text-lg font-bold">{car.specs.power}</span>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Tăng tốc</span>
                  </div>
                  <span className="font-display text-lg font-bold">{car.specs.acceleration}</span>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Timer className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Tốc độ tối đa</span>
                  </div>
                  <span className="font-display text-lg font-bold">{car.specs.topSpeed}</span>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Fuel className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Tiêu hao</span>
                  </div>
                  <span className="font-display text-lg font-bold">{car.specs.fuelConsumption}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="xl" className="flex-1" asChild>
                  <Link to="/contact">
                    <Calendar className="w-5 h-5" />
                    Đặt lịch lái thử
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="flex-1" asChild>
                  <a href="tel:19001234">
                    <Phone className="w-5 h-5" />
                    Liên hệ ngay
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-14 w-14">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-8">
            Tính năng <span className="text-gradient-primary">nổi bật</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {car.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-8">
            Thông số <span className="text-gradient-primary">kỹ thuật</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Hãng xe</span>
                <span className="font-medium">{car.brand}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Năm sản xuất</span>
                <span className="font-medium">{car.year}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Loại xe</span>
                <span className="font-medium capitalize">{car.type}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Nhiên liệu</span>
                <span className="font-medium capitalize">{car.fuel === "electric" ? "Điện" : car.fuel === "hybrid" ? "Hybrid" : "Xăng"}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Công suất</span>
                <span className="font-medium">{car.specs.power}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Tăng tốc 0-100 km/h</span>
                <span className="font-medium">{car.specs.acceleration}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Tốc độ tối đa</span>
                <span className="font-medium">{car.specs.topSpeed}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="text-muted-foreground">Tiêu hao nhiên liệu</span>
                <span className="font-medium">{car.specs.fuelConsumption}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetailPage;
