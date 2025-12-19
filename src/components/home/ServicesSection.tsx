import { Shield, Headphones, Award, Truck, Wrench, CreditCard } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Bảo hành toàn diện",
    description: "Chế độ bảo hành 5 năm hoặc 150,000 km cho tất cả xe mới",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn mọi lúc mọi nơi",
  },
  {
    icon: Award,
    title: "Chất lượng đảm bảo",
    description: "100% xe được kiểm tra kỹ thuật đạt chuẩn trước khi bàn giao",
  },
  {
    icon: Truck,
    title: "Giao xe tận nơi",
    description: "Dịch vụ vận chuyển xe an toàn đến tận địa chỉ của bạn",
  },
  {
    icon: Wrench,
    title: "Bảo dưỡng chính hãng",
    description: "Xưởng dịch vụ hiện đại với kỹ thuật viên được đào tạo bài bản",
  },
  {
    icon: CreditCard,
    title: "Tài chính linh hoạt",
    description: "Hỗ trợ trả góp với lãi suất ưu đãi từ các ngân hàng đối tác",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Dịch vụ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tại sao chọn <span className="text-gradient-primary">KN&KV</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm mua xe tốt nhất với dịch vụ chuyên nghiệp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
