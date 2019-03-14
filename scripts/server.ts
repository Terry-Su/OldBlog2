import { ROOT } from "./constants/paths";

const BS = require('browser-sync')


const serverConfig = {
  server: {
    baseDir: ROOT
  },
  files: [`${ROOT}/**`],
  // open: true,
  open: false,
  port: 8000
}

BS.init(serverConfig)


