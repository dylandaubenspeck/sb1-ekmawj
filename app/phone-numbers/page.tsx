import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const phoneNumbers = [
  { number: "+1 (555) 123-4567", type: "Toll-Free", status: "Active" },
  { number: "+1 (555) 987-6543", type: "Local", status: "Active" },
  { number: "+1 (555) 246-8135", type: "Toll-Free", status: "Inactive" },
]

export default function PhoneNumbersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Phone Numbers</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {phoneNumbers.map((number) => (
            <TableRow key={number.number}>
              <TableCell>{number.number}</TableCell>
              <TableCell>{number.type}</TableCell>
              <TableCell>{number.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}