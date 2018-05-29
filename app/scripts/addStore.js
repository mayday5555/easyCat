$(function() {
  'use strict';

  var stores = [
    {
      name: '北京',
      engName: 'Beijing',
      stores: [
        {
          name: '西直门店',
          address: '北京市西城区西直门外大街112号阳光大厦B1',
          image: 'images/stores/xizhimen.jpg'
        },
        {
          name: '红莲店',
          address: '北京市西城区手帕口南街80号京铁和园A1泛悦B1层',
          image: 'images/stores/honglian.png'
        },
        {
          name: '亦庄世纪店',
          address: '北京市经海二路与科创五街交汇城乡世纪广场B1层',
          image: 'images/stores/yizhuang.jpg'
        },
        {
          name: '亦庄经开店',
          address: '北京市亦庄经济开发区地盛北街40楼地下一层',
          image: 'images/stores/jingkai.jpg'
        },
        {
          name: '世界之花店',
          address: '北京市大兴区旧宫镇久敬庄路世界之花假日广场B1',
          image: 'images/stores/shijiezhihua.jpg'
        },
        {
          name: '大成店',
          address: '北京市丰台区8号翠微百货B1层',
          image: 'images/stores/dacheng.png'
        }
      ]
    },
    {
      name: '上海',
      engName: 'Shanghai',
      stores: [
        {
          name: '白金湾店',
          address: '上海市公平路99号白金湾商业广场1层',
          image: 'images/stores/baijinwan.jpg'
        },
        {
          name: '金桥店',
          address: '上海市浦东新区金桥国际商业广场1座B1层',
          image: 'images/stores/jinqiao.png'
        },
        {
          name: '杨高南路店',
          address: '上海市浦东新区北艾路1782号1层',
          image: 'images/stores/yanggaonanlu.png'
        },
        {
          name: '新江湾店',
          address: '上海市杨浦区殷行路1388弄悠方购物公园B1层',
          image: 'images/stores/xinjiangwan.png'
        },
        {
          name: '上海湾店',
          address: '上海市浦东南路1138号上海湾广场B1层',
          image: 'images/stores/shanghaiwan.png'
        },
        {
          name: '大宁店',
          address: '上海市静安区万荣路699号大宁音乐广场B1层',
          image: 'images/stores/daning.png'
        },
        {
          name: '长泰店',
          address: '上海金科路2889号',
          image: 'images/stores/changtai.jpg'
        },
        {
          name: '宝地店',
          address: '上海市昆明路555号',
          image: 'images/stores/baodi.png'
        },
        {
          name: '裕德路店',
          address: '上海市徐汇区裕德路165号',
          image: 'images/stores/default.jpg'
        },
        {
          name: '搜乐城店',
          address: '上海市虹口区广粤路299号盒马鲜生门店',
          image: 'images/stores/default.jpg'
        }
      ]
    },
    {
      name: '成都',
      engName: 'Chengdu',
      stores: [
        {
          name: '德坤店',
          address: '成都市温江区光华大道三段1860号德坤新天地1F',
          image: 'images/stores/default.jpg'
        },
        {
          name: '莱蒙店',
          address: '成都市二环路南四段51号莱蒙都会B1层',
          image: 'images/stores/laimeng.jpg'
        }
      ]
    },
    {
      name: '杭州',
      engName: 'Hangzhou',
      stores: [
        {
          name: '亲橙里店',
          address: '杭州市亲橙里商场B1',
          image: 'images/stores/default.jpg'
        }
      ]
    },
    {
      name: '广州',
      engName: 'Guangzhou',
      stores: [
        {
          name: '曜一城店',
          address: '广州市天河区天河北路719号2楼自编1单元',
          image: 'images/stores/default.jpg'
        }
      ]
    },
    {
      name: '深圳',
      engName: 'Shenzhen',
      stores: [
        {
          name: '皇庭广场店',
          address: '深圳市福田区福华三路皇庭广场B1层',
          image: 'images/stores/huangting.jpg'
        }
      ]
    },
    {
      name: '福州',
      engName: 'Fuzhou',
      stores: [
        {
          name: '茶亭店',
          address: '福建省福州市台江区茶亭街道八一七路茶亭地块八商业综合楼B1',
          image: 'images/stores/default.jpg'
        }
      ]
    },
    {
      name: '武汉',
      engName: 'Wuhan',
      stores: [
        {
          name: '南国首义店',
          address: '武汉市武昌区张之洞路151号',
          image: 'images/stores/shouyi.jpg'
        }
      ]
    },
    {
      name: '南京',
      engName: 'Nanjing',
      stores: [
        {
          name: '夫子庙店',
          address: '江苏省南京市秦淮区来燕路1号盒马鲜生',
          image: 'images/stores/default.jpg'
        }
      ]
    },
    {
      name: '西安',
      engName: 'Xian',
      stores: [
        {
          name: '太白店',
          address: '西安市碑林区南二环路西段155号太白印象城B1',
          image: 'images/stores/taibai.png'
        }
      ]
    }
  ];

  var storeTpl = Handlebars.compile(
    '{{#each this}} <div class="cities-container"> <div class="city-title"> <img src="images/icons/location.png"  class="location-icon"> <span class="city-text">{{name}}</span> <span class="city-engText">{{engName}}</span> </div> <div class="stores-wrapper"> {{#each stores}} <div class="store cell-primary center-items"> <div class="store-icon-wrapper"> <div class="store-icon" style="background-image: url({{image}})"></div> </div> <div class="cell-primary-1"> <div class="store-title bottom-padding bottom-margin"> {{name}} </div> <div class="store-address"> {{address}} </div> </div> </div> {{/each}} </div> </div> {{/each}}'
  );
  $('.content-wrapper').html(storeTpl(stores));
});
