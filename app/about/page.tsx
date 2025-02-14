import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in digital marketing, Jane leads our team with innovative strategies and a passion for client success.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "John Smith",
    role: "Head of SEO",
    bio: "John is an SEO wizard with a track record of improving search rankings for Fortune 500 companies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Brown",
    role: "Content Marketing Manager",
    bio: "Emily's creative content strategies have helped numerous brands tell their stories and connect with their audiences.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Lee",
    role: "Social Media Specialist",
    bio: "Michael's expertise in social media trends and platform algorithms keeps our clients' social presence ahead of the curve.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        We're a team of digital marketing experts passionate about driving results for our clients
      </p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-4">
          At DigiMarkPro, our mission is to empower businesses with cutting-edge digital marketing strategies that drive
          growth, increase visibility, and deliver measurable results. We believe in the power of data-driven decisions,
          creative solutions, and continuous innovation to help our clients thrive in the digital landscape.
        </p>
        <p className="text-lg text-gray-600">
          We're committed to fostering long-term partnerships with our clients, understanding their unique challenges,
          and tailoring our services to meet their specific goals. Our team of experts stays at the forefront of
          industry trends and technologies to ensure we're always delivering the most effective solutions.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <CardTitle className="text-center">{member.name}</CardTitle>
              <CardDescription className="text-center">{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

