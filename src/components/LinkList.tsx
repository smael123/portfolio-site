import { FC } from "react"
import { BasicHyperLink } from "../models/BasicHyperlink"

interface LinkListProps {
    hyperlinks: BasicHyperLink[]
}

export const LinkList:FC<LinkListProps> = ({ hyperlinks }) => {
    return (
        <>
            {hyperlinks.map((hyperlink, index) => 
                (
                    <span key={hyperlink.displayText}>
                        <a 
                            href={hyperlink.href} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            {hyperlink.displayText}
                        </a>{index + 1 < hyperlinks.length && " | "}
                    </span>
                )
            )}
        </>
    )
}