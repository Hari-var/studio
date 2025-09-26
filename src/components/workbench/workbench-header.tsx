import { Home } from "lucide-react";

const WestfieldLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" fill="#D9531E" stroke="white" strokeWidth="2"/>
    <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 26C10.48 26 6 21.52 6 16C6 10.48 10.48 6 16 6C21.52 6 26 10.48 26 16C26 21.52 21.52 26 16 26Z" fill="white"/>
    <path d="M16 10C12.69 10 10 12.69 10 16C10 19.31 12.69 22 16 22C19.31 22 22 19.31 22 16C22 12.69 19.31 10 16 10ZM16 20C13.79 20 12 18.21 12 16C12 13.79 13.79 12 16 12C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20Z" fill="white"/>
  </svg>
);


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
            <div className="flex items-center space-x-2">
                <WestfieldLogo />
                <span className="font-bold text-lg">WESTFIELD</span>
            </div>
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
