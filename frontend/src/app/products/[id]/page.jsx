"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${params.id}`);

      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        router.push("/products");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
      router.push("/products");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h2>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <Card>
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 bg-indigo-600">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(4.0) 24 reviews</span>
              </div>
              <p className="text-4xl font-bold text-indigo-600 mb-6">
                ${product.price}
              </p>
            </div>

            {product.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Add to Wishlist
              </Button>
            </div>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Product Details</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-medium">#{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium text-green-600">In Stock</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Free shipping</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
