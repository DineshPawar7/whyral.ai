import DashboardHeader from '@/components/layout/DashboardHeader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
