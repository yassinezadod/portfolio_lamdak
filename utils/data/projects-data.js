import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Real Estate Management Platform',
        description: "As part of my PFE internship, I developed a platform for managing real estate properties and furniture assets. The back-end was developed with Spring Boot, while the front-end was built with React.js and TypeScript. PostgreSQL was used as the database. I worked on developing features like user management and asset tracking, ensuring the platform was scalable and efficient.",
        tools: ['Spring Boot', 'React.js', 'TypeScript', 'PostgreSQL', 'Git', 'GitHub'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 2,
        name: 'Mobile Claim Management App',
        description: 'During my internship, I designed and developed a mobile application for claim management. I worked on the user interface using Flutter and integrated Firebase for real-time data synchronization. I was responsible for developing authentication systems and ensuring smooth app performance. I used tools like Figma, Git, and GitHub for design and version control.',
        tools: ['Flutter', 'Firebase', 'Dart', 'Figma', 'Git', 'GitHub', 'Postman', 'Insomnia'],
        role: 'Mobile App Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 3,
        name: 'Plant Disease Detection Assistance App',
        description: 'I participated in FEECRA EXPO 2023 at Universiapolis, where I contributed to the innovation of an application designed to assist in the detection of plant diseases. My role involved researching the disease detection algorithms and helping develop the user interface of the application. The project aimed at leveraging technology to support farmers in identifying plant diseases early and taking necessary actions.',
        tools: ['Python', 'Machine Learning', 'Figma', 'Git', 'GitHub'],
        code: '',
        role: 'Software Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Dynamic Consulting Firm Website',
        description: "I developed a dynamic website for a consulting firm during my internship. I worked on both the front-end and back-end using HTML, CSS, JavaScript, PHP, jQuery, and MySQL. I was involved in building the interactive features and handling the database management for the website.",
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery', 'MySQL', 'Git', 'GitHub'],
        code: '',
        demo: '',
        image: crefin,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },