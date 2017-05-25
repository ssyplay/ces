<template>

  <div >
 <!-- 路由导航-->
    <router-view class="fadeIn" >

    </router-view>
    <!-- 底部按钮-->

    <!--<v-footer></v-footer>-->
    <!--<m-tabbar v-model="select">-->
      <!--<m-tabbar-item :id='tab1' path="home">-->
        <!--<img src="./assets/img/home-normal.png" alt="" slot="icon-normal">-->
        <!--<img src="./assets/img/home-active.png" alt="" slot="icon-active">-->
        <!--主页-->
      <!--</m-tabbar-item>-->
      <!--<m-tabbar-item :id='tab2' path="application">-->
        <!--<img src="./assets/img/application-normal.png" alt="" slot="icon-normal">-->
        <!--<img src="./assets/img/application-active.png" alt="" slot="icon-active">-->
        <!--应用-->
      <!--</m-tabbar-item>-->
    <!--</m-tabbar>-->
    <div class="m-tabbar">
      <a class="m-tabbar-item"  :class="{'is-active':isHome}"  @click="showHome()">
        <span class="m-tabbar-item-icon" v-if="!isHome">
          <img src="./assets/img/home-normal.png">
        </span>
        <span class="m-tabbar-item-icon"  v-if="isHome">
          <img src="./assets/img/home-active.png" >
        </span>
        <span class="m-tabbar-item-text">主页</span>
      </a>
      <a class="m-tabbar-item"  :class="{'is-active':isApp}" @click="showApp()">
        <span class="m-tabbar-item-icon" v-if="!isApp">
          <img src="./assets/img/application-normal.png">
        </span>
        <span class="m-tabbar-item-icon"  v-if="isApp">
          <img src="./assets/img/application-active.png">
        </span>
        <span class="m-tabbar-item-text">应用</span>
      </a>
    </div>

  </div>

</template>
<script type="text/ecmascript-6">

 import footer  from 'components/footer/footer'
// import  mTabbar  from 'components/footer/tabbar'
// import mTabbarItem  from 'components/footer/tabbar-item'
 import { mapState } from 'vuex';
  export default {
    components: {
    'v-footer':footer,
//      mTabbar,
//      mTabbarItem
    },
     data(){
       return{

       }
     },
    computed:{ //用vuex mapstate 工具函数
      ...mapState(['isHome','isApp'])
    },

    methods: {
      showHome(){ //vuex 做全局状态管理
        this.$store.dispatch('showTab',true);
        this.$router.push('home')
      },
      showApp(){
        this.$store.dispatch('showTab',false);
        this.$router.push('application')
      }
    },
    mounted(){

    }
  };
</script>
<style   lang="stylus" rel="stylesheet/stylus" >
  .view{
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .fadeIn {
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .m-tabbar-item{
    flex: 1;
    text-align: center;
    .m-tabbar-item-icon{
      display: block;
      padding-top: 5px;
      img{
        width: 25px;
        height: 25px;
      }
    }
    .m-tabbar-item-text{
      display: block;
      font-size: 14px;
      color:#949494;
      margin-top 2px
    }
    &.is-active{
      .m-tabbar-item-text{
        color: #27A2FA;
      }
    }
  }
  .m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
  }

</style>
