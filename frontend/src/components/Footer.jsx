import { ShoppingBag } from "lucide-react"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">E-com</span>
              </div>
              <p className="text-gray-400">
                Your trusted e-commerce partner for quality products and exceptional service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/auth/login" className="hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="hover:text-white">
                    Register
                  </Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 E-com. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
export default Footer