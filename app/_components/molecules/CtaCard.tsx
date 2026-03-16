import CtaButton from "@components/atomes/CtaButton";

export default function CtaCard({ title, description, buttonText }: 
    { title: string, description: string, buttonText: string }) {
    return (
        <div className="shadow-md mx-auto w-full min-w-[280px] max-w-3xl z-10 bg-white rounded-2xl p-8 
        flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="heading-card">{title}</h2>
                <p className="body-copy">{description}</p>
            </div>
            <div className="flex items-center justify-center">
                <CtaButton variant="primary">
                    {buttonText}
                </CtaButton>
            </div>
        </div>
    );
}