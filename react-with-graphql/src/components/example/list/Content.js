import React, { useState, useEffect } from 'react';
import { useQuery, useApolloClient, useLazyQuery } from '@apollo/react-hooks'
import { Layout, List, Modal, Card } from 'antd';

import { Spinner } from '@/components/commons';
import { ALL_POSTS } from '@/graphql/queries/posts';
import { GET_STATUS, GET_COMMENTS_BY_ID } from '@/graphql/queries/localState';
import '@/styles/app/components/example/list/Content.scss';

const { Content: ContentLayout } = Layout;

const Content = ({ localPosts }) => {

  const apolloClient = useApolloClient();
  const { data: { isLoading } } = useQuery(GET_STATUS);
  const [ getComment , { data: comments }] = useLazyQuery(GET_COMMENTS_BY_ID);
  
  const [ modalState, setModalState ] = useState({
    id: '',
    title: '',
    content: '',
    visible: false,
    children: [],
  });

  useEffect(() => {
    if(comments){
      const { commentsById } = comments; 
      setModalState({
        ...modalState,
        children: commentsById || []
      });
    }
  }, [comments]);

  const getPostChildById = (id) => {
    getComment({ variables: { postId: id } });
  }

  const toggleModal = (post = {}) => {
    const { id = 0, title = '', body = '' } = post;
    const visible = !modalState.visible;
    getPostChildById(id);
    setModalState({
      ...modalState,
      id,
      title,
      visible,
      content: body,
    });
  }

  const onRemoveItem = () => {
    const { id } = modalState;
    const idx = localPosts.findIndex(obj => obj.id === id);
    localPosts.splice(idx, 1);
    apolloClient.writeQuery({
      query: ALL_POSTS,
      data: { allPosts: localPosts }
    });
    toggleModal();
  }

  return (
    <ContentLayout className="list-content-layout">
      { isLoading ? <Spinner size="large" /> : null}
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={localPosts}
        renderItem={post => (
          <List.Item>
            <Card
              title={post.title}
              onClick={() => toggleModal(post)}
            />
          </List.Item>
        )}
      />
      <Modal
        okText="Remove"
        cancelText="close"
        title={modalState.title}  
        visible={modalState.visible}
        width={`${100/3}%`}
        onOk={onRemoveItem}
        onCancel={() => toggleModal()}
      >
        <div className="modal-title">Content</div>
        <Card className="modal-card">
          {modalState.content}
        </Card>

        <div className="modal-title">Child</div>
        <Card className="modal-card modal-card-child">
          {modalState.children.map(child => (
            <Card
              key={child.id}
              bodyStyle={{ margin: '5px 0px' }}
              className="modal-card"
            >
              {JSON.stringify(child)}
            </Card>
          ))}
        </Card>
      </Modal>        
    </ContentLayout>
  )
}

export default Content;