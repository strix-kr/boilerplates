import React, { useState, useEffect } from 'react';
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks'

import { Layout } from 'antd';

import Header from './Header';
import Sider from './Sider';
import Content from './Content';

import { ALL_POSTS, ALL_COMMENTS } from '@/graphql/queries/posts';

const Container = () => {

  const apolloClient = useApolloClient();
  const [ getAllPostsData, { data: { allPosts } = {} }] = useLazyQuery(ALL_POSTS);
  const [ getAllCommentsData, { data: { allComments } = {} }] = useLazyQuery(ALL_COMMENTS);
  const { allPosts: localPosts } = apolloClient.readQuery({ query: ALL_POSTS });
  const { allComments: localComments } = apolloClient.readQuery({ query: ALL_COMMENTS });
  const [ isRefresh, beginRefeshPosts ] = useState(false);

  useEffect(() => {
    // if not caching data, caching data to local state in apollo cache.
    if(localPosts.length === 0){
      if(allPosts){
        apolloClient.writeQuery({
          query: ALL_POSTS,
          data: { allPosts }
        });
      } else {
        getAllPostsData();
      }
    }
    if(localComments.length === 0){
      if(allComments){
        apolloClient.watchQuery({
          query: ALL_COMMENTS,
          data: { allComments }
        });
      } else {
        getAllCommentsData();
      }
    }
    if(isRefresh){
      beginRefeshPosts(false);
    }
  }, [allPosts, isRefresh]);

  return (
    <Layout>
      <Sider width="20%" />
      <Layout>
        <Header localPosts={localPosts} beginRefeshPosts={beginRefeshPosts} />
        <Content localPosts={localPosts} />
      </Layout>
    </Layout>
  )
}

export default Container;
