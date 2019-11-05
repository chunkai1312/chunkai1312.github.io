import axios from 'axios';
import moment from 'moment';

interface Article {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  path: string;
  cover?: string;
  url?: string;
}

export async function getArticles() {
  const baseUrl = 'https://blog.chunkai.me';
  const url = `${baseUrl}/api/categories/%E6%8A%80%E8%A1%93%E5%88%86%E4%BA%AB.json`;
  const response = await axios.get(url);

  const articles = (response.data.postlist as [Article])
    .map(article => ({
      ...article,
      cover: `${baseUrl}${article.cover}`,
      url: `${baseUrl}/${moment(article.date).format('YYYY/MM/DD')}/${article.slug}`
    }))
    .reverse()
    .slice(0, 4);

  return articles;
}