import { Home } from "lucide-react";

export function WorkbenchHeader() {
  const navItems = [
    { name: "Hub", icon: Home },
    { name: "Ops Workbench" },
    { name: "Claims Workbench" },
    { name: "Account" },
    { name: "Submission" },
    { name: "Producer" },
    { name: "Form Library" },
    { name: "Admin" },
    { name: "UW Workbench", active: true },
    { name: "Excess Casualty Workbench" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex md:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center text-sm font-medium ${
                    item.active
                      ? "text-gray-900 border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {item.icon && <item.icon className="mr-1 h-4 w-4" />}
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
