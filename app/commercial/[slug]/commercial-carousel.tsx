"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CommercialWork } from "@/data/art/commercial";
import Autoplay from "embla-carousel-autoplay";

export default function CommercialCarousel({ work }: { work: CommercialWork }) {
  return (
    <Carousel
      className="grow"
      plugins={[Autoplay({ delay: 4000 })]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {work.images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full aspect-square ">
              <Image
                src={image}
                alt={`${work.client} - ${work.project} - Image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
