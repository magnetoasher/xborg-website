module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.xborg.com',
          },
        ],
        destination: 'https://xborg.com/:path*',
        basePath: false,
        permanent: true,
      },
    ];
  },
};
