import React from 'react'
import {motion} from "framer-motion";
import SectionWrapper from "../hoc/index.js";
import {technologies} from "../constants/index.js";
import {textVariant, fadeIn} from "../utils/motion.js";
import {styles} from "../style.js";

const SkillTag = ({name, index}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", 0.05 * index, 0.75)}
            className="px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 hover:border-[#0F766E]/30 hover:shadow-sm transition-all duration-300 cursor-default"
        >
            <span className="text-[#334155] text-[13px] sm:text-[15px] font-medium">{name}</span>
        </motion.div>
    );
};

const SkillCategory = ({title, skills, startIndex, accentColor}) => (
    <div>
        <h3 className="text-[#1E293B] text-[18px] sm:text-[22px] font-bold mb-4 sm:mb-5 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{backgroundColor: accentColor}} />
            {title}
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((tech, index) => (
                <SkillTag key={tech.name} name={tech.name} index={startIndex + index}/>
            ))}
        </div>
    </div>
);

const Tech = () => {
    const methodologies = technologies.filter(t => t.category === "methodology");
    const tools = technologies.filter(t => t.category === "tool");
    const competencies = technologies.filter(t => t.category === "competency");

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My toolkit</p>
                <h2 className={styles.sectionHeadText}>Skills & Tools.</h2>
            </motion.div>
            <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-10">
                <SkillCategory title="Methodologies" skills={methodologies} startIndex={0} accentColor="#0F766E"/>
                <SkillCategory title="Tools & Platforms" skills={tools} startIndex={methodologies.length} accentColor="#3B82F6"/>
                <SkillCategory title="Core Competencies" skills={competencies}
                               startIndex={methodologies.length + tools.length} accentColor="#D97706"/>
            </div>
        </>
    );
};

export default SectionWrapper(Tech, '')
