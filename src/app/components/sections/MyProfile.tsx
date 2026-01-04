import { ArrowLeft, Camera, Mail, Phone, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface MyProfileProps {
  onBack: () => void;
}

export function MyProfile({ onBack }: MyProfileProps) {
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
        <h1>My Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Photo Section */}
        <div className="bg-white p-6 mb-2">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="mb-1">John Doe</h2>
            <p className="text-sm text-gray-500">Member since Jan 2024</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white p-6 mb-2">
          <div className="flex items-center justify-between mb-4">
            <h3>Personal Information</h3>
            <Button variant="ghost" size="sm">
              <Pencil className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" disabled />
            </div>
            
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" disabled />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="email" defaultValue="john.doe@email.com" disabled className="pl-10" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="phone" defaultValue="+1 (555) 123-4567" disabled className="pl-10" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" defaultValue="January 15, 1990" disabled />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white p-6 mb-2">
          <h3 className="mb-4">Account Settings</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>Change Password</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>Privacy Settings</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <Button className="w-full" size="lg">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
