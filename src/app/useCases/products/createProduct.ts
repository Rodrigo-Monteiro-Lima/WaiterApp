import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    // const { icon, name } = req.body;
    // const product = await Product.create({ icon, name });
    // res.status(201).json();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


