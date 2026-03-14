import CtaButton from "@components/atomes/CtaButton";

export default function CtaCard({ title, description, buttonText }: 
    { title: string, description: string, buttonText: string }) {
    return (
        <div className="card">
            <h2 className="heading-card">{title}</h2>
            <p className="body-copy">{description}</p>
            <CtaButton variant="primary">
                {buttonText}
            </CtaButton>
        </div>
    );
}