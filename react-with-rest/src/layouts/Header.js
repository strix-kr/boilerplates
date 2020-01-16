import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Layout, Row, Col, Icon } from 'antd';
import { post, status } from '@/store/actions';

const { Header } = Layout;

function HeaderComponent() {
  const currentUser = useSelector(
    state => state.users[state.status.currentUserId],
    shallowEqual,
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(status.logout());
    dispatch(post.initItems());
  };

  const onEditUser = () => {
    history.push(`/example/user/${currentUser.id}`);
  };

  return (
    <Header>
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        className="header"
      >
        <Col xs={2} sm={4} md={6} lg={8} xl={10} />
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <h3>Header</h3>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <h3 className="iconWrap">
            <Icon className="icon" type="form" onClick={onEditUser} />
            <Icon className="icon" type="logout" onClick={onLogout} />
          </h3>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
