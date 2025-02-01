module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": ["pnpm lint:fix", "pnpm format"],
  "**/*.ts?(x)": () => "npm run check-types",
};
