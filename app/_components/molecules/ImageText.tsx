import Image from "next/image";
import ImageContainer from "./ImageContainer";

export default function ImageText({ imageUrl, title, description, imagePosition = "left" }:
    { imageUrl: string, title: string, description: string, imagePosition: "left" | "right" }) {
    return (
        <article className={`max-w-6xl px-5 py-10 mx-auto shadow-md rounded-2xl bg-white image-text 
        flex items-center gap-x-10 ${imagePosition === "right" ? "sm:flex-row-reverse flex-col" : "sm:flex-row flex-col"}`}>
            <ImageContainer objectFit="image-contain">
                <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-full object-cover object-center" />
            </ImageContainer>
            <div className="content flex flex-col gap-4 max-w-[500px]">
                <h2 className="heading-card">{title}</h2>
                <p className="body-copy">{description}</p>
            </div>
        </article>
    );
}