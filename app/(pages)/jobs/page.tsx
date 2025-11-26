"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/public/asset/jobsimage.jpg";
import jobImage from "@/public/asset/jobsimage2.jpg";
import zigzag from "@/public/asset/zigzag.svg";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Fredoka } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";

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
  const features = [
    {
      title: "Comprehensive health & wellness plans",
      desc: "We offer programs and resources to support your overall health and well-being.",
    },
    {
      title: "Competitive compensation & perks",
      desc: "We are committed to ensuring fair and equitable pay for all employees.",
    },
    {
      title: "Collaborative & inclusive Culture",
      desc: "We value the minds, experiences, and perspectives of people from all walks of life.",
    },
    {
      title: "Career growth & development",
      desc: "We want to empower you with tools, resources, and feedback to help you reach new heights.",
    },
  ];

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

  const clinical = [
    {
      id: "bcba",
      title: "Board Certified Behavior Analyst (BCBA)",
      salary: "Minimum: USD $95,000.00/Per Yr. Maximum: USD $115,000.00/Per Yr.",
      desc:
        "Are you a passionate BCBA® looking to make a meaningful difference...",
      details: `Qualifications: \n- Current Board Certified Behavior Analyst (BCBA®) certification\n- Minimum 2 years of experience working with individuals with autism\n- Experience conducting assessments, overseeing treatment plans, and leading teams\n- Reliable transportation, valid driver's license\n- Ability to handle challenging behaviors and a full range of physical movement as required\n\nJob description:\n- Provide oversight and supervision for your team and clients\n- Mentor and support behavior technicians (BTs)\n- Write reports and conduct clinical reviews with funding sources\n- Attend monthly regional meetings for ongoing training and supervision\n- Conduct regular parent/caregiver trainings for family members\n- Ensure program directives from senior clinical team are implemented accurately and timely\n- Deliver individualized, person-centered care rooted in the principles of assent-based treatment`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeOrjdklsdHg9FggIxrq-B6zVKTzPFJx2fIvA6qcJEHgbBniQ/viewform?usp=dialog",
      tags: ["Experienced", "Full Time", "On site"],
    },
    {
      id: "rbt",
      title: "Registered Behavior Technician (RBT)",
      salary: "Minimum $22.50 an hour Maximum $25.50 an hour",
      desc: "Work 1:1 with children with autism using ABA strategies...",
      details: `Job Responsibilities:\n- Work 1:1 with children with autism using ABA strategies under supervision of a BCBA\n- Implement individualized treatment plans designed and trained by a BCBA\n- Collect & record data to track client progress\n- Communicate with families & clinical teams to ensure client success\n- Attend scheduled supervisions, team meetings & ongoing training\n\nQualifications:\n- High school diploma (Bachelor’s in Psychology, Education, or related field a plus)\n- Reliable transportation & willingness to travel locally (if required)\n- Ability to actively engage clients during sessions, go from sitting to standing unassisted, and lift 50lbs\n- Experience in ABA therapy, childcare, education, or related field a plus!\n- Ability to pass a background check`,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdQ-MCWNUlE4t8IdBHqWpiCinPTEOhHyk7lr7f8oJPMCqdNCg/viewform?usp=dialog",
      tags: ["Experienced", "Full Time", "On site"],
    },
  ];

  // const operational = [
  //   {
  //     title: "Operations Ninja",
  //     desc: "You like to dot your i’s and cross your t’s",
  //     tags: ["Operations", "Admin"],
  //   },
  //   {
  //     title: "People Person",
  //     desc: "You stand out, while blending in",
  //     tags: ["HR", "Culture"],
  //   },
  // ];

  const Card = ({ id, title, desc, tags, salary, details, link }: any) => {
    const isExpanded = expanded === id;
    
    return (
      <div className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition relative ${isExpanded ? 'h-auto' : ''}`}>
        <div className="flex justify-between items-start">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
            <HiOutlineHeart size={18} className="sm:w-5 sm:h-5" />
          </div>
          <HiOutlineArrowRight className="text-gray-400 w-5 h-5 sm:w-[22px] sm:h-[22px]" />
        </div>

        <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg text-gray-800">{title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{desc}</p>

        <div className="flex gap-2 flex-wrap mt-3 sm:mt-4">
          {tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
          >
            {salary && (
              <div className="mb-3">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Salary:</p>
                <p className="text-xs sm:text-sm text-gray-600">{salary}</p>
              </div>
            )}
            {details && (
              <div className="mt-3">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Full Details:</p>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                  {details}
                </div>
              </div>
            )}
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-0 mt-6">
          <Link 
            href={link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-400 text-white w-full sm:w-full py-2 rounded-md text-sm font-medium hover:bg-orange-500 transition text-center"
          >
            Apply Now
          </Link>

          <button 
            onClick={() => toggleExpand(id)}
            className="sm:ml-3 border border-gray-200 px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 transition w-full sm:w-auto"
          >
            {isExpanded ? "Hide Details" : "Details"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" flex flex-col">
      <div className="flex relative flex-col lg:flex-row py-12 sm:py-16 lg:py-[100px] h-auto lg:h-screen w-full lg:pt-[90px] lg:py-0 items-center bg-[#FF9358] justify-between">
        <Image
          src={zigzag}
          alt="logo"
          className="absolute -bottom-[5%] w-full rounded-[20px] h-12 sm:h-16 "
        />
        <div className="px-4 sm:px-6 lg:px-28 flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
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
              className="flex lg:hidden items-center justify-center w-full lg:w-[600px] h-full pt-10"
            >
              <Image
                src={heroImage}
                alt="logo"
                className="rounded-[20px] w-full max-w-md h-[400px] object-cover"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[80px] font-semibold text-[#E6FFA8] leading-none `}
            >
              Join Us
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[18px] lg:text-[25px] font-bold text-white w-full lg:w-[550px]"
            >
              Shape Bright Futures with Us

            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[16px] lg:text-[20px] text-white w-full lg:w-[500px]"
            >
              Be part of a compassionate team dedicated to transforming the lives of children with autism. At Just Kids Autism Center, we believe in empowering our team members to grow professionally while making a meaningful impact in our community.
            </motion.p>
          </motion.div>
          <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="hidden lg:flex items-center justify-center xl:justify-end w-full lg:w-[500px] lg:h-full"
>
  <motion.div
    initial={{ rotate: 3 }}        // default slight tilt
    whileHover={{ rotate: 0 }}       // tilt back on hover
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="inline-block shadow-md rounded-[20px]"
  >
    <Image
      src={heroImage}
      alt="logo"
      className="rounded-[20px] border border-[10px] border-[#FFBF99] lg:h-[500px] object-cover"
    />
  </motion.div>
</motion.div>

        </div>
      </div>

      {/* <div className="flex flex-col gap-6 lg:gap-8 py-[70px] lg:py-24 px-4 lg:px-28">
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
      </div>  */}
    <section className="py-12 sm:py-20 lg:py-[150px] bg-[#f4f7fb]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
      Open Positions
    </h2>
    <div className="w-16 h-1 bg-orange-400 mx-auto mt-2 rounded-full"></div>

    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8 lg:mt-12">
      {/* Clinical Column */}
      <div className="w-full">
        <div className="flex items-center gap-2 mb-4 lg:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
            <HiOutlineHeart size={18} className="sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Clinical Positions
          </h3>
        </div>

        {/* GRID = 1 COL ON MOBILE, 2 ON DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {clinical.map((job, i) => (
            <div
              key={i}
              className="w-full"
            >
              <Card {...job} />
            </div>
          ))}
        </div>
      </div>

      {/* Operational Column (if you want later) */}
      {/* <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <HiOutlineBuildingOffice size={20} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Operational Positions
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {operational.map((job, i) => (
            <div key={i} className="w-[320px] h-[200px]">
              <Card {...job} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  </div>
</section>

    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">

        {/* LEFT SECTION */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Why <span className="text-orange-400">Sunbeam</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
            We are looking for like-minded ABA providers to become a part of our
            growing family who will further our mission by fostering a
            self-sustaining culture of success within the company.
          </p>

          {/* FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-12 mt-8 lg:mt-12">
            {features.map((item, i) => (
              <div key={i} className="relative pl-4">
                {/* Orange left accent line */}
                <span className="absolute left-0 top-1 h-full w-1 bg-orange-300" />

                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE BOX */}
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          <div className="w-full max-w-[500px] h-[300px] sm:h-[350px] lg:h-[500px] bg-[#f7f8fa] rounded-2xl lg:rounded-3xl shadow-[0px_25px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-4">
          <Image
                src={jobImage}
                alt="logo"
                className="rounded-[20px] w-full h-full object-cover"
                priority
              />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute bottom-4 sm:bottom-10 left-2 sm:-left-2 bg-white shadow-xl rounded-xl sm:rounded-2xl px-3 py-3 flex items-start gap-3 border border-gray-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white">
              <HiOutlineUserGroup size={18} className="sm:w-[22px] sm:h-[22px]" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Work = Fun</p>
              <p className="text-gray-500 text-xs sm:text-sm">Join our happy team</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className="hidden mx-auto flex w-full max-w-6xl flex-col items-center gap-8 sm:gap-12 lg:gap-14 py-12 sm:py-16 px-4 sm:px-6 md:flex-row md:items-stretch">
        {/* Left: Photo card */}
        <div className="flex justify-center md:justify-center flex-1 w-full">
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[3/4] rounded-[40px] sm:rounded-[48px] lg:rounded-[56px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)] p-2 sm:p-3">
            <div className="h-full w-full rounded-[36px] sm:rounded-[44px] lg:rounded-[50px] bg-[#F8923D] flex items-center justify-center overflow-hidden">
              <Image
                src="/hero-person.jpg" 
                // replace with your image path, e.g. /public/hero-person.jpg
                alt="Team member sitting by a window"
                width={600}
                height={800}
                className="h-[92%] w-auto object-cover translate-y-3"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Text + quote */}
        <div className="flex-1 max-w-xl space-y-6 sm:space-y-8 text-left w-full">
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[46px] leading-tight font-semibold text-[#071633]">
              Picture Yourself at
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[46px] leading-tight font-semibold text-[#FF914D]">
              Sunbeam
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#415063] max-w-xl">
            Helping children on the autism spectrum and their families is our
            singular focus. This mission is what drives decisions we make every
            day here at Sunbeam.
          </p>

          {/* Testimonial card */}
          <div className=" mt-4 rounded-2xl sm:rounded-[24px] lg:rounded-[32px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] px-5 py-5 sm:px-7 sm:py-6 lg:px-9 lg:py-7 max-w-xl">
            <div className="flex gap-3 sm:gap-4">
              {/* Quote mark + vertical line */}
              <div className="flex flex-col items-center pt-1">
                <div className="text-2xl sm:text-[28px] lg:text-[32px] leading-none text-[#FF914D]">
                  "
                </div>
                <div className="mt-1 h-full w-[2px] rounded-full bg-[#FF914D]" />
              </div>

              {/* Quote text */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#071633]">
                  <span className="font-semibold">
                    Opportunity for growth. Endless learning opportunities.
                  </span>{" "}
                  A safe space for open communication. AKA a job that I look
                  forward to going to every single day.
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#6C7A8F]">
                  — Senior Therapist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default page;
