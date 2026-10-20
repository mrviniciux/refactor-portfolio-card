'use strict';

module.exports = {
  lifecycleCallbacks: {},
  hooks: {},
  manifestFilters: {},
  transformPackageManifest: async (manifest) => manifest,
  resolveVersion: async (context) => context.defaultResolveVersion(context),
  resolveRequest: async (context) => context.defaultResolveRequest(context),
};
