module.exports = {
  "*": (stagedFiles) => [
    `pnpm lint:fix`,
    `pnpm format ${stagedFiles.join(" ")}`,
  ],
};
