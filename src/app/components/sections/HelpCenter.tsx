import { ArrowLeft, Search, MessageSquare, Phone, Mail, FileText, ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface HelpCenterProps {
  onBack: () => void;
}

const FAQ_ITEMS = [
  {
    question: "How do I track my order?",
    answer: "You can track your order by going to 'My Orders' section and clicking on the order you want to track. You'll see real-time updates on your shipment status and estimated delivery date.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, go to your order history and select 'Return Item'. Refunds are processed within 5-7 business days after we receive your return.",
  },
  {
    question: "How can I change my shipping address?",
    answer: "You can update your shipping address in the 'Addresses' section of your account. If you need to change the address for an order that's already placed but not yet shipped, please contact our customer support immediately.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact shipping cost and estimated delivery date at checkout.",
  },
  {
    question: "How do I use a promo code?",
    answer: "During checkout, you'll see a field labeled 'Promo Code' or 'Discount Code'. Enter your code there and click 'Apply'. The discount will be reflected in your order total.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All transactions are secured with industry-standard encryption.",
  },
];

const CONTACT_OPTIONS = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team",
    status: "Online now",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "+1 (555) 123-4567",
    status: "Mon-Fri, 9AM-6PM EST",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "support@shophub.com",
    status: "Response within 24 hours",
    color: "text-purple-600 bg-purple-100",
  },
];

const HELP_TOPICS = [
  {
    icon: "📦",
    title: "Orders & Shipping",
    description: "Track orders, shipping info",
  },
  {
    icon: "💳",
    title: "Payment & Billing",
    description: "Payment methods, invoices",
  },
  {
    icon: "🔄",
    title: "Returns & Refunds",
    description: "Return process, refund status",
  },
  {
    icon: "👤",
    title: "Account & Security",
    description: "Password, privacy settings",
  },
  {
    icon: "🎁",
    title: "Promotions & Rewards",
    description: "Deals, loyalty program",
  },
  {
    icon: "⚙️",
    title: "Technical Support",
    description: "App issues, troubleshooting",
  },
];

export function HelpCenter({ onBack }: HelpCenterProps) {
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
        <h1>Help Center</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Search */}
        <div className="bg-white px-4 py-6 mb-2">
          <h2 className="mb-4">How can we help you?</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for help..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-white px-4 py-6 mb-2">
          <h3 className="mb-4">Contact Us</h3>
          <div className="space-y-3">
            {CONTACT_OPTIONS.map((option, index) => {
              const Icon = option.icon;
              return (
                <button
                  key={index}
                  className="w-full p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-colors flex items-center gap-4 text-left"
                >
                  <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1">{option.title}</h4>
                    <p className="text-sm text-gray-600 mb-0.5">{option.description}</p>
                    <p className="text-xs text-gray-500">{option.status}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Help Topics */}
        <div className="bg-white px-4 py-6 mb-2">
          <h3 className="mb-4">Browse Topics</h3>
          <div className="grid grid-cols-2 gap-3">
            {HELP_TOPICS.map((topic, index) => (
              <button
                key={index}
                className="p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-colors text-left"
              >
                <div className="text-2xl mb-2">{topic.icon}</div>
                <h4 className="text-sm mb-1">{topic.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{topic.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white px-4 py-6 mb-4">
          <h3 className="mb-4">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
