module.exports = {
  name: 'host',
  remotes: [],
  shared: (libraryName) => {
    if (libraryName === '@nrwl/angular/mfe') {
      return false;
    }
  },
};
