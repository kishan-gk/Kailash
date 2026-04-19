import { ImageWithFallback } from './figma/ImageWithFallback';
import { Section, SectionContainer, SectionHeader, CardGrid } from '../design-system/Layout';
import { InteractiveCard, Chip } from '../design-system/Cards';
import { CardTitle, CardDescription } from '../design-system/Typography';
import { colors, spacing, radius, animation } from '../design-system/tokens';
import { trackMousePosition } from '../design-system/utils';
import illustration from "figma:asset/0d0ad8696fd2be52c0c2363d8822ce797cd07d76.png";
import uxIllustration from "figma:asset/7d428dd654db9e6801f709d95645be8c7dac93aa.png";
import flowIllustration from "figma:asset/7bcaa34bdc32d8a4a176b006826bf360cc5a382f.png";

const expertiseItems = [
  {
    title: 'UI Design',
    description: 'Crafting visually refined, accessible interfaces that translate ideas into intuitive digital experiences across web and mobile.',
    pointers: [
      'Responsive design',
      'High-fidelity UI screens',
      'Visual hierarchy & layout systems',
      'Design consistency & polish'
    ],
    illustration: illustration,
  },
  {
    title: 'UX Design',
    description: 'Designing user-centered experiences grounded in clarity, usability, and real user needs—turning complex problems into simple flows.',
    pointers: [
      'User journey mapping',
      'Information architecture',
      'Interaction design',
      'Accessibility-first thinking'
    ],
    illustration: uxIllustration,
  },
  {
    title: 'Flow Diagrams',
    description: 'Structuring product logic visually to align business goals with user behavior and system requirements.',
    pointers: [
      'User flow diagrams',
      'IA architecture',
      'Process & system flows',
      'Feature relationships'
    ],
    illustration: flowIllustration,
  },
];

export function Expertise() {
  return (
    <Section id="expertise" background="gradient">
      <SectionContainer maxWidth="xl">
        <SectionHeader 
          title="EXPERTISE" 
          heading="My Craft" 
          align="center"
          marginBottom={20}
        />

        <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={item.title} item={item} index={index} />
          ))}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
}

function ExpertiseCard({ item, index }: { item: typeof expertiseItems[0], index: number }) {
  return (
    <div className="flex flex-col h-full">
      <InteractiveCard
        delay={index * animation.delay.short}
        className="!flex !flex-col !h-full !p-0"
        onMouseMove={trackMousePosition}
      >
        {/* Header: Title & Description & Pointers - Padded Area */}
        <div className="pt-7 px-7 pb-6 flex-1 flex flex-col">
          <div className="flex flex-col gap-2 mb-5">
            <CardTitle style={{ color: colors.text.tertiary }}>{item.title}</CardTitle>
            <CardDescription style={{ color: colors.text.secondary }}>
              {item.description}
            </CardDescription>
          </div>

          {/* Pointers (Chips) */}
          <div className="flex flex-wrap gap-2">
            {item.pointers.map((pointer, i) => (
              <Chip key={i} variant="purple">
                {pointer}
              </Chip>
            ))}
          </div>
        </div>

        {/* Illustration Container - Bottom Full Width, Flush to Bottom */}
        <div className="w-full overflow-hidden rounded-b-[20px]">
          <img
            src={item.illustration}
            alt={item.title}
            className="w-full h-auto object-cover block transition-all duration-700 ease-out filter grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0"
          />
        </div>
      </InteractiveCard>
    </div>
  );
}
