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
};

export type Differentiator = { title: string; body: string };

export type Program = {
  name: string;
  blurb: string;
  details: string[];
};

export type Service = {
  slug: string;
  title: string;
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
  features?: FeatureBlock[];
  featuresHeading?: string;
  differentiators?: Differentiator[];
  approach?: { heading: string; body: string[] };
  programs?: Program[];
};

export const SERVICES: Service[] = [
  {
    slug: "aba-therapy",
    title: "ABA Therapy",
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
  },
  {
    slug: "wa-dda",
    title: "WA DDA Services",
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
  },
  {
    slug: "autism-diagnostic-assessments",
    title: "Autism Diagnostic Assessments",
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
    featuresHeading: "What Is EarliPoint?",
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
  },
  {
    slug: "or-dds",
    title: "Oregon DDS Services",
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
    features: [
      {
        title: "Social Groups",
        subtitle: "Structured Peer Connection & Skill Development",
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
      {
        name: "Summer Social Group",
        blurb:
          "Four-hour groups built around structured activities and social skill-building.",
        details: [
          "June 22 – August 21",
          "Morning 8:30 AM – 12:30 PM · Afternoon 12:30 PM – 4:30 PM",
          "Try 1 for $75 · 4 for $240 · 10 for $500",
          "Designed for consistency and relationship building",
          "Limited spots — complete intake today",
        ],
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
export type ServiceBubble = { title?: string; body: string[] };

export const SERVICE_BUBBLES: Record<string, ServiceBubble> = {
  "aba-therapy": {
    title: "Evidence-Based Care for Meaningful Growth",
    body: [
      "Our ABA services are individualized, compassionate, and designed to support communication, independence, emotional regulation, social development, and daily living skills across home, clinic, school, and community settings.",
      "As a locally owned, BCBA-operated organization, we combine relationship-centered care with innovative technology and evidence-based practices to deliver meaningful, individualized outcomes for every family we serve.",
    ],
  },
  "wa-dda": {
    body: ["Life skills, respite, and stabilization for WA DDA participants."],
  },
  "autism-diagnostic-assessments": {
    body: ["Faster autism evaluations — answers in as little as 2 weeks."],
  },
  "or-dds": {
    body: ["FBAs, Positive Behavior Support Plans, and ongoing consultation."],
  },
  "consultation-training": {
    body: ["Expert consultation for hospitals, providers, and complex cases."],
  },
  "social-groups-respite": {
    body: ["Structured social groups and community respite in East Vancouver."],
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
    "adults feel empowered and seen.",
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

export const FUNDING_SOURCES = ["PacificSource", "BlueCross BlueShield"];

// Placeholder testimonials — replace with real client quotes when available.
export type Testimonial = { quote: string; name: string; location: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Strides team met us exactly where we were. For the first time, we felt like someone actually understood our son and had a real plan to help him.",
    name: "Parent of an ABA client",
    location: "Vancouver, WA",
  },
  {
    quote:
      "After years of being told our situation was “too complex,” Strides stepped in with patience and a plan. The difference in stability has been life-changing.",
    name: "Residential care coordinator",
    location: "Portland, OR",
  },
  {
    quote:
      "Fast, clear, and genuinely supportive. The diagnostic process gave us answers in weeks instead of years, and we never felt left to figure it out alone.",
    name: "Parent, autism evaluation",
    location: "Clark County, WA",
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
};

export const FOUNDERS: TeamMember[] = [
  {
    name: "Hannah Schmidt",
    credentials: "M.S., BCBA, LBA",
    role: "Founder | Executive Clinical Director",
    bio: "Hannah is a Board Certified Behavior Analyst with a master’s degree in Psychology and a specialization in Applied Behavior Analysis. Throughout her career, she has worked across clinic, home, school, foster care, and child welfare settings, supporting individuals with a wide range of behavioral and developmental needs. At the heart of Hannah’s work is compassion — she believes meaningful care begins with making individuals and families feel genuinely seen, supported, and valued.",
  },
  {
    name: "Elsie Herring",
    credentials: "M.S., BCBA, LBA",
    role: "Founder | Executive Operations Director",
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
  { name: "Adam Huelit", credentials: "MD", role: "Developmental Pediatrician" },
  { name: "Jessica T.", credentials: "PsyD, BCBA", role: "Clinical Partner" },
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
