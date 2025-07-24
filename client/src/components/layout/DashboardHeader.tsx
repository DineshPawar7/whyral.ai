'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Analytics', href: '/dashboard/analytics' },
  { name: 'Tags Extract', href: '/dashboard/tags-extract' },
]

export default function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold">Startup</div>
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className={`cursor-pointer text-sm font-medium ${pathname === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
