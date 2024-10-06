"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BarChart3, ChevronLeft, ChevronRight, FileText, Mic2, Phone, Settings, Users, FileBarChart } from 'lucide-react'
import { UserProfile } from '@/components/user-profile'

const sidebarItems = [
  { name: 'Overview', href: '/', icon: BarChart3 },
  { name: 'Assistants', href: '/assistants', icon: Users },
  { name: 'Phone Numbers', href: '/phone-numbers', icon: Phone },
  { name: 'Files', href: '/files', icon: FileText },
  { name: 'Voice Library', href: '/voice-library', icon: Mic2 },
  { name: 'End of Day Reports', href: '/end-of-day-reports', icon: FileBarChart },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(true)

  return (
    <div className={cn(
      "flex flex-col h-screen border-r transition-all duration-300",
      expanded ? "w-64" : "w-16"
    )}>
      <div className="flex h-14 items-center justify-between border-b px-4">
        <Link href="/" className={cn(
          "flex items-center",
          expanded ? "space-x-2" : "justify-center"
        )}>
          <Mic2 className="h-6 w-6" />
          {expanded && <span className="font-bold">VAPI</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="h-8 w-8"
        >
          {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className={cn(
                'justify-start',
                pathname === item.href && 'bg-muted font-medium',
                !expanded && 'justify-center w-10 h-10 p-0'
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className={cn("h-4 w-4", expanded && "mr-2")} />
                {expanded && <span>{item.name}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <UserProfile expanded={expanded} />
    </div>
  )
}