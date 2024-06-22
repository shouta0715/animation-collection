/** @type {import('next').NextConfig} */
// https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app",
      },
    ],
  },
};

export default nextConfig;
