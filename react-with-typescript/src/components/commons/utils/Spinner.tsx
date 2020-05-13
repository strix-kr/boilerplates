import * as React from 'react';
import { Spin, Row, Col } from 'antd';
import { SpinSize } from 'antd/lib/spin';
import { LoadingOutlined } from '@ant-design/icons';

interface ISpinnerProps {
  tip?: string;
  size?: SpinSize;
  delay?: number;
}

const Spinner: React.FunctionComponent<ISpinnerProps> = ({ tip, size, delay }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size === 'large' ? 48 : 24 }} spin />;
  return (
    <Row className="spinner-wrap" justify="center" align="middle">
      <Col>
        <Spin indicator={antIcon} delay={delay} tip={tip} size={size} />
      </Col>
    </Row>
  );
};

Spinner.defaultProps = {
  tip: '',
  size: 'default',
  delay: 0
}

export default Spinner;
