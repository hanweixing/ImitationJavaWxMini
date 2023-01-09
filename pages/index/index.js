// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentSwiper: 0, // 轮播图当前索引
    banner: [
      {id: 1, url: 'https://juhuixing-dts.oss-cn-shenzhen.aliyuncs.com/ddlu7ce1ntzxrnaxqdyn.jpg'},
      {id: 2, url: 'https://juhuixing-dts.oss-cn-shenzhen.aliyuncs.com/dxzvhddk5b8olybkucdv.jpg'},
      {id: 3, url: 'https://juhuixing-dts.oss-cn-shenzhen.aliyuncs.com/3bluuokv04qsdiunppk3.jpg'},
      {id: 4, url: 'https://juhuixing-dts.oss-cn-shenzhen.aliyuncs.com/nlzvqw7jauvtnx6p8hts.jpg'}
    ], // 轮播
    menuItems: [
      {id: 1, url: 'https://img2.baidu.com/it/u=2117876871,335539471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', title: '收藏榜单'},
      {id: 2, url: 'https://img2.baidu.com/it/u=2117876871,335539471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', title: '简历技巧'},
      {id: 3, url: 'https://img2.baidu.com/it/u=2117876871,335539471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', title: '面试技巧'},
      {id: 4, url: 'https://img2.baidu.com/it/u=2117876871,335539471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', title: '算法基础'}
    ], // 中间层
    sections: [
      { title: 'Java专题', 
        products: [
          {title: 'Java基础', count: 85, bgColor: 'rgb(2, 129, 255)'},
          {title: 'Java多线程', count: 52, bgColor: 'rgb(168, 58, 181)'}
        ]
      },
      { title: 'Spring专题', 
        products: [
          {title: 'Spring', count: 26, bgColor: 'rgb(228, 79, 162)'},
          {title: 'Spring MVC', count: 25, bgColor: 'rgb(230, 77, 67)'},
          {title: 'Spring Boot', count: 8, bgColor: 'rgb(171, 113, 77)'},
          {title: 'Spring Cloud', count: 32, bgColor: 'rgb(145, 200, 74)'}
        ]
      },
      { title: '数据库专题', 
        products: [
          {title: 'Mybatis', count: 35, bgColor: 'rgb(2, 129, 255)'},
          {title: 'MySQL', count: 88, bgColor: 'rgb(2, 129, 255)'},
          {title: 'Redis', count: 53, bgColor: 'rgb(2, 129, 255)'},
          {title: 'MongoDB', count: 29, bgColor: 'rgb(2, 129, 255)'}
        ]
      },
      { title: '消息队列专题', 
        products: [
          {title: 'KafKa', count: 51, bgColor: 'rgb(2, 129, 255)'},
          {title: 'RocketMQ', count: 25, bgColor: 'rgb(2, 129, 255)'},
        ]
      },
    ], // 专题系列
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 点击搜索栏
  onClickSearch() {
    wx.showToast({
      title: '点击搜索栏',
      icon: 'none'
    })

    // 是去webview
    // wx.navigateTo({
    //   url: "/pages/webview/index",
    // })

    // 是去md
    wx.navigateTo({
        url: "/pages/mdPage/index",
    })
  },
  // 监听轮播图中的current变化
  onChangeIndicatorDots: function(current, source) {
    if (current.detail.source !== '') {
      this.setData({
        currentSwiper: current.detail.current
      });
    }
  },
})
