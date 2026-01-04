import { ArrowLeft, CreditCard, Plus, Trash2, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface PaymentMethodsProps {
  onBack: () => void;
}

interface PaymentMethod {
  id: string;
  type: "visa" | "mastercard" | "amex" | "discover";
  lastFour: string;
  expiryMonth: string;
  expiryYear: string;
  cardholderName: string;
  isDefault: boolean;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "1",
    type: "visa",
    lastFour: "4242",
    expiryMonth: "12",
    expiryYear: "2026",
    cardholderName: "John Doe",
    isDefault: true,
  },
  {
    id: "2",
    type: "mastercard",
    lastFour: "8888",
    expiryMonth: "08",
    expiryYear: "2025",
    cardholderName: "John Doe",
    isDefault: false,
  },
];

const cardTypeConfig = {
  visa: {
    name: "Visa",
    color: "bg-blue-600",
    pattern: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  mastercard: {
    name: "Mastercard",
    color: "bg-red-600",
    pattern: "bg-gradient-to-br from-red-600 to-orange-600",
  },
  amex: {
    name: "American Express",
    color: "bg-teal-600",
    pattern: "bg-gradient-to-br from-teal-600 to-teal-800",
  },
  discover: {
    name: "Discover",
    color: "bg-orange-600",
    pattern: "bg-gradient-to-br from-orange-600 to-orange-800",
  },
};

function PaymentCard({ method }: { method: PaymentMethod }) {
  const config = cardTypeConfig[method.type];

  return (
    <Card className="p-0 mb-3 overflow-hidden">
      <div className={`${config.pattern} p-4 text-white relative`}>
        <div className="flex items-start justify-between mb-8">
          <div className="text-xs font-medium uppercase tracking-wider">
            {config.name}
          </div>
          {method.isDefault && (
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">
              <Check className="w-3 h-3 mr-1" />
              Default
            </Badge>
          )}
        </div>
        
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-lg">••••</span>
            ))}
            <span className="text-lg tracking-wider">{method.lastFour}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs opacity-80 mb-1">Cardholder</div>
            <div className="text-sm uppercase">{method.cardholderName}</div>
          </div>
          <div>
            <div className="text-xs opacity-80 mb-1">Expires</div>
            <div className="text-sm">{method.expiryMonth}/{method.expiryYear}</div>
          </div>
        </div>
      </div>

      <div className="p-3 flex gap-2">
        {!method.isDefault && (
          <Button variant="outline" size="sm" className="flex-1">
            Set as Default
          </Button>
        )}
        <Button 
          variant="outline" 
          size="sm" 
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Remove
        </Button>
      </div>
    </Card>
  );
}

export function PaymentMethods({ onBack }: PaymentMethodsProps) {
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
        <h1>Payment Methods</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Add New Card Button */}
        <button className="w-full mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-blue-600">
          <Plus className="w-5 h-5" />
          <span>Add New Card</span>
        </button>

        {/* Payment Methods List */}
        <div>
          {PAYMENT_METHODS.map((method) => (
            <PaymentCard key={method.id} method={method} />
          ))}
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex gap-3">
            <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Your payment information is secure</p>
              <p className="text-blue-700">
                All card details are encrypted and stored securely. We never share your payment information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
