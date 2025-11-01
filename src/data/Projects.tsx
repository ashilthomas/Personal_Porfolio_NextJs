type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string; // optional (for single repo projects)
  frontend?: string;
  backend?: string;
  demo?: string;
};

 export const projects: Project[] = [
  {
    title: "Ai image generator",
    description:
      "AI-powered image generator using Clip Drop.",
    tech: ["React.js", "Razorpay", "Clip Drop","nodejs"],
    frontend: "https://github.com/ashilthomas/AiImagefy.git",
     backend: "https://github.com/ashilthomas/AiImagerfy_BE.git",
    demo: "https://aiimagefy.netlify.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-stack e-commerce store with product filtering, cart, and Razorpay payments.",
    tech: ["React.js", "Node.js", "MongoDB"],
    frontend: "https://github.com/ashilthomas/FoodOrderWebsite_frontend.git",
    backend: " https://github.com/ashilthomas/FoodOrderWebsite_Backend.git",
    demo: "https://foodorderweb1.netlify.app/",
  },
 
  {
    title: "AI Chat Bot Application",
    description:
      "AI-powered chat application with user authentication and chat history.",
    tech: ["React.js", "TypeScript", "MongoDB"],
  frontend: "https://github.com/ashilthomas/AiChatbot-FE.git",
    backend: " https://github.com/ashilthomas/AiChatbot-BE.git",
    demo: "https://ai-chatbot-fe-beta.vercel.app/",
  },
  {
    title: "job find application",
    description:
      "job matching application using resume",
    tech: ["NextJs", "TypeScript", "MongoDB"],
  frontend: "https://github.com/ashilthomas/resume_job_nextJs.git",
  
    demo: "https://resume-job-next-js-j6ge.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "Job portal with job listings, search, and application features.",
    tech: ["React.js", "tailwindcss", "MongoDB","node.js"],
  frontend: "https://github.com/ashilthomas/Job_Board_FE.git",
    backend: "https://github.com/ashilthomas/Job_Board_BE.git",
    demo: "https://jobboardwebs.netlify.app/",
  },
  {
    title: "Book store website",
    description:
      "Online book store with browsing, cart, and checkout features.",
    tech: ["React.js", "mongoDB", "node.js","Razorpay"],
  frontend: "https://github.com/ashilthomas/online-bookstore-frontend.git",
    backend: "https://github.com/ashilthomas/online-bookstore-backend.git",
    demo: "https://online-bookstore-web.netlify.app/",
  },
  {
    title: "Portfolio website",
    description:
      "A simple portfolio website using html and css.",
    tech: ["Javascript","CSS","Html","bootstrap"],
  frontend: "https://github.com/ashilthomas/Portfolio_web1.git",
    demo: "https://portfolio-web1-zeta.vercel.app/",
  },
  {
    title: "Portfolio website 2",
    description:
      "A simple portfolio website using html bootstrap",
    tech: ["Javascript","Html","bootstrap"],
  frontend: "https://github.com/ashilthomas/Portfolio_web2.git",
    demo: "https://portfolio-web2-livid.vercel.app/",
  },
  {
    title: "Simple prodcut page",
    description:
      "sample project for filter and search functionality and cart, and checkout features.",
    tech: ["React.js","CSS","Api"],
  frontend: "https://github.com/ashilthomas/sample_Filter_Search_web.git",
    demo: "https://sample-filter-search-web.vercel.app/",
  },
  {
    title: "Basic Weather app",
    description:
      "A simple weather app that fetches and displays weather data from an external API.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/weatherapp-js.git",
    demo: " https://ashilthomas.github.io/weatherapp-js/",
  },
  {
    title: "Static web page",
    description:
      "A simple static web page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/static-website-furniture.git",
    demo: "https://ashilthomas.github.io/static-website-furniture/",
  },
  {
    title: "Static Netflix page",
    description:
      "A simple static Netflix page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/static_netflix_web.git",
    demo: "https://ashilthomas.github.io/static-website-furniture/",
  },
  {
    title: "Static autocomplete search page",
    description:
      "A simple static autocomplete search page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/simple_autocomplete_search_web.git",
    demo: "https://ashilthomas.github.io/simple_autocomplete_search_web/",
  },
  {
    title: "Simple image gallery page",
    description:
      "A simple static image gallery page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/simple_image_gallery_web.git",
    demo: " https://ashilthomas.github.io/simple_image_gallery_web/",
  },
  
];
