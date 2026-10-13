import { Section } from "./_components/section";

export default function Footer() {
  return (
    <Section className="bg-panel border-b-0">
      <div className="flex flex-row items-center space-x-4 h-[calc(var(--footer-h)-5px)]">
        <span className="h-px grow bg-line-strong" />
        <span className="text-sm text-copy">
          Qayyum Yazid aka Tsujisalju © 2026
        </span>
        <span className="h-px grow bg-line-strong" />
      </div>
    </Section>
  );
}
