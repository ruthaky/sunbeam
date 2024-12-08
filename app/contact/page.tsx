import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div>
      {" "}
      <div className="w-full flex relative text-white h-[400px] text-9xl py-100 bg-cover bg-[url('/asset/coffee.jpg')]">
        <div className="absolute flex flex-col px-12 gap-5  bg-secondary bg-opacity-80 top-0 left-0 h-full w-full justify-center items-center">
          <div className="text-[50px] font-bold text-primary text-center w-[700px]">
            Contact Us
          </div>
          {/* <div className="text-[30px] w-[700px] text-[#eeeeeed6]">
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in{" "}
          </div> */}
        </div>
      </div>
      <div className="flex justify-center h-[] w-full ">
        <div className="flex flex-col gap-6 w-[600px] h-full px-12 py-20">
          {/* <div className="flex flex-col gap-2 text-[50px] text-white font-normal tracking-tight leading-none ">
            Get in touch
          </div> */}
          <div className="text-[25px] text-black tracking-tight leading-none">
            Whether it's working with rice farmers in
          </div>
          <div className="flex flex-col gap-10">
            <div>
              {" "}
              {/* <label
                htmlFor="applicantAdress"
                className="text-[20px] font-light block text-white mb-2"
              >
                Name
              </label> */}
              <input
                type="text"
                id="applicantAdress1"
                className="w-full border-b border-black bg-transparent text-black text-[20px] py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
                required
                placeholder="Name"
              />
            </div>
            <div>
              {" "}
              {/* <label
                htmlFor="applicantAdress"
                className="text-[20px] font-light block text-white mb-2"
              >
                Email
              </label> */}
              <input
                type="text"
                id="applicantAdress1"
                className="w-full border-b border-black bg-transparent text-white text-[20px] py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
                required
                placeholder="Email"
              />
            </div>
            <div>
              {" "}
              {/* <label
                htmlFor="applicantAdress"
                className="text-[20px] font-light block text-white mb-2"
              >
                Message
              </label> */}
              <textarea
                // type="text"
                id="applicantAdress1"
                className="w-full border-b border-black bg-transparent text-white text-[20px] py-2 h-[30px] lg:h-[100px] focus:outline-none focus:border-b-2 focus:border-white"
                required
                placeholder="Message"
              ></textarea>
            </div>
            <div className="w-full flex h-auto justify-end">
              <Button variant="contact">Send</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-1/3 h-full px-12 py-20">
          <div className="flex flex-col gap-2 text-[50px] text-black font-normal tracking-tight leading-none ">
            Contact Details
            {/* <div className="h-[4px] w-[200px] bg-secondary "></div> */}
          </div>
          <div className="text-[25px] text-black tracking-tight leading-none">
            Whether it's working with rice farmers in
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div></div>
              <div className="text-black font-light text-[20px]">
                523 Sylvan Ave, 5th floor Mountain View, CA 9404USA
              </div>
            </div>
            <div>
              <div></div>
              <div className="text-black font-light text-[20px]">
                523 Sylvan Ave, 5th floor Mountain View, CA 9404USA
              </div>
            </div>
            <div>
              <div></div>
              <div className="text-black font-light text-[20px]">
                523 Sylvan Ave, 5th floor Mountain View, CA 9404USA
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-auto  w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.9534897505814!2d55.335644075384316!3d25.272149977662743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzE5LjciTiA1NcKwMjAnMTcuNiJF!5e0!3m2!1sen!2set!4v1733686066525!5m2!1sen!2set"
          width="800"
          height="550"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] lg:h-[500px] "
          // priority
        ></iframe>
      </div>
    </div>
  );
}
