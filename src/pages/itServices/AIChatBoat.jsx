import AIChatboatimg from '../../assets/Lottieimage/Chatbot With Character Animation.json'
import HeroSection from '../../components/HeroSection'
import ServiceSection from '../../components/ServiceSection'
export default function AIChatBoat() {
  return (
   <section>
          <HeroSection text1="Smarter Conversations" text2="with AI-Powered Chatbots" img={AIChatboatimg}/>
         <ServiceSection/>
      </section>
  )
}
