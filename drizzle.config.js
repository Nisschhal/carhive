import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://carhivedb_owner:6tQ2ajJygrBm@ep-patient-pond-a5nzlaim.us-east-2.aws.neon.tech/carhivedb?sslmode=require",
  },
  verbose: true,
  strict: true,
});
