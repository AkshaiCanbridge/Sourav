// lib/projectsData.js or data/projectsData.js

export const projectsData = [
  {
    id: "smart-theatre",
    title: "Smart Theatre Management System",
    description: "Traditional theatre management systems rely heavily on manual operations, leading to inefficiencies, long queues, and disjointed customer experiences. The lack of integration between ticketing, parking, and concession services results in frustration for both theatre-goers and staff.",
    src: "/prj1Abt.jpg",
    color: "#fcb588",
    
    // Project page specific content
    hero: {
      title: "Smart Theatre",
      span: "Management System",
      subtitle: "Web Applications",
      image: "/prjcopy.jpg"
    },
    about: {
      title: "Know More",
      description: "Traditional theatre management systems rely heavily on manual operations, leading to inefficiencies, long queues, and disjointed customer experiences. The lack of integration between ticketing, parking, and concession services results in frustration for both theatre-goers and staff.",
      image: "/prj1Abt.jpg"
    },
    problem: {
      title: "Problem",
      description: "Today's fast-paced entertainment industry has outgrown traditional theatre systems. Long queues for tickets, entry, and food, along with poor parking management, slow staff operations, and frequent human errors, frustrate customers.",
      images: ["/food.png", "/p2.jpg"]
    },
    solution: {
      title: "Solution",
      description: "Inspired by the enigmatic allure of ravens and the sharp precision of technology, this project explores the balance between dark, sleek visuals and user-centric design.",
      image: "/car.jpg"
    },
    concept: {
      title: "Concept",
      description: "Inspired by the enigmatic allure of ravens and the sharp precision of technology, this project explores the balance between dark, sleek visuals and user-centric design.",
      image: "/mrrr.jpg"
    }
  },
  {
    id: "woxox-erp",
    title: "Woxox ERP",
    description: "Woxox is an all-in-one CRM platform that simplifies business operations and boosts productivity. The project aims to create a modern, clean, and intuitive website showcasing features like sales management, billing, HR, pipeline tracking, and analytics.",
    src: "/woxox.jpg",
    color: "#f7f3f0",
    
    hero: {
      title: "Workflow Automation Platform",
      subtitle: "ERP Application",
      image: "/woxoxh2.jpg"
    },
    about: {
      title: "Know More",
      description: "Woxox is an all-in-one CRM platform that simplifies business operations and boosts productivity. The project aims to create a modern, clean, and intuitive website showcasing features like sales management, billing, HR, pipeline tracking, and analytics.",
      image: "/woxox.jpg"
    },
    problem: {
      title: "Problem",
      description: "Complex, cluttered CRMs and jargon-filled, uninspiring websites make it hard for small-to-mid teams to see a product’s value, causing hesitation and low adoption.",
      images: ["/woxoxabt.png", "/woxoxabt2.png"]
    },
    solution: {
      title: "Solution",
      description: "Woxox closes the usability gap with a minimal, purpose-driven interface that clearly communicates the platform’s value through clean layouts and strategic content.",
       image: "/woxox3.png"
    },
    concept: {
      title: "Concept",
      description: "Woxox’s philosophy, “Simplicity in Connection,” uses color, rhythm, and subtle interactions to make CRM tools approachable and efficient.",
      image: "/flow-concept.jpg"
    }
  },
  {
    id: "skill-swap",
    title: "Skill Swap",
    description: "Skill Swap is a web platform that lets people exchange their skills and services without using money. It works on a barter system, allowing users to trade talents like design, photography, or tutoring, while promoting collaboration and community learning.",
    src: "/skillswap2.jpg",
    color: "#fcb588",
    
    hero: {
      title: "Skill Swap",
      subtitle: "Web Application",
      image: "/skillswap.jpg"
    },
    about: {
      title: "Know More",
      description: "Skill Swap is a web platform that lets people exchange their skills and services without using money. It works on a barter system, allowing users to trade talents like design, photography, or tutoring, while promoting collaboration and community learning.",
      image: "/skillswap2.jpg"
    },
    problem: {
      title: "Problem",
      description: "Many people have useful skills but lack the money to get the services they need. This creates barriers, especially for students and freelancers. There are also very few platforms that allow fair and easy skill exchanges without using money.",
      images: ["/skill4.jpg", "/skill3.png"]
    },
    solution: {
      title: "Solution",
      description: "Skill Swap connects people to exchange skills easily and fairly. Individuals can create profiles, list services, and manage exchanges, while groups handle internal swaps and admins oversee activities. By promoting trust and community, it offers a simple, transparent way to trade services without money.",
      image: "/skilldash.png"
    },
    concept: {
      title: "Concept",
      description: "Skill Swap connects people to exchange skills easily and fairly. Individuals can create profiles, list services, and manage exchanges, while groups handle internal swaps and admins oversee activities. By promoting trust and community, it offers a simple, transparent way to trade services without money.",
      image: "/link-concept.jpg"
    }
  },
  {
    id: "go-to-grocery",
    title: "Go to Grocery",
    description: "Go to Grocery is a web-based grocery delivery platform that connects local shops within a neighborhood, allowing users to order fresh groceries directly to their doorstep. It helps customers discover nearby stores, compare prices, and shop easily from multiple vendors in one place.",
    src: "/gotogro.jpg",
    color: "#f7f3f0",
    
    hero: {
      title: "Go to Grocery",
      subtitle: "Ecommerce Platform",
      image: "/grochero.jpg"
    },
    about: {
      title: "Know More",
      description: "Go to Grocery is a web-based grocery delivery platform that connects local shops within a neighborhood, allowing users to order fresh groceries directly to their doorstep. It helps customers discover nearby stores, compare prices, and shop easily from multiple vendors in one place.",
      image: "/gotogro.jpg"
    },
    problem: {
      title: "Problem",
      description: "Many people struggle to find time for grocery shopping and often miss out on local stores that offer better quality and prices. At the same time, small grocery shops lack a digital presence to reach customers online.",
      images: ["/grophn3.jpg", "/grophn2.jpg"]
    },
    solution: {
      title: "Solution",
      description: "The platform connects all nearby grocery shops under one system, giving users access to a variety of stores and products through a single interface. It provides a convenient, community-based marketplace that supports both customers and local shop owners.",
      image: "/gro5.jpg"
    },
    concept: {
      title: "Concept",
      description: "Go to Grocery simplifies local shopping by enabling customers to browse nearby stores, add products from different shops to a single cart, and get them delivered by a dedicated delivery agent. It ensures fast delivery, product availability, and a seamless shopping experience while promoting local businesses.",
      image: "/sync-concept.jpg"
    }
  },
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get all project IDs (useful for static generation)
export const getAllProjectIds = () => {
  return projectsData.map(project => project.id);
};