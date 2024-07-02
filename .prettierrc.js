const nonOverriddenDefaults = {
  endOfLine: "lf",
  tabWidth: 3,
  printWidth: 100,
  useTabs: false,
};

const config = {
  ...nonOverriddenDefaults,
  singleQuote: false,

  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 5,
      },
    },
  ],
};

modules.export = config;