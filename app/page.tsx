import { Section } from "@components/sections/Section";
import ImageText from "@components/molecules/ImageText";
import HeroBanner from "@components/sections/HeroBanner";
import CtaCard from "@components/molecules/CtaCard";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
            <HeroBanner />
    <div className="pt-16 flex flex-col gap-4 bg-white">
      <Section>
        <ImageText imageUrl="/illustrations/illustration-flowing-conversation.svg"
          title="Flowing Conversations"
          description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          imagePosition="right" />
      </Section>
      <Section>
        <ImageText imageUrl="/illustrations/illustration-your-users.svg"
          title="Your Users"
          description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          imagePosition="left" />
      </Section>
      <Section>
        <ImageText imageUrl="/illustrations/illustration-grow-together.svg"
          title="Grow Together"
          description="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
          imagePosition="right" />
      </Section>
      <section
        className="w-full min-h-[20vh] bg-[linear-gradient(to_bottom,white_50%,var(--color-dark-cyan)_50%)] flex flex-col items-center justify-center pt-12 pb-8 px-4 -mb-px overflow-visible"
      >
        {/* Overflow ~25% of card into footer; 75% stays above the line */}
        <div className="mb-12">
          <CtaCard title="Ready To Build Your Community?" description="Get Started For Free" buttonText="Get Started For Free" />
        </div>
      </section>
    </div>
    </main>
  );
}
