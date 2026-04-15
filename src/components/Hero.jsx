import React from 'react'
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {ComputersCanvas} from "./canvas/index.js";

const Hero = () => {
    return (
        <section className={"relative w-full h-screen min-h-[600px] max-h-[1000px] mx-auto"}>
            <div className={"hero-glow"} />
            <div
                className={`${styles.paddingX}
                 absolute inset-0 top-[100px] sm:top-[120px]
                  max-w-7xl mx-auto flex flex-row items-start gap-3 sm:gap-5 z-10`}>
                <div className={"flex flex-col justify-center items-center mt-5"}>
                    <div className={"w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0F766E]"}/>
                    <div className={"w-1 h-40 sm:h-80 violet-gradient"}/>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span
                        className={"text-[#0F766E]"}>Namar Abbas</span></h1>
                    <p className={`${styles.heroSubText} mt-2`}>
                        Driving on-time product delivery <br className={"sm:block hidden"}/> through Agile leadership &
                        data-driven decisions.
                    </p>
                </div>
            </div>
            <ComputersCanvas/>
            <div className={"absolute xs:bottom-10 bottom-20 sm:bottom-32 w-full flex justify-center items-center z-10"}>
                <a href={"#about"}>
                    <div
                        className={"w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#0F766E]/30 flex justify-center items-start p-2"}>
                        <motion.div
                            animate={{y: [0, 24, 0]}}
                            transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
                            className={"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0F766E] mb-1"}
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
