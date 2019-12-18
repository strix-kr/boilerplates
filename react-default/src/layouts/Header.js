import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

function HeaderComponent() {
  return (
    <Header>
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        className="header"
      >
        <Col span={24}>
          <h3>Header</h3>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
