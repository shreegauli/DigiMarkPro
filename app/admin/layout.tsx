import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarTrigger,
  } from "@/components/ui/sidebar"
  import { Button } from "@/components/ui/button"
  import Link from "next/link"
  import { Home, Users, FileText, Briefcase, BarChart2, Settings, MessageSquare, LogOut } from "lucide-react"
  import type React from "react" // Import React
  
  export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <SidebarProvider>
        <div className="flex h-screen bg-gray-100">
          <Sidebar className="bg-white">
            <SidebarHeader className="p-4">
              <h2 className="text-2xl font-bold">DigiMarkPro Admin</h2>
            </SidebarHeader>
            <SidebarContent className="flex flex-col py-4">
              <Link href="/admin" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <Home className="inline-block w-5 h-5 mr-2" />
                Dashboard
              </Link>
              <Link href="/admin/users" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <Users className="inline-block w-5 h-5 mr-2" />
                User Management
              </Link>
              <Link href="/admin/content" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <FileText className="inline-block w-5 h-5 mr-2" />
                Content Management
              </Link>
              <Link href="/admin/services" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <Briefcase className="inline-block w-5 h-5 mr-2" />
                Service Management
              </Link>
              <Link href="/admin/portfolio" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <BarChart2 className="inline-block w-5 h-5 mr-2" />
                Portfolio Management
              </Link>
              <Link href="/admin/analytics" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <BarChart2 className="inline-block w-5 h-5 mr-2" />
                Analytics Reporting
              </Link>
              <Link href="/admin/settings" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <Settings className="inline-block w-5 h-5 mr-2" />
                Settings
              </Link>
              <Link href="/admin/communication" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                <MessageSquare className="inline-block w-5 h-5 mr-2" />
                Communication Tools
              </Link>
            </SidebarContent>
            <SidebarFooter className="p-4">
              <Button variant="outline" className="w-full">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 overflow-auto">
            <header className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Admin Panel</h1>
                <SidebarTrigger />
              </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    )
  }
  
  