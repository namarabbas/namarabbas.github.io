import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import SectionWrapper from "../hoc/index.js";
import {projects} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";

const cardAccents = [
    "border-t-[#0F766E]",
    "border-t-[#3B82F6]",
    "border-t-[#D97706]",
    "border-t-[#0F766E]",
    "border-t-[#D97706]",
    "border-t-[#3B82F6]",
];

const metricColors = [
    "text-[#0F766E]",
    "text-[#3B82F6]",
    "text-[#D97706]",
    "text-[#0F766E]",
    "text-[#D97706]",
    "text-[#3B82F6]",
];

const AchievementCard = ({index, name, description, tags, metric, metricLabel}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{max: 45, scale: 1, speed: 450}}
                className={`bg-white p-5 rounded-2xl sm:w-[360px] w-full border border-slate-200 border-t-[3px] ${cardAccents[index % cardAccents.length]} hover:shadow-md transition-all duration-400`}
            >
                <div className="w-full h-[200px] rounded-xl bg-[#F8FAFC] flex flex-col items-center justify-center">
                    <span className={`text-[60px] font-black leading-none ${metricColors[index % metricColors.length]}`}>{metric}</span>
                    <span className='text-[#94A3B8] text-[13px] font-medium mt-2 text-center px-4'>{metricLabel}</span>
                </div>

                <div className='mt-5'>
                    <h3 className='text-[#1E293B] font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-[#64748B] text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Delivering results</p>
                <h2 className={styles.sectionHeadText}>Key Achievements.</h2>
            </motion.div>
            <div className={"w-full flex"}>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={"mt-3 text-[#64748B] text-[17px] max-w-3xl leading-[30px]"}
                >
                    These achievements highlight the measurable impact I've driven
                    across projects and organizations. Each reflects my commitment to
                    on-time delivery, process optimization, risk mitigation, and
                    client satisfaction.
                </motion.p>
            </div>
            <div className={"mt-20 flex flex-wrap gap-7"}>
                {projects.map((project, index) => (
                    <AchievementCard key={"achievement-" + index} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "")
