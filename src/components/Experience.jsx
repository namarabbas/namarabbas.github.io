import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css"
import {styles} from "../style.js";
import {experiences} from "../constants/index.js";
import SectionWrapper from "../hoc/index.js";
import {textVariant} from "../utils/motion.js";

const ExperienceCard = ({experience}) => {
    return (<VerticalTimelineElement
        contentStyle={{background: "#FFFFFF", color: "#1E293B", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)"}}
        contentArrowStyle={{borderRight: "7px solid #E2E8F0"}}
        date={experience.date}
        iconStyle={{background: experience.iconBg, boxShadow: "0 0 0 3px #E2E8F0"}}
        icon={
            <div className={"flex justify-center items-center w-full h-full"}>
                <img className={"w-[60%] h-[60%] object-contain"} src={experience.icon} alt={experience.company_name}/>
            </div>
        }
    >
        <div>
            <h3 className={"text-[#1E293B] text-[18px] sm:text-[24px] font-bold"}>{experience.title}</h3>
            <p className={"text-[#0F766E] text-[14px] sm:text-[16px] font-semibold"} style={{margin: 0}}>{experience.company_name}</p>
        </div>
        <ul className={"mt-5 list-disc ml-5 space-y-2"}>
            {experience.points.map((point, index2) => {
                return (<li key={index2} className={"text-[#64748B] text-[13px] sm:text-[14px] pl-1 tracking-wider"}>{point}</li>)
            })}
        </ul>
    </VerticalTimelineElement>);
}
const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>
            <div className={"mt-10 sm:mt-20 flex flex-col"}>
                <VerticalTimeline lineColor="#E2E8F0">
                    {experiences.map((experience, index) => {
                        return <ExperienceCard key={index} experience={experience}/>
                    })}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "work");
