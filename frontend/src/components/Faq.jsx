import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full p-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a lab-grown diamond?</AccordionTrigger>
        <AccordionContent>
          A lab-grown diamond, is a diamond that is created in a laboratory
          setting through a process called chemical vapor deposition (CVD) or
          high-pressure high-temperature (HPHT) methods. These diamonds have the
          same chemical composition and crystal structure as natural diamonds,
          but they are manufactured under controlled conditions rather than
          being mined from the earth.A lab-grown diamond, is a diamond that is
          created in a laboratory setting through a process called chemical
          vapor deposition (CVD) or high-pressure high-temperature (HPHT)
          methods. These diamonds have the same chemical composition and crystal
          structure as natural diamonds, but they are manufactured under
          controlled conditions rather than being mined from the earth.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Are lab-grown diamonds real diamonds?
        </AccordionTrigger>
        <AccordionContent>
          Yes, lab-grown diamonds are real diamonds. They have the same chemical
          and physical properties as natural diamonds, with the main difference
          being their origin. Natural diamonds are formed deep within the earth
          over millions of years, whereas lab-grown diamonds are created in a
          controlled environment in a matter of weeks or months.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How can you distinguish between lab-grown and natural diamonds?
        </AccordionTrigger>
        <AccordionContent>
          For a naked eye it is impossible to distinguish between Lab-Grown
          Diamond & Natural Diamond. Even trained and experienced gemologists
          cannot make out the difference. There are third party gemological
          institutes like GIA, IGI, SGL, etc. which provide certification for
          diamonds and jewellery. These institutes are internationally
          recognised and are a go to for most jewellers and consumers.
          Additionally, we only use lab-grown diamonds (solitaires of 1carat or
          more) which are laser-inscribed with a unique identification number
          which corresponds to a IGI or GIA certificate.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
