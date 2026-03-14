import Image from "next/image";
import ImageContainer from "./ImageContainer";

export default function ImageText({ imageUrl, title, description, imagePosition = "left" }: 
    { imageUrl: string, title: string, description: string, imagePosition: "left" | "right" }) {
    return (
        <div className={`image-text flex ${imagePosition === "right" ? "flex-row-reverse" : "flex-row"}`}>
            <ImageContainer objectFit="image-cover">
                <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-full object-cover" />
            </ImageContainer>
            <div className="content">
                <h2 className="heading-card">{title}</h2>
                <p className="body-copy">{description}</p>
            </div>
        </div>
    );
}