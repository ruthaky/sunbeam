"use client";

import { Fredoka } from "next/font/google";
import Link from "next/link";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const sections = [
  {
    heading: "Information We Collect",
    body: "We may collect personal information that you voluntarily provide, including:",
    bullets: [
      "Name",
      "Email address",
      "Phone number",
      "Mailing address",
      "Insurance information",
      "Information submitted through contact forms",
      "Employment application information",
      "Any other information you choose to provide",
    ],
    followUp: "We may also automatically collect certain technical information, including:",
    followUpBullets: [
      "IP address",
      "Browser type",
      "Device information",
      "Pages visited",
      "Date and time of website visits",
      "Cookies and similar technologies",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information we collect to:",
    bullets: [
      "Respond to inquiries and requests",
      "Schedule appointments and consultations",
      "Provide Applied Behavior Analysis (ABA) services",
      "Communicate regarding services, scheduling, and billing",
      "Process employment applications",
      "Improve our website and services",
      "Comply with legal and regulatory requirements",
      "Protect the security of our systems",
    ],
  },
  {
    heading: "Protected Health Information (PHI)",
    body: "As a healthcare provider, Sunbeam Center complies with the Health Insurance Portability and Accountability Act (HIPAA). If you become a client of Sunbeam Center, your Protected Health Information (PHI) will be collected, maintained, and safeguarded in accordance with applicable federal and state privacy laws. Our Notice of Privacy Practices provides additional information regarding the use and disclosure of PHI.",
  },
  {
    heading: "Cookies and Website Analytics",
    body: "Our website may use cookies and similar technologies to improve user experience, analyze website traffic, and enhance website functionality. You may disable cookies through your browser settings; however, some website features may not function properly.",
  },
  {
    heading: "How We Share Information",
    body: "Sunbeam Center does not sell or rent your personal information. We may share information only when necessary:",
    bullets: [
      "With healthcare providers involved in your care (when authorized)",
      "With insurance companies for billing purposes",
      "With service providers who assist in operating our business",
      "To comply with applicable laws, court orders, or legal obligations",
      "To protect the safety, rights, or property of Sunbeam Center, our clients, or others",
    ],
    followUp:
      "All third-party service providers are required to maintain appropriate safeguards for your information.",
  },
  {
    heading: "SMS Communications",
    body: "If you choose to receive text messages from Sunbeam Center, you consent to receive SMS communications related to our services. These messages may include:",
    bullets: [
      "Appointment reminders",
      "Scheduling updates",
      "Intake and onboarding communications",
      "Employment-related updates",
      "Service notifications",
      "General customer support communications",
    ],
    followUp:
      "Message frequency may vary. Message and data rates may apply depending on your mobile carrier. You may opt out of receiving SMS messages at any time by replying STOP to any message. For assistance, reply HELP or contact us at 971-277-4483.",
  },
  {
    heading: "SMS Consent",
    body: "Your consent to receive SMS messages is voluntary and is not required to receive services from Sunbeam Center.",
  },
  {
    heading: "Privacy of Mobile Information",
    body: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors who provide support services (such as messaging platforms or customer service providers) is permitted only as necessary to operate our messaging services. These providers are required to maintain the confidentiality and security of your information.",
  },
  {
    heading: "Data Security",
    body: "We use reasonable administrative, technical, and physical safeguards designed to protect your personal information against unauthorized access, disclosure, alteration, or destruction. While we strive to protect your information, no method of electronic transmission or storage is completely secure.",
  },
  {
    heading: "Your Privacy Rights",
    body: "You may request to:",
    bullets: [
      "Access your personal information",
      "Correct inaccurate information",
      "Update your information",
      "Request deletion of information where permitted by law",
      "Withdraw consent for certain communications",
    ],
    followUp:
      "To submit a request, please contact us through email: admin@sunbeamcenter.com.",
  },
  {
    heading: "Children's Privacy",
    body: "Our website is not intended for children under the age of 13. We do not knowingly collect personal information directly from children through our website without appropriate parental consent.",
  },
  {
    heading: "Third-Party Links",
    body: "Our website may contain links to third-party websites. Sunbeam Center is not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing personal information.",
  },
  {
    heading: "Changes to This Privacy Policy",
    body: "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPolicySection() {
  return (
    <div className="w-full px-5 py-20">
      <div className="pt-8 lg:pt-20 lg:px-28 mx-auto max-w-5xl">
        <h1
          className={`${merriweather.variable} font-merriweather text-[#312f30] text-3xl sm:text-[36px] lg:text-[48px] font-semibold mb-3`}
        >
          Privacy Policy
        </h1>
        <p className="text-[#545454] text-[16px] lg:text-[18px] mb-8">
          Effective Date: July 28, 2026
        </p>

        <p className="text-[#545454] text-[16px] lg:text-[18px] mb-10 leading-relaxed">
          At Sunbeam Center INC (&ldquo;Sunbeam Center,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;), we are committed to protecting your privacy and maintaining the
          confidentiality of your personal information. This Privacy Policy explains how we
          collect, use, disclose, and protect information obtained through our website,{" "}
          <a
            href="https://www.sunbeamaba.org"
            className="text-primary underline underline-offset-2"
          >
            www.sunbeamaba.org
          </a>
          , and through our services. By accessing or using our website, you agree to the
          practices described in this Privacy Policy.
        </p>

        <div className="space-y-8 lg:space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#312f30] mb-3">
                {section.heading}
              </h2>
              <p className="text-[#545454] text-[16px] lg:text-[18px] leading-relaxed">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="list-disc pl-6 mt-3 space-y-1 text-[#545454] text-[16px] lg:text-[18px]">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.followUp && (
                <p className="text-[#545454] text-[16px] lg:text-[18px] leading-relaxed mt-3">
                  {section.followUp}
                </p>
              )}
              {section.followUpBullets && (
                <ul className="list-disc pl-6 mt-3 space-y-1 text-[#545454] text-[16px] lg:text-[18px]">
                  {section.followUpBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="bg-[#f3f9f3] border border-gray-200 rounded-[10px] p-6">
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#312f30] mb-3">
              Contact Us
            </h2>
            <p className="text-[#545454] text-[16px] lg:text-[18px] leading-relaxed mb-4">
              If you have questions regarding this Privacy Policy or your personal information,
              please contact us:
            </p>
            <p className="text-[#545454] text-[16px] lg:text-[18px] leading-relaxed">
              Sunbeam Center INC
              <br />
              274 Warner Milne Rd.
              <br />
              Oregon City, OR 97045
              <br />
              Phone: 971-277-4483
              <br />
              Website:{" "}
              <a
                href="https://www.sunbeamaba.org"
                className="text-primary underline underline-offset-2"
              >
                www.sunbeamaba.org
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:admin@sunbeamcenter.com"
                className="text-primary underline underline-offset-2"
              >
                admin@sunbeamcenter.com
              </a>
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="text-primary underline underline-offset-2 text-[16px] lg:text-[18px]"
            >
              Back to Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
