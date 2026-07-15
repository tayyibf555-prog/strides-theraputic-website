// All site copy, sourced from the Strides template. Edit here to update pages.
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  ClipboardList,
  HeartHandshake,
  ScanEye,
  Users,
} from "lucide-react";

export type FeatureBlock = {
  title: string;
  subtitle?: string;
  body?: string;
  items?: string[];
  // Optional pricing tag shown as a badge in the corner of the feature card.
  tag?: { heading: string; lines: string[] };
};

export type Differentiator = { title: string; body: string };

export type Program = {
  name: string;
  blurb: string;
  details: string[];
  // When set, the program renders as this full flyer image (which already
  // contains the dates/pricing/details) with an intake button, instead of a
  // text card. Path is relative to /public.
  image?: string;
};

// On-page FAQ entry; also feeds FAQPage JSON-LD via faqSchema().
export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  // Optional keyword-targeted <title>. Rendered with `title.absolute` so the
  // "| Strides Therapeutic Services" template suffix doesn't bloat it past
  // 60ish chars. H1s/taglines are unaffected.
  seoTitle?: string;
  navLabel: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  cardCta: string;
  ctaLabel: string;
  price?: string;
  availability?: string;
  serving?: string;
  intro: string[];
  // Optional real photo for the intro section; falls back to a placeholder
  // when not set. Path is relative to /public.
  introImage?: string;
  features?: FeatureBlock[];
  featuresHeading?: string;
  // Optional video shown beside the features in the "What We Provide" section.
  // Paths are relative to /public.
  featuresVideo?: string;
  featuresVideoPoster?: string;
  differentiators?: Differentiator[];
  approach?: { heading: string; body: string[] };
  programs?: Program[];
  // Rendered as an on-page FAQ band + FAQPage schema when present.
  faqs?: Faq[];
};

export const SERVICES: Service[] = [
  {
    slug: "aba-therapy",
    title: "ABA Therapy",
    seoTitle: "ABA Therapy in Clinic, Home & School — Vancouver WA | Strides",
    navLabel: "ABA Therapy",
    icon: Brain,
    tagline: "Individualized Support for Meaningful, Lasting Growth",
    summary:
      "Individualized, evidence-based ABA across clinic, home, school, and community settings.",
    cardCta: "Start ABA Intake",
    ctaLabel: "Request an Intake",
    intro: [
      "At Strides, ABA therapy is never one-size-fits-all. We believe every individual deserves care that is thoughtful, collaborative, and tailored to their unique goals, strengths, and challenges.",
      "Our team provides evidence-based ABA services designed to help individuals build greater independence, communication, emotional regulation, safety, and quality of life across the settings that matter most — home, clinic, school, and community environments.",
      "From our East Vancouver clinic to in-home and community-based support throughout Oregon and Washington, our clinicians work closely with families and support systems to create meaningful, sustainable progress.",
      "As a BCBA-owned and operated organization, clinical quality and relationships remain at the center of everything we do. We prioritize consistent, engaged clinical oversight and meaningful in-person support whenever possible, rather than relying heavily on telehealth models.",
    ],
    introImage: "/service-aba-therapy.jpg",
    featuresHeading: "What ABA Supports",
    features: [
      {
        title: "Whole-Person Skill Building",
        body: "Our programs support growth across the areas that matter most to everyday life.",
        items: [
          "Communication",
          "Independence",
          "Emotional regulation",
          "Social development",
          "Daily living skills",
          "Safety across environments",
        ],
      },
      {
        title: "Getting Started",
        body: "Beginning services can feel overwhelming — our team is here to help guide the process. We work with families to navigate assessments, insurance authorizations, funding options, and service recommendations with transparency and support every step of the way.",
      },
    ],
    faqs: [
      {
        question: "Where does ABA therapy take place?",
        answer:
          "Wherever it will help most. Strides provides ABA in our East Vancouver clinic and in home, school, and community settings throughout Oregon and Washington, so skills are practiced in the environments where your family actually uses them.",
      },
      {
        question: "What skills does ABA therapy at Strides focus on?",
        answer:
          "Programs are individualized, and most focus on communication, independence, emotional regulation, social development, daily living skills, and safety across environments. Goals are set collaboratively with each family rather than pulled from a standard template.",
      },
      {
        question: "Does insurance cover ABA therapy?",
        answer:
          "Strides works with PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, as well as Oregon DHS–DDS and Washington DSHS–DDA funding. Coverage and authorization requirements vary by plan, so call (360) 622-2253 and we will help you verify your benefits.",
      },
      {
        question: "Who oversees my child's ABA program?",
        answer:
          "Strides is locally owned and operated by Board Certified Behavior Analysts who stay actively involved in clinical oversight. We prioritize consistent, engaged supervision and meaningful in-person support rather than relying heavily on telehealth models.",
      },
      {
        question: "How do we get started with ABA services?",
        answer:
          "Request an intake through our Google Form or call (360) 622-2253. From there, our team walks you through assessments, insurance authorizations, funding options, and service recommendations step by step.",
      },
    ],
  },
  {
    slug: "wa-dda",
    title: "WA DDA Services",
    seoTitle: "WA DDA Services & Positive Behavior Support Plans | Vancouver",
    navLabel: "WA DDA Services",
    icon: HeartHandshake,
    tagline: "Support Built Around Real Life",
    summary:
      "Life skills, staff & family consultation, stabilization, and respite services.",
    cardCta: "Request DDA Services",
    ctaLabel: "Request DDA Services",
    availability: "Spanish-speaking and ASL clinicians available",
    serving: "Serving Clark & Cowlitz Counties",
    intro: [
      "Practical support. Meaningful progress. Real-world impact.",
      "At Strides, our Washington DDA services are designed around one central question: what would improve this individual’s quality of life?",
      "From there, we build individualized support systems that help individuals develop practical skills, increase independence, improve safety, strengthen communication, and navigate everyday challenges more successfully.",
    ],
    introImage: "/service-wa-dda.jpg",
    features: [
      {
        title: "Staff & Family Consultation",
        body: "We work collaboratively with caregivers, support staff, and providers to build effective strategies that improve consistency, communication, independence, and overall quality of support — practical, sustainable solutions that work in real-life environments, not plans that only work on paper.",
      },
      {
        title: "Life Skills",
        body: "Life Skills services focus on helping individuals build the abilities needed to navigate daily life more independently and confidently.",
        items: [
          "Communication skills",
          "Coping and emotional regulation",
          "Community safety",
          "Daily living skills",
          "Social interaction",
          "Self-advocacy",
          "Routine building",
          "Independence within home and community settings",
        ],
      },
      {
        title: "Stabilization Services",
        body: "Our stabilization services support individuals and support systems during periods of increased behavioral, emotional, environmental, or placement-related challenges. The goal is not simply short-term crisis response — it is helping create sustainable systems that improve safety, reduce overwhelm, and support long-term success.",
      },
      {
        title: "Community Respite",
        body: "Through our center-based respite offerings, individuals have opportunities for structured community engagement, social connection, recreation, and skill development in a supportive environment led by experienced staff. Currently accepting clients for our Summer Respite program.",
      },
      {
        title: "Functional Assessments & Positive Behavior Support Plans",
        subtitle: "FA / PBSP",
        body: "Our team develops comprehensive, individualized assessments and Positive Behavior Support Plans designed to identify meaningful supports, improve quality of life, and reduce barriers to success. Plans are collaborative, practical, and focused on proactive strategies across environments and support teams.",
      },
    ],
    differentiators: [
      {
        title: "Clinically Led, Community Focused",
        body: "Strides is locally owned and operated by Board Certified Behavior Analysts who remain actively involved in service quality, staff development, and clinical oversight.",
      },
      {
        title: "Expertise in Complex Needs",
        body: "Our team regularly supports individuals with high-acuity, multi-system, and complex support needs across home and community settings — stepping into challenging situations with creativity, structure, and practical problem-solving.",
      },
      {
        title: "A More Comprehensive Support System",
        body: "Because Strides offers multiple levels of behavioral, developmental, and community-based services, individuals benefit from a more connected continuum of care that evolves alongside their needs.",
      },
      {
        title: "Progress That Matters",
        body: "We focus on outcomes that improve everyday life: greater independence, improved communication, increased safety, reduced caregiver stress, and stronger coping and adaptive skills.",
      },
    ],
    approach: {
      heading: "Our Approach",
      body: [
        "We understand that many families and support teams come to us after exhausting other options or being told a situation is “too complex.”",
        "At Strides, we believe individuals deserve support systems built around possibility, not limitations. Our role is not simply to manage challenges, but to help individuals and the people supporting them build safer, more connected, and more independent lives over time.",
      ],
    },
    faqs: [
      {
        question: "What is a positive behavior support plan (PBSP)?",
        answer:
          "A positive behavior support plan is an individualized, written plan built from a functional assessment. Instead of only reacting to challenging behavior, it lays out proactive strategies, skill-building goals, communication supports, and environmental changes that caregivers and staff can use consistently across settings — with the goal of improving quality of life, not just reducing behaviors.",
      },
      {
        question: "What services does Strides provide through WA DDA?",
        answer:
          "We provide staff and family consultation, life skills services, stabilization services, community respite, and functional assessments with positive behavior support plans — a connected continuum that can evolve as an individual's needs change.",
      },
      {
        question: "Which Washington counties do you serve?",
        answer:
          "Our WA DDA services cover Clark and Cowlitz Counties from our East Vancouver center. Spanish-speaking and ASL clinicians are available.",
      },
      {
        question: "What are stabilization services?",
        answer:
          "Stabilization services support individuals and their support systems during periods of increased behavioral, emotional, environmental, or placement-related challenges. The goal is not short-term crisis response alone — it is building sustainable systems that improve safety, reduce overwhelm, and support long-term success.",
      },
      {
        question: "What do life skills services work on?",
        answer:
          "Life skills services help individuals build the abilities needed for daily life: communication, coping and emotional regulation, community safety, daily living skills, social interaction, self-advocacy, routine building, and independence at home and in the community.",
      },
    ],
  },
  {
    slug: "autism-diagnostic-assessments",
    title: "Autism Diagnostic Assessments",
    seoTitle:
      "Autism Testing & Evaluation — Vancouver WA & Portland OR | $1,495 Flat Fee",
    navLabel: "Autism Diagnostics",
    icon: ScanEye,
    tagline: "A Smarter, More Connected Approach to Autism Evaluation",
    summary:
      "Technology-enhanced autism evaluations with fast turnaround times.",
    cardCta: "Schedule an Assessment",
    ctaLabel: "Schedule an Assessment",
    price: "$1,495 Flat Fee",
    intro: [
      "For many families, the diagnostic journey can feel overwhelming. Long waitlists. Limited communication. Minimal follow-up. Months — sometimes years — spent searching for answers while critical developmental windows continue to pass.",
      "At Strides, we believe autism evaluations should be different. Our diagnostic program combines experienced clinicians, advanced technology, and integrated care pathways to provide families with faster answers, clearer insight, and meaningful next steps.",
      "Using innovative EarliTec Diagnostics EarliPoint™ technology alongside comprehensive clinical evaluation, our team delivers a modern, evidence-based diagnostic experience designed to improve both accuracy and long-term outcomes. We are among the first providers in the region integrating this level of objective technology into both autism diagnosis and ongoing treatment measurement.",
    ],
    introImage: "/service-autism-diagnostics.jpg",
    featuresHeading: "What Is EarliPoint?",
    featuresVideo: "/videos/earlipoint.mp4",
    featuresVideoPoster: "/videos/earlipoint-poster.jpg",
    features: [
      {
        title: "FDA-Authorized Eye-Tracking Technology",
        body: "EarliPoint Evaluation is an FDA-authorized technology designed to help clinicians identify key social-communication markers associated with autism spectrum disorder in children up to age 8. It uses advanced eye-tracking and interactive visual assessments to measure how children engage with social information and their environment, providing objective insight alongside traditional evaluation methods.",
        items: [
          "A more modern, data-informed assessment process",
          "Objective markers that support clinical decision-making",
          "Earlier access to answers and intervention",
          "Clearer understanding of developmental strengths and challenges",
        ],
      },
    ],
    differentiators: [
      {
        title: "Faster Access to Care",
        body: "Families can complete the assessment process in as little as 2 weeks, dramatically reducing the long wait times commonly associated with autism evaluations.",
      },
      {
        title: "Integrated Clinical Team",
        body: "Our evaluations are completed through collaboration between experienced providers — including MDs and PsyD-level clinicians — as well as Board Certified Behavior Analysts who understand both diagnosis and ongoing treatment planning.",
      },
      {
        title: "Support Beyond Diagnosis",
        body: "Many families receive a diagnosis and are then left to navigate next steps alone. At Strides, diagnosis is the beginning of support, not the end of it — with individualized recommendations, treatment guidance, and access to a multidisciplinary care team.",
      },
      {
        title: "Objective Progress Tracking",
        body: "For individuals receiving ABA services through Strides, reassessments using EarliPoint™ technology are included every 6 months, allowing families and clinicians to monitor objective developmental progress over time.",
      },
    ],
    faqs: [
      {
        question: "How much does an autism evaluation cost at Strides?",
        answer:
          "Our autism diagnostic assessment is a $1,495 flat fee — one transparent price, with no surprise add-ons. Comprehensive assessments are also available upon consultation. Call (360) 622-2253 with any questions about what the fee covers.",
      },
      {
        question: "How long does autism testing take?",
        answer:
          "Families can complete the assessment process in as little as 2 weeks, compared to the months-long waitlists common for autism evaluations. That speed matters — earlier answers mean earlier access to intervention during critical developmental windows.",
      },
      {
        question: "What ages do you evaluate?",
        answer:
          "The FDA-authorized EarliPoint™ eye-tracking evaluation is designed for children up to age 8. Our integrated clinical team — MDs, PsyD-level clinicians, and Board Certified Behavior Analysts — completes evaluations across a range of ages, so contact us to discuss the right assessment path for your family.",
      },
      {
        question: "Is autism testing covered by insurance?",
        answer:
          "Strides works with PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, along with Oregon DHS–DDS and Washington DSHS–DDA funding. Coverage for diagnostic testing varies by plan, so call (360) 622-2253 to verify your benefits. Many families choose the $1,495 flat fee to skip authorization delays entirely.",
      },
      {
        question: "What areas do you serve near me?",
        answer:
          "Our diagnostic clinic is located at 204 SE Stonemill Drive, STE 270 in East Vancouver, WA. Families come to us from Vancouver, Camas, and across Clark County, as well as the Portland, OR metro area — many Portland families cross the river for the shorter timeline.",
      },
    ],
  },
  {
    slug: "or-dds",
    title: "Oregon DDS Services",
    seoTitle: "Oregon DDS Services — Behavior Consultation & PBSP | Strides",
    navLabel: "Oregon DDS",
    icon: ClipboardList,
    tagline: "Individualized Support Systems Built for Real Life",
    summary:
      "FBA, PBSP development, and ongoing behavioral consultation.",
    cardCta: "Request Services",
    ctaLabel: "Request Services",
    availability: "Spanish & Amharic speaking and ASL clinicians available",
    serving: "Serving All Counties",
    intro: [
      "At Strides, we understand that behavioral support is about far more than reducing challenging situations. Effective services should improve safety, strengthen communication, increase independence, reduce caregiver stress, and help individuals live more connected and meaningful lives within their communities.",
      "Our Oregon DDS services are designed to support individuals with complex behavioral, developmental, medical, environmental, and support needs through practical, collaborative, and evidence-based approaches.",
      "Whether we are developing a Positive Behavior Support Plan, helping maintain long-term stability, or supporting teams through difficult transitions, our focus remains the same: creating realistic support systems that lead to meaningful progress over time.",
    ],
    introImage: "/service-or-dds.jpg",
    features: [
      {
        title: "Functional Behavior Assessments",
        subtitle: "FBA",
        body: "Our clinicians complete comprehensive Functional Behavior Assessments designed to better understand the factors influencing behaviors, environmental challenges, communication barriers, and support needs impacting daily life. Assessments are individualized, collaborative, and focused on practical strategies that improve quality of life and long-term success.",
      },
      {
        title: "Positive Behavior Support Plans",
        subtitle: "PBSP",
        body: "We develop detailed Positive Behavior Support Plans tailored to the individual’s unique strengths, needs, goals, and support systems.",
        items: [
          "Proactive support strategies",
          "Skill development",
          "Communication supports",
          "Environmental modifications",
          "Safety planning",
          "Crisis prevention",
          "Caregiver and staff consistency",
          "Long-term sustainability",
        ],
      },
      {
        title: "PBSP Maintenance & Ongoing Consultation",
        body: "Behavioral support needs evolve over time. Our team provides ongoing maintenance, consultation, and collaboration to help individuals and support systems continue making progress as needs, environments, and goals change.",
        items: [
          "Reviewing progress and outcomes",
          "Updating support strategies",
          "Caregiver and staff coaching",
          "Coordination with provider teams",
          "Crisis prevention support",
          "Assistance navigating transitions and placement concerns",
        ],
      },
    ],
    differentiators: [
      {
        title: "Clinically Led Care",
        body: "Strides is locally owned and operated by Board Certified Behavior Analysts who remain actively involved in service quality, clinical oversight, and provider collaboration. Families, providers, and case managers work directly with clinicians who understand both the complexity of these situations and the importance of practical, relationship-centered care.",
      },
      {
        title: "Expertise in Complex Cases",
        body: "Our team regularly supports individuals with high-acuity and multi-system needs, including significant behavioral challenges, placement instability, safety concerns, dual diagnoses, communication barriers, and complex environmental factors. We approach these situations with structure, collaboration, and a commitment to realistic solutions.",
      },
    ],
    approach: {
      heading: "Our Approach",
      body: [
        "Many individuals referred for Oregon DDS behavioral services have already experienced years of fragmented systems, repeated crises, or support plans that never fully addressed the root of the challenges they face.",
        "At Strides, we believe every individual deserves support built around possibility, dignity, and meaningful progress. Our role is not simply to react to difficult moments — it is to help build safer, more sustainable systems that allow individuals and the people supporting them to move forward with greater confidence, stability, and connection.",
      ],
    },
    faqs: [
      {
        question: "What is a positive behavior support plan (PBSP)?",
        answer:
          "A positive behavior support plan is an individualized, written plan developed from a functional behavior assessment. It focuses on proactive strategies rather than reaction: skill development, communication supports, environmental modifications, safety planning, crisis prevention, and consistency across caregivers and staff — all designed to be sustainable long-term.",
      },
      {
        question: "What is a functional behavior assessment (FBA)?",
        answer:
          "An FBA is a comprehensive assessment designed to understand the factors influencing behavior — environmental challenges, communication barriers, and support needs impacting daily life. It is the foundation the PBSP is built on, and at Strides it is individualized, collaborative, and focused on practical strategies.",
      },
      {
        question: "What Oregon DDS services does Strides provide?",
        answer:
          "We complete functional behavior assessments, develop positive behavior support plans, and provide ongoing PBSP maintenance and behavioral consultation — including caregiver coaching, coordination with provider teams, crisis prevention support, and help navigating transitions.",
      },
      {
        question: "Which Oregon counties do you serve?",
        answer:
          "Our Oregon DDS services are available in all counties. Spanish- and Amharic-speaking clinicians and ASL clinicians are available.",
      },
      {
        question: "What happens after a PBSP is written?",
        answer:
          "Support needs evolve, so plans should too. Our team reviews progress and outcomes, updates support strategies, coaches caregivers and staff, and collaborates with provider teams as needs, environments, and goals change over time.",
      },
    ],
  },
  {
    slug: "consultation-training",
    title: "Consultation & Training",
    navLabel: "Consultation & Training",
    icon: Activity,
    tagline: "Advanced Behavioral Consultation for Complex Situations",
    summary:
      "Advanced consultation for hospitals, providers, residential programs, and complex behavioral situations.",
    cardCta: "Contact Our Team",
    ctaLabel: "Contact Us for Consultation & Pricing",
    intro: [
      "Some situations require more than traditional outpatient services. When safety concerns escalate, placements become unstable, support teams feel overwhelmed, or medical and behavioral needs begin impacting quality of life, families and providers need experienced professionals capable of stepping into complexity with confidence, structure, and compassion.",
      "At Strides Therapeutic Services, our consultation and training services are designed for individuals with high-acuity and complex support needs across home, hospital, school, residential, and community settings. Our team specializes in helping systems move from crisis management toward long-term stabilization, safety, and meaningful progress.",
    ],
    introImage: "/service-consultation-training.jpg",
    featuresHeading: "What We Offer",
    features: [
      {
        title: "Who We Support",
        body: "We provide consultation and training for a wide range of teams and care settings.",
        items: [
          "Hospitals and medical teams",
          "Families and caregivers",
          "Residential and supported living providers",
          "Schools and educational teams",
          "Case managers and interdisciplinary providers",
          "Community organizations and support staff",
        ],
      },
      {
        title: "Behavioral Consultation",
        body: "Comprehensive behavioral assessment, case review, and individualized support planning designed to improve safety, communication, independence, and overall quality of life.",
      },
      {
        title: "Crisis Stabilization Support",
        body: "Short-term intensive consultation focused on reducing immediate safety concerns, improving environmental supports, and helping teams navigate periods of significant instability or behavioral escalation.",
      },
      {
        title: "Staff & Caregiver Training",
        body: "Hands-on training for families, direct support professionals, schools, and interdisciplinary teams focused on practical implementation, de-escalation, communication strategies, environmental supports, and consistency across care environments.",
      },
      {
        title: "Functional Assessments & Support Planning",
        body: "Development of individualized Functional Assessments, Positive Behavior Support Plans, safety plans, and environmental recommendations tailored to complex behavioral and medical presentations.",
      },
      {
        title: "Interdisciplinary Collaboration",
        body: "Our clinicians work collaboratively with medical providers, psychiatrists, therapists, educators, case managers, and support teams to create cohesive, realistic systems of care around the individual.",
      },
    ],
    differentiators: [
      {
        title: "Expertise in Complexity",
        body: "Our team is experienced in supporting individuals whose needs may extend beyond traditional outpatient behavioral models. We are known for stepping into situations others may view as “too difficult” and building practical paths forward.",
      },
      {
        title: "Clinically Led, Relationship Driven",
        body: "Strides is locally owned and operated by Board Certified Behavior Analysts who remain actively involved in consultation, case conceptualization, and clinical oversight. Meaningful progress requires both advanced clinical expertise and genuine human connection.",
      },
      {
        title: "Real-World Problem Solving",
        body: "We do not believe in rigid, one-size-fits-all plans. Our recommendations are individualized, collaborative, and designed to work within the realities of the individual’s environment, support systems, and daily life.",
      },
      {
        title: "Focused on Quality of Life",
        body: "Our goal is not simply behavioral reduction. We focus on greater safety, improved communication, increased independence, more stable environments, reduced crisis frequency, and better participation in everyday life.",
      },
    ],
    approach: {
      heading: "A Higher Level of Support",
      body: [
        "When situations become complex, families and providers deserve access to teams equipped to think critically, collaborate effectively, and build meaningful solutions.",
        "Our consultation services are individualized based on the level of support, setting, and clinical needs involved. Reach out to discuss your situation and learn more about available services and pricing options.",
      ],
    },
  },
  {
    slug: "social-groups-respite",
    title: "Social Groups & Community Respite",
    seoTitle: "Social Skills Groups & Respite Care — Vancouver WA | Strides",
    navLabel: "Social & Respite",
    icon: Users,
    tagline: "Supportive Community Experiences Designed with Purpose",
    summary:
      "Structured social and respite programming in our East Vancouver center.",
    cardCta: "Learn About Eligibility",
    ctaLabel: "Learn About Eligibility",
    intro: [
      "We believe community programming should be more than simple supervision or unstructured social time. Individuals deserve environments where they can safely participate, build relationships, practice real-world skills, and feel genuinely included.",
      "Our center-based social groups and community respite services are designed to provide structured, supportive opportunities for individuals with developmental, behavioral, and related support needs to engage meaningfully with peers and their community. While these services share a similar philosophy and environment, they are structured differently to meet varying support needs and funding pathways.",
    ],
    introImage: "/service-social-groups.jpg",
    features: [
      {
        title: "Social Groups",
        subtitle: "Structured Peer Connection & Skill Development",
        tag: {
          heading: "4-Hour Groups",
          lines: ["Try 1 for $75", "4 for $240", "10 for $500"],
        },
        body: "Our social groups are designed for individuals who benefit from guided peer interaction, structured activities, and clinically informed social support within a group setting, facilitated by behavioral health professionals.",
        items: [
          "Build friendships and social confidence",
          "Practice communication skills",
          "Strengthen emotional regulation",
          "Increase flexibility and problem-solving",
          "Improve community participation",
          "Develop greater independence in group environments",
        ],
      },
      {
        title: "Community Respite Services",
        subtitle: "Supportive, Structured Respite Using DDA Waiver Funds",
        body: "Community respite provides caregivers with trusted support while individuals participate in structured recreational, social, and community-based activities within a safe, professionally supported environment guided by behavioral health professionals.",
        items: [
          "Social engagement",
          "Communication development",
          "Adaptive skill-building",
          "Emotional regulation",
          "Community participation",
          "Independence and confidence-building",
        ],
      },
    ],
    programs: [
      {
        name: "Summer Respite Program",
        image: "/programs/summer-respite.jpg",
        blurb:
          "Small-group support, structured fun, and meaningful peer connection. DDA funding eligible.",
        details: [
          "June 22 – August 21",
          "Monday – Friday, 8:30 AM – 4:30 PM",
          "Small, thoughtfully matched peer groups",
          "Supervised by trained behavioral health staff",
          "Limited spots — complete intake today",
        ],
      },
    ],
    faqs: [
      {
        question: "Where can I find social skills groups near me in Vancouver, WA?",
        answer:
          "Strides runs structured social skills groups at our East Vancouver center at 204 SE Stonemill Drive, STE 270, Vancouver, WA 98684. Families join us from Vancouver, Camas, Clark County, and the Portland, OR metro. Groups are facilitated by behavioral health professionals — not just supervised free time.",
      },
      {
        question: "How much do social groups cost?",
        answer:
          "Social groups run as 4-hour sessions: try one for $75, buy four for $240, or ten for $500. Call (360) 622-2253 or request an intake to check current group openings.",
      },
      {
        question: "What's the difference between social groups and community respite?",
        answer:
          "Social groups are structured sessions built around guided peer interaction and clinically informed social skill development. Community respite gives caregivers trusted support while individuals take part in structured recreational, social, and community-based activities — and it can be funded through WA DDA waiver funds. Both share the same supportive environment and professional staff.",
      },
      {
        question: "Can DDA waiver funds pay for respite?",
        answer:
          "Yes — our community respite services are structured to use Washington DDA waiver funding. Eligibility depends on the individual's DDA plan, so contact our team at Respite@StridesTherapeutics.com or (360) 622-2253 and we'll help you confirm what applies.",
      },
      {
        question: "What skills do the groups help build?",
        answer:
          "Participants work on friendships and social confidence, communication, emotional regulation, flexibility and problem-solving, community participation, and independence in group settings.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Hover speech-bubble copy for the Our Services cards, keyed by service slug.
// Edit the text below freely — it appears when hovering a card on /services.
// Each entry has an optional `title` and one or more `body` paragraphs.
export type ServiceBubble = {
  title?: string;
  body: string[];
  price?: string; // emphasized price line, e.g. "Flat Fee: $1,495"
  note?: string; // small follow-up note under the price
};

export const SERVICE_BUBBLES: Record<string, ServiceBubble> = {
  "aba-therapy": {
    body: [
      "Our ABA services are individualized, compassionate, and designed to support communication, independence, emotional regulation, social development, and daily living skills across home, clinic, school, and community settings.",
      "As a locally owned, BCBA-operated organization, we combine relationship-centered care with innovative technology and evidence-based practices to deliver meaningful, individualized outcomes for every family we serve.",
    ],
  },
  "wa-dda": {
    body: [
      "Strides provides Washington State Developmental Disabilities Administration (DDA) services designed to help individuals build greater independence, safety, communication, coping, and community connection.",
      "From life skills and caregiver consultation to stabilization and community respite, our clinically led team supports individuals with complex needs through practical, person-centered services that create meaningful progress at home and in everyday life.",
    ],
  },
  "autism-diagnostic-assessments": {
    body: [
      "Get assessed in as little as 2 weeks through our technology-enhanced autism evaluation program, combining experienced clinicians with innovative EarliTec Diagnostics EarliPoint™ technology.",
      "We believe families deserve more than long waitlists, vague answers, and being left to navigate next steps alone. Our multidisciplinary diagnostic team provides clear answers, individualized recommendations, and ongoing support designed to help families move forward with confidence.",
    ],
    price: "Flat Fee: $1,495",
    note: "Comprehensive assessments also available upon consultation.",
  },
  "or-dds": {
    body: [
      "Strides provides Oregon Department of Human Services (DDS) behavioral services designed to improve safety, stability, independence, and quality of life for individuals with intellectual and developmental disabilities.",
      "Through comprehensive Functional Behavior Assessments (FBA), Positive Behavior Support Plans (PBSP), ongoing plan maintenance, and collaborative consultation, our clinically led team helps individuals and support systems build meaningful, sustainable progress.",
    ],
  },
  "consultation-training": {
    body: [
      "Strides provides high-level behavioral consultation, stabilization support, and training services for individuals experiencing significant behavioral, environmental, medical, or placement-related challenges.",
      "Our clinically led team partners with families, hospitals, providers, schools, residential programs, and care teams to develop practical, compassionate solutions for situations requiring advanced behavioral expertise and coordinated support.",
    ],
  },
  "social-groups-respite": {
    body: [
      "Strides offers both structured social groups and center-based community respite services designed to help individuals build confidence, strengthen social and adaptive skills, and participate in meaningful community experiences within a supportive environment.",
      "Led by behavioral health professionals, our programs combine engaging activities with intentional skill-building and individualized support tailored to each participant’s needs.",
    ],
  },
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
export const HOME = {
  badges: [
    "ABA Therapy",
    "Behavioral Consultation",
    "Autism Diagnostic Assessment",
    "Social Skills",
    "Life Skills Training",
  ],
  hero: {
    headline: "Empowering Independence at Every Stage of Life",
    sub: "Growth happens in partnership. We work alongside families to build communication, regulation, and independence through evidence-based care.",
    cta: "Request an Intake",
  },
  weHelp: [
    "families find a path forward.",
    "individuals feel empowered and seen.",
    "individuals communicate their needs.",
  ],
  founder: {
    heading:
      "Compassionate, evidence-based care, owned and operated by local Board Certified Behavior Analysts.",
    body: [
      "At Strides Therapeutic Services, you and your loved one are more than a client — you are part of our community.",
      "Our multidisciplinary team takes a person-centered, holistic approach to care, recognizing that meaningful support is never one-size-fits-all.",
      "To us, compassionate care means every individual feels seen, respected, and supported while making meaningful, measurable progress toward greater independence and quality of life.",
    ],
  },
  ctaCards: [
    {
      title: "Know what service you’re interested in?",
      cta: "Intake Request",
      href: "form" as const,
    },
    {
      title: "Not sure where to start?",
      cta: "Explore Our Services",
      href: "/services" as const,
    },
    {
      title: "Request a call and we’ll walk through the options together.",
      cta: "Contact Us",
      href: "/contact" as const,
    },
  ],
  continuity:
    "Strides offers services that fit most individuals’ needs and funding source options. That means when you no longer need a certain service, you can stay on the Strides team for the next step of your journey.",
};

// Funding sources shown in the scrolling marquee. Drop a logo image into
// /public/funding/ and set its path on `logo` to show the logo instead of the
// text pill, e.g. { name: "PacificSource", logo: "/funding/pacificsource.png" }.
export type FundingSource = { name: string; logo?: string };

export const FUNDING_SOURCES: FundingSource[] = [
  { name: "PacificSource", logo: "/funding/pacificsource.png" },
  { name: "BlueCross BlueShield", logo: "/funding/bluecross.jpg" },
  { name: "Aetna", logo: "/funding/aetna.png" },
  { name: "Cigna", logo: "/funding/cigna.png" },
  { name: "UnitedHealthcare", logo: "/funding/uhc.png" },
  { name: "Kaiser Permanente", logo: "/funding/kaiser.png" },
  { name: "TRICARE", logo: "/funding/tricare.png" },
  { name: "Oregon DHS — Developmental Disabilities Services", logo: "/funding/or-dds.png" },
  { name: "Washington State DSHS — DDA", logo: "/funding/wa-dda.jpg" },
];

export type Testimonial = { quote: string; name: string; location: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Finding Strides felt like finally finding the right fit. Everyone we’ve worked with has been kind, responsive, and genuinely invested in helping our family succeed.",
    name: "Kristina K.",
    location: "Parent",
  },
  {
    quote:
      "What I appreciate most is that they meet people where they’re at. We never felt judged, and the support has been practical and realistic for our everyday life.",
    name: "Haley V.",
    location: "Parent",
  },
  {
    quote:
      "We’ve worked with a lot of providers over the years, and Strides has been by far the easiest to work with. The staff genuinely care and have always made us feel like our family matters.",
    name: "Donna B.",
    location: "Parent",
  },
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const ABOUT = {
  hero: {
    eyebrow: "About Strides",
    headline: "Driven by Purpose. Defined by Progress.",
  },
  story: [
    "Strides Therapeutic Services was built on the belief that individuals deserve more than standardized care, long waitlists, or being told they are “not the right fit.”",
    "Our founders began their careers within large ABA organizations, where they witnessed firsthand how the rise of private equity in behavioral healthcare began shifting priorities away from individualized, community-centered care. At the same time, they saw major gaps in services — individuals outside of traditional autism models, older clients, high-acuity needs, and families navigating complex systems were too often left without meaningful support.",
    "So we built the organization we wished existed. An organization where clinical expertise, compassion, and problem-solving matter more than rigid models. Where care is built around the individual, not the other way around. Where families are met with partnership, honesty, and a team willing to find solutions, even in the most complex situations.",
    "Today, Strides supports over 300 individuals with a growing team of more than 40 dedicated clinicians across Oregon and Washington. While we continue to grow, our mission remains unchanged: provide exceptional, evidence-based care that helps individuals build safer, more connected, and more independent lives.",
  ],
  believe: [
    "We believe meaningful progress happens when individuals feel seen, respected, and genuinely supported.",
    "We believe communities deserve access to high-quality behavioral healthcare regardless of diagnosis, age, or funding source.",
    "We believe evidence-based care should still feel deeply human.",
    "We believe expertise carries a responsibility — not only to provide excellent care today, but to continuously learn, evolve, and help build the next generation of compassionate providers.",
  ],
  whoWeServe: {
    intro: [
      "Strides was founded within the autism community, and that work remains deeply important to us. Over time, our services expanded in response to what our community needed most.",
      "Today, we support children, adolescents, and adults with a wide range of developmental, behavioral, and complex support needs through services including:",
    ],
    services: [
      "ABA Therapy",
      "Behavioral Consultation",
      "Crisis Stabilization & Prevention",
      "Life Skills Services",
      "Parent & Caregiver Support",
      "Community-Based Services",
      "Autism Evaluations",
      "Professional Consultation & Training",
    ],
    close:
      "At intake, we are not asking whether someone fits perfectly into a model. We are asking: how can we help? If barriers exist — clinical, behavioral, logistical, or funding-related — our team works tirelessly to find a path forward.",
  },
  whyDifferent: [
    "Strides is locally owned and operated by Board Certified Behavior Analysts who guide the clinical work, growth, and direction of the organization. That matters to us.",
    "Because the individuals we serve are not numbers, authorizations, or productivity metrics. They are people with families, goals, challenges, strengths, and futures worth investing in.",
    "Our multidisciplinary team approaches care collaboratively and holistically, bringing together evidence-based practice, creativity, compassion, and real-world problem-solving. We are known for stepping into situations others may view as “too complex” and building meaningful support systems around the individual and the people who care for them.",
  ],
  lookingForward: [
    "Our vision is a future where individuals — regardless of diagnosis, age, communication style, or circumstance — receive the care, respect, connection, and opportunity they need to thrive.",
    "We are committed to growing thoughtfully, expanding access to care, strengthening community partnerships, and pushing the field forward through innovation, collaboration, and uncompromising clinical quality.",
    "At Strides, we are not simply providing services. We are building the kind of community we believe every individual deserves to have in their corner.",
  ],
  stats: [
    { value: "300+", label: "Individuals supported" },
    { value: "40+", label: "Dedicated clinicians" },
    { value: "2", label: "States served — OR & WA" },
  ],
  teamClose: [
    "Behind every service at Strides is a team of clinicians, technicians, consultants, mentors, coordinators, and support staff committed to showing up for individuals and families every single day.",
    "We believe exceptional care is built by exceptional people — people who lead with compassion, curiosity, accountability, and a genuine commitment to progress.",
  ],
};

export type TeamMember = {
  name: string;
  credentials: string;
  role: string;
  bio?: string;
  // Optional portrait photo; falls back to a placeholder when not set.
  image?: string;
};

export const FOUNDERS: TeamMember[] = [
  {
    name: "Hannah Schmidt",
    credentials: "M.S., BCBA, LBA",
    role: "Founder | Executive Clinical Director",
    image: "/team/hannah-schmidt.jpg",
    bio: "Hannah is a Board Certified Behavior Analyst with a master’s degree in Psychology and a specialization in Applied Behavior Analysis. Throughout her career, she has worked across clinic, home, school, foster care, and child welfare settings, supporting individuals with a wide range of behavioral and developmental needs. At the heart of Hannah’s work is compassion — she believes meaningful care begins with making individuals and families feel genuinely seen, supported, and valued.",
  },
  {
    name: "Elsie Herring",
    credentials: "M.S., BCBA, LBA",
    role: "Founder | Executive Operations Director",
    image: "/team/elsie-herring.jpg",
    bio: "Elsie is a Board Certified Behavior Analyst with a master’s degree in Psychology and a specialization in Applied Behavior Analysis. Her background spans hospice advocacy, behavioral healthcare, and intensive ABA services across home, clinic, and community settings. Elsie is driven by innovation and clinical excellence, overseeing organizational strategy and leading Strides’ clinical development and research initiatives with a strong focus on mentoring the next generation of clinicians.",
  },
];

export const LEADERSHIP: TeamMember[] = [
  { name: "Ella Avalon", credentials: "M.S., BCBA, LBA", role: "Senior Clinical Supervisor" },
  { name: "Ashley Churchman", credentials: "M.Ed.", role: "Director of Clinical Operations" },
  { name: "Kristin Sharp", credentials: "M.S.", role: "Clinical Supervisor" },
  { name: "Haley Ferguson", credentials: "B.S., LABA", role: "Lead Stabilization Supervisor" },
  { name: "Aidyn Smith", credentials: "B.S.", role: "OIS Instructor Mentor" },
  { name: "Kristina Doering", credentials: "", role: "Operations Manager" },
];

export const PARTNERS: TeamMember[] = [
  { name: "Adam Huillet", credentials: "MD", role: "Developmental Pediatrician" },
  { name: "Jessica Taverniti", credentials: "PsyD, BCBA", role: "Clinical Partner" },
];

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const CONTACT_PAGE = {
  hero: {
    headline: "Let’s Find the Right Support Together",
    sub: "Whether you are looking for ABA therapy, diagnostic services, DDA support, consultation, or community programs, our team is here to help guide the next steps.",
  },
  helpHeading: "How Can We Help?",
  helpSub:
    "Not sure which service is the right fit? Start with our general inquiry form and our team will guide you.",
  closing: {
    heading: "You Don’t Have to Navigate This Alone",
    body: "Families and providers often reach out to us during overwhelming or uncertain moments. Whether you are seeking answers, support, or a more comprehensive approach to care, our team is here to help you understand your options and identify meaningful next steps.",
  },
};

// Long-form SEO content pages (blog / insurance / location guides). Used by
// the sitemap and footer so every new article is discoverable + internally
// linked the moment it ships.
export type Article = {
  path: string;
  label: string; // short label for footer / internal link lists
};

export const ARTICLES: Article[] = [
  {
    path: "/blog/how-much-does-an-autism-evaluation-cost",
    label: "Autism Evaluation Costs",
  },
  {
    path: "/insurance/does-medicaid-cover-aba-therapy",
    label: "Medicaid & ABA Therapy",
  },
  {
    path: "/adult-autism-diagnosis/vancouver-wa",
    label: "Adult Autism Diagnosis",
  },
];
