import { FC } from "react"
import { Carousel, CarouselItem } from "react-bootstrap"
import { BasicImageLink } from "../models/BasicImageLink"

interface ImageGalleryProps {
    mainCaption?: React.ReactNode
    imageLinks: BasicImageLink[]
}

export const ImageGallery:FC<ImageGalleryProps> = ({ mainCaption, imageLinks }) => {

    return (
        <>
            {mainCaption}
            <Carousel>
                {imageLinks.map(imageLink => <CarouselItem key={imageLink.src}><img className="d-block w-100" alt={imageLink.alt} src={imageLink.src} /></CarouselItem>)}
            </Carousel>
        </>
    )
}