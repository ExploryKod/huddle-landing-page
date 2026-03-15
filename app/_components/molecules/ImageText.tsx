import Image from "next/image";
import ImageContainer from "./ImageContainer";

export default function ImageText({ imageUrl, title, description, imagePosition = "left" }: 
    { imageUrl: string, title: string, description: string, imagePosition: "left" | "right" }) {
    return (
        <div className={`max-w-4xl px-5 py-10 mx-auto shadow-md rounded-2xl bg-white image-text 
        flex items-center gap-x-4 ${imagePosition === "right" ? "flex-row-reverse" : "flex-row"}`}>
            <ImageContainer objectFit="image-contain">
                <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-full object-cover object-center" />
            </ImageContainer>
            <div className="content flex flex-col gap-4">
                <h2 className="heading-card">{title}</h2>
                <p className="body-copy">{description}</p>
            </div>
        </div>
    );
}