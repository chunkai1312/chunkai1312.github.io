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
  const baseUrl = 'https://chunkai.blog';
  const url = `${baseUrl}/api/posts.json`;
  const response = await axios.get(url);

  const articles = (response.data.data as [Article])
    .map(article => ({
      ...article,
      cover: `${baseUrl}${article.cover}`,
      url: `${baseUrl}/${moment(article.date).format('YYYY/MM/DD')}/${article.slug}`
    }))
    .slice(0, 4);

  return articles;
}