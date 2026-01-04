import {
  User,
  Package,
  Heart,
  Settings,
  Bell,
  CreditCard,
  MapPin,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

interface AppMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  badge?: string | number;
  section: string;
}

export function AppMenu({ isOpen, onClose, onNavigate }: AppMenuProps) {
  const handleNavigation = (section: string) => {
    onNavigate(section);
    onClose();
  };

  const menuSections = [
    {
      title: "Account",
      items: [
        {
          icon: <User className="w-5 h-5" />,
          label: "My Profile",
          section: "profile",
        },
        {
          icon: <Package className="w-5 h-5" />,
          label: "My Orders",
          badge: 3,
          section: "orders",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          label: "Wishlist",
          badge: 12,
          section: "wishlist",
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          label: "Addresses",
          section: "addresses",
        },
        {
          icon: <CreditCard className="w-5 h-5" />,
          label: "Payment Methods",
          section: "payment",
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: <Bell className="w-5 h-5" />,
          label: "Notifications",
          badge: "New",
          section: "notifications",
        },
        {
          icon: <Settings className="w-5 h-5" />,
          label: "Settings",
          section: "settings",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: <Info className="w-5 h-5" />,
          label: "Help Center",
          section: "help",
        },
        {
          icon: <Info className="w-5 h-5" />,
          label: "About",
          section: "about",
        },
      ],
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md p-0">
        <SheetHeader className="px-6 py-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <SheetTitle className="text-white text-left mb-1">
                John Doe
              </SheetTitle>
              <p className="text-sm text-blue-100">john.doe@email.com</p>
            </div>
          </div>
        </SheetHeader>

        <div className="py-4">
          {menuSections.map((section, sectionIndex) => (
            <div key={section.title}>
              {sectionIndex > 0 && <Separator className="my-2" />}
              <div className="px-6 py-2">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={() => handleNavigation(item.section)}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="text-gray-600 group-hover:text-gray-900">
                        {item.icon}
                      </div>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge
                          variant={
                            typeof item.badge === "string"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <Separator className="my-2" />

          <div className="px-6 py-2">
            <button
              onClick={() => {
                console.log("Logout");
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-50 transition-colors group text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <span className="flex-1 text-left">Logout</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
          <p className="text-xs text-center text-gray-500">
            ShopHub v1.0.0
          </p>
          <p className="text-xs text-center text-gray-400 mt-1">
            © 2025 All rights reserved
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}