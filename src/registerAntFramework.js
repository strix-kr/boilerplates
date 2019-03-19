import Vue from 'vue'

// ant-design-vue https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce/

import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Modal,
  message,
  notification,
  Pagination,
  Row,
  Select,
  Slider,
  Spin,
  Table,
  TimePicker,
  Drawer,
  ConfigProvider
} from 'ant-design-vue'

Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm

/* v1.1.3+ registration methods */
Vue.use(Alert)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(Calendar)
Vue.use(Card)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(Dropdown)
Vue.use(Form)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Layout)
Vue.use(List)
Vue.use(LocaleProvider)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Select)
Vue.use(Slider)
Vue.use(Spin)
Vue.use(Table)
Vue.use(TimePicker)
Vue.use(ConfigProvider)
