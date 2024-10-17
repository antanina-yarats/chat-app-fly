import postgres from "https://deno.land/x/postgresjs@v3.4.2/mod.js";

let sql;

if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({
    host: Deno.env.get("PGHOST"),
    port: Number(Deno.env.get("PGPORT")),
    user: Deno.env.get("PGUSER"),
    password: Deno.env.get("PGPASSWORD"),
    database: Deno.env.get("PGDATABASE")
  });
}

export { sql };