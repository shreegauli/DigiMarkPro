import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search } from "lucide-react"

const content = [
  { id: 1, title: "10 SEO Tips for 2023", author: "John Doe", status: "Published", date: "2023-05-15" },
  { id: 2, title: "Social Media Strategy Guide", author: "Jane Smith", status: "Draft", date: "2023-06-01" },
  { id: 3, title: "Email Marketing Best Practices", author: "Bob Johnson", status: "Published", date: "2023-06-10" },
  // Add more content data as needed
]

export default function ContentManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Content Management</h2>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" /> Create Content
        </Button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search content" className="pl-8" />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {content.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.author}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

