import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"
import { ReactQueryClientProvider } from "@/components/react-query-client-provider"

interface RootLayoutProps {
  children: React.ReactNode
  charts: React.ReactNode
  users: React.ReactNode
}

export default function DashboardLayout({
  children,
  charts,
  users,
}: RootLayoutProps) {
  return (
    <>
      <ReactQueryClientProvider>
        <AdminPanelLayout>
          <div className="fixed top-16 z-10 flex h-16 w-full items-center bg-inherit">
            {children}
          </div>
          <div className="mt-16 space-y-8">
            {charts}
            {users}
          </div>
        </AdminPanelLayout>
      </ReactQueryClientProvider>
    </>
  )
}
