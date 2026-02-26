import { artPieces } from "@/data/art/personal";
import ArtGalleryItem from "./art-gallery-item";
import { HorizontalScrollContainer } from "@/components/horizontal-scroll";

export default function ArtGallery() {
  return (
    <HorizontalScrollContainer className="h-full grow grid grid-rows-2 grid-flow-col-dense auto-cols-[60%] lg:auto-cols-[40%] xl:auto-cols-[30%] gap-1 overflow-x-auto">
      {[...artPieces]
        .sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA < dateB ? 1 : -1;
        })
        .map((art, index) => {
          let spanClasses = "";
          switch (art.orientation) {
            case "landscape":
              spanClasses = "col-span-2 row-span-1";
              break;
            case "portrait":
              spanClasses = "col-span-1 row-span-2";
              break;
            case "square":
              spanClasses = "col-span-1 row-span-1";
              break;
            default:
              spanClasses = "";
          }
          return (
            <ArtGalleryItem
              key={art.id}
              art={art}
              className={`relative h-full w-full ${spanClasses}`}
            />
          );
        })}
    </HorizontalScrollContainer>
  );
}
