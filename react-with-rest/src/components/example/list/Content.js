import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Card, List, Modal, Layout } from 'antd';
import { WithContentLayout } from '@/layouts';
import { post } from '@/store/actions';
import { Spinner } from '@/components/commons';

import '@/styles/app/components/example/list/Content.scss';

const { Content: ContentLayout } = Layout;

const Content = () => {
  
  const dispatch = useDispatch();
  const { category = 'posts' } = useParams();
  const { posts: items, comments } = useSelector(state => state.fetchData, shallowEqual);
  const { isLoading } = useSelector(state => state.status, shallowEqual);

  useEffect(() => {
    const action = async () => {
      if (!items) {
        dispatch(post.fetchDataAsync(category));
      }
    }
    action()
  }, [items, category, dispatch]);
  
  const [ modalState, setModalState ] = useState({
    id: '',
    title: '',
    content: '',
    visible: false,
    children: [],
  });

  const toggleModal = (item = {}) => {
    const { id = '', title = '', body = '' } = item;
    const visible = !modalState.visible;
    const children = comments[id] || [];
    setModalState({
      ...modalState,
      id,
      title,
      visible,
      children,
      content: body,
    });
  }

  const onRemoveItem = () => {
    const { id } = modalState;
    const idx = items.findIndex(obj => obj.id === id);
    items.splice(idx, 1);
    toggleModal();
  }
  
  return (
    <ContentLayout className="list-content-layout">
      { isLoading ? <Spinner size="large" /> : null}
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.title}
              onClick={() => toggleModal(item)}
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

export default WithContentLayout(Content);
