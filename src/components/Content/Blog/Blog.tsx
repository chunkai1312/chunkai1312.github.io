import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useAsync } from 'react-async';
import Grid from '@material-ui/core/Grid';
import Article from './Article';
import SectionTitle from '../../common/SectionTitle';
import { getArticles } from '../../../services/article';

function Blogs() {
  const { t } = useTranslation();
  const { data: posts } = useAsync({ promiseFn: getArticles });

  return posts ? (
    <Grid id="articles" container alignContent="stretch" direction="column" justify="center" spacing={0}>
      <SectionTitle title={t('content.blog')} />
      <Grid direction="row" alignContent="stretch"  justify="space-between" xs={12} item spacing={0} container>
        {posts.map((post, index) => (
          <Article
            key={index}
            image={post.cover}
            title={post.title}
            day={moment(post.date).format('DD')}
            month={moment(post.date).format('MMM')}
            url={post.url}
          />
        ))}
      </Grid>
    </Grid>
  ) : null
}

export default Blogs;