import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "10 SEO Trends for 2023",
    date: "May 15, 2023",
    excerpt: "Stay ahead of the curve with these emerging SEO trends that will shape the digital landscape in 2023.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Mastering Social Media Algorithms",
    date: "June 2, 2023",
    excerpt: "Learn how to work with social media algorithms to increase your organic reach and engagement.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Future of Content Marketing",
    date: "June 20, 2023",
    excerpt: "Explore the evolving landscape of content marketing and how to prepare for upcoming changes.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Effective Email Marketing Strategies",
    date: "July 5, 2023",
    excerpt: "Discover proven email marketing tactics to improve open rates, click-through rates, and conversions.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Leveraging AI in Digital Marketing",
    date: "July 18, 2023",
    excerpt:
      "Understand how artificial intelligence is revolutionizing digital marketing and how to implement it in your strategies.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Building a Strong Brand Presence Online",
    date: "August 1, 2023",
    excerpt: "Learn the key elements of establishing and maintaining a powerful online brand presence.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        Insights and tips to boost your digital marketing efforts
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

