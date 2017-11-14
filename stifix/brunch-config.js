// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'app.css': /^app/
    }
  }
};

exports.plugins = {
  babel: {presets: ['latest']}
};
