import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DigiMarkPro</h3>
            <p>Your partner for digital success</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Us</h4>
            <p>123 Digital Street</p>
            <p>Techville, TX 12345</p>
            <p>contact@digimarkpro.com</p>
            <p>(555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 DigiMarkPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

