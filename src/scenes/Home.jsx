import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from "../shared/data";
import HomePageGraphic from '../assets/HomePageGraphic.svg'

const Home = ({setSelctedPage}) => {
  const isDesktop = useMediaQuery("(min-width: 1400px)");


  return (
    <section
    id='home'
    className='gap-16 py-10 md:h-full md:pb-0'
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
      onViewportEnter={() => setSelctedPage(SelectedPage.Home)}
      className="relative gap-10 mx-auto md:mt-28 w-5/6 md:flex md:items-center md:justify-between">
      {
        (isDesktop && (
          <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.2, duration: 0.3 }}
          variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 0.03, x: 0 },
          }}
          className="font-tourney text-[80px] xl:text-[100px] z-0 absolute xl:left-[44rem] lg:left-[32rem] opacity-[0.1] leading-relaxed tracking-wider max-w-[1100px] "><span className="text-blue">SOFTWARE</span><br/>ENGINEER</motion.h4>
        ))
      }
      {/* MAIN HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
          }}
        className="relative flex flex-col items-start p-5 md:mr-10 gap-6">
          <div className="flex">
            <h1 className="font-playfair text-[40px] lg:text-[50px]">
            Hello, I’m <br/> <span className="text-blue">Flutter</span> Developer
          </h1>
          </div>
          <p className="text-base font-poppins max-w-[600px]">
            Passionate Flutter developer with expertise in crafting seamless mobile experiences. Proficient in Flutter and UI/UX design. Ready for any project
          </p>
          <AnchorLink
          className="mt-8">
            <motion.button
            whileHover={{scale: 1.2, duration:0.5, boxShadow: "0px 0px 8px", color:"#eeeeee"}}
            onClick={() => setSelctedPage("contactus")}
            className="px-6 py-2 font-semibold text text-blue border-2 border-blue hover:shadow-md hover:shadow-blue transition duration-500">
              Lit’s Discuss
            </motion.button>
          </AnchorLink>
        </motion.div>
        {/* IMAGE */}
        <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay: 0.5, duration: 0.3 }}
        variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        }}
        src={HomePageGraphic} 
        alt="hero image" 
        className="relative w-[500px] h-[500px]"/>
      </motion.div>
    </section>
  )
}

export default Home