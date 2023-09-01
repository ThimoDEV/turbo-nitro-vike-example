/** @type {import("prettier").Config} */
const config = {
    printWidth: 120,
    semi: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
    tailwindConfig: "./packages/ui/tailwind.config.cjs",
    tailwindFunctions: ["cn"],
    importOrder: [
      "^(react/(.*)$)|^(react$)",
      "^(next/(.*)$)|^(next$)",
      "<THIRD_PARTY_MODULES>",
      "",
      "^types$",
      "^@/env(.*)$",
      "^@/types/(.*)$",
      "^@/config/(.*)$",
      "^@/lib/(.*)$",
      "^@/hooks/(.*)$",
      "^@/components/ui/(.*)$",
      "^@/components/(.*)$",
      "^@/styles/(.*)$",
      "^@/app/(.*)$",
      "",
      "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
  }
  
  module.exports = config
  