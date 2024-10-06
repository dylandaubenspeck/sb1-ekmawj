import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentCalls = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatarSrc: "/avatars/01.png",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatarSrc: "/avatars/02.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatarSrc: "/avatars/03.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatarSrc: "/avatars/04.png",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    avatarSrc: "/avatars/05.png",
  },
]

export function RecentCalls() {
  return (
    <div className="space-y-8">
      {recentCalls.map((call) => (
        <div key={call.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={call.avatarSrc} alt={call.name} />
            <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{call.name}</p>
            <p className="text-sm text-muted-foreground">{call.email}</p>
          </div>
          <div className="ml-auto font-medium">+$1.99</div>
        </div>
      ))}
    </div>
  )
}