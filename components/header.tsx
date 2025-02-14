import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          DigiMarkPro
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </nav>
    </header>
  )
}

