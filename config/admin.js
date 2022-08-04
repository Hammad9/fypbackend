module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47594e94de14af1cfe67df45a00fc987'),
  },
});
