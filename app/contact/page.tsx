import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        We'd love to hear from you. Get in touch with us for any inquiries or collaborations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>You can also reach us through the following channels:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Address:</strong> 123 Digital Street, Techville, TX 12345
            </p>
            <p>
              <strong>Email:</strong> contact@digimarkpro.com
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Twitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <LinkedIn />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Instagram />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

