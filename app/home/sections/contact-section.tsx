// import { IconHome } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className="flex h-screen w-full bg-secondary">
      <div className="flex flex-col gap-6 w-1/3 h-full bg-primary px-12 py-20">
        <div className="flex flex-col gap-2 text-[50px] text-white font-normal tracking-tight leading-none ">
          Contact   Details
          {/* <div className="h-[4px] w-[200px] bg-secondary "></div> */}
        </div>
        <div className="text-[25px] text-white tracking-tight leading-none">
          Whether it's working with rice farmers in
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <div></div>
            <div className="text-white font-light text-[20px]">
              523 Sylvan Ave, 5th floor Mountain View, CA 9404USA
            </div>
          </div>
          <div>
            <div></div>
            <div className="text-white font-light text-[20px]">
              523 Sylvan Ave, 5th floor Mountain View, CA 9404USA
            </div>
          </div>
          <div>
            <div></div>
            <div className="text-white font-light text-[20px]">
              523 Sylvan Ave, 5th floor Mountain View, CA 9404USA
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-2/3 h-full px-12 py-20">
        <div className="flex flex-col gap-2 text-[50px] text-white font-normal tracking-tight leading-none ">
          Get in touch
          {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
        </div>
        <div className="text-[25px] text-white tracking-tight leading-none">
          Whether it's working with rice farmers in
        </div>
        <div className="flex flex-col gap-4">
          <div>
            {" "}
            <label
              htmlFor="applicantAdress"
              className="text-[20px] font-light block text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="applicantAdress1"
              className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            />
          </div>
          <div>
            {" "}
            <label
              htmlFor="applicantAdress"
              className="text-[20px] font-light block text-white mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="applicantAdress1"
              className="w-full border-b border-white bg-transparent text-white  py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            />
          </div>
          <div>
            {" "}
            <label
              htmlFor="applicantAdress"
              className="text-[20px] font-light block text-white mb-2"
            >
              Message
            </label>
            <textarea
              // type="text"
              id="applicantAdress1"
              className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[100px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            ></textarea>
          </div>
          <div className="w-full flex h-auto justify-end">
            <Button variant="contact">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
