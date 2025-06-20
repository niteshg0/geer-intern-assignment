"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { products } from "../app/api/products/route";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";

const carouselItems = products;

const CARD_WIDTH = 350;
const CARD_HEIGHT = 400;

const CarouselPart = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4  relative">
      <div className="relative group">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 p-2 md:-ml-4">
            {carouselItems.map((item, index) => (
              <Link href={`/products/${item.id}`} key={index}>
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 flex justify-center"
                  style={{ minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH }}
                >
                  <Card
                    className="group hover:shadow-lg transition-shadow duration-200 border-none"
                    style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                  >
                    <CardHeader className="p-0">
                      <div className="relative w-full" style={{ height: 350 }}>
                        <Image
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover  rounded-t-lg p-3"
                          priority
                          sizes={`400px`}
                          style={{ objectFit: "cover" }}
                        />
                        <Badge className="absolute top-2 left-2 bg-indigo-600">
                          {item.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    {/* <CardContent className="">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-xl font-bold text-indigo-600">${item.price}</p>
                    
                    </CardContent> */}
                  </Card>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPart;
