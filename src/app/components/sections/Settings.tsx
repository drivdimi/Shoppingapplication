import { ArrowLeft, Moon, Sun, Globe, Bell, Lock, Eye, Smartphone, Monitor } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useTheme } from "../../contexts/ThemeContext";

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 z-10 px-4 py-3 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 dark:text-white" />
        </button>
        <h1 className="dark:text-white">Settings</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 mb-2">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="dark:text-white">Appearance</h3>
          </div>
          <div className="px-4 py-3 space-y-4">
            <div>
              <Label htmlFor="theme-mode" className="mb-2 block dark:text-white">Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme-mode">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4" />
                      <span>Light</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4" />
                      <span>Dark</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="system">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      <span>System</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {theme === "system" 
                  ? "Matches your device settings" 
                  : theme === "dark" 
                  ? "Dark theme enabled" 
                  : "Light theme enabled"}
              </p>
            </div>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white dark:bg-gray-800 mb-2">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="dark:text-white">Language & Region</h3>
          </div>
          <div className="px-4 py-3 space-y-4">
            <div>
              <Label htmlFor="language" className="mb-2 block dark:text-white">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div>
              <Label htmlFor="currency" className="mb-2 block dark:text-white">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                  <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white dark:bg-gray-800 mb-2">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="dark:text-white">Privacy & Security</h3>
          </div>
          <div className="px-4 py-3 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Lock className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <Label htmlFor="biometric">Biometric Authentication</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Use fingerprint or face ID</p>
                </div>
              </div>
              <Switch id="biometric" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Eye className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <Label htmlFor="activity-tracking">Activity Tracking</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Personalize your experience</p>
                </div>
              </div>
              <Switch id="activity-tracking" defaultChecked />
            </div>
            <Separator />
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>Manage Privacy Settings</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Push Notifications */}
        <div className="bg-white dark:bg-gray-800 mb-2">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="dark:text-white">Push Notifications</h3>
          </div>
          <div className="px-4 py-3 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Bell className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <Label htmlFor="push-notifications">Enable Push Notifications</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates on your device</p>
                </div>
              </div>
              <Switch id="push-notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Smartphone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <Label htmlFor="in-app-notifications">In-App Notifications</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Show notifications while using app</p>
                </div>
              </div>
              <Switch id="in-app-notifications" defaultChecked />
            </div>
          </div>
        </div>

        {/* Data & Storage */}
        <div className="bg-white dark:bg-gray-800 mb-2">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="dark:text-white">Data & Storage</h3>
          </div>
          <div className="px-4 py-3 space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <div>
                <p className="font-medium">Clear Cache</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Free up 124 MB of space</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <Separator />
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <div>
                <p className="font-medium">Download Settings</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage download preferences</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* About */}
        <div className="bg-white dark:bg-gray-800 mb-2">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="dark:text-white">About</h3>
          </div>
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">Version</span>
              <span>1.0.0</span>
            </div>
            <Separator />
            <button className="w-full text-left py-2 flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Terms of Service</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <Separator />
            <button className="w-full text-left py-2 flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Privacy Policy</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white dark:bg-gray-800 mb-4">
          <div className="px-4 py-3 border-b dark:border-gray-700">
            <h3 className="text-red-600 dark:text-red-500">Danger Zone</h3>
          </div>
          <div className="px-4 py-3">
            <Button variant="outline" className="w-full text-red-600 dark:text-red-500 hover:bg-red-50 border-red-200">
              Clear All Data
            </Button>
          </div>
        </div>
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