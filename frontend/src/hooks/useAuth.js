"use client"

import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function useAuth() {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router= useRouter()

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    setIsAuthenticated(false)
  }

  const verify=  (token)=>{
    try {
        const decoded = jwtDecode(token)

        if (decoded && decoded.exp > Date.now() / 1000) {

          setUser({
            id: decoded.userId,
            email: decoded.email,
            name: decoded.name || decoded.email.split("@")[0],
          })
          
          setIsAuthenticated(true)

        } else {

            toast("unable to verify token or Expired token")

            setTimeout(() => {
                router.push("/auth/login")
            }, 1500);
            
        //   localStorage.removeItem("token")
        }
      } catch (error) {
        console.error("Token decode error:", error)
        // localStorage.removeItem("token")
      }
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      verify(token)
    }

    setLoading(false)
  }, [])

  

  return {
    user,
    isAuthenticated,
    loading,
    logout,
  }
}
