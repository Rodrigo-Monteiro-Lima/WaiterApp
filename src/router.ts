import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { createCategories } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname,  '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get('/categories', listCategories);

router.post('/categories', createCategories);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.get('/orders', (req, res) => {
  res.send('OK');
});

router.post('/orders', (req, res) => {
  res.send('OK');
});

router.patch('/orders/:orderID', (req, res) => {
  res.send('OK');
});

router.delete('/orders/:orderID', (req, res) => {
  res.send('OK');
});
