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
        },
        {
          name: '百荣店',
          address: '北京市东城区永定门外大街甲101号地上1，2层',
          image: 'images/stores/default.jpg'
        },
        {
          name: '天猫北京二炮军营店',
          address: '北京市朝阳区北苑二炮军营一层',
          image: 'images/stores/default.jpg'
        },
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
          address: '上海市虹口区广粤路299号搜乐城',
          image: 'images/stores/default.jpg'
        },
        {
          name: '同济大学店',
          address: '上海市嘉定区曹安公路4800号',
          image: 'images/stores/default.jpg'
        },
        {
          name: '虹桥店',
          address: '上海市闵行区金汇路538号金汇四季广场B1层',
          image: 'images/stores/default.jpg'
        },
        {
          name: '新荟城店',
          address: '上海市莲花南路1388弄7号盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '星空店',
          address: '上海市长宁区虹桥路1665号星空广场B1楼盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '天猫同济店',
          address:
            '上海市嘉定区曹安公路4800号同济大学嘉定校区嘉定同济新天地S101',
          image: 'images/stores/default.jpg'
        },
        {
          name: '红点城店',
          address: '上海闵行区七莘路1809号地下一层',
          image: 'images/stores/default.jpg'
        },
        {
          name: '三林店',
          address: '上海市浦东新区东明路2719号盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '盒小马上海松江新桥店',
          address: '上海市松江新桥明中路1885号(明中广场)',
          image: 'images/stores/default.jpg'
        },
        {
          name: '绿地上海缤纷汇店',
          address: '上海市徐汇区东安路562号绿地缤纷城购物广场B1',
          image: 'images/stores/default.jpg'
        },
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
          name: '建设路店',
          address: '成都市成华区建设路10号钻石广场B1层盒马鲜生店（钻石广场店）',
          image: 'images/stores/default.jpg'
        },
        {
          name: '西村店',
          address: '成都市青羊区贝森北路1号西村大院B1层盒马鲜生店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '九眼桥店',
          address: '成都市锦江区一环东路五段55号阳光新业中心B1层盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '莱蒙店',
          address: '成都市二环路南四段51号莱蒙都会B1层',
          image: 'images/stores/laimeng.jpg'
        },
        {
          name: '未来中心店',
          address: '成都市成华区东风路26号未来中心B1层盒马鲜生门店',
          image: 'images/stores/default.jpg'
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
        },
        {
          name: '杭州萧山店',
          address: '杭州市萧山区金城路927号华润万象汇B1层',
          image: 'images/stores/default.jpg'
        },
        {
          name: '天猫零售通杭州滨江聚光中心店',
          address: '杭州滨江区阡陌路459号聚光中心',
          image: 'images/stores/default.jpg'
        },
        {
          name: '天猫零售通杭州滨江天猫小店',
          address: '杭州滨江区滨兴路59号与西兴路交汇处天猫小店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '天猫零售通杭州梦想小镇店',
          address: '杭州余杭区仓前街道仓兴街88号灵源村委办公楼',
          image: 'images/stores/default.jpg'
        },
        {
          name: '崇邦杭州余之城店',
          address: '杭州市余杭区迎宾路501号',
          image: 'images/stores/default.jpg'
        },
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
        },
        {
          name: '广州家信商业中心店',
          address: '广州市海珠区工业大道北路88号首层自编之一A16铺盒马鲜生店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '广州保利中环店',
          address: '广州市越秀区建设大马路20号B103房盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '天猫广州华南农业大学店',
          address: '广州市天河区华南农业大学绿榕园1楼',
          image: 'images/stores/default.jpg'
        },
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
        },
        {
          name: '水湾门店',
          address: '深圳市蛇口荔园路东水湾壹玖柒玖广场(一期)负101',
          image: 'images/stores/default.jpg'
        },
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
        },
        {
          name: '恒力博纳店',
          address: '福州市鼓楼区北二环中路18号恒力博纳广场南区B1层',
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
        },
        {
          name: '万家汇店',
          address: '武汉市江岸区百步亭花园路205号万家汇购物中心2层盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '盒马武汉太和里店',
          address: '武汉市江汉区青年路59号环球贸易中心B1层',
          image: 'images/stores/default.jpg'
        },
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
        },
        {
          name: '湖南路店',
          address: '南京市鼓楼区马台街９９号B1楼盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
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
        },
        {
          name: '曲江店',
          address: '西安市雁塔区雁塔南路410号曲江银泰城二期B1层',
          image: 'images/stores/default.jpg'
        },
        {
          name: '高新大都荟店',
          address: '西安市雁塔区科技路305号高新大都荟1层盒马鲜生门店',
          image: 'images/stores/default.jpg'
        },
        {
          name: '西安梦想公社店',
          address: '新筑街道国际港务区港务大道89号（梦想公社）',
          image: 'images/stores/default.jpg'
        },
      ]
    },
    {
      name: '南通',
      engName: 'Nantong',
      stores: [
        {
          name: '盒小马南通骑岸店',
          address: '江苏省南通市通州区骑岸镇星润大卖场',
          image: 'images/stores/default.jpg'
        },
      ]
    },
    {
      name: '苏州',
      engName: 'Suzhou',
      stores: [
        {
          name: '盒小马苏州文体店',
          address: '江苏省苏州市高新区太湖大道文体中心盒小马店',
          image: 'images/stores/default.jpg'
        },
      ]
    }
  ];

  var storeTpl = Handlebars.compile(
    '{{#each this}} <div class="cities-container"> <div class="city-title"> <img src="images/icons/location.png"  class="location-icon"> <span class="city-text">{{name}}</span> <span class="city-engText">{{engName}}</span> </div> <div class="stores-wrapper"> {{#each stores}} <div class="store cell-primary center-items"> <div class="store-icon-wrapper"> <div class="store-icon" style="background-image: url({{image}})"></div> </div> <div class="cell-primary-1"> <div class="store-title bottom-padding bottom-margin"> {{name}} </div> <div class="store-address"> {{address}} </div> </div> </div> {{/each}} </div> </div> {{/each}}'
  );
  $('.content-wrapper').html(storeTpl(stores));
});
