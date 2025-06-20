import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Users, Package, TrendingUp } from "lucide-react";
import CarouselPart from "../components/CarouselPart";
import { Faq } from "../components/Faq";

export default function Home() {
  return (
    <main className="">
      <section className="py-26 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-indigo-600">E-commerce</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover amazing products at unbeatable prices. Your one-stop shop
            for everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/auth/register">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Find the best product of our store
            </p>
          </div>
          <CarouselPart />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Geer Store?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the best in online shopping
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Package className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle>Quality Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Carefully curated products from trusted brands and suppliers
                  worldwide.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  24/7 customer support and hassle-free returns for your peace
                  of mind.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle>Best Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Competitive pricing with regular deals and discounts on
                  popular items.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our store
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </main>
  );
}
