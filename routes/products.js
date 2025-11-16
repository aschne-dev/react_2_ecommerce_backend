import express from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const DEFAULT_LIMIT = 12;
  const MAX_LIMIT = 50;
  const searchQuery = typeof req.query.search === 'string' ? req.query.search.trim() : '';
  const pageParam = Number.parseInt(req.query.page, 10);
  const limitParam = Number.parseInt(req.query.limit, 10);
  const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const limit = Number.isNaN(limitParam) || limitParam < 1
    ? DEFAULT_LIMIT
    : Math.min(limitParam, MAX_LIMIT);
  const offset = (page - 1) * limit;

  const whereClause = searchQuery
    ? {
        [Op.or]: [
          { name: { [Op.like]: `%${searchQuery}%` } },
          { keywords: { [Op.like]: `%${searchQuery}%` } }
        ]
      }
    : undefined;

  const { rows: products, count: totalItems } = await Product.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [['createdAt', 'ASC']]
  });

  const totalPages = Math.ceil(totalItems / limit);

  res.json({
    products,
    pagination: {
      page,
      limit,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  });
});

export default router;
