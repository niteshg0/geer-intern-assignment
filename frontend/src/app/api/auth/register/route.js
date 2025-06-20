import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

// In-memory user storage (in production, use a database)
export const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "password123", // password123
  },
  {
    id: 2,
    name: "Test User",
    email: "test@gmail.com",
    password: "password123", // password123
  }
]

let nextUserId = 2

export async function POST(request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Name, email, and password are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 })
    }

    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }
    

    const newUser = {
      id: nextUserId++,
      name,
      email,
      password,
    }

    users.push(newUser)

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET || "your-secret-key", {
      expiresIn: "24h",
    })

    return NextResponse.json(
      {
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
