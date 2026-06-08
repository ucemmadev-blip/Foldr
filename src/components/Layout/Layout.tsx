import { SidebarProvider } from "../../../@/components/ui/sidebar";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <main className="flex-1">
          <Navbar />

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
