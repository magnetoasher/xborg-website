module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'xborg.com',
          },
        ],
        destination: 'https://www.xborg.com/:path*',
        basePath: false,
        permanent: true,
      },
    ];
  },
};
