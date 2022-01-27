module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b035d354e729ba3c8b906db5884a6c1'),
  },
});
