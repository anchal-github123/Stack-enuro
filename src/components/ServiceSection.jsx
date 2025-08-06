import HeadingLine from "./HeadingLine"
import ServiceCardSection from "./ServiceCardSection"
export default function ServiceSection() {
  return (
     <div className="container flex flex-col gap-4 " id="Service_Section">
         <HeadingLine text="IT Services" />
    <ServiceCardSection data="IT"></ServiceCardSection>
   <HeadingLine text="Other Services" />
  <ServiceCardSection data="Other"></ServiceCardSection>
</div>
  )
}
