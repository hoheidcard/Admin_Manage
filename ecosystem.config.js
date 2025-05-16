export default {
  apps: [
    {
      name: "VueJS App",
      script: "node_modules/.bin/vue-cli-service",
      args: "serve",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "development",
        PORT: 5173
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 80
      }
    }
  ]
};
