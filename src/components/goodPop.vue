<style lang="less" scoped>
  .goodPop_container{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    .goodPopContent{
      width: 1100px;
      height: 700px;
      background-color: #FFFFFF;
      border: 1px solid transparent;
      border-radius: 10px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .goodTitle{
        height: 50px;
        width: 100%;
        padding: 0 20px;
        border-bottom: 1px solid rgba(0,0,0,0.15);
        line-height: 50px;
        font-size: 20px;
        color: #000000;
        font-weight: 600;
        position: relative;
        span{
          color: rgba(0,0,0,0.4);
          font-weight: 400;
          font-size: 14px;
        }
      }
      .contentBox{
        width: 1060px;
        margin: 20px auto 0;
        border: 1px solid rgba(0,0,0,0.15);
        border-top: 0;
        height: 550px;
        display: flex;
        justify-content: space-between;
        .chooseBox{
          width: 500px;
          .chooseTitle{
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            text-indent: 20px;
            color: #FFFFFF;
            font-weight: 500;
            background-color: #25995F;
            width: 140px;
            border-radius: 4px 4px 0 0;
          }
        }
        .tableListContent{
          border-right: 1px solid rgba(0,0,0,0.15);
          .thHeader{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 35px;
            background-color: #25995F;
            .th{
              text-align: center;
              color: #FFFFFF;
              font-weight: 500;
              font-size: 14px;
            }
            .th1{
              width: 10%;
            }
            .th2{
              width: 45%;
            }
            .th3{
              width: 15%;
            }
            .th4{
              width: 15%;
            }
            .th5{
              width: 15%;
            }
          }
          .searchDiv{
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid rgba(0,0,0,0.15);
            .searchInput{
              width: 150px;
              margin-left: 20px;
            }
            .searchBtn{
              margin-left: 20px;
            }
          }
          .tdContent{
            background-color: transparent;
            .th{
              height: 35px;
              line-height: 35px;
              color: rgba(0,0,0,0.5);
              border-bottom: 1px solid rgba(0,0,0,0.15);
            }
            .th5{
              color: #25995F;
              cursor: pointer;
            }
          }
          .goodListC{
            height: 444px;
            overflow-y: auto;
          }
        }
        .hasChooseBox{
          .chooseTitle{
            background-color: #FFFFFF;
            color: #909090;
            width: 101%;
            border-right: 1px solid #FFFFFF;
          }
          .tableListContent{
            border-right: 0;
            .thHeader{
              background-color: rgba(213, 150, 61, 1);
              .th1{
                width: 35%;
              }
              .th2{
                width: 15%;
              }
              .th3{
                width: 15%;
              }
              .th4{
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                .span{
                  width: 20px;
                  height: 20px;
                  text-align: center;
                  line-height: 15px;
                  border: 1px solid rgba(0,0,0,0.15);
                  cursor: pointer;
                }
                .spanNum{
                  height: 20px;
                  line-height: 18px;
                  border: 1px solid rgba(0,0,0,0.15);
                  margin: 0 4px;
                  padding: 0 6px;
                }
              }
              .th5{
                width: 15%;
              }
            }
            .goodListC{
              height: 484px;
              border-left: 1px solid rgba(0,0,0,0.15);
            }
            .tdContent{
              background-color: transparent;
              .th5{
                color: rgba(0,0,0,0.5);
                cursor: pointer;
              }
            }
          }
        }
      }
      .bottomContainerBs{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 1060px;
        margin: 30px auto;
        .textBox{
          margin-right: 20px;
          .numSpan{
            font-size: 16px;
            color: #000000;
            font-weight: 500;
          }
          .redSpan{
            color: red;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
<style>
  .searchDiv .selectInput input{
    height: 30px;
    width: 110px;
    margin-left: 10px;
  }
  .el-icon-close{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>

<template>
  <div class="goodPop_container">
    <div class="goodPopContent">
      <div class="goodTitle">
        增加消费
        <span>（大厅，1号桌）</span>
        <i class="el-icon-close" @click="_isShowGoodPop(false)"></i>
      </div>
      <div class="contentBox">
        <div class="canChooseBox chooseBox">
          <div class="chooseTitle">可选消费商品</div>
          <div class="tableListContent">
            <div class="thHeader">
              <div class="th th1">序号</div>
              <div class="th th2">名称</div>
              <div class="th th3">单价</div>
              <div class="th th4">库存</div>
              <div class="th th5">操作</div>
            </div>
            <div class="searchDiv">
              <!--<el-select v-model="value" class="selectInput" placeholder="请选择">-->
                <!--<el-option-->
                        <!--v-for="item in options"-->
                        <!--:key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value">-->
                <!--</el-option>-->
              <!--</el-select>-->

              <el-input v-model="input" class="searchInput" placeholder="请输入内容"></el-input>
              <el-button class="searchBtn" @click="onGetGoodListFun">搜索</el-button>
            </div>
            <div class="goodListC scrollContent">
              <div class="thHeader tdContent"
                   v-for="(item, index) in goodList" :key="'key_' + index">
                <div class="th th1">{{index + 1}}</div>
                <div class="th th2">{{item.itemName}}</div>
                <div class="th th3">{{item.itemPrice}}/{{item.itemUnit}}</div>
                <div class="th th4">{{item.itemNum || 0}}</div>
                <div class="th th5" @click="_addToShoppingCart(item, index)">添加</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hasChooseBox chooseBox">
          <div class="chooseTitle">已选消费商品</div>
          <div class="tableListContent">
            <div class="thHeader">
              <div class="th th1">名称</div>
              <div class="th th2">单价</div>
              <div class="th th3">金额</div>
              <div class="th th4">数量</div>
              <div class="th th5">操作</div>
            </div>
            <div class="goodListC scrollContent">
              <div class="thHeader tdContent"
                   v-for="(item, index) in carList" :key="'key_' + index">
                <div class="th th1">{{item.itemName}}</div>
                <div class="th th2">{{item.itemPrice}}</div>
                <div class="th th3">{{item.buyNum * item.itemPrice}}</div>
                <div class="th th4">
                  <div class="span" @click="_onSetBuyNum(-1, item, index)">-</div>
                  <div class="spanNum">{{item.buyNum}}</div>
                  <div class="span" @click="_onSetBuyNum(1, item, index)">+</div>
                </div>
                <div class="th th5" @click="_deleteShopList(index)">移除</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomContainerBs">
        <div class="textBox">
          共计 <span class="numSpan">{{carList.length}}</span> 件，
          总计：<span class="redSpan">{{totalMoney}}</span> 元
        </div>
        <el-button type="primary" @click="_onEndShopping">完成点单</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      orderId: null
    },
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        // value: '',
        input: '',
        goodList: null,
        carList: [],
        totalMoney: 0,
      }
    },
    filters: {

    },
    components: { },
    computed: {
    },

    mounted () {
      this.onGetGoodListFun();
      //
    },
    methods: {
      onGetGoodListFun() {
        let param = {
          pageNo: 1,
          pageSize: 200,
          itemName: this.input,
        }
        this.$store.dispatch("getGoodsAction", param).then((res) => {
          if(res && res.success){
            res.obj.forEach((item) => {
              item.buyNum = 1;
            });
            this.goodList = res.obj;
          } else {
            this.$store.dispatch('errorMessage', {
              msg: res && res.msg || '服务异常，请稍后重试~',
              status: true
            })
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {
            msg: '服务异常，请稍后重试~',
            status: true
          })
        })
      },
      _addToShoppingCart(item, index){
        // this.goodList.splice(index, 1);
        if(item.itemNum === 0){
          return this.$store.dispatch('errorMessage', {
            msg: '没有库存了',
            status: true
          })
        }
        // item.itemNum--;
        let _idx = -1;
        this.carList.forEach((li, index) => {
          if(li.id === item.id){
            _idx = index
          }
        })
        if(_idx >= 0){
          this.carList[_idx].buyNum++;
        } else {
          this.carList.unshift(item);
        }

        this._setTotalMoney();
      },
      _onSetBuyNum(number, item, index){
        if(number === -1 && item.buyNum === 1){
          this.carList.splice(index, 1);
          this._setTotalMoney();
          return;
        }
        if(item.itemNum === item.buyNum){
          return this.$store.dispatch('errorMessage', {
            msg: '库存到顶了',
            status: true
          })
        }
        item.buyNum = item.buyNum + number;
        this._setTotalMoney();
      },
      _deleteShopList(index){
        this.carList.splice(index, 1);
        this._setTotalMoney();
      },
      _setTotalMoney(){
        let _total = 0;
        if(!this.carList.length)return this.totalMoney = 0;
        this.carList.forEach((item) => {
          _total = _total + item.buyNum * item.itemPrice;
        });
        this.totalMoney = _total;
      },
      _onEndShopping() {
        if(!this.carList || !this.carList.length){
          this.$store.dispatch('errorMessage', { msg: '请添加商品', status: true })
          return
        }
        let _list = [];
        this.carList.forEach((item) => {
          let _li = {
            itemId: item.id, // 商品id
            itemCode: item.itemCode, // 商品编码
            itemName: item.itemName, // 商品名称
            itemPrice: item.itemPrice, //商品单价
            itemNum: item.buyNum, // 商品数量  itemNum
            itemUnit: item.itemUnit, // 商品单位
            itemAmount: item.buyNum * item.itemPrice, // 商品总价
          }
          _list.push(_li)
        });
        let param = {
          orderId: this.orderId,
          itemList: _list
        }
        this.$store.dispatch("addGoodsAction", param).then((res) => {
          if(res && res.success){
            this._isShowGoodPop(false);
          } else {
            this.$store.dispatch('errorMessage', {
              msg: res && res.msg || res.message || '服务异常，请稍后重试~',
              status: true
            })
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {
            msg: err && err.msg ||  err.message || '服务异常，请稍后重试~',
            status: true
          })
        })
      },
      _isShowGoodPop(data) {
        this.$parent._onSetShowGoodPop(data)
      }
    }
  }
</script>


