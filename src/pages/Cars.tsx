import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { cars, formatPrice, carTypes, fuelTypes, priceRanges } from "@/data/cars";
import { ArrowRight, Fuel, Gauge, Zap, Filter, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CarsPage = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const typeMatch = typeFilter === "all" || car.type === typeFilter;
      const fuelMatch = fuelFilter === "all" || car.fuel === fuelFilter;
      
      let priceMatch = true;
      if (priceFilter !== "all") {
        const [min, max] = priceFilter.split("-").map(Number);
        priceMatch = car.price >= min && car.price <= max;
      }

      return typeMatch && fuelMatch && priceMatch;
    });
  }, [typeFilter, fuelFilter, priceFilter]);

  const hasActiveFilters = typeFilter !== "all" || fuelFilter !== "all" || priceFilter !== "all";

  const clearFilters = () => {
    setTypeFilter("all");
    setFuelFilter("all");
    setPriceFilter("all");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Bộ sưu tập
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Danh sách <span className="text-gradient-primary">xe</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Khám phá bộ sưu tập xe đa dạng với nhiều phân khúc và mức giá phù hợp
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Bộ lọc
            </Button>

            {/* Filter Options */}
            <div className={`flex flex-col sm:flex-row gap-4 ${showFilters ? "block" : "hidden lg:flex"}`}>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-card">
                  <SelectValue placeholder="Loại xe" />
                </SelectTrigger>
                <SelectContent>
                  {carTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={fuelFilter} onValueChange={setFuelFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-card">
                  <SelectValue placeholder="Nhiên liệu" />
                </SelectTrigger>
                <SelectContent>
                  {fuelTypes.map((fuel) => (
                    <SelectItem key={fuel.value} value={fuel.value}>
                      {fuel.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-card">
                  <SelectValue placeholder="Mức giá" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                  <X className="w-4 h-4 mr-2" />
                  Xóa bộ lọc
                </Button>
              )}
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground text-sm">
              Hiển thị <span className="text-primary font-semibold">{filteredCars.length}</span> xe
            </p>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <Link
                  key={car.id}
                  to={`/cars/${car.id}`}
                  className="group animate-fade-up"
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
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                Không tìm thấy xe phù hợp với bộ lọc của bạn
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Xóa bộ lọc
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CarsPage;
