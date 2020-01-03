import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Layout, Row, Col, Icon } from 'antd';
import { GET_LOCAL_STATE } from '@/graphql/queries/localState';
import { LOGOUT } from '@/graphql/mutations/localState';

const { Header } = Layout;

function HeaderComponent() {
  const history = useHistory();
  const [logout] = useMutation(LOGOUT);
  const {
    data: {
      users,
      status: { currentUserId },
    },
  } = useQuery(GET_LOCAL_STATE);
  const currentUser = Object.values(users).find(
    obj => obj.id === currentUserId,
  );

  const onLogout = () => {
    logout();
    history.push('/');
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
