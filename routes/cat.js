import express from "express";
import { catSchema } from "../schema/cat.schema.js";
import { tokenMiddleware } from "../utils/auth.js";

const catRouter = express.Router();
catRouter.use(tokenMiddleware);

catRouter
  .get("/", async (req, res) => {
    try {
      const data = await catSchema.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })
  .post("/create", async (req, res) => {
    try {
      const { name, breed, age } = req.body;

      const data = await catSchema.create({
        cat_id: Math.floor(Math.random() * 1000),
        name,
        breed,
        age,
      });

      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })
  .post("/delete", async (req, res) => {
    try {
      const { cat_id } = req.body;

      const data = await catSchema.destroy({
        where: {
          cat_id,
        },
      });

      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  })
  .put("/update", async (req, res) => {
    try {
      const { cat_id, name, breed, age } = req.body;

      const data = await catSchema.update(
        {
          name,
          breed,
          age,
        },
        {
          where: {
            cat_id,
          },
        }
      );

      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  });

export default catRouter;
