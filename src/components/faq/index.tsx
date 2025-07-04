import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


function Faq() {
  return (
    <div id="faq" className="w-[100%]  lg:mt-[4%] md:mt-[5%] mt-[10%]  flex flex-col items-center justify-center">
      <div className="text-[36px] text-[#004016]  text-center font-semibold">
        Frequently Asked Questions
      </div>
      <div className="lg:w-[60%] w-[85%] lg:mt-[2%] mt-[5%] md:w-[90%] md:mt-[4%]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-[#C5ECFA] rounded-xl p-2">
            <AccordionTrigger className="text-[20px] text-[#004016]">
              What is MyBabu?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              MyBabu is an online platform that connects you with experts to
              help you complete government paperwork accurately and efficiently
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="bg-[#C5ECFA] rounded-xl p-2 mt-[2%]"
          >
            <AccordionTrigger className="text-[20px] text-[#004016]">
              Who are the babus
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              They are experienced professionals with a deep understanding of
              various government procedures. They are not government employees
              but trusted freelancers dedicated to making the process easier for
              you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="bg-[#C5ECFA] rounded-xl p-2 mt-[2%]"
          >
            <AccordionTrigger className="text-[20px] text-[#004016]">
              How do I get started
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              Simply sign up on our platform, submit your request, and get
              matched with the right expert who can guide you through the
              process
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="bg-[#C5ECFA] rounded-xl p-2 mt-[2%]"
          >
            <AccordionTrigger className="text-[20px] text-[#004016]">
              Is my data secure?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              Absolutely. We take your privacy and data security very seriously,
              employing robust security measures to protect your information
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
    </div>
  );
}

export default Faq;
