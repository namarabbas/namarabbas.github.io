import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import SectionWrapper from "../hoc/index.js";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
            >
                <div
                    option={{max: 45, scale: 1, speed: 450}}
                    className={"bg-white rounded-[20px] py-5 px-6 sm:px-12 min-h-[220px] sm:min-h-[280px] flex justify-evenly items-center flex-col hover:shadow-md transition-shadow duration-400"}
                >
                    <img src={icon} alt={title} className={"w-12 h-12 sm:w-16 sm:h-16 object-contain"}/>
                    <h3 className={"text-[#1E293B] text-[16px] sm:text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>);
}
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={"mt-4 text-[#64748B] text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"}
            >
                I'm a highly effective Technical Project Manager with 4+ years of experience
                leading cross-functional teams and driving product delivery for US-based clients.
                Adept at Agile/Scrum methodologies, I leverage data to optimize delivery,
                mitigate risks, and boost client retention. From managing end-to-end Healthcare
                projects to scaling entrepreneurial ventures, I bring a unique blend of technical
                understanding, strategic thinking, and people leadership to every engagement.
            </motion.p>
            <div className={"mt-10 sm:mt-20 flex flex-wrap gap-6 sm:gap-10"}>
                {services.map((service, index) => {
                    return (<ServiceCard key={service.title} index={index} {...service}/>)
                })}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")
