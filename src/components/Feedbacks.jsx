import React from "react";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion";
import {education} from "../constants";
import {styles} from "../style.js";
import SectionWrapper from "../hoc/index.js";

const EducationCard = ({index, degree, institution, date, type}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl w-full xs:w-[320px] border border-slate-200 hover:shadow-md transition-all duration-400'
    >
        <p className='text-[#0F766E] font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest'>{type}</p>

        <div className="mt-3 sm:mt-4">
            <h3 className='text-[#1E293B] font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30px]'>{degree}</h3>
            <div className='mt-4 sm:mt-5 flex flex-col gap-1'>
                <p className='text-[#334155] font-medium text-[14px] sm:text-[16px]'>{institution}</p>
                <p className='text-[#94A3B8] text-[13px] sm:text-[14px]'>{date}</p>
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className={`mt-8 sm:mt-12 bg-[#F1F5F9] rounded-[20px]`}>
            <div className={`bg-white rounded-2xl ${styles.padding} min-h-[250px] sm:min-h-[300px] border border-slate-100`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Credentials</p>
                    <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-10 sm:pb-14 ${styles.paddingX} flex flex-wrap gap-5 sm:gap-7`}>
                {education.map((item, index) => (
                    <EducationCard key={item.degree} index={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
