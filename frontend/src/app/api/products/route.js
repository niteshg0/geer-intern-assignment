import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"


export const products = [
  {
    id: 1,
    name: "Wireless  Headphones",
    price: 79.99,
    category: "electronics",
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBMOEBAREhASEhIPEA8OEhUQFhIWFhUVFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8PFS0dFR0rKy0rNysrLTcrLSsrKystLSsrNzcrKy0rLS0tLTc3LS0tLSsrKy0tKy03KysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCB//EADoQAAIBAgIGCAUCBQUBAAAAAAABAgMRBCEFEjFBUXEiYYGRobHB0RMyQlLwBuEjcpKi8TNTYoKyFf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAIKuItlFaz37kub9DXk5P5pPlHor38SauN8Fa6ceM/wCufueJ0p/ROXJyfmNMWoKRYypF2bd+DszYp6Se9J8shpizBr0sbB77c/c2EyoAAAAAAAAAAAAAAAAAAAAAAAAAAAa1ere6WSW1ryXue8RU3La9r4Ir61XcthLVke51UskQSqkUpni5FT/EJIVSPC4eU3lkt7Lahh4x2LPi9ow1pVqOsukmuDsVzi02ntR0TV8mVmkcPvW1eMd6FhK04s2sPXcdmzhuNOJNAirmlUUlddqPZW0J2d0WMZXVzUrNjIAKgAAAAAAAAAAAAAAAAAABicrJt7jJrYue7hm/T86gNXEVNt9rzfsaM5HutUuyEy0XJsLQc3bdvfURRVy8wlDUjbe9ohUtOCiklkkegDTIeKkLq3cewBz9SOrJx2b1yf5Y9RkuK7yfSdO0090l47/TvIYmG09Nm7hZ7uPmaEUuomh1XQFkDEXdJmTbAAAAAAAAAAAAAAAAAAABVYur459m7wsWGIfRfXl7+FymxM7tkqxEwDKRFbmjKN5az2R8y2IMHS1Yri82TliUABUAABo6ZpXpt74tPs4FZGMeC7kX1aGtGUeKa70c9QeS7u7IzWo2IxXX2NominxfgyCLJYsirHBydrO2T3ZZE5pYKWduKN01GaAAqAAAAAAAAAAAAAAAANTHTt2Jvt2L1Kg39JT280u5X9WaKRmtQsTYWneSXX4EaRvaNhm3wQFiADTIAAAAAHO1FadRcJy7m7o6I5/H5VanXqv+1EqwiySMjXiySLMtNzCz6UefmWhSUpWafWi7NRmgAKgAAAAAAAAAAAAAAAClx0rvtb8WRRRms7vsXkZijLQkWmAjaN+LK6KLXDK0UIVKADTIAR160YJym0kt7AkPM5pZyaS4tpHN4/T83dUugvudnJ+xR16kpO8nKT4ybfiTVx3D0jQ/3aX9cfcqNJVYyqtxcZJxjnFprfvRxuIrNbLvwRZ6CqN07v7mS1ZFxFkiZBFkiZFTKR0JzSZ0kNi5IsSsgA0yAAAAAAAAAAAAABiex8mZPFX5Zcn5AcjVrS1pWb28SOvQx6zpVsJPP5auHq0rL+ZVJXfYjzZuUs978zchWnxXgYjVYhVxEGlUlSldOzhCUNltqbfHidRhn0IX+1eRzEm5NN7r7Ou3sdRQXRj/ACryNRK9gAqI69aMIuUnZI5PSWNlVld5RXyx3Je5u6cxmtLUXyw8Zb+7Z3lPIza1I8WEof4PaRloiqfSEbXZZaDX8GD43l2NuxS/qOtnToRfTqSSt1N2/OR0mGpKMYxWyKSXJKxFbMWSIjie0VHtHSUX0Y8l5HNxOgwUrwhyS7sixKnABpkAAAAAAAAAAAAADE1k11MyAOIhFuUtu18DZjSfX3I804xVSalsTe29u2wnWV3q7L5XMNpoQfV3fudPR+WPJeRyUakuJtU9I1Y/W8tzsyypY6Y18fX1Kcpb9i5vYV+H0w/rSfXHJ9xFpnFxmoKLyzb57F6l1MU1RkX+X6Hup+cjyZaDQ0ppDUWrCzqNdkVxfsT4zEakb73lFdZQxpSqzVNN3l0py4R3vmRU36cwDlUliZ3k81Fyzbe98t3edTBEFCmoxUYqyikkuollVUdvYltYGxFEiiVdevUkrRl8Prioyl3yVvAwq019cvD2Ki4ii10ZW+h7c2uW/wA/E5vD6Qadp5r7krNc0Wsqmqo1I56jU8t8Nkv7W32CFXwMJmTbAAAAAAAAAAAAAABg0NM19Wm0ts8uzf8AnWBzmPnFznKOyUm+wipI813me6DzMNs4uuoIp6ml1crv1fpiMKjpXzSV0rvar+RzMdJxb2k1ZHeUNJp7y0hU1op8T53QxfWd1ouV6NJ8YpiUsTWu33d/+DEz3Df+bv3IcTPVjKXBNlRSaUxN5Sf0wulz3/nUb2hcLqQ1pfPU6Uupbo9i9SmpU9epSg/qleXJdJ+XidQRXpzt+byO297fzwMrN8vP8t4nprcVHi3PsTZhrn2m9TpP4aUU3ebb7FbNkVWk45SW3kwNVosdD19tOWas2uX1LxNC21flj3hXacH1271YDscB/pwXBav9PR9DYNfAfJHt/wDTNg2wAAAAAAAAAAAAABSaen0ox4Rv3v8AYuyg05/qL+SPnIlWKTECjI91kasJWMtKn9S4FOqp2ynFZ9ayfhYoMToeMtyO4xVH4kLfVHOPqimUSYuuKr4SrRd1eUeH7n0X9M11PC0JL7Wu2M3H0KrEYZSWws/01BRpOmvonKy6pZ+dxIVaU9/b6Glpl2pT7F3s3obX+fmw09Ow/gz6rPudyop9DRvWv9tOXi0i+KPQb/ivrpvwaL6xItKSyT459+Zne+SPVBdFcku1ZMxNWfPzX54FRPVm1CEVkmm315nmTfw1f73q8rZ9lzFOvZarUZLalLceK1VvN8klkuSRURPa+z19zNFdKPPyV/QJGzoyhr1Et2z1fh5kV1eFjaEF/wAV32JQDbAAAAAAAAAAAAAAFH+oI9KEuKa8f3LwrtN0danf7X4PJ+hKsc3URp1o7zdZDUiZaQUqpFjsPe9SP/ZeqFSNsz3SrAVtzY0VV1amrumrdqzXr3k2Jwil0oWUt8difLgypruUXneMlmr5ZreRXVR2mcXQ14Tj90WjWwGKVWCmrX2SXCS2r84m/B5FRxmjaupUg5ZasnGXJ9F+51TRQfqDBunP4sV0JfNbc+JvaIxynFRb6UVl1x9yKsaTs2u1ct/j5kklchkv2fWZVXjl1rNfsVGXT634GFG37j4i4rvRhy4eOQGJeLOi0Dg9WOu9stnLj2ldobR/xJa0vkW3rf2rqOnLIloADTIAAAAAAAAAAAAAHmcU009jVnyPQA5THYZwk1w2dcTVaOq0hhFUWWUlsfoznK1FptWs1tTM2NytGpA1KlPeizcSGpTINCFWxLKcZK0kpLrVxUpEEqbWwDYwWHp025U0461tZa0mup2e8soS37mU0ZNE9HENcuAFjWgpJpq6e45rG6IqU3r0W3Hbq3s1yZ0VOqns7mLkFBh9POPRrQmn9yWfajfp6XoPZNLnGUfNG5OlF7UnzR4jhoLZGPcFRrFRk1qXmt9lJeLVuJY6MwEqrtbVjtk1u/c2sBoecrOS1IcrSfJbu06GhRjBKMVZI1IzazRpKMVGKslsPYBpkAAAAAAAAAAAAAAAAAAA18Xg41NuUlsktq90bBgDncVo2pHO2suMc+9bUaE4nXTUtxpYjDTlug+aTJi65icSGVMvKuiZvYkuV0a70RW4Q/qfsTF1TOmZjTLdaHq71HvfsbuD0e4O9o34vO3IYaaC0U1apUVt8YvbzZbVsHSn80It8bWfeiONWW89/GLiai/+RQ+z+6fuT0MJTh8sIxfFLPvMfGHxyo2AQfGMqqBMDwpmUwPQMXMgAAAAAAAAAAAAAAAAAAAAAAxYyAPLiYdM9gCP4SMfBRKAIfgoz8FEoAi+EjPwyQAeVAzYyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    category: "clothing",
    imageUrl: "data:image/jpeg;base64,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",
    description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors.",
  },
  {
    id: 3,
    name: "JavaScript: Guide",
    price: 49.99,
    category: "books",
    imageUrl: "https://covers.openlibrary.org/b/id/10737969-L.jpg",
    description: "Comprehensive guide to JavaScript programming for beginners and experts.",
  },
  {
    id: 4,
    name: "Smart Security Camera",
    price: 129.99,
    category: "electronics",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQno_LDTOEMOh921kbpxnnFtZc6eWpCJu4l9g&s",
    description: "1080p HD security camera with night vision and mobile app integration.",
  },
  {
    id: 5,
    name: "Yoga Mat Premium",
    price: 39.99,
    category: "sports",
    imageUrl: "https://www.yogikuti.com/wp-content/uploads/2018/08/PU-blue-mat.jpg",
    description: "Non-slip premium yoga mat with extra cushioning for comfortable practice.",
  },
  {
    id: 6,
    name: "Coffee Maker Deluxe",
    price: 89.99,
    category: "home",
    imageUrl: "https://www.nespresso.com/in/media/catalog/product/e/s/essenza-mini-black_1.png?optimize=high&fit=bounds&height=&width=&canvas=:",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
  },
]

let nextId = 7

// GET /api/products - Get all products
export async function GET() {
  return NextResponse.json(products)
}

// POST /api/products - Add new product (requires authentication)
export async function POST(request) {
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

    const body = await request.json()
    const { name, price, category, imageUrl, description } = body

    
    if (!name || !price || !category || !imageUrl) {
      return NextResponse.json({ message: "Missing required fields: name, price, category, imageUrl" }, { status: 400 })
    }

    // Create new product
    const newProduct = {
      id: nextId++,
      name,
      price: Number.parseFloat(price),
      category,
      imageUrl,
      description: description || "",
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error adding product:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
