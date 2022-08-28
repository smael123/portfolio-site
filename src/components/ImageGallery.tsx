import { FC } from "react"
import { BasicImageLink } from "../models/BasicImageLink"

interface ImageGalleryProps {
    mainCaption: React.ReactNode
    imageLinks: BasicImageLink[]
}

export const ImageGallery:FC<ImageGalleryProps> = ({ mainCaption, imageLinks }) => {

    return (
        <>
            {mainCaption}
            <div className='project-gallery'>
                {imageLinks.map(imageLink => <img key={imageLink.src} alt={imageLink.alt} src={imageLink.src} />)}
            </div>
        </>
    )
}