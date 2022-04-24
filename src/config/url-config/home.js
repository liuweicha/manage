export default {
  'base': {
    domain: {
      development: 'http://121.4.36.103:80/brx-manage',
      production: 'http://121.4.36.103:80/brx-manage'
    },
    path: {
      roomListUrl: 'rest/getRoomList', //房间信息
      getGoodsUrl: 'rest/getGoodsList', //查询所有商品信息
      roomDetailUrl: 'rest/getRoomOrderByRoomId', //查询房间订单信息
      payGoodsUrl: 'rest/payGoods', //商品支付
      payOrderUrl: 'rest/completeOrder', //订单支付
      addGoodsUrl: 'rest/addGoods', //订单支付
      createRoomUrl: 'rest/createRoomOrder', //点击开始，生成房间订单
    }
  }
}
