import loanecoimage from '../assets/loaneco_platform.jpg';
import numhubimage from '../assets/numhub_platform.webp';
import portcontrolimage from '../assets/portcontrol_platform.webp';
import brandcontrolimage from '../assets/brandcontrol_platform.webp';

export const projects = [
  {
    id: 1,
    title: "Numbub - Telecom Number Management",
    description: "Built comprehensive number tracking system handling 50K+ daily transactions with real-time updates",
    image: numhubimage,
    tags: ["react", "typescript"],
    demoUrl: "https://www.atlaas.app/signin#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "PortControl - Portability Management",
    description: "Automated complex workflows reducing processing time by 50% through intelligent task orchestration",
    image: portcontrolimage,
    tags: ["react", "typescript"],
    demoUrl: "https://app.porting.com/#/Login",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "BrandControl - Number Branding System",
    description: "Developed brand reservation system with dynamic allocation algorithms and conflict resolution",
    image: brandcontrolimage,
    tags: ["react"],
    demoUrl: "https://numhub.brandedcallingportal.com/",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "LoanEco - Banking Platform",
    description: "Built comprehensive loan management modules serving 10K+ customers with end-to-end workflow",
    image: loanecoimage,
    tags: ["angular", "typescript"],
    demoUrl: "http://www.loaneco.net/",
    codeUrl: "#"
  }
];