import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AssistantsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Assistants</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Customer Support</CardTitle>
            <CardDescription>Handles general inquiries and support tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Active Calls: 2</p>
            <p>Avg. Call Duration: 5m 30s</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales Assistant</CardTitle>
            <CardDescription>Assists with product information and sales</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Active Calls: 1</p>
            <p>Avg. Call Duration: 8m 45s</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Technical Support</CardTitle>
            <CardDescription>Provides advanced technical assistance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Active Calls: 3</p>
            <p>Avg. Call Duration: 12m 15s</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}