/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add other configuration options here if needed

  // Enable static HTML export
  output: {
    export: true,
    output: 'export',
  },
};

module.exports = nextConfig;
