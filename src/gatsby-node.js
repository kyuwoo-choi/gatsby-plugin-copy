/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

const error = (src, dest, err) => {
  console.error(`gatsby-plugin-copy: ${src} -> ${dest} \u2718`);
  console.error();
  console.error(`${err}`);
};
const success = (src, dest) => console.log(`gatsby-plugin-copy: ${src} -> ${dest} \u2714`);

exports.onPostBootstrap = (args, pluginOptions) => {
  delete pluginOptions.plugins; // eslint-disable-line no-param-reassign
  const { verbose } = pluginOptions;
  delete pluginOptions.verbose; // eslint-disable-line no-param-reassign
  const files = pluginOptions;
  const promises = Object.keys(files).map((src) => {
    const dest = files[src];
    let promsie;

    try {
      fse.copySync(src, dest, {
        filter: filePath => filePath.split(path.sep).indexOf('.git') < 0
      });
      if (verbose) {
        success(src, dest);
      }
      promise = Promise.resolve();
    } catch (err){
      error(src, dest, err);
      promise = Promise.reject();
    }

    return promise;
  });

  return Promise.all(promises);
};
