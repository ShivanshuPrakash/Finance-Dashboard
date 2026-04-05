import {
  Home,
  PiggyBank,
  Receipt,
  Wallet,
  Settings,
  Bell,
  HelpCircle,
} from "lucide-react";

const tabs = [
  { icon: Home, label: "Dashboard", tabName: "Dashboard", key: "Dashboard" },
  {
    icon: PiggyBank,
    label: "Accounts",
    tabName: "Accounts",
    key: "Accounts",
  },
  {
    icon: Receipt,
    label: "Transactions",
    tabName: "Transactions",
    key: "Transactions",
  },
  {
    icon: Wallet,
    label: "Investments",
    tabName: "Investments",
    key: "Investments",
  },

  {
    icon: Bell,
    label: "Notifications",
    tabName: "Notifications",
    notifications: 5,
    key: "Notifications",
  },
  { icon: Settings, label: "Settings", tabName: "Settings", key: "Settings" },

  {
    icon: HelpCircle,
    label: "Help & Support",
    tabName: "Help & Support",
    key: "Help & Support",
  },
];

export { tabs };
