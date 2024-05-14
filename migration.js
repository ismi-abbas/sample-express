import { catSchema } from "./schema/cat.schema.js";

catSchema
  .sync()
  .then(() => {
    console.log("catSchema table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
