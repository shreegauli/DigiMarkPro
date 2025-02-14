import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Globe, Megaphone, PenTool, Zap, Target, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "SEO Optimization",
    icon: Globe,
    description: "Boost your search engine rankings and drive organic traffic to your website.",
    details: [
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Technical SEO audits",
      "Link building strategies",
    ],
  },
  {
    title: "Content Marketing",
    icon: PenTool,
    description: "Engage your audience with compelling content that drives conversions.",
    details: [
      "Content strategy development",
      "Blog post and article writing",
      "Infographic and visual content creation",
      "Content distribution and promotion",
    ],
  },
  {
    title: "Social Media Management",
    icon: Megaphone,
    description: "Build your brand and engage with your audience on social platforms.",
    details: [
      "Social media strategy",
      "Content creation and curation",
      "Community management",
      "Paid social advertising",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart,
    description: "Get data-driven insights to optimize your digital marketing campaigns.",
    details: ["Custom dashboard setup", "Regular performance reports", "Data analysis and insights", "ROI tracking"],
  },
  {
    title: "Pay-Per-Click Advertising",
    icon: Zap,
    description: "Drive targeted traffic and leads with strategic PPC campaigns.",
    details: [
      "Google Ads management",
      "Display advertising",
      "Retargeting campaigns",
      "Ad copy and creative development",
    ],
  },
  {
    title: "Email Marketing",
    icon: Target,
    description: "Nurture leads and drive conversions with personalized email campaigns.",
    details: [
      "Email strategy development",
      "Newsletter design and copywriting",
      "Automation and drip campaigns",
      "A/B testing and optimization",
    ],
  },
  {
    title: "Influencer Marketing",
    icon: Users,
    description: "Leverage influencers to expand your reach and build brand credibility.",
    details: [
      "Influencer identification and outreach",
      "Campaign strategy and management",
      "Performance tracking",
      "Influencer relationship management",
    ],
  },
  {
    title: "Conversion Rate Optimization",
    icon: TrendingUp,
    description: "Improve your website's performance and increase conversions.",
    details: [
      "User experience analysis",
      "A/B and multivariate testing",
      "Landing page optimization",
      "Funnel analysis and optimization",
    ],
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        Comprehensive digital marketing solutions to help your business grow
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

