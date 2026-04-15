import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {EarthCanvas} from "./canvas";
import {slideIn} from "../utils/motion";
import SectionWrapper from "../hoc/index.js";
import {styles} from "../style.js";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send("service_kfy6s4m", "template_zu7gxsl", {
            from_name: form.name, to_name: "Namar Abbas",
            from_email: form.email, to_email: "namarabbas57@gmail.com",
            message: form.message,
        }, "aFCNmuREqibzGvgcg").then(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({name: "", email: "", message: ""});
        }, (error) => {
            setLoading(false);
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
        });
    };

    const inputClass = 'bg-[#F8FAFC] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#94A3B8] text-[#1E293B] text-[14px] sm:text-[16px] rounded-lg outline-none border border-slate-200 font-medium focus:border-[#0F766E]/40 transition-all duration-300';

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 sm:gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-white p-5 sm:p-8 rounded-2xl border border-slate-200'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-8 sm:mt-12 flex flex-col gap-5 sm:gap-8'>
                    <label className='flex flex-col'>
                        <span className='text-[#1E293B] font-medium mb-2 sm:mb-4 text-[14px] sm:text-[16px]'>Your Name</span>
                        <input type='text' name='name' value={form.name} onChange={handleChange}
                            placeholder="What's your good name?" className={inputClass} />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-[#1E293B] font-medium mb-2 sm:mb-4 text-[14px] sm:text-[16px]'>Your email</span>
                        <input type='email' name='email' value={form.email} onChange={handleChange}
                            placeholder="What's your email address?" className={inputClass} />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-[#1E293B] font-medium mb-2 sm:mb-4 text-[14px] sm:text-[16px]'>Your Message</span>
                        <textarea rows={5} name='message' value={form.message} onChange={handleChange}
                            placeholder='What you want to say?' className={inputClass} />
                    </label>
                    <button type='submit'
                        className='bg-[#0F766E] py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white text-[14px] sm:text-[16px] font-bold hover:bg-[#0D6B63] transition-colors duration-300'>
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[280px] sm:h-[350px]'>
                <EarthCanvas/>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
