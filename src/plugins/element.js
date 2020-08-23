import Vue from "vue";

import {
    Button,
    Container,
    Aside,
    Menu,
    MenuItem,
    Table,
    Main,
    Dropdown,
    DropdownMenu,
    Header,
    Submenu,
    MenuItemGroup,
    TableColumn,
    DropdownItem,
    Form,
    FormItem,
    Input,
    Popconfirm,
    MessageBox,
    Message,
    Select,
    Option,
    Upload,
    Rate,
    Tabs,
    TabPane,
    Icon,
    Col,
    Row,
} from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(Main);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(Header);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(TableColumn);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Popconfirm);
Vue.use(Select);
Vue.use(Option);
Vue.use(Upload);
Vue.use(Rate);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;