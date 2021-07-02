module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://localhost:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8d07b5bc4fc55de46aaac495fc48eff4'),
    },
  },
});
