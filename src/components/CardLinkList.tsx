import { FC } from "react"
import { BasicHyperLink } from "../models/BasicHyperlink"

interface LinkListProps {
    hyperlinks: BasicHyperLink[]
}

export const CardLinkList:FC<LinkListProps> = ({ hyperlinks }) => {
    return (
        <>
            {hyperlinks.map((hyperlink) => 
                (
                    <a key={hyperlink.displayText}
                        className='card-link'
                        href={hyperlink.href} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        {hyperlink.displayText}
                    </a>
                )
            )}
        </>
    )
}