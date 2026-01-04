import { ArrowLeft, MapPin, Plus, Pencil, Trash2, Home, Briefcase } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface AddressesProps {
  onBack: () => void;
}

interface Address {
  id: string;
  type: "home" | "work" | "other";
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

const ADDRESSES: Address[] = [
  {
    id: "1",
    type: "home",
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    addressLine1: "123 Main Street",
    addressLine2: "Apartment 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    isDefault: true,
  },
  {
    id: "2",
    type: "work",
    name: "John Doe",
    phone: "+1 (555) 987-6543",
    addressLine1: "456 Business Ave",
    addressLine2: "Suite 200",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    country: "United States",
    isDefault: false,
  },
];

const typeConfig = {
  home: {
    icon: Home,
    label: "Home",
    color: "text-blue-600",
  },
  work: {
    icon: Briefcase,
    label: "Work",
    color: "text-purple-600",
  },
  other: {
    icon: MapPin,
    label: "Other",
    color: "text-gray-600",
  },
};

function AddressCard({ address }: { address: Address }) {
  const config = typeConfig[address.type];
  const TypeIcon = config.icon;

  return (
    <Card className="p-4 mb-3">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-gray-100 ${config.color}`}>
            <TypeIcon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="flex items-center gap-2">
              {config.label}
              {address.isDefault && (
                <Badge variant="default" className="text-xs">
                  Default
                </Badge>
              )}
            </h4>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <p className="font-medium">{address.name}</p>
        <p className="text-gray-600">{address.phone}</p>
        <p className="text-gray-600">{address.addressLine1}</p>
        {address.addressLine2 && (
          <p className="text-gray-600">{address.addressLine2}</p>
        )}
        <p className="text-gray-600">
          {address.city}, {address.state} {address.zipCode}
        </p>
        <p className="text-gray-600">{address.country}</p>
      </div>

      {!address.isDefault && (
        <Button variant="outline" size="sm" className="w-full mt-3">
          Set as Default
        </Button>
      )}
    </Card>
  );
}

export function Addresses({ onBack }: AddressesProps) {
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
        <h1>My Addresses</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Add New Address Button */}
        <button className="w-full mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-blue-600">
          <Plus className="w-5 h-5" />
          <span>Add New Address</span>
        </button>

        {/* Address List */}
        <div>
          {ADDRESSES.map((address) => (
            <AddressCard key={address.id} address={address} />
          ))}
        </div>
      </div>
    </div>
  );
}
