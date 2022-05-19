import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "tvshows",
    categoryName: "TV Shows",
    description: "Quizzes based on TV shows",
  },
  {
    _id: uuid(),
    category: "movies",
    categoryName: "Movies",
    description: "Quizzes based on Movies",
  },
  {
    _id: uuid(),
    category: "sports",
    categoryName: "Sports",
    description: "Quizzes based on Sports",
  },
  {
    _id: uuid(),
    category: "tech",
    categoryName: "Tech",
    description: "Quizzes based on Tech",
  },
];
