"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/public/asset/team.jpg";
import zigzag from "@/public/asset/zigzag.svg";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Fredoka } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

function page() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close();
    router.push(path);
  };

  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const jobOpenings = [
    {
      id: "bt",
      title: "Behavior Technician (BT)",
      salary: "Minimum USD $20.00/Per Hr. Maximum USD $23.00/Per Hr.",
      description: "Gain rewarding experience with Sunbeam ABA Center...",
      details: `As a Behavior Technician at Sunbeam, you'll have the exciting role of helping children with autism learn, grow, and build communication, socialization, and self-help skills through a form of play-based therapy known as applied behavior analysis (ABA)! In this entry-level position, you'll work one-on-one with kids with autism after receiving our paid training to deliver ABA therapy.`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeDyVZYaAagOz5r_gWkq6B31QV-v1AsTuD4RUQXKV2ucSJMJA/viewform?usp=dialog",
    },
    {
      id: "bcba",
      title: "Board Certified Behavior Analyst (FT BCBA)",
      salary: "Minimum: USD $95,000.00/Per Yr. Maximum: USD $115,000.00/Per Yr.",
      description:
        "Are you a passionate BCBA® looking to make a meaningful difference...",
      details: `Qualifications: \n- Current Board Certified Behavior Analyst (BCBA®) certification\n- Minimum 2 years of experience working with individuals with autism\n- Experience conducting assessments, overseeing treatment plans, and leading teams\n- Reliable transportation, valid driver's license\n- Ability to handle challenging behaviors and a full range of physical movement as required\n\nJob description:\n- Provide oversight and supervision for your team and clients\n- Mentor and support behavior technicians (BTs)\n- Write reports and conduct clinical reviews with funding sources\n- Attend monthly regional meetings for ongoing training and supervision\n- Conduct regular parent/caregiver trainings for family members\n- Ensure program directives from senior clinical team are implemented accurately and timely\n- Deliver individualized, person-centered care rooted in the principles of assent-based treatment`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeOrjdklsdHg9FggIxrq-B6zVKTzPFJx2fIvA6qcJEHgbBniQ/viewform?usp=dialog",
    },
    {
      id: "bcaba",
      title: "Board Certified Assistant Behavior Analyst (BCaBA)",
      salary: "Minimum: USD $61,000 per Yr. Maximum: USD $70,000.00 per Yr.",
      description:
        "If you're looking for a rewarding job working with children...",
      details: `Job Responsibilities:\n- Assist BCBAs with intakes and assessments including completing skills assessments, functional behavior assessments, behavior support plans, and treatment planning.\n- Provide training for behavior technicians upon hire and on an ongoing basis.\n- Provide direct service to clients in the program.\n- Assist with training for parents and caregivers as needed.\n- Meet with RBT staff to provide supervision at least bi-weekly with support of BCBA.\n- Ensure necessary documentation is provided in order to facilitate reimbursement through primary funding sources.\n\nQualifications:\n- BCaBA or in a master's program in behavior analysis\n- Valid CPR and First Aid Certification`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeZgKX5duPDeeWo_UFAMrknby5Ca5J0gda_TNbFwBIA3nj5Nw/viewform?usp=dialog",
    },
    {
      id: "rbt",
      title: "Registered Behavior Technician (RBT)",
      salary: "Minimum $22.50 an hour Maximum $25.50 an hour",
      description: "Work 1:1 with children with autism using ABA strategies...",
      details: `Job Responsibilities:\n- Work 1:1 with children with autism using ABA strategies under supervision of a BCBA\n- Implement individualized treatment plans designed and trained by a BCBA\n- Collect & record data to track client progress\n- Communicate with families & clinical teams to ensure client success\n- Attend scheduled supervisions, team meetings & ongoing training\n\nQualifications:\n- High school diploma (Bachelor’s in Psychology, Education, or related field a plus)\n- Reliable transportation & willingness to travel locally (if required)\n- Ability to actively engage clients during sessions, go from sitting to standing unassisted, and lift 50lbs\n- Experience in ABA therapy, childcare, education, or related field a plus!\n- Ability to pass a background check`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdQ-MCWNUlE4t8IdBHqWpiCinPTEOhHyk7lr7f8oJPMCqdNCg/viewform?usp=dialog",
    },
    {
      id: "bai",
      title: "Behavioral Assistant/Interventionist (BAI)",
      salary: "Minimum USD $20.00/Per Hr. Maximum USD $25.00/Per Hr.",
      description:
        "Join the compassionate team at SunBeam ABA and make a direct impact in the lives of children and adolescents with Autism Spectrum Disorder.",
      details: `As a Behavioral Assistant/Interventionist (BAI), you’ll provide 1:1 support to clients diagnosed with Autism under the supervision of a BCBA. Your role involves implementing individualized treatment plans, supporting skill development, and promoting positive behaviors in the home, school, or clinic setting.
    
    Key Responsibilities:
    - Deliver direct ABA therapy based on behavior plans
    - Implement skill-building and behavior-reduction programs
    - Accurately collect and record behavior data
    - Collaborate with clinical supervisors and team members
    - Attend regular training and supervision sessions
    - Communicate effectively with families and caregivers
    
    Minimum Qualifications:
    - High school diploma or equivalent (Associate’s or Bachelor’s preferred)
    - Experience with autism or behavioral health
    - Strong interpersonal and communication skills
    - Reliable transportation and willingness to travel
    - Ability to work independently under supervision
    - Must pass background and clearance checks
    
    Preferred Qualifications:
    - CPR/First Aid certification
    - Bilingual is a plus
    - Previous ABA or behavioral therapy experience
    
    Schedule & Benefits:
    - Flexible full-time or part-time schedules
    - Consistent weekly hours
    - Ongoing training and opportunities for growth
    - Supportive, collaborative team environment`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdj3C03HWsXpCRVHHwKals7N2frBCfyFFO8E4su-rB9VnfRYQ/viewform?usp=dialog",
    },
  ];

  return (
    <div className=" flex flex-col">
      <div className="flex relative flex-col lg:flex-row py-[100px] h-auto lg:h-screen w-full lg:pt-[90px] lg:py-0 items-center bg-[#eafdff] justify-between">
        <Image
          src={zigzag}
          alt="logo"
          className="absolute -bottom-[5%] w-full rounded-[20px] h-16"
        />
        <div className="px-4 lg:px-28 flex flex-row items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex lg:hidden items-center justify-end w-full lg:w-[600px] h-full "
            >
              <Image
                src={heroImage}
                alt="logo"
                className="rounded-[20px]"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[60px] font-semibold leading-none `}
            >
              Join Our Team
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[18px] lg:text-[20px] text-[#545454]"
            >
              We are hiring- come be a part of an exciting, safe space work
              environment. We offer supervision for RBT’s, BCABa’s in their
              graduate program.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center xl:justify-end w-full lg:w-[600px] h-full "
          >
            <Image src={heroImage} alt="logo" className="rounded-[20px]" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8 py-[70px] lg:py-24 px-4 lg:px-28">
        <p
          className={`${merriweather.variable} font-merriweather text-[36px] lg:text-[42px] text-[#312f30] font-semibold tracking-tight`}
        >
          Current Openings
        </p>
        <div className="flex flex-col gap-16">
          {jobOpenings.map((job) => (
            <div key={job.id} className="flex flex-col gap-4 lg:gap-6">
              <h1 className="font-merriweather text-[25px] lg:text-[25px] tracking-tight leading-none">
                {job.title}
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#545454]">
                {job.salary}
              </p>
              <p className="text-[18px] lg:text-[20px] text-[#545454]">
                {job.description}
              </p>
              {expanded === job.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expanded === job.id ? "auto" : 0,
                    opacity: expanded === job.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[18px] lg:text-[20px] text-[#545454]">
                    {job.details}
                  </p>
                </motion.div>
              )}
              <button
                onClick={() => toggleExpand(job.id)}
                className="text-blue-500 underline text-left"
              >
                {expanded === job.id ? "Read Less" : "Read More"}
              </button>
              <Link target="_blank" href={job.link}>
                <Button>Apply</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
