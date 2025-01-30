import PostcssModulesPlugin from "postcss-modules";

export default {
  plugins: [
    PostcssModulesPlugin({
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    }),
  ],
};
