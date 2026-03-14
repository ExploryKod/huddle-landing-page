import { Section } from "@components/sections/Section";
import ImageText from "@components/molecules/ImageText";
import HeroBanner from "@components/sections/HeroBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <HeroBanner />
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
    </main>
  );
}
