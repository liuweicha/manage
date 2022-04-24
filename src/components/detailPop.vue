<style lang="less" scoped>
  .banner_container{
    width: 100%;
    height: 100%;
    position: relative;
    .title_23{
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #202020;
      width: 100%;
      padding: 0 20px;
      border-bottom: 1px solid rgba(0,0,0,0.15);
      height: 50px;
      line-height: 50px;
    }
    .orderDetail{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 90%;
      margin: 20px auto 0;

      .li_con{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 5px 0;
        .infoText{
          color: rgba(0,0,0, 0.9);
        }
      }
    }
    .roomMoney{
      width: 90%;
      margin: 0 auto;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(0,0,0,0.15);
      text-align: right;
      .num1{
        font-size: 18px;
        color: #000000;
      }
      .num2{
        font-size: 18px;
        color: red;
        font-weight: 500;
      }
    }
    .goodContent{
      width: 94%;
      margin: 20px auto;
      .goodTitle{
        color: #69C3FF;
        font-size: 14px;
        font-weight: 600;
        height: 40px;
        line-height: 40px;
        position: relative;

      }
      .tableContent{
        margin: 0 auto;
        th{
          background-color: #F9F5EA;
        }
        .td{
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
      }
      .goodMoney{
        width: 100%;
        text-align: right;
        margin-top: 10px;
        position: relative;
        .updateGood{
          background-color: #4CA339;
          width: 80px;
          height: 30px;
          line-height: 30px;
          border-radius: 4px;
          position: absolute;
          left: 0;
          top: 0;
          color: #FFFFFF;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        .updateGood2{
          left: 100px;
          background-color: rgba(213, 150, 61, 1);
        }
        .num1{
          font-size: 18px;
          color: #000000;
        }
        .num2{
          font-size: 18px;
          color: red;
          font-weight: 500;
        }
      }
    }

    .bottomContent{
      width: 100%;
      border-top: 1px solid rgba(0,0,0, 0.15);
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50px;
      line-height: 50px;
      .bConBox{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .moneyInfo{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .moneyText1{
            margin-left: 20px;
            .redText{
              color: red;
              font-size: 18px;
              font-weight: 600;
            }
          }
          .moneyText2{
            margin-left: 30px;
            input{
              border: 1px solid #909090;
              height: 30px;
              width: 100px;
              line-height: 30px;
              border-radius: 4px;
              text-indent: 10px;
            }
          }
        }
        .invoicingBtn{
          background-color: #C53740;
          width: 80px;
          height: 30px;
          line-height: 30px;
          border-radius: 4px;
          color: #FFFFFF;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }

    .btnContents{
      margin: 20px auto;
      display: flex;
      justify-content: flex-end;
      width: 90%;
      .couponsInput{
        width: 80%;
        margin-right: 20px;
      }
    }

  }
</style>

<template>
  <div class="banner_container" v-if="roomBaseInfo">
    <div class="title_23">
      {{roomBaseInfo.roomCode}}
      {{roomBaseInfo.roomName}}
    </div>
    <div class="orderDetail">
      <div class="li_con" v-if="roomBaseInfo.roomStatus === 1">
        <div class="label">开单时间：</div>
        <div class="infoText">
          {{roomBaseInfo.startTime | setTime('MM月dd日 hh:mm')}}
        </div>
      </div>
      <div class="li_con" v-if="roomBaseInfo.roomStatus === 1">
        <div class="label">累计时长：</div>
        <div class="infoText">
          {{onSetRoomTime(roomTime)}}
        </div>
      </div>
      <div class="li_con">
        <div class="label">收费规则：</div>
        <div class="infoText">{{roomBaseInfo.roomPrice}}元/小时</div>
      </div>
    </div>
    <div class="roomMoney" v-if="roomBaseInfo.roomStatus === 1">
      小计
      <span class="num2">{{onSetRoomPrice(roomBaseInfo.startTime, roomBaseInfo.roomPrice)}}</span> 元
    </div>

    <div class="btnContents" v-if="roomBaseInfo.roomStatus === 0">
      <el-input v-model="coupons" class="couponsInput" placeholder="请输入优惠券"></el-input>
      <el-button class="startRoomBtn"
                 @click="onCreateRoomFun()"
                 type="primary">
        开始上座
      </el-button>
    </div>


    <div class="goodContent" v-if="roomBaseInfo.roomStatus === 1">
      <div class="goodTitle">
        商品清单
      </div>
      <div class="tableContent" v-if="roomDetail && roomDetail.orderDetail">
        <el-table
                :data="roomDetail.orderDetail"
                border
                @selection-change="handleSelectionChange"
                style="text-align: center">
          <el-table-column
                  type="selection"
                  border
                  width="55">
          </el-table-column>
          <el-table-column class="testName" prop="itemName" label="名称"> </el-table-column>
          <el-table-column class="testName" prop="itemNum" label="数量"> </el-table-column>
          <el-table-column class="testName" prop="itemPrice" label="单价"> </el-table-column>
          <el-table-column class="testName" prop="itemAmount" label="金额"> </el-table-column>
          <el-table-column class="testName" prop="payText" label="支付状态"> </el-table-column>
        </el-table>
      </div>
      <div class="goodMoney">
        共 <span class="num1">3</span>
        件商品，小计 <span class="num2">{{goodsTotalPrice}}</span> 元
        <div class="updateGood" @click="_isShowGoodPop(true)">添加商品</div>
        <div class="updateGood updateGood2" @click="_onPayGoodsFun()">商品结算</div>
      </div>
    </div>



    <div class="bottomContent" v-if="roomBaseInfo.roomStatus === 1">
      <div class="bConBox">
        <div class="moneyInfo">
          <div class="moneyText1">
            应付款 <span class="redText">{{totalMoney}}</span> 元
          </div>
          <div class="moneyText2">
            折后价 <input type="number" v-model="reallyMoney">
          </div>
        </div>
        <div class="invoicingBtn" @click="payEndRoom()">结账</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {setTime, countdownTime} from '../services/transformTime';
  export default {
    props: {
      roomDetail: null,
      roomBaseInfo: null
    },
    data() {
      return {
        totalMoney: 0,
        reallyMoney: 0,
        coupons: "",// 优惠券
        goodsTotalPrice: 0,
        roomTotalPrice: 0,
        timer: "",
        roomTime: "",  // 单位秒
        multipleSelection: ""
      };
    },
    filters: {
      setTime
    },
    components: { },
    computed: {
    },

    mounted () {
      if(this.roomDetail && this.roomDetail.orderDetail){
        this.roomDetail.orderDetail.forEach((item) => {
          item.payText = item.payStatus === 0 ? '未支付' : '已支付';
          this.goodsTotalPrice = this.goodsTotalPrice + parseInt(item.itemAmount)
        })
      }
      setTimeout(() => {
        this.totalMoney = this.goodsTotalPrice + this.roomTotalPrice;
        this.reallyMoney = this.goodsTotalPrice + this.roomTotalPrice;
      }, 500);

      this.timer = setInterval(() => {
        let _timer = new Date().getTime();
        let t = this.roomBaseInfo.startTime;
        this.roomTime = (Math.floor((_timer - t)/1000))
      }, 1000)
    },
    methods: {
      _isShowGoodPop(data) {
        const orderId = this.roomDetail && this.roomDetail.order && this.roomDetail.order.id;
        this.$parent._onSetShowGoodPop(data, orderId);
      },
      _onPayGoodsFun(){
        const orderId = this.roomDetail && this.roomDetail.order && this.roomDetail.order.id;
        let _list = [];
        this.roomDetail.orderDetail.forEach((item) => {
          let _li = {
            detailId: item.itemId
          };
          _list.push(_li);
        });
        let param = {
          orderId: orderId,
          itemList: _list
        };
        this.$store.dispatch("payGoodsAction", param).then((res) => {
          if(res && res.success){
            this.$store.dispatch('errorMessage', {msg: '商品支付成功',status: true})
          } else {
            this.$store.dispatch('errorMessage', {msg: res && res.msg || '服务异常，请稍后重试~',status: true})
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {msg: err && err.msg || '服务异常，请稍后重试~',status: true})
        })
      },
      payEndRoom() {
        const orderId = this.roomDetail && this.roomDetail.order && this.roomDetail.order.id;
        let param = {
          orderId: orderId,// 订单ID
          payInAmount: this.reallyMoney,// 实收金额
          roomTime: this.roomTime,// 房间时长
          roomAmount: this.roomTotalPrice,// 房间费用
          receivableAmount: this.totalMoney, // 应收费用
        };
        this.$store.dispatch("payOrderAction", param).then((res) => {
          if(res && res.success){
            this.$store.dispatch('errorMessage', {msg: '支付成功',status: true})
            this.$parent._onSetShowDetail('', false, null);
          } else {
            this.$store.dispatch('errorMessage', {msg: res && res.msg || '服务异常，请稍后重试~',status: true})
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {msg: err && err.msg || '服务异常，请稍后重试~',status: true})
        })
      },
      onSetRoomTime(t) {
        return countdownTime(t)
      },
      onSetRoomPrice(time, price) {
        let _timer = new Date().getTime();
        let totalPrice = (((_timer - time)/1000/3600) * price).toFixed(0);
        this.roomTotalPrice = parseInt(totalPrice);
        return totalPrice
      },
      onCreateRoomFun() {
        let param = {
          roomId: this.roomBaseInfo.id,
          couponId: "",
        }
        this.$store.dispatch("createRoomAction", param).then((res) => {
          if(res && res.success){
            this.$store.dispatch('errorMessage', {msg: '房间开通成功',status: true});
            this.$parent._onSetShowDetail('', false, null);
          } else {
            this.$store.dispatch('errorMessage', {msg: res && res.msg || '服务异常，请稍后重试~',status: true})
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {msg: err && err.msg || '服务异常，请稍后重试~',status: true})
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>

  .tableContent .el-table__header tr{
    border-bottom: 1px solid transparent;
  }
  .tableContent .el-table__header th{
    border-right: 1px solid rgba(0,0,0, 0.15);
  }
  .tableContent tr{
    border: 1px solid rgba(0,0,0, 0.15);
    border-right: 0;
    height: 40px;
  }
  .tableContent tr td{
    border-right: 1px solid rgba(0,0,0, 0.15);
  }

</style>
