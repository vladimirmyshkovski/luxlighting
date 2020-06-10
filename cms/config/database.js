module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        /*
        client: 'sqlite',
        filename: '.tmp/data.db'
        */
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-176-34-97-213.eu-west-1.compute.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd2drtletisujjq'),
        username: env('DATABASE_USERNAME', 'majajzwrdobctv'),
        password: env('DATABASE_PASSWORD', '89d75545d1c93d43f726ec0ca937015c82241f5db59a73753ee9168d2b9952fc')
      },
      options: {
        ssl: false //,
        // useNullAsDefault: true
      },
    },
  },
});
