module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.xborg.gg"
          }
        ],
        destination: "https://xborg.gg/:path*",
        basePath: false,
        permanent: true
      }
    ];
  }
};