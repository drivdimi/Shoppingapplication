import { ArrowLeft, Package, Truck, CircleCheck, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface MyOrdersProps {
  onBack: () => void;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
  image: string;
  productName: string;
}

const ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-1001",
    date: "Dec 20, 2024",
    status: "shipped",
    total: 199.99,
    items: 1,
    image: "https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?w=100&h=100&fit=crop",
    productName: "Premium Wireless Headphones",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-1002",
    date: "Dec 18, 2024",
    status: "processing",
    total: 1299.99,
    items: 1,
    image: "https://images.unsplash.com/photo-1554125970-e3f2399e937f?w=100&h=100&fit=crop",
    productName: "Ultra-Slim Laptop Pro",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-1003",
    date: "Dec 15, 2024",
    status: "processing",
    total: 79.99,
    items: 1,
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=100&h=100&fit=crop",
    productName: "Portable Bluetooth Speaker",
  },
  {
    id: "4",
    orderNumber: "ORD-2024-0998",
    date: "Dec 5, 2024",
    status: "delivered",
    total: 399.99,
    items: 1,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop",
    productName: "Smart Watch Series 8",
  },
];

const statusConfig = {
  processing: {
    icon: Clock,
    label: "Processing",
    color: "bg-yellow-500",
    variant: "secondary" as const,
  },
  shipped: {
    icon: Truck,
    label: "Shipped",
    color: "bg-blue-500",
    variant: "default" as const,
  },
  delivered: {
    icon: CircleCheck,
    label: "Delivered",
    color: "bg-green-500",
    variant: "default" as const,
  },
  cancelled: {
    icon: Package,
    label: "Cancelled",
    color: "bg-red-500",
    variant: "destructive" as const,
  },
};

function OrderCard({ order }: { order: Order }) {
  const config = statusConfig[order.status];
  const StatusIcon = config.icon;

  return (
    <Card className="p-4 mb-3">
      <div className="flex gap-3 mb-3">
        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={order.image}
            alt={order.productName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <h4 className="line-clamp-1 mb-1">{order.productName}</h4>
              <p className="text-sm text-gray-500">{order.orderNumber}</p>
            </div>
            <Badge variant={config.variant} className="flex-shrink-0">
              {config.label}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
        <span>{order.date}</span>
        <span>{order.items} {order.items === 1 ? "item" : "items"}</span>
        <span className="font-semibold text-gray-900">${order.total}</span>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Track Order
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          View Details
        </Button>
      </div>
    </Card>
  );
}

export function MyOrders({ onBack }: MyOrdersProps) {
  const activeOrders = ORDERS.filter(o => o.status === "processing" || o.status === "shipped");
  const completedOrders = ORDERS.filter(o => o.status === "delivered");
  const cancelledOrders = ORDERS.filter(o => o.status === "cancelled");

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
        <h1>My Orders</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Tabs defaultValue="active" className="w-full">
          <div className="sticky top-0 bg-white border-b px-4 py-3">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="active">
                Active
                {activeOrders.length > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {activeOrders.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </div>

          <div className="px-4 py-4">
            <TabsContent value="active" className="mt-0">
              {activeOrders.length > 0 ? (
                activeOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              ) : (
                <EmptyState 
                  icon={Package}
                  title="No active orders"
                  description="You don't have any active orders at the moment."
                />
              )}
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              {completedOrders.length > 0 ? (
                completedOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              ) : (
                <EmptyState 
                  icon={CircleCheck}
                  title="No completed orders"
                  description="Your completed orders will appear here."
                />
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="mt-0">
              {cancelledOrders.length > 0 ? (
                cancelledOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              ) : (
                <EmptyState 
                  icon={Package}
                  title="No cancelled orders"
                  description="You haven't cancelled any orders."
                />
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

function EmptyState({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
        <Icon className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
    </div>
  );
}
