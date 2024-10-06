"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface UserProfileProps {
  expanded: boolean;
}

export function UserProfile({ expanded }: UserProfileProps) {
  return (
    <div className={`flex items-center ${expanded ? 'justify-between' : 'justify-center'} p-4 border-t`}>
      <div className={`flex items-center ${expanded ? 'space-x-4' : ''}`}>
        <Avatar>
          <AvatarImage src="/avatars/user.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        {expanded && (
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
        )}
      </div>
      {expanded && (
        <Button variant="ghost" size="icon">
          <LogOut className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}