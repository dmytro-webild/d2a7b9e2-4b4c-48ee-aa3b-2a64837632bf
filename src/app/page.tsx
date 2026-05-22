"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "What We Do",
          id: "#services",
        },
        {
          name: "How It Works",
          id: "#how-it-works",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Partners",
          id: "#network",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="TareaGlobal"
      button={{
        text: "Book a Free Call",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="TareaGlobal"
      description="We help Universities build global partnerships."
      buttons={[
        {
          text: "See How It Works",
          href: "#how-it-works",
        },
        {
          text: "Book a 20-Min Call",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3dlZXztnGOXm3l3IQqJ6oej2t/uploaded-1779470380379-mfqwdkcs.jpg",
          imageAlt: "university campus architecture",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3dlZXztnGOXm3l3IQqJ6oej2t/uploaded-1779471600387-goawmqe4.jpg",
          imageAlt: "international students mobility",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3dlZXztnGOXm3l3IQqJ6oej2t/uploaded-1779470578839-3s2xfmf5.jpg",
          imageAlt: "faculty academic exchange",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-view-futuristic-earth_23-2151100372.jpg",
          imageAlt: "global network connection",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3dlZXztnGOXm3l3IQqJ6oej2t/uploaded-1779471026973-klyuptds.jpg",
          imageAlt: "student mobility graduate",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E3dlZXztnGOXm3l3IQqJ6oej2t/uploaded-1779471540902-gudim09o.jpg",
          imageAlt: "global academic strategy",
        },
      ]}
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "47+",
          title: "Partner Universities",
          items: [
            "Top-tier institutions",
            "Diverse global locations",
            "Active collaborative network",
          ],
        },
        {
          id: "m2",
          value: "18+",
          title: "Countries",
          items: [
            "Expanding global reach",
            "Strategic market access",
            "International footprint",
          ],
        },
        {
          id: "m3",
          value: "1200+",
          title: "Students Placed",
          items: [
            "Life-changing experiences",
            "Academic mobility focus",
            "Successful student placements",
          ],
        },
        {
          id: "m4",
          value: "8+",
          title: "Years Experience",
          items: [
            "Industry proven expertise",
            "Deep domain knowledge",
            "Long-term partnership trust",
          ],
        },
      ]}
      title="Our Global Reach"
      description="Building momentum through measurable impact and strategic global partnerships."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Partnership Development",
          descriptions: [
            "Identifying strategic fit for academic growth.",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/people-social-behavior-patterns_1284-4217.jpg",
          imageAlt: "partnership handshake business",
        },
        {
          id: "s2",
          title: "MOU Support",
          descriptions: [
            "Streamlining legal and administrative frameworks.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-sitting-desk-conference-hall-working-with-papers-laptop_549566-404.jpg",
          imageAlt: "MOU signed contract",
        },
        {
          id: "s3",
          title: "Student Mobility",
          descriptions: [
            "Facilitating exchange and credit programs.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/shadow-worried-uniform-black-earth_1134-1302.jpg",
          imageAlt: "student mobility international",
        },
        {
          id: "s4",
          title: "Faculty Exchange",
          descriptions: [
            "Supporting research and teaching collaborations.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-people-talking-while-using-laptop-library_74855-1657.jpg",
          imageAlt: "faculty research exchange",
        },
        {
          id: "s5",
          title: "Strategy Development",
          descriptions: [
            "Tailored roadmaps for global presence.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-pawns-world-continents_23-2149407880.jpg",
          imageAlt: "internationalization strategy board",
        },
        {
          id: "s6",
          title: "Network Access",
          descriptions: [
            "Exclusive connections to vetted partners.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/city-committed-education-collage-concept_23-2150062207.jpg",
          imageAlt: "network access connection",
        },
      ]}
      title="What We Do"
      description="Comprehensive services to accelerate your internationalisation goals."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "w1",
          title: "1. Discovery Call",
          descriptions: [
            "A 30-minute introductory sync.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-mobile-phone_107420-84784.jpg",
          imageAlt: "discovery business call",
        },
        {
          id: "w2",
          title: "2. Needs Assessment",
          descriptions: [
            "In-depth analysis of university requirements.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-depository-workers-analyzing-bureaucracy-record-working-overhours-accountancy-report-arhive-room-businesspeople-checking-administrative-documents-corporate-repository_482257-71606.jpg",
          imageAlt: "needs assessment analysis",
        },
        {
          id: "w3",
          title: "3. Partner Matching",
          descriptions: [
            "Curated list and vetting process.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/puzzle-background-with-missing-piece_23-2149299128.jpg",
          imageAlt: "partner matching puzzle",
        },
        {
          id: "w4",
          title: "4. Agreement & Launch",
          descriptions: [
            "Closing agreements for ongoing growth.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-model-posing-with-books-earth-globe-red-wall_114579-56011.jpg",
          imageAlt: "agreement launch growth",
        },
      ]}
      title="How It Works"
      description="Our seamless 4-step framework."
    />
  </div>

  <div id="about" data-section="about">
      <TeamCardTen
      useInvertedBackground={false}
      title="Our Leadership"
      tag="About Us"
      membersAnimation="slide-up"
      members={[
        {
          id: "t1",
          name: "Elena Rodriguez, Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/children-expressions_23-2148010400.jpg",
          imageAlt: "professional founder woman",
        },
        {
          id: "t2",
          name: "Dr. Marcus Chen, Partner Director",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-86008.jpg",
          imageAlt: "professional partner director",
        },
        {
          id: "t3",
          name: "Sarah Jenkins, Ops Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/focused-male-adult-student-doing-research-library_74855-1903.jpg",
          imageAlt: "operations lead portrait",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="TGlobal transformed our international reach within months. Their network is unmatched in precision."
      rating={5}
      author="International Director, University of Oxford"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-college-students-communicating-with-their-professor-hallway_637285-9249.jpg",
          alt: "university director testimonial",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-library_23-2149204737.jpg",
          alt: "international coordinator avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-people-therapy_23-2148928792.jpg",
          alt: "university dean portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-brunette-woman-holding-pen_1098-3146.jpg",
          alt: "brunette woman holding a pen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-students-classroom_329181-13026.jpg",
          alt: "Young students in the classroom",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="network" data-section="network">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "LSE",
        "Sorbonne",
        "TU Berlin",
        "HKU",
        "Monterrey",
        "Cairo University",
        "Kyoto University",
      ]}
      title="Global Partner Network"
      description="Trusted by leading institutions globally."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Ready to get started?"
      title="Book a Free Call"
      description="Select a time for a 20-minute needs assessment."
      buttons={[
        {
          text: "Connect with an Expert",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Partnerships",
              href: "#network",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Mobility",
              href: "#services",
            },
            {
              label: "Consulting",
              href: "#services",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Insights",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="TGlobal"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
