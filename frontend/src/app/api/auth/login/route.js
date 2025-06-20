import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { users } from "../register/route";

// const users = [
//   {
//     id: 1,
//     name: "Admin User",
//     email: "admin@example.com",
//     password: "password123", // password123
//   },
//   {
//     id: 2,
//     name: "Test User",
//     email: "test@gmail.com",
//     password: "password123", // password123
//   }
// ]

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    console.log(email);
    

    
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    
    const user = users.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    const isValidPassword = user.password===password

    if (!isValidPassword) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "your-secret-key", {
      expiresIn: "24h",
    })

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.log(error);
    
    console.error("Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
