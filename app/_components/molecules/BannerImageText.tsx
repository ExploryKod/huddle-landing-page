import Image from "next/image";
import ImageContainer from "./ImageContainer";
import CtaButton from "../atomes/CtaButton";

export default function BannerImageText({ imageUrl, title, subtitle, description, imagePosition = "left" }: 
    { imageUrl: string, title: string, subtitle: string, description: string, imagePosition: "left" | "right" }) {
    return (
        <article className={`image-text flex flex-col-reverse gap-y-10 md:gap-x-10 ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <ImageContainer objectFit="image-contain">
                <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-full object-cover object-top" />
            </ImageContainer>
            <div className="content flex flex-col gap-y-5 md:pt-10">
                <div className="flex flex-col gap-y-5">
                    <div>
                        <h1 className="heading-card text-center md:text-left">{title} <br /> {subtitle}</h1>
                    </div>
               
                    <p className="body-copy text-center md:text-left">{description}</p>
                </div> 
                <div className="flex items-center justify-center md:justify-start">
                    <CtaButton variant="primary">Get Started For Free</CtaButton>
                </div>
            </div>
        </article>
    );
}