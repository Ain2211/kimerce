import { create } from 'domain';

const HomePage = () => import('views/home/index');

const News = () => import('views/News/News');
const NewsDetail = () => import('views/News/NewsDetail');
const NewsCreateOrUpdate = () => import('views/News/NewsCreateOrUpdate')

const LocationManager = () => import('views/category/location/locationManager');

const City = () => import('views/category/location/city/city');
const CreateOrUpdateCity = () => import('views/category/location/city/createOrUpdate');

const District = () => import('views/category/location/district/district');
const CreateOrUpdateDistrict = () => import('views/category/location/district/createOrUpdate');

const Ward = () => import('views/category/location/ward/ward');
const CreateOrUpdateWard = () => import('views/category/location/ward/createOrUpdate');

const WareHouse = () => import('views/category/warehouse/warehouse');
const CreateOrUpdateWarehouse = () => import('views/category/warehouse/createOrUpdate');

const ProductCategory = () => import('views/category/productcategory/index');
const ProductCategoryCreateOrUpdate = () => import('views/category/productcategory/createorupdate');

const EmptyComponent = () => import('views/EmptyComponent');

const Setting = () => import('views/setting/setting');
const SettingCreateOrUpdate = () => import('views/setting/createorupdate');

const Provider = () => import('views/email/emailProvider/emailProvider');
const ProviderCreateOrUpdate = () => import('views/email/emailProvider/createorupdate');

const Account = () => import('views/email/emailAccount/emailAccount');
const AccountCreateOrUpdate = () => import('views/email/emailAccount/createorupdate');
const ProductList = () => import('views/product/index');
const Product = () => import('views/product/index');
const ProductCreateOrUpdate = () => import('views/product/createorupdate');

const Template = () => import('views/email/emailTemplate/emailTemplate');
const TemplateCreateOrUpdate = () => import('views/email/emailTemplate/createorupdate');

const Email = () => import('views/email/email/email');
const EmailCreateOrUpdate = () => import('views/email/email/createorupdate');

const Order = () => import('views/order/order');
const OrderCreate = () => import('views/order/create');
const OrderEdit = () => import('views/order/edit');
const OrderDetail = () => import('views/order/detail');
const OrderCreateOrUpdate = () => import('views/order/createorupdate');

const OrderItem = () => import('views/orderitem/orderitem');
const OrderItemCretaeAndUpdate = () => import('views/orderitem/createorupdate');

const Image = () => import('views/image/image');
const ImageEdit = () => import('views/image/edit');
const ImageCreate = () => import('views/image/create');
const ImageCreateOrUpdate = () => import('views/image/createorupdate');

const Notification = () => import('views/Notification/notification');
const NotificationCreate = () => import('views/Notification/create');
const NotificationEdit = () => import('views/Notification/edit');
const NotificationDelete = () => import('views/Notification/delete');

const Tracking = () => import('views/Tracking/track');
const TrackingCreate = () => import('views/Tracking/create');
const TrackingEdit = () => import('views/Tracking/edit');
const TrackingDelete = () => import('views/Tracking/delete');

const Shipment = () => import('views/shipment/shipment')
const ShipmentDetails = () => import('views/shipment/details')
const ShipmentCreateOrUpdate = () => import('views/shipment/createorupdate')
const ShipmentDelete = () => import('views/shipment/delete')

const ShipmentItem = () => import('views/ShipmentItem/ShipmentItem')
const ShipmentItemCreateOrUpdate = () => import('views/ShipmentItem/createorupdate')
const ShipmentItemDetails = () => import('views/ShipmentItem/details')
const ShipmentItemDelete = () => import('views/ShipmentItem/delete')


const Campaign = () => import('views/campaigns/campaign/campaign');
const CampaignCreateOrUpdtae = () => import('views/campaigns/campaign/createorupdate');
const CampaignDetails = () => import('views/campaigns/campaign/details');


const CampaignOrder = () => import('views/campaigns/campaignorder/index');
const CampaignOrderCreate = () => import('views/campaigns/campaignorder/create');
const CampaignOrderDetails = () => import('views/campaigns/campaignorder/details');
const CampaignOrderEdit = () => import('views/campaigns/campaignorder/edit');
const CampaignOrderDelete = () => import('views/campaigns/campaignorder/delete');

const CampaignProduct = () => import('views/campaigns/campaignproduct/index');
const CampaignProductCreate = () => import('views/campaigns/campaignproduct/create');
const CampaignProductDetails = () => import('views/campaigns/campaignproduct/details');
const CampaignProductEdit = () => import('views/campaigns/campaignproduct/edit');
const CampaignProductDelete = () => import('views/campaigns/campaignproduct/delete');

const Discount = () => import('views/campaigns/discount/discount');
const DiscountCreateOrUpdate = () => import('views/campaigns/discount/createorupdate');

const DiscountOrder = () => import('views/campaigns/discountorder/index');
const DiscountOrderCreate = () => import('views/campaigns/discountorder/create');
const DiscountOrderDetails = () => import('views/campaigns/discountorder/details');
const DiscountOrderEdit = () => import('views/campaigns/discountorder/edit');
const DiscountOrderDelete = () => import('views/campaigns/campaign/delete');

const Attribute = () => import('views/attributes/attribute/index');
const AttributeCreateOrUpdate = () => import('views/attributes/attribute/createorupdate');

const AttributeValue = () => import('views/attributes/attributevalue/index');
const AttributeValueCreateOrUpdate = () => import('views/attributes/attributevalue/createorupdate');

const SpecAttribute = () => import('views/attributes/specattribute/index');
const SpecAttributeCreateOrUpdate = () => import('views/attributes/specattribute/createorupdate');

const InventoryAttribute = () => import('views/attributes/inventoryattribute/index');
const InventoryAttributeCreateOrUpdate = () => import('views/attributes/inventoryattribute/createorupdate');

const ProductPiece = () => import('views/productpiece/index');
const ProductPieceCreateOrUpdate = () => import('views/productpiece/createorupdate');

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  {
    path: '/setting', component: EmptyComponent,
    children: [
      { path: '/', component: Setting },
      { name: 'settingCreateOrUpdate', path: 'createOrUpdate/:id', component: SettingCreateOrUpdate }
    ]
    , display: 'Qu???n l?? c???u h??nh'
  },
  {
    path: '/emailprovider', component: EmptyComponent,
    children: [
      { path: '/', component: Provider },
      { name: 'providerCreateOrUpdate', path: 'createOrUpdate/:id', component: ProviderCreateOrUpdate }
    ]
    , display: 'Qu???n l?? nh?? cung c???p'
  },
  {
    path: '/emailaccount', component: EmptyComponent,
    children: [
      { path: '/', component: Account },
      { name: 'accountCreateOrUpdate', path: 'createOrUpdate/:id', component: AccountCreateOrUpdate }
    ]
    , display: 'Qu???n l?? t??i kho???n'
    },

  {
    path: '/emailtemplate', component: EmptyComponent,
    children: [
      { path: '/', component: Template },
      { name: 'templateCreateOrUpdate', path: 'createOrUpdate/:id', component: TemplateCreateOrUpdate }
    ]
    , display: 'Qu???n l?? m???u'
  },
  {
    path: '/email', component: EmptyComponent,
    children: [
      { path: '/', component: Email },
      { name: 'emailCreateOrUpdate', path: 'createOrUpdate/:id', component: EmailCreateOrUpdate }
    ]
    , display: 'Qu???n l?? email'
  },

  { name: 'locationManager', path: '/locationManager', component: LocationManager, display: 'Qu???n l?? t???nh/huy???n/x??', icon: 'locationManager' },
  { name: 'city', path: '/city', component: City, display: 'Qu???n l?? t???nh/th??nh ph???', icon: 'city' },
  { name: 'district', path: '/district', component: District, display: 'Qu???n l?? qu???n/huy???n', icon: 'district' },
  { name: 'ward', path: '/ward', component: Ward, display: 'Qu???n l?? ph?????ng/x??', icon: 'ward' },
  { name: 'createOrUpdateCity', path: '/createOrUpdate/city/:id', component: CreateOrUpdateCity, display: 'T???o/C???p Nh???t Th??nh Ph???', icon: 'city' },
  { name: 'createOrUpdateDistrict', path: '/createOrUpdate/district/:id', component: CreateOrUpdateDistrict, display: 'T???o/C???p Nh???t Qu???n', icon: 'district' },
  { name: 'createOrUpdateWard', path: '/createOrUpdate/ward/:id', component: CreateOrUpdateWard, display: 'T???o/C???p Nh???t Ph?????ng', icon: 'ward' },
  { name: 'warehouse', path: '/warehouse', component: WareHouse, display: 'Qu???n l?? Nh?? Kho', icon: 'warehouse' },
  { name: 'createOrUpdateWarehouse', path: '/createOrUpdate/warehouse/:id', component: CreateOrUpdateWarehouse, display: 'T???o/C???p Nh???t Nh?? Kho', icon: 'warehouse' },
  {
    path: '/productcategory',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: ProductCategory
    },{
      path: 'createorupdate/:id',
      component: ProductCategoryCreateOrUpdate
    }],
    display: 'Danh m???c s???n ph???m',
    icon: 'home',
  },
  {
    path: '/product',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: Product
    },{
      path: "createorupdate/:id",
      component: ProductCreateOrUpdate
    }],
    display: 'Danh s??ch s???n ph???m',
    icon: 'package'
  },
  {
    name: 'city',
    path: '/city',
    component: City,
    display: 'Qu???n l?? th??nh ph???',
    icon: 'city'
  }, {
    name: 'productcreateorupdate',
    path: '/productcreateorupdate',
    component: ProductCreateOrUpdate,
    display: 'T???o s???n ph???m',
    icon: 'package'
  },
  {
    name: 'productlist',
    path: '/productlist',
    component: ProductList,
    display: 'Danh s??ch s???n ph???m',
    icon: 'package'
  },
    {
        path: '/campaign', component: EmptyComponent,
        children: [
            { path: '/', component: Campaign },
            { name: 'CampaignCreateOrUpdtae', path: 'createorupdate/:id', component: CampaignCreateOrUpdtae },
            { name: 'CampaignDetails', path: 'details/:id', component: CampaignDetails }
        ]
        , display: 'Qu???n l?? t??i kho???n'
    },
    {
        path: '/campaignorder',
        component: EmptyComponent,
        children: [{
            path: "/",
            component: CampaignOrder
        }, {
            path: "create",
            component: CampaignOrderCreate
        },
        {
            path: "details/:id",
            component: CampaignOrderDetails
        }, {
            path: "edit/:id",
            component: CampaignOrderEdit
        },
        {
            path: "delete/:id",
            component: CampaignOrderDelete
        },
        ],
        display: 'Danh s??ch Order chi???n d???ch',
        icon: 'package'
    },
    {
        path: '/campaignproduct',
        component: EmptyComponent,
        children: [{
            path: "/",
            component: CampaignProduct
        }, {
            path: "create",
            component: CampaignProductCreate
        },
        {
            path: "details/:id",
            component: CampaignProductDetails
        }, {
            path: "edit/:id",
            component: CampaignProductEdit
        },
        {
            path: "delete/:id",
            component: CampaignProductDelete
        },
        ],
        display: 'Danh s??ch s???n ph???m chi???n d???ch',
        icon: 'package'
    },
    {
        path: '/discount', component: EmptyComponent,
        children: [
            { path: '/', component: Discount },
            { name: 'DiscountCreateOrUpdate', path: 'createorupdate/:id', component: DiscountCreateOrUpdate }
        ]
        , display: 'Qu???n l?? t??i kho???n'
    },
    {
        path: '/discountorder',
        component: EmptyComponent,
        children: [{
            path: "/",
            component: DiscountOrder
        }, {
            path: "create",
            component: DiscountOrderCreate
        },
        {
            path: "details/:id",
            component: DiscountOrderDetails
        }, {
            path: "edit/:id",
            component: DiscountOrderEdit
        },
        {
            path: "delete/:id",
            component: DiscountOrderDelete
        },
        ],
        display: 'Danh s??ch y??u c???u gi???m gi??',
        icon: 'package'
    },
  { name: 'order', path: '/order', component: Order, display: 'Qu???n l?? ????n h??ng', icon: 'order' },
  { name: 'ordercreat', path: '/order/create', component: OrderCreate, display: 'T???o m???i' },
  { name: 'orderedit', path: '/order/edit/:id', component: OrderEdit, display: 'S???a' },

    { name: 'image', path: '/image', component: Image, display: 'Qu???n l?? H??nh ???nh', icon: 'image' },
    { name: 'imagecreate', path: '/image/create', component: ImageCreate },
    { name: 'imageedit', path: '/image/edit/:id', component: ImageEdit },
    { name: 'imagecreateorupdate', path: '/image/createorupdate/:id', component: ImageCreateOrUpdate, display: 'T???o m???i & S???a' },


  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'productcategory', path: '/productcategory', component: ProductCategory, display: 'Danh m???c s???n ph???m', icon: 'home' },
    { name: 'city', path: '/city', component: City, display: 'Qu???n l?? th??nh ph???', icon: 'city' },

  { name: 'News', path: '/News', component: News, display: 'Qu???n l?? blog', icon: 'News' },
  { name: 'NewsCreateOrUpdate', path: '/NewsCreateOrUpdate/:id', component: NewsCreateOrUpdate, display: 'T???o m???i/ s???a blog' },
  { name: 'NewsDetail', path: '/NewsDetail/:id', component: NewsDetail, display: 'hi???n th??? blog' },
  

   { name: 'shipment', path: '/shipment', component: Shipment, display: 'Qu???n l?? ????n h??ng', icon: 'shipment' },
  { name: 'DetailsShipment', path: '/shipment/details/:id', component: ShipmentDetails, display: 'Chi ti???t ????n h??ng' },
  { name: 'CreateOrUpdateShipment', path: '/shipment/createorupdate/:id', component: ShipmentCreateOrUpdate, display: 'T???o / S???a ????n h??ng' },
  { name: 'DeleteShipment', path: '/shipment/delete/:id', component: ShipmentDelete, display: 'X??a ????n h??ng' },

  { name: 'ShipmentItem', path: '/ShipmentItem', component: ShipmentItem, display: 'Qu???n l?? ????n v???n' },
  { name: 'CreateOrUpdateShipmentItem', path: '/ShipmentItem/createorupdate/:id', component: ShipmentItemCreateOrUpdate, display: 'T???o / S???a ????n v???n' },
  { name: 'DetailsShipmentItem', path: '/ShipmentItem/details/:id', component: ShipmentItemDetails, display: 'Chi ti???t ????n v???n' },
  { name: 'DeleteShipmentItem', path: '/ShipmentItem/delete/:id', component: ShipmentItemDelete, display: 'X??a ????n v???n' },
  
    { name: 'noti', path: '/notification', component: Notification, display: 'Th??ng b??o', icon: 'noti' },
    { name: 'create', path: '/Notification/create', component: NotificationCreate, display: 'T???o th??ng b??o', icon: 'noti' },
    { name: 'edit', path: '/Notification/edit/:id', component: NotificationEdit, display: 's???a th??ng b??o', icon: 'noti' },
    { name: 'del', path: '/Notification/delete/:id', component: NotificationDelete, display: 'X??a th??ng b??o', icon: 'noti' },
    { name: 'track', path: '/track', component: Tracking, display: 'L???ch s???', icon: 'track' },
    { name: 'trackcreate', path: '/Tracking/create', component: TrackingCreate, display: 'T???o L???ch s???', icon: 'track' },


    { name: 'trackedit', path: '/Tracking/edit/:id', component: TrackingEdit, display: 'S???a L???ch s???', icon: 'track' },
    { name: 'trackdel', path: '/Tracking/delete/:id', component: TrackingDelete, display: 'X??a L???ch s???', icon: 'track' },
  //{ name: 'Campaign', path: '/Campaign', component: Campaign, display: 'Qu???n l?? chi???n d???ch', icon: 'campaign' },
  //{ name: 'CampaignCreate', path: '/CampaignCreate', component: CampaignCreate, display: 'T???o m???i' },
  //{ name: 'CampaignDelete', path: '/CampaignDelete', component: CampaignDelete, display: 'X??a chi???n d???ch' },
  //{ name: 'CampaignDetail', path: '/CampaignDetail/:id', component: CampaignDetail, display: 'hi???n th???' },
  //{ name: 'CampaignEdit', path: '/CampaignEdit/:id', component: CampaignEdit, display: 'S???a' },
    {
    path: '/attribute',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: Attribute
    },{
        path: 'createorupdate/:id',
        component: AttributeCreateOrUpdate
    }],
    display: 'Thu???c t??nh s???n ph???m',
    icon: 'home',
  },
  {
    path: '/attributevalue',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: AttributeValue
    }, {
        path: 'createorupdate/:id',
        component: AttributeValueCreateOrUpdate
    }],
    display: 'Gi?? tr??? thu???c t??nh',
    icon: 'home',
  }, {
    path: '/specattribute',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: SpecAttribute
    }, {
        path: 'createorupdate/:id',
        component: SpecAttributeCreateOrUpdate
    }],
    display: 'Thu???c t??nh ?????c bi???t',
    icon: 'home',
  }, {
    path: '/inventoryattribute',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: InventoryAttribute
    }, {
        path: 'createorupdate/:id',
        component: InventoryAttributeCreateOrUpdate
    }],
    display: 'Thu???c t??nh kho',
    icon: 'home',
  }, {
    path: '/productpiece',
    component: EmptyComponent,
    children: [{
      path: "/",
      component: ProductPiece
    }, {
      path: 'createorupdate/:id',
      component: ProductPieceCreateOrUpdate
    }],
    display: '????n v??? s???n ph???m',
    icon: 'home',
  },
]

