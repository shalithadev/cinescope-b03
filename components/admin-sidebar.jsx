"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  BarChart,
  Film,
  Home,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react";
import { Logo } from "@/components/logo";

// This component is created using shadcn/ui sidebar component.
export function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: Home,
      exact: true,
    },
    {
      title: "Movies",
      href: "/admin/movies",
      icon: Film,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Reviews",
      href: "/admin/reviews",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: BarChart,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  const isActive = (item) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <Sidebar
      collapsible="icon"
      className="bg-primary/5 border-r border-primary/20"
    >
      {/* 1. Sidebar Header with Logo */}
      <SidebarHeader className="flex flex-col">
        <div className="flex items-center p-2">
          <Logo className="h-8 w-8" />
          <h2 className="ml-2 text-xl font-bold">CineScope</h2>
          <div className="ml-auto flex items-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>

      {/* 2. Sidebar Content with Nav Links */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item)}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Profile">
                  <Link href="/admin/profile">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Public Site">
                  <Link href="/">
                    <Film className="h-4 w-4" />
                    <span>Public Site</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
