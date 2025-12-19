import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cars, formatPrice } from "@/data/cars";
import { ArrowRight, Fuel, Gauge, Zap } from "lucide-react";

export function FeaturedCars() {
  const featuredCars = cars.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Bộ sưu tập
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Xe <span className="text-gradient-primary">nổi bật</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Khám phá những mẫu xe được yêu thích nhất với công nghệ tiên tiến và thiết kế đẳng cấp
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <Link
              key={car.id}
              to={`/cars/${car.id}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 card-hover">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium uppercase">
                    {car.type === "electric" ? "Điện" : car.type === "sports" ? "Thể thao" : car.type === "suv" ? "SUV" : "Sedan"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">{car.brand}</p>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {car.name}
                      </h3>
                    </div>
                    <span className="text-primary font-display font-bold">
                      {car.year}
                    </span>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border/50">
                    <div className="flex flex-col items-center text-center">
                      <Gauge className="w-4 h-4 text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">{car.specs.power}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Zap className="w-4 h-4 text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">{car.specs.acceleration}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Fuel className="w-4 h-4 text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">
                        {car.fuel === "electric" ? "Điện" : car.fuel === "hybrid" ? "Hybrid" : "Xăng"}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <span className="text-lg font-display font-bold text-foreground">
                      {formatPrice(car.price)}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Chi tiết <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/cars">
              Xem tất cả xe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
