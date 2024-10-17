import postgres from "https://deno.land/x/postgresjs@v3.4.2/mod.js";

let sql;

if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({
    host: "database-server-chat-app", 
    port: 5432, 
    database: Deno.env.get("POSTGRES_DB"), 
    user: Deno.env.get("POSTGRES_USER"),   
    password: Deno.env.get("POSTGRES_PASSWORD") 
  });
}

export { sql };