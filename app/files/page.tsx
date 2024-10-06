import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const files = [
  { name: "welcome_message.mp3", type: "Audio", size: "1.2 MB", lastModified: "2023-05-15" },
  { name: "product_catalog.pdf", type: "Document", size: "3.5 MB", lastModified: "2023-06-02" },
  { name: "support_script.txt", type: "Text", size: "15 KB", lastModified: "2023-06-10" },
]

export default function FilesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Files</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Last Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.name}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>{file.lastModified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}