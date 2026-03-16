import Image from "next/image";
import ImageContainer from "./ImageContainer";
import CtaButton from "../atomes/CtaButton";

export default function BannerImageText({ imageUrl, title, subtitle, description, imagePosition = "left" }: 
    { imageUrl: string, title: string, subtitle: string, description: string, imagePosition: "left" | "right" }) {
    return (
        <article className={`image-text flex flex-col-reverse gap-y-10 md:gap-x-10 ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <ImageContainer objectFit="image-contain" classNames="w-full h-full min-w-1/2">
                <Image src={imageUrl} alt={title} width={800} height={600} className="w-full h-full object-cover object-top" />
            </ImageContainer>
            <div className="content flex flex-col gap-y-5 md:pt-10">
                <div className="flex flex-col gap-y-5">
                    <div>
                        <h1 className="main-title text-center md:text-left">{title} <br /> {subtitle}</h1>
                    </div>
               
                    <p className="text-paragraph text-center md:text-left">{description}</p>
                </div> 
                <div className="flex items-center justify-center md:justify-start">
                    <CtaButton variant="primary">Get Started For Free</CtaButton>
                </div>
            </div>
        </article>
    );
}