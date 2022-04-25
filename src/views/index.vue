<style lang="less" scoped>
  .home_container{
    height: 100%;
    width: 100%;
    .home_content{
      height: 100%;
      width: 100%;
      .roomListContent{
        width: 100%;
        padding: 20px;
        margin: 0 auto;
        .roomTitle{
          font-size: 22px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #202020;
          width: 100%;
        }
        .roomLiBox{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          .roomLi{
            width: 250px;
            height: 150px;
            border-radius: 10px;
            margin: 16px 20px 16px 0;
            overflow: hidden;
            background-color: #FFFFFF;
            cursor: pointer;
            .roomNum{
              background: rgba(213, 150, 61, 1);
              height: 40px;
              line-height: 40px;
              text-indent: 20px;
              color: #FFFFFF;
              font-size: 14px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              span{
                font-size: 20px;
                font-weight: 600;
              }
            }
            .roomNumNo{
              background: #F2E7C4;
              color: rgba(0,0,0, 0.6);
            }
            .roomDesc{
              font-size: 13px;
              /*color: #000000;*/
              text-indent: 20px;
            }
            .priceInfo{
              font-size: 13px;
              color: #000000;
              text-align: center;
              width: 90%;
              border-bottom: 1px solid rgba(0,0,0, 0.2);
              margin: 0 auto;
              height: 50px;
              line-height: 50px;
              span{
                color: rgba(213, 150, 61, 1);
                font-size: 18px;
                font-weight: 500;
                margin: 0 5px;
              }
            }
            .timeInfo{
              height: 40px;
              line-height: 40px;
              text-align: center;

            }
            .notUsedRoom{
              width: 100%;
              height: 110px;
              line-height: 110px;
              text-align: center;
              font-size: 18px;
            }
          }
        }

        .detailPopContainer{
          width: 100%;
          height: 100%;
        }
        .detailPopCover{
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
          /*background-color: rgba(0,0,0,0);*/
        }
        .detailPopContent{
          width: 500px;
          background-color: #FFFFFF;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 3;
          animation-duration: .3s;
          animation-timing-function: ease-in-out;
        }
      }
    }
  }
  .moveLeft{
    animation-name: moveLeftShare;
  }
  .moveRight{
    /*animation-name: moveRightShare;*/
    /*right: -100%;*/
  }
</style>
<style>
  @keyframes moveLeftShare {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
  }
  @keyframes moveRightShare {
    0% {
      right: 0;
    }
    100% {
      right: -100%;
    }
  }
</style>
<template>
  <div class="home_container">
    <div class="home_content scrollContent" :style="{height: pageHeight + 'px'}">
      <div class="roomListContent">
        <div class="roomTitle">大厅</div>
        <div class="roomLiBox">
          <div class="roomLi"
               v-for="(item, index) in roomListData.bigRoomList"
               :key="'key_' + index"
               @click="_onSetShowDetail(item, true, index)">
            <div class="roomNum">
              <div>
                <span>{{item.roomCode}}</span>
                {{item.roomName}}
              </div>
            </div>
            <div class="roomDesc">{{item.roomDesc}}</div>
            <div v-if="item.roomStatus === 1">
              <div class="priceInfo">
                <!--消费金额 <span>{{item.roomPrice}}</span> 元-->
                累计时长 <span>{{onSetRoomTime(item.startTime)}}</span>
              </div>
              <div class="timeInfo">
                入座时间：{{item.startTime | setTime('MM月dd日 hh:mm')}}
              </div>
            </div>
            <div class="notUsedRoom" v-else>
              空闲中
            </div>
          </div>
        </div>

        <div class="roomTitle" v-if="roomListData.smallRoomList && roomListData.smallRoomList.length">
          包间
        </div>
        <div class="roomLiBox" v-if="roomListData.smallRoomList && roomListData.smallRoomList.length">
          <div class="roomLi"
               v-for="(item, index) in roomListData.smallRoomList"
               :key="'key_' + index"
               @click="_onSetShowDetail(item, true, index)">
            <div class="roomNum">
              <div>
                <span>{{item.roomCode}}</span>
                {{item.roomName}}
              </div>
            </div>
            <div class="roomDesc">{{item.roomDesc}}</div>
            <div v-if="item.roomStatus === 1">
              <div class="priceInfo">
                <!--消费金额 <span>{{item.roomPrice}}</span> 元-->
                累计时长 <span>{{onSetRoomTime(item.startTime)}}</span>
              </div>
              <div class="timeInfo">
                入座时间：{{item.startTime | setTime('MM月dd日 hh:mm')}}
              </div>
            </div>
            <div class="notUsedRoom" v-else>
              空闲中
            </div>
          </div>
        </div>

        <div class="detailPopContainer" v-if="isShowDetail">
          <div class="detailPopCover" @click="_onSetShowDetail('', false, null)"></div>
          <div class="detailPopContent"
               :class="[isShowDetail ? 'moveLeft' : 'moveRight',]"
               :style="{height: pageHeight + 'px'}">
            <DetailPop :roomDetail="roomDetail" :roomBaseInfo="roomBaseInfo"/>
          </div>
        </div>
      </div>
    </div>
    <GoodPop v-if="isShowGoodPop && orderId" :orderId="orderId"/>
  </div>
</template>
<script>
  import DetailPop from "../components/detailPop";
  import GoodPop from "../components/goodPop";
  import {mapGetters} from 'vuex';
  import {setTime, countdownTime} from '../services/transformTime';
  export default {
    data() {
      return {
        roomListData: null,
        pageHeight: "",
        isShowDetail: false,
        isShowGoodPop: false,
        roomDetail: null,
        roomBaseInfo: null,
        orderId: null,
        clickIndex: null
      }
    },
    filters: {
      setTime
    },
    components: { DetailPop, GoodPop },
    computed: {
      ...mapGetters({

      })
    },
    beforeDestroy() {

    },

    async mounted () {
      this.pageHeight = document.documentElement.clientHeight;
      this._onGetRoomList();
      setInterval(() => {
        this._onGetRoomList();
      }, 1000 * 60 * 5)
    },
    methods: {
      _onSetShowDetail(item, flag, index) {
        this.roomBaseInfo = item;
        if(index >= 0)this.clickIndex = index;
        if(!flag){
          this._onGetRoomList(); // 刷新房间列表
          return this.isShowDetail = flag;
        }// 关闭弹窗
        if(item && item.roomStatus === 0){
          this.isShowDetail = flag;
          this.roomDetail = null;

          return
        }
        this.$store.dispatch("roomDetailAction", {roomId: item && item.id}).then((res) => {
          if(res && res.success){
            this.roomDetail = res.obj;
            this.isShowDetail = flag;
          } else {
            this.$store.dispatch('errorMessage', {msg: res && res.msg || '服务异常，请稍后重试~',status: true})
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {msg: err && err.msg || '服务异常，请稍后重试~',status: true})
        })
      },
      _onSetShowGoodPop(data,orderId) {
        if(orderId)this.orderId = orderId;
        if(!data && this.clickIndex >= 0){
          // 添加商品 刷新订单详情弹窗
          this.isShowDetail = false;
          // this._onSetShowDetail(this.roomListData[this.clickIndex], true)
          this._onSetShowDetail(this.roomBaseInfo, true)
        }
        this.isShowGoodPop = data;
      },
      _onGetRoomList(){
        this.$store.dispatch("roomListAction").then((res) => {
          if(res && res.success && res.obj && res.obj.length){
            let _ary1 = [];
            let _ary2 = [];
            res.obj.forEach((item) => {
              if(item.roomType === '1'){
                _ary1.push(item);
              } else {
                _ary2.push(item);
              }
            });
            this.roomListData = {
              bigRoomList: _ary1,
              smallRoomList: _ary2,
            }
          } else {
            this.$store.dispatch('errorMessage', {
              msg: res && res.msg || '服务异常，请稍后重试~',
              status: true
            })
          }
        }).catch((err) => {
          this.$store.dispatch('errorMessage', {msg:  err && err.msg || '服务异常，请稍后重试~',status: true})
        })
      },
      onSetRoomTime(t){
        let _timer = new Date().getTime();
        return countdownTime((Math.floor((_timer - t)/1000)))
      }
    }
  }
</script>


