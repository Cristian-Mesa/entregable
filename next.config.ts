// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// // next.config.js
// // next.config.js
// module.exports = {
//   images: {
//     domains: [
//       "upload.wikimedia.org",
//       "media.istockphoto.com" // si también usas este
//     ],
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "photo620x400.mnstatic.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "blog.properati.com.co",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.upb.edu.co",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "hemmabogota.com",
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig