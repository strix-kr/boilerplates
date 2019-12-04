import Header from './Header.vue';
import Footer from './Footer.vue';
import Navigation from './Navigation.vue';

import Sider from './Sider.vue';
import Tile from './Tile.vue';
import Content from './Content.vue';

export {
  Header,
  Footer,
  Navigation,
  // layout을 구성하는 component => ant-card 레이아웃을 기본형으로 함
  // 각 layout은 slot으로 실제 component를 구현
  // 예제 : '/example/layout'
  Sider, // sider bar
  Tile, // tile형 layout
  Content, // content 영역
};
