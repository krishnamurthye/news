const News = require('../models/news');

exports.addNews = async (req, res) => {
  const { title, content } = req.body;
  const news = await News.create({ title, content, userId: req.user.id });
  res.status(201).json(news);
};

exports.listNews = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const news = await News.findAll({
    offset: (page - 1) * limit,
    limit: parseInt(limit),
  });
  res.json(news);
};

