import { AdminSidebar } from "@/components/admin-sidebar";
import { UserNav } from "@/components/user-nav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      {/* 1. Side Bar Section*/}
      <AdminSidebar />

      {/* 2. Main Content Section */}
      <SidebarInset>
        <header className="sticky top-0 z-50 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>

            {/* 3. User Dropdown Navigation */}
            <UserNav />
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
