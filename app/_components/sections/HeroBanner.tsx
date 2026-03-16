import Image from "next/image";
import BannerImageText from "@components/molecules/BannerImageText";

export default function HeroBanner() {
    return (
        <>
            <Image
                src="/background/bg-hero-desktop.svg"
                alt=""
                aria-hidden
                width={100}
                height={100}
                className="absolute -top-(--header-height) left-0 image-cover w-full -z-10"
            />
            <div className="section-container flex flex-col items-center justify-center">
                <BannerImageText imageUrl="/illustrations/illustration-mockups.svg" 
                title="Build The Community" 
                subtitle="Your Fans Will Love"
                description="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion." 
                imagePosition="right" />
            </div>
        </>
    );
}