// config-overrides.js
module.exports = function override(config, env) {
    if (env === 'test') {
      config.transformIgnorePatterns = ['/node_modules/(?!axios)'];
    }
    return config;
  };
  