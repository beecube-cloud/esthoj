import type { NextConfig } from "next";


const redirectMap = {
  "/consultancy.html": "https://construction.esthoj.com",
  "/others.html": "https://construction.esthoj.com/projects",
  "/service.html": "https://construction.esthoj.com/services",
  "/project.html": "https://construction.esthoj.com/projects",
  "/ESTHOJ_MULTI-DISCIPLINARY_CONSULTANT.pdf": "https://construction.esthoj.com/services",
  "/ESTHOJ_MULTI-DISCIPLINARY_ENGINEERING_CONSTRUCTION.pdf": "https://construction.esthoj.com/services",
};

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return Object.entries(redirectMap).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
