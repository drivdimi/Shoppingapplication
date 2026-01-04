import { ArrowLeft, ShoppingBag, Heart, Shield, Truck, Award, Users } from "lucide-react";
import { Card } from "../ui/card";

interface AboutProps {
  onBack: () => void;
}

const FEATURES = [
  {
    icon: ShoppingBag,
    title: "Wide Selection",
    description: "Thousands of products across multiple categories",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping worldwide",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your data is protected with industry-leading security",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Dedicated support team ready to help",
    color: "text-red-600 bg-red-100",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "100% authentic products with warranty",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Join our growing community of satisfied customers",
    color: "text-teal-600 bg-teal-100",
  },
];

const STATS = [
  { value: "10M+", label: "Happy Customers" },
  { value: "50K+", label: "Products" },
  { value: "100+", label: "Countries" },
  { value: "24/7", label: "Support" },
];

export function About({ onBack }: AboutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10 px-4 py-3 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1>About ShopHub</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-12 text-white text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="mb-3 text-white">Welcome to ShopHub</h2>
          <p className="text-blue-100 max-w-md mx-auto">
            Your one-stop destination for quality products, exceptional service, and unbeatable prices.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white px-4 py-6 mb-2">
          <div className="grid grid-cols-4 gap-4">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white px-4 py-6 mb-2">
          <h3 className="mb-4">Our Story</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2020, ShopHub started with a simple mission: to make quality products accessible to everyone, everywhere.
            </p>
            <p>
              What began as a small online store has grown into a global marketplace serving millions of customers across the world. We're proud to offer a curated selection of products from trusted brands and emerging designers.
            </p>
            <p>
              Our commitment to customer satisfaction, fast delivery, and secure shopping has made us one of the most trusted e-commerce platforms today.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white px-4 py-6 mb-2">
          <h3 className="mb-4">Why Choose Us</h3>
          <div className="grid grid-cols-1 gap-3">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white px-4 py-6 mb-2">
          <h3 className="mb-4">Get in Touch</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Email</p>
              <p className="text-blue-600">support@shophub.com</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Address</p>
              <p>123 Commerce Street<br />San Francisco, CA 94102<br />United States</p>
            </div>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="bg-white px-4 py-6 mb-4">
          <h3 className="mb-4">Follow Us</h3>
          <div className="flex gap-3 mb-6">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
              <button
                key={social}
                className="flex-1 py-3 border rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                {social}
              </button>
            ))}
          </div>
          
          <div className="pt-4 border-t space-y-2">
            <button className="w-full text-left py-2 text-sm text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </button>
            <button className="w-full text-left py-2 text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </button>
            <button className="w-full text-left py-2 text-sm text-gray-600 hover:text-gray-900">
              Cookie Policy
            </button>
          </div>

          <div className="mt-6 pt-4 border-t text-center text-sm text-gray-500">
            <p>© 2025 ShopHub. All rights reserved.</p>
            <p className="mt-1">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
