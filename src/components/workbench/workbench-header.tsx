export function WorkbenchHeader() {
  const navItems = [{ name: "UW Workbench", active: true }];

  return (
    <header className="bg-card shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-foreground">My Workbench</h1>
            <nav className="hidden md:flex md:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center text-sm font-medium ${
                    item.active
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
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
