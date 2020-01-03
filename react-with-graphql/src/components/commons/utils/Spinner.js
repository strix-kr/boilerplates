import React from 'react';
import { Spin, Icon, Row, Col } from 'antd';

function Spinner({ tip = false, size = 'default' }) {
  const antIcon = (
    <Icon
      type="loading"
      style={{ fontSize: size === 'large' ? 48 : 24 }}
      spin
    />
  );

  return (
    <Row className="spinner-wrap" type="flex" justify="center" align="middle">
      <Col>
        <Spin indicator={antIcon} delay={300} tip={tip} size={size} />
      </Col>
    </Row>
  );
}

export default Spinner;
