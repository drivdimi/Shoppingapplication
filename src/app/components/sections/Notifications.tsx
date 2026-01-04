import { ArrowLeft, Bell, Package, Heart, Tag, MessageSquare } from "lucide-react";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card } from "../ui/card";

interface NotificationsProps {
  onBack: () => void;
}

interface NotificationItem {
  id: string;
  type: "order" | "promotion" | "wishlist" | "message";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "order",
    title: "Order Shipped",
    message: "Your order #ORD-2024-1001 has been shipped and will arrive in 2-3 days.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "promotion",
    title: "Flash Sale Alert! 🔥",
    message: "Up to 50% off on selected headphones. Sale ends tonight!",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "wishlist",
    title: "Price Drop Alert",
    message: "Ultra-Slim Laptop Pro is now $200 cheaper. Don't miss out!",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "order",
    title: "Order Delivered",
    message: "Your order #ORD-2024-0998 has been delivered. Rate your experience!",
    time: "2 days ago",
    read: true,
  },
  {
    id: "5",
    type: "message",
    title: "New Message",
    message: "You have a new message from customer support regarding your recent inquiry.",
    time: "3 days ago",
    read: true,
  },
];

const notificationTypeConfig = {
  order: {
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  promotion: {
    icon: Tag,
    color: "bg-red-100 text-red-600",
  },
  wishlist: {
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
  },
  message: {
    icon: MessageSquare,
    color: "bg-green-100 text-green-600",
  },
};

function NotificationCard({ notification }: { notification: NotificationItem }) {
  const config = notificationTypeConfig[notification.type];
  const Icon = config.icon;

  return (
    <Card className={`p-4 mb-3 ${!notification.read ? "border-blue-500 bg-blue-50/30" : ""}`}>
      <div className="flex gap-3">
        <div className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="line-clamp-1">{notification.title}</h4>
            {!notification.read && (
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5" />
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {notification.message}
          </p>
          <span className="text-xs text-gray-500">{notification.time}</span>
        </div>
      </div>
    </Card>
  );
}

export function Notifications({ onBack }: NotificationsProps) {
  const unreadNotifications = NOTIFICATIONS.filter(n => !n.read);
  const allNotifications = NOTIFICATIONS;

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
        <div className="flex-1">
          <h1>Notifications</h1>
        </div>
        {unreadNotifications.length > 0 && (
          <Badge>{unreadNotifications.length} new</Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Tabs defaultValue="all" className="w-full">
          <div className="sticky top-0 bg-white border-b px-4 py-3">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                {unreadNotifications.length > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {unreadNotifications.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="px-4 py-4">
            <TabsContent value="all" className="mt-0">
              {allNotifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </TabsContent>

            <TabsContent value="unread" className="mt-0">
              {unreadNotifications.length > 0 ? (
                unreadNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Bell className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="mb-2">All caught up!</h3>
                  <p className="text-gray-500">You have no unread notifications.</p>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>

        {/* Notification Settings */}
        <div className="mt-4 bg-white">
          <div className="px-4 py-3 border-b">
            <h3>Notification Preferences</h3>
          </div>
          <div className="px-4 py-3 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="order-updates">Order Updates</Label>
                <p className="text-sm text-gray-500">Get notified about order status changes</p>
              </div>
              <Switch id="order-updates" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="promotions">Promotions & Offers</Label>
                <p className="text-sm text-gray-500">Receive deals and special offers</p>
              </div>
              <Switch id="promotions" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="wishlist-alerts">Wishlist Alerts</Label>
                <p className="text-sm text-gray-500">Price drops on wishlist items</p>
              </div>
              <Switch id="wishlist-alerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="messages">Messages</Label>
                <p className="text-sm text-gray-500">Chat and support messages</p>
              </div>
              <Switch id="messages" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
