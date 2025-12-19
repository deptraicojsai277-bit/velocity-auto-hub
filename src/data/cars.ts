import carElectricSuv from "@/assets/car-electric-suv.jpg";
import carSportsRed from "@/assets/car-sports-red.jpg";
import carLuxuryWhite from "@/assets/car-luxury-white.jpg";
import carSuvBlack from "@/assets/car-suv-black.jpg";
import carElectricCoupe from "@/assets/car-electric-coupe.jpg";

export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  type: "sedan" | "suv" | "sports" | "electric";
  fuel: "gasoline" | "diesel" | "electric" | "hybrid";
  image: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    fuelConsumption: string;
  };
  description: string;
  features: string[];
  gallery: string[];
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Aurora X7",
    brand: "Aurora Motors",
    price: 2850000000,
    year: 2024,
    type: "suv",
    fuel: "electric",
    image: carElectricSuv,
    specs: {
      power: "450 HP",
      acceleration: "4.5s (0-100 km/h)",
      topSpeed: "220 km/h",
      fuelConsumption: "18 kWh/100km",
    },
    description: "SUV điện thế hệ mới với công nghệ tự lái tiên tiến và nội thất sang trọng bậc nhất.",
    features: ["Autopilot 4.0", "Panoramic Roof", "Air Suspension", "Premium Sound System"],
    gallery: [carElectricSuv],
  },
  {
    id: "2",
    name: "Velocity GT",
    brand: "Velocity",
    price: 8500000000,
    year: 2024,
    type: "sports",
    fuel: "gasoline",
    image: carSportsRed,
    specs: {
      power: "720 HP",
      acceleration: "2.9s (0-100 km/h)",
      topSpeed: "340 km/h",
      fuelConsumption: "14.2 L/100km",
    },
    description: "Siêu xe thể thao đỉnh cao với động cơ V8 mạnh mẽ và thiết kế khí động học hoàn hảo.",
    features: ["Carbon Fiber Body", "Active Aerodynamics", "Launch Control", "Track Mode"],
    gallery: [carSportsRed],
  },
  {
    id: "3",
    name: "Elegance S-Class",
    brand: "Elegance",
    price: 4200000000,
    year: 2024,
    type: "sedan",
    fuel: "hybrid",
    image: carLuxuryWhite,
    specs: {
      power: "520 HP",
      acceleration: "4.2s (0-100 km/h)",
      topSpeed: "250 km/h",
      fuelConsumption: "7.5 L/100km",
    },
    description: "Sedan hạng sang với công nghệ hybrid tiên tiến, mang đến trải nghiệm lái tuyệt vời.",
    features: ["Massage Seats", "Burmester Audio", "Night Vision", "Air Quality Control"],
    gallery: [carLuxuryWhite],
  },
  {
    id: "4",
    name: "Titan Pro X",
    brand: "Titan",
    price: 3800000000,
    year: 2024,
    type: "suv",
    fuel: "gasoline",
    image: carSuvBlack,
    specs: {
      power: "580 HP",
      acceleration: "4.0s (0-100 km/h)",
      topSpeed: "270 km/h",
      fuelConsumption: "12.8 L/100km",
    },
    description: "SUV hiệu suất cao với động cơ V8 twin-turbo và khả năng off-road ấn tượng.",
    features: ["Off-Road Package", "Adaptive Suspension", "360 Camera", "Towing Package"],
    gallery: [carSuvBlack],
  },
  {
    id: "5",
    name: "Electron GT",
    brand: "Electron",
    price: 5200000000,
    year: 2024,
    type: "electric",
    fuel: "electric",
    image: carElectricCoupe,
    specs: {
      power: "680 HP",
      acceleration: "2.5s (0-100 km/h)",
      topSpeed: "280 km/h",
      fuelConsumption: "15 kWh/100km",
    },
    description: "Xe điện thể thao với thiết kế tương lai và hiệu suất vượt trội.",
    features: ["800V Architecture", "Ultra Fast Charging", "Matrix Headlights", "Digital Cockpit"],
    gallery: [carElectricCoupe],
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
};

export const carTypes = [
  { value: "all", label: "Tất cả" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "sports", label: "Thể thao" },
  { value: "electric", label: "Điện" },
];

export const fuelTypes = [
  { value: "all", label: "Tất cả" },
  { value: "gasoline", label: "Xăng" },
  { value: "diesel", label: "Dầu" },
  { value: "electric", label: "Điện" },
  { value: "hybrid", label: "Hybrid" },
];

export const priceRanges = [
  { value: "all", label: "Tất cả" },
  { value: "0-3000000000", label: "Dưới 3 tỷ" },
  { value: "3000000000-5000000000", label: "3 - 5 tỷ" },
  { value: "5000000000-10000000000", label: "Trên 5 tỷ" },
];
