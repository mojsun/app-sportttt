// const path = require("path");

// module.exports = {
//   entry: "./src/index.js", // Adjust the entry point as necessary
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react", "@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"), // Adjust the public directory as necessary
//     },
//     setupMiddlewares: (middlewares, devServer) => {
//       if (!devServer) {
//         throw new Error("webpack-dev-server is not defined");
//       }

//       // Custom middleware example
//       devServer.app.get("/some/path", (req, res) => {
//         res.json({ custom: "response" });
//       });

//       return middlewares;
//     },
//   },
// };

// const path = require("path");

// module.exports = {
//   entry: "./src/index.js", // Adjust the entry point as necessary
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react", "@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"), // Adjust the public directory as necessary
//     },
//     host: "0.0.0.0",
//     port: 3000, // Use the appropriate port for your application
//     allowedHosts: [
//       ".herokuapp.com", // Allow connections from your Heroku domain
//     ],
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//     disableHostCheck: true, // Disable host check to allow Heroku to proxy
//     setupMiddlewares: (middlewares, devServer) => {
//       if (!devServer) {
//         throw new Error("webpack-dev-server is not defined");
//       }

//       // Custom middleware example
//       // devServer.app.get("/some/path", (req, res) => {
//       //   res.json({ custom: "response" });
//       // });

//       return middlewares;
//     },
//   },
// };

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [".herokuapp.com"],
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true, // Ensure routing works correctly
    // You can remove this if not needed
    // setupMiddlewares: (middlewares, devServer) => {
    //   if (!devServer) {
    //     throw new Error("webpack-dev-server is not defined");
    //   }

    //   devServer.app.get("/some/path", (req, res) => {
    //     res.json({ custom: "response" });
    //   });

    //   return middlewares;
    // },
  },
};
