import {
    mobile,
    backend,
    creator,
    web,
    cloudtek,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Agile Delivery",
        icon: web,
    },
    {
        title: "Risk Management",
        icon: backend,
    },
    {
        title: "Client Communication",
        icon: mobile,
    },
    {
        title: "Team Leadership",
        icon: creator,
    },
];

const technologies = [
    { name: "Scrum", category: "methodology" },
    { name: "Kanban", category: "methodology" },
    { name: "SDLC", category: "methodology" },
    { name: "Sprint Planning", category: "methodology" },
    { name: "Jira", category: "tool" },
    { name: "Trello", category: "tool" },
    { name: "Asana", category: "tool" },
    { name: "Confluence", category: "tool" },
    { name: "Git & GitHub", category: "tool" },
    { name: "Bitbucket", category: "tool" },
    { name: "SharePoint", category: "tool" },
    { name: "Slack", category: "tool" },
    { name: "MS Teams", category: "tool" },
    { name: "Scope & Budget Management", category: "competency" },
    { name: "Risk Mitigation", category: "competency" },
    { name: "Stakeholder Management", category: "competency" },
    { name: "Resource Allocation", category: "competency" },
    { name: "Cross-Functional Leadership", category: "competency" },
    { name: "Critical Thinking", category: "competency" },
    { name: "Product Alignment", category: "competency" },
];

const experiences = [
    {
        title: "Technical Project Manager",
        company_name: "CloudTek",
        icon: cloudtek,
        iconBg: "#fff",
        date: "2022 - Present",
        points: [
            "Successfully managed 5+ end-to-end projects for US-based clients, ensuring 100% on-time delivery within scope and budget, contributing to a 15% increase in client retention.",
            "Optimized team performance by refining Scrum practices (stand-ups, retrospectives) and resolving bottlenecks, improving team sprint completion rates by 20% and accelerating project timelines.",
            "Proactively managed project health, identifying and resolving 95% of potential project risks, minimizing delays and maintaining high stakeholder confidence.",
            "Streamlined the customer onboarding process for Healthcare clients (GoPivot, Codoxo), reducing overall transition time by 30% and enhancing customer satisfaction scores by 25%.",
            "Provided focused coaching and mentorship to development teams, leading to improved technical skills and overall project performance.",
        ],
    },
    {
        title: "Director",
        company_name: "GlamWorld Cosmetics (Entrepreneurship)",
        icon: web,
        iconBg: "#E6DEDD",
        date: "2016 - 2022",
        points: [
            "Directed all business operations, including strategic planning to align organizational goals with revenue targets, successfully scaling a university project into a commercial business application.",
            "Led online marketing and social media campaigns and conducted market research to identify profitable opportunities for new product launches and increase brand visibility.",
            "Managed the development and maintenance of the company website, overseeing content creation and ensuring optimal user experience.",
        ],
    },
];

const education = [
    {
        degree: "Bachelors in Computer Science",
        institution: "Virtual University of Pakistan",
        date: "2014 - 2017",
        type: "Degree",
    },
    {
        degree: "Agile Project Management",
        institution: "Google (via Coursera)",
        date: "July 2024",
        type: "Certification",
    },
];

const projects = [
    {
        name: "100% On-Time Delivery",
        description:
            "Managed 5+ end-to-end projects for US-based clients, ensuring all deliveries were within scope and budget. This track record contributed to a 15% increase in client retention at CloudTek.",
        tags: [
            { name: "delivery-excellence", color: "blue-text-gradient" },
            { name: "scope-management", color: "green-text-gradient" },
            { name: "client-retention", color: "pink-text-gradient" },
        ],
        metric: "15%",
        metricLabel: "Client Retention Increase",
    },
    {
        name: "Agile Optimization",
        description:
            "Refined Scrum practices including daily stand-ups, sprint retrospectives, and bottleneck resolution. Drove measurable improvements in team velocity and project delivery timelines.",
        tags: [
            { name: "scrum", color: "blue-text-gradient" },
            { name: "agile", color: "green-text-gradient" },
            { name: "process-improvement", color: "pink-text-gradient" },
        ],
        metric: "20%",
        metricLabel: "Sprint Completion Improvement",
    },
    {
        name: "Proactive Risk Mitigation",
        description:
            "Established robust risk identification and resolution processes across all active projects, maintaining high stakeholder confidence and minimizing delivery delays.",
        tags: [
            { name: "risk-management", color: "blue-text-gradient" },
            { name: "stakeholder-trust", color: "green-text-gradient" },
            { name: "proactive-planning", color: "pink-text-gradient" },
        ],
        metric: "95%",
        metricLabel: "Risks Resolved Proactively",
    },
    {
        name: "Healthcare Client Onboarding",
        description:
            "Streamlined the customer onboarding process for Healthcare industry clients including GoPivot and Codoxo, dramatically reducing transition friction and boosting satisfaction.",
        tags: [
            { name: "healthcare", color: "blue-text-gradient" },
            { name: "onboarding", color: "green-text-gradient" },
            { name: "process-optimization", color: "pink-text-gradient" },
        ],
        metric: "30%",
        metricLabel: "Faster Client Onboarding",
    },
    {
        name: "GlamWorld Cosmetics",
        description:
            "Directed all business operations and strategic planning for a personal entrepreneurship venture, successfully scaling a university project into a fully commercial business application.",
        tags: [
            { name: "entrepreneurship", color: "blue-text-gradient" },
            { name: "strategic-planning", color: "green-text-gradient" },
            { name: "digital-marketing", color: "pink-text-gradient" },
        ],
        metric: "6yr",
        metricLabel: "Business Growth",
    },
    {
        name: "Customer Satisfaction",
        description:
            "Enhanced overall customer satisfaction through focused coaching, mentorship of development teams, and continuous process improvement across multiple projects.",
        tags: [
            { name: "mentorship", color: "blue-text-gradient" },
            { name: "team-leadership", color: "green-text-gradient" },
            { name: "coaching", color: "pink-text-gradient" },
        ],
        metric: "25%",
        metricLabel: "Satisfaction Score Increase",
    },
];

export { services, technologies, experiences, education, projects };
