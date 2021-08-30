/* 
  例子：
    'POST /rest/search'(req, res) {
        return res.json({
            code: 0,
        });
    },
    'GET /rest/cities': require('./rest/cities.json'),
*/
const { nanoid } = require('nanoid');

const shoppingCart = {
    id: nanoid(),
    userId: nanoid(),
    shoppingCartItems: [
        {
            id: nanoid(),
            touristRouteId: nanoid(),
            touristRoute: {
                id: nanoid(),
                title: '(1)法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            originalPrice: 14551.88,
            discountPresent: 0.1,
        },
        {
            id: nanoid(),
            touristRouteId: nanoid(),
            touristRoute: {
                id: nanoid(),
                title: '(2)法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            originalPrice: 14551.88,
            discountPresent: 0.1,
        },
        {
            id: nanoid(),
            touristRouteId: nanoid(),
            touristRoute: {
                id: nanoid(),
                title: '(3)法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            originalPrice: 14551.88,
            discountPresent: 0.1,
        },
    ],
};

module.exports = {
    /* 旅游路线 */
    'GET /api/productCollections': require('./touristRoutes/productCollections.json'),
    'GET /api/touristRoutes/:touristRoutes'(req, res) {
        console.log(req.params);
        console.log(req.params.touristRoutes);
        return res.json({
            title: '埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)',
            description:
                '【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
            originalPrice: 11999.99,
            price: 1199.999, // 折扣价
            // coupons: '优惠券',
            points: '积分',
            rating: 3.5,
            touristRoutePictures: [
                {
                    id: 0,
                    url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                },
            ],
            features: '<div>我是特色</div>',
            fees: '<div>我是费用</div>',
            notes: '<div>我是预定须知</div>',
        });
    },
    'GET /api/touristRoutes'(req, res) {
        res.append('x-pagination', JSON.stringify({ pageSize: 1, totalCount: 2 }));
        return res.json([
            {
                id: '01',
                title: '法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            {
                id: '02',
                title: '法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            {
                id: '03',
                title: '法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            {
                id: '04',
                title: '法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
        ]);
    },
    /* 身份认证 */
    'POST /api/auth/register'(req, res) {
        console.log('res.body', res.body);
        return res.json({
            code: 0,
        });
    },
    'POST /api/auth/login'(req, res) {
        return res.json({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiIkODc2NDc0MjkwQHFxLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.X2TwLSdqhAs5JhS72GSyeL-BGOzHWWk_GoqS1bC6oLI',
        });
    },
    /* 购物车 */
    'GET /api/shoppingCart'(req, res) {
        console.log('jwt', req.get('Authorization'));
        return res.json(shoppingCart);
    },
    'POST /api/shoppingCart/items'(req, res) {
        console.log('jwt', req.get('Authorization'));
        const newShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
        const newItem = {
            id: nanoid(),
            touristRouteId: nanoid(),
            touristRoute: {
                id: nanoid(),
                title: '(4)法国+德国+意大利+瑞士12日跟团游（4钻）',
                description:
                    '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                price: 1455.188,
                originalPrice: 14551.88,
                discountPresent: 0.1,
                rating: 5.0,
                travelDays: 'Five',
                departureCity: '法国',
                touristRoutePictures: [
                    {
                        id: 'xxx',
                        url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                    },
                ],
                tripType: '1111',
            },
            originalPrice: 14551.88,
            discountPresent: 0.1,
        };
        newShoppingCart.shoppingCartItems.push(newItem);
        return res.json(newShoppingCart);
    },
    'DELETE /api/shoppingCart/items/:itemsId'(req, res) {
        console.log('jwt', req.get('Authorization'));
        console.log(req.params.itemsId);
        return res.json({ code: 0 });
    },
    // 结算
    'POST /api/shoppingCart/checkout'(req, res) {
        return res.json({
            id: nanoid(),
            userId: nanoid(),
            orderItems: [
                {
                    id: nanoid(),
                    touristRouteId: nanoid(),
                    touristRoute: {
                        id: nanoid(),
                        title: '(1)法国+德国+意大利+瑞士12日跟团游（4钻）',
                        description:
                            '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                        price: 1455.188,
                        originalPrice: 14551.88,
                        discountPresent: 0.1,
                        rating: 5.0,
                        travelDays: 'Five',
                        departureCity: '法国',
                        touristRoutePictures: [
                            {
                                id: 'xxx',
                                url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                            },
                        ],
                        tripType: '1111',
                    },
                    originalPrice: 14551.88,
                    discountPresent: 0.1,
                },
                {
                    id: nanoid(),
                    touristRouteId: nanoid(),
                    touristRoute: {
                        id: nanoid(),
                        title: '(2)法国+德国+意大利+瑞士12日跟团游（4钻）',
                        description:
                            '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                        price: 1455.188,
                        originalPrice: 14551.88,
                        discountPresent: 0.1,
                        rating: 5.0,
                        travelDays: 'Five',
                        departureCity: '法国',
                        touristRoutePictures: [
                            {
                                id: 'xxx',
                                url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                            },
                        ],
                        tripType: '1111',
                    },
                    originalPrice: 14551.88,
                    discountPresent: 0.1,
                },
                {
                    id: nanoid(),
                    touristRouteId: nanoid(),
                    touristRoute: {
                        id: nanoid(),
                        title: '(3)法国+德国+意大利+瑞士12日跟团游（4钻）',
                        description:
                            '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                        price: 1455.188,
                        originalPrice: 14551.88,
                        discountPresent: 0.1,
                        rating: 5.0,
                        travelDays: 'Five',
                        departureCity: '法国',
                        touristRoutePictures: [
                            {
                                id: 'xxx',
                                url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                            },
                        ],
                        tripType: '1111',
                    },
                    originalPrice: 14551.88,
                    discountPresent: 0.1,
                },
            ],
            state: 'Pending',
            createDateUTC: new Date().toUTCString(),
            transactionMetadata: null,
        });
    },
    /* 订单 */
    // 支付订单
    'POST /api/orders/:orderId/placeOrder'(req, res) {
        console.log('orderId', req.params.orderId);
        return res.json({
            id: nanoid(),
            userId: nanoid(),
            orderItems: [
                {
                    id: nanoid(),
                    touristRouteId: nanoid(),
                    touristRoute: {
                        id: nanoid(),
                        title: '(1)法国+德国+意大利+瑞士12日跟团游（4钻）',
                        description:
                            '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                        price: 1455.188,
                        originalPrice: 14551.88,
                        discountPresent: 0.1,
                        rating: 5.0,
                        travelDays: 'Five',
                        departureCity: '法国',
                        touristRoutePictures: [
                            {
                                id: 'xxx',
                                url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                            },
                        ],
                        tripType: '1111',
                    },
                    originalPrice: 1999,
                    discountPresent: 0.5,
                    shoppingCartId: null,
                },
                {
                    id: nanoid(),
                    touristRouteId: nanoid(),
                    touristRoute: {
                        id: nanoid(),
                        title: '(2)法国+德国+意大利+瑞士12日跟团游（4钻）',
                        description:
                            '官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目',
                        price: 1455.188,
                        originalPrice: 14551.88,
                        discountPresent: 0.1,
                        rating: 5.0,
                        travelDays: 'Five',
                        departureCity: '法国',
                        touristRoutePictures: [
                            {
                                id: 'xxx',
                                url: 'https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg',
                            },
                        ],
                        tripType: '1111',
                    },
                    shoppingCartId: null,
                },
            ],
            state: 'Completed',
        });
    },
};
