const header = {
  homepage: "",
  title: "AT",
};

const about = {
  name: "Akash Thirumuruganantham",
  role: "Full Stack Developer",
  description:
    "Experienced Full-Stack Developer with a proven track record of designing and implementing robust applications. Specialized in React,Flutter, NodeJs, MongoDb, ExpressJs,(MERN stack) NextJS, SQL, I excel in optimizing performance and delivering scalable solutions. Proficient in Agile methodologies, project leadership, codebase refactoring, and implementing CI/CD pipelines. Strong problem-solving and communication skills contribute to successful project outcomes.",
  resume:
    "https://drive.google.com/file/d/13XOP8BpmlamMapzv9DDFUkvOQMflGujj/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/akash-thirumuruganantham/",
    github: "https://github.com/Akash-2204",
  },
  createdBy: "Created by Akash Thirumuruganantham",
};

const projects = [
  {
    name: "Health Metrics Dashboard",
    description:
      "Designed and developed a scalable health metrics dashboard using React, Node.js, and MongoDB, delivering real-time analytics for healthcare providers. Integrated MongoDB with WebSocket for real-time updates, reducing latency by 25% and improving decision-making with up-to-the-minute insights.",
    stack: ["React", "Node.js", "MongoDB", "WebSocket"],
  },
  {
    name: "GitHub Repository Analytics and Forecasting with LLMs",
    description:
      "Designed and implemented a system leveraging GitHub API, TensorFlow LSTM, and LangChain to enable semantic search, forecast repository metrics, and identify similar issues. Utilized vector embeddings in Elasticsearch for high-accuracy matching.",
    stack: ["GitHub API", "TensorFlow", "LSTM", "LangChain", "Elasticsearch"],
  },
  {
    name: "Queue Management System",
    description:
      "Crafted to enhance patient waiting experiences in healthcare environments, including clinics, hospitals, and medical centers, this solution reduces wait times, boosts patient satisfaction, and optimizes operational efficiency by leveraging React, Node.js, and AWS services to manage patient queues seamlessly and efficiently.",
    stack: ["SASS", "TypeScript", "React", "Node.js", "AWS"],
  },
  {
    name: "Patient Connect Chat",
    description:
      "This project aims to develop a real-time chat application tailored for healthcare, utilizing React for the frontend, Node.js for the backend, and AWS services for deployment, scalability, and reliability. The application will enable patients and healthcare professionals to create accounts, join chat rooms, and exchange messages in real-time.",
    stack: ["SASS", "TypeScript", "React", "Node.js", "AWS"],
  },
  {
    name: "Sensor Data Collection using an Autonomous Drone",
    description:
      "Designed Autonomous UAV with 1.5km range and 4-hour flight time. Executed data collection missions gathering temperature and pressure data at diverse locations, utilizing preloaded GPS coordinates.",
    stack: ["Arduino", "Python"],
  },
  {
    name: "UHF RFID laundry tracking system",
    description: `Developed a resilient solution for tracking diverse garments within the pharmaceutical industry. Devised a custom RFID transmitter/receiver system designed to be affixed to garments, enabling efficient bulk scanning and streamlined data storage. Winners of Smart India Hackathon 2019 Hardware edition`,
    stack: ["Arduino", "Python", "RFID", "C++"],
  },
  {
    name: "Resource Allocation using Power Domain Non-Orthogonal Multiple Access",
    description:
      "Implemented strategies to enhance the efficiency of Non-Orthogonal Multiple Access (NOMA), thereby establishing amore stable communication framework.",
    stack: ["Matlab"],
  },
];

const skills = {
  "Front-End": [
    "React.js",
    "Next.js",
    "Redux",
    "JQuery",
    "HTML",
    "CSS",
    "SCSS",
    "Flutter",
    "Axios/Fetch"
  ],
  "Back-End": [
    "Node.js",
    "NestJS",
    "ExpressJS",
    "RestAPI",
    "GraphQL",
    "gRPC",
    "Redis",
    "Protocol Buffers"
  ],
  "Database": [
    "MongoDB",
    "MySQL",
    "Redis",
    "SQLite",
    "NoSQL",
    "GraphQL",
    "Kafka"
  ],
  "Cloud": [
    "AWS EC2",
    "S3",
    "RDS",
    "Lambda",
    "API Gateway",
    "Elastic Beanstalk",
    "IAM",
    "CloudWatch",
    "AWS CloudFormation",
    "Google Cloud",
    "Azure"
  ],
  "DevOps and Testing": [
    "Jenkins",
    "Docker",
    "CI/CD",
    "Microservice Architecture",
    "Jest",
    "Cypress",
    "GitHub",
    "ELK Stack",
    "Shell scripting",
    "Git"
  ],
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Dart",
    "C/C++",
    "Java",
    "SQL",
    "JSON",
    "YAML"
  ]
};


const contact = {
  email: "athirumuruganantham@hawk.iit.edu",
};

export { header, about, projects, skills, contact };
