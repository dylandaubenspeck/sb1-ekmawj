import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const voices = [
  { name: "Emma", language: "English (US)", gender: "Female" },
  { name: "James", language: "English (UK)", gender: "Male" },
  { name: "Sophie", language: "French", gender: "Female" },
  { name: "Hans", language: "German", gender: "Male" },
]

export default function VoiceLibraryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Voice Library</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {voices.map((voice) => (
          <Card key={voice.name}>
            <CardHeader>
              <CardTitle>{voice.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Language: {voice.language}</p>
              <p>Gender: {voice.gender}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}