import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { products } from "../route"


// GET /api/products/[id] 
export async function GET(request, { params }) {

  const id = Number.parseInt(params.id)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}

// DELETE /api/products/[id] -  (requires authentication)
export async function DELETE(request, { params }) {
  try {
    // Check authentication
    const authHeader = request.headers.get("authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]

    try {

      jwt.verify(token, process.env.JWT_SECRET || "your-secret-key")

    } catch (error) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)

    const productIndex = products.findIndex((p) => p.id === id)

    if (productIndex === -1) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 })
    }

    products.splice(productIndex, 1)

    return NextResponse.json({ message: "Product deleted successfully" })

  } catch (error) {
    
    console.error("Error deleting product:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
