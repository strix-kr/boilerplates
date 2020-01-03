import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { WithSiderLayout } from '@/layouts';

const categories = [
  {
    category: 'posts',
    title: 'Post',
    desc: 'get Post Data by REST',
  },
];

const headStyle = {
  backgroundColor: '#fafafa',
  borderBottom: '1.5px solid #dadada',
};

const bodyStyle = {
  minHeight: `100vh / ${categories.length}`
}

const Sider = () => {
  const makeList = () => {
    return categories.map(el => (
      <Link 
        key={el.category} 
        to={`${el.category}`}
      >
        <Card
          title={el.title}
          headStyle={headStyle}
          bodyStyle={bodyStyle}
          hoverable="true"
          className="modal-card"
        >
          {el.desc}
        </Card>
      </Link>
    ));
  }
  return (
    <>
      {makeList()}
    </>
  );
}

export default WithSiderLayout(Sider);