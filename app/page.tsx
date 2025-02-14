import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart, Globe, Megaphone, PenTool } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Elevate Your Digital Presence</h1>
            <p className="text-xl mb-8">We craft innovative digital strategies to boost your online success.</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SEO Optimization", icon: Globe, description: "Boost your search engine rankings" },
              {
                title: "Content Marketing",
                icon: PenTool,
                description: "Engage your audience with compelling content",
              },
              {
                title: "Social Media Management",
                icon: Megaphone,
                description: "Build your brand on social platforms",
              },
              {
                title: "Analytics & Reporting",
                icon: BarChart,
                description: "Data-driven insights for your campaigns",
              },
            ].map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-lg group">
                <img
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Portfolio item ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary">View Project</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                company: "Tech Co",
                quote: "DigiMarkPro transformed our online presence. Highly recommended!",
              },
              {
                name: "Jane Smith",
                company: "Fashion Brand",
                quote: "Their social media strategy doubled our engagement rates.",
              },
              {
                name: "Mike Johnson",
                company: "Local Business",
                quote: "The SEO results were beyond our expectations. Great team!",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "10 SEO Trends for 2023", date: "May 15, 2023" },
              { title: "Mastering Social Media Algorithms", date: "June 2, 2023" },
              { title: "The Future of Content Marketing", date: "June 20, 2023" },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild>
                    <Link href="/blog">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Digital Presence?</h2>
          <p className="text-xl mb-8">Let's create a tailored strategy for your business.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

