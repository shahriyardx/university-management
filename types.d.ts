declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string
        NODE_ENV: "production" | "development" | "testing"
        PORT: string
    }
}