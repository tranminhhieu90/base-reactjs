declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly REACT_APP_DEV_URL: "http://localhost:3000"
    readonly REACT_APP_PROD_URL: "http://localhost:3000"
  }
}
