"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce SEO Boost",
    category: "SEO",
    description: "Increased organic traffic by 150% for an online retailer through comprehensive SEO strategy.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "B2B Content Marketing",
    category: "Content",
    description: "Developed a content strategy that generated 500+ leads for a SaaS company.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Social Media Growth",
    category: "Social",
    description: "Grew Instagram following from 10k to 100k in 6 months for a lifestyle brand.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "PPC Campaign Optimization",
    category: "PPC",
    description: "Reduced cost per acquisition by 40% while increasing conversions for a finance app.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Email Marketing Automation",
    category: "Email",
    description: "Implemented an automated email series that increased customer retention by 25%.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Influencer Marketing Campaign",
    category: "Influencer",
    description: "Coordinated a campaign with 50+ micro-influencers, resulting in a 300% ROI.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const categories = ["All", "SEO", "Content", "Social", "PPC", "Email", "Influencer"]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
      <p className="text-xl text-center text-gray-600 mb-12">Explore our successful digital marketing campaigns</p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

