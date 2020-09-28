module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: 'public',
        ssl: { rejectUnauthorized: false }
      },
      options: {
        pool: {
          min: 0,
          max: 15,
          idleTimeoutMillis: 60000,
          createTimeoutMillis: 60000,
          acquireTimeoutMillis: 60000
        }
      },
    },
  },
});
