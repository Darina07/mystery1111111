import { ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface SubMenuItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}

interface DesktopNavigationProps {
  navItems: NavItem[];
}

export const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.hasSubmenu ? (
              <>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 text-sm font-semibold uppercase tracking-wider">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-3 bg-white rounded-lg shadow-lg">
                    {item.submenu?.map((subItem) => (
                      <li key={subItem.label} className="relative group/sub">
                        {subItem.hasSubmenu ? (
                          <div className="relative">
                            <a
                              href={subItem.href}
                              className="flex items-center justify-between w-full px-3 py-2 text-sm text-foreground hover:bg-lavender/30 rounded-md transition-colors"
                            >
                              {subItem.label}
                              <ChevronRight className="h-4 w-4" />
                            </a>
                            <ul className="absolute left-full top-0 ml-1 w-[280px] bg-white rounded-lg shadow-lg p-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-[100] border border-gray-100">
                              {subItem.submenu?.map((nestedItem) => (
                                <li key={nestedItem.label}>
                                  <a
                                    href={nestedItem.href}
                                    className="block px-3 py-2 text-sm text-foreground hover:bg-lavender/30 rounded-md transition-colors"
                                  >
                                    {nestedItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <a
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-lavender/30 rounded-md transition-colors"
                          >
                            {subItem.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors duration-200 px-3 py-2"
              >
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
