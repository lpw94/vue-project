<template>
  <div class="hello">
    <header class="head">
      <div class="logo"><img src="../assets/logo.png" alt=""></div>
      <div class="right-icon"><img src="../assets/logo.png" alt=""></div>
    </header>

    <div class="slider">
	    <div class="close"  @click="hide">
  			<img src="../assets/close.png" alt="">
  		</div>
    	
    </div>

    <div class="title">
      <p>关爱英烈遗属,健康中国走进百城</p>
    </div>

    <div class="player">
      <video id="video" width="100%" height="100%" controls="controls" poster="images/v_bg.png">
        <source src="../assets/video/chun.mp4" type="video/mp4"></source>
      </video>
    </div>

    <p>
       <button @click="hide">获取手机</button>
    </p>

    <div v-if="show" class="layer">
    </div>

    <div v-if="show" class="content">
		<div class="close"  @click="hide">
			<img src="../assets/close.png" alt="">
		</div>
		<p>输入手机号码，分享数量更多奖品。</p>
		<div><input type="text" placeholder="请输入手机号码"></div>
		<div><input type="button" value="参与分享活动"></div>
	</div>
    

    <h1>活动流程</h1>
    <h3>主会场（6月2日）</h3>

      <ul>
        <li>8:30                   签到</li>

        <li>9:18------9:20     主持人开场</li>

        <li>9:20------9:30     介绍嘉宾</li>

        <li>9:30------10:30    领导致辞</li>

        <li>1、抗衰老促进会杨院长</li>

        <li>2、增爱基金理事长胡锦星</li>

        <li>3、深圳未来医学董事长华飙</li>

        <li>4、中农商盟刘红英</li>

        <li>5、中关村社会信息化创新研究院执行秘书长周燕莉</li>

        <li>10:30-----10:40    世抗会武汉分会启动仪式</li>

        <li>10:40-----11:00    捐赠、聘书</li>

        <li>11:00-----11:30    基因专家讲座（肿瘤筛查）</li>

        <li>11:30-----12:00    干细胞专家讲座（免疫细胞）</li>

        <li>12:00-----12:10    合影、主持人介绍下午会议流程，价值598000的神秘大奖</li>

        <li>13:30                    签到</li>

        <li>14:00------14:05    主持人开场</li>

        <li>14:05------14:20    刘英致贺辞加公司介绍</li>

        <li>14:20------14:25    刘红英致贺辞</li>

        <li>14:25------14:40    唐雯致感谢辞及武汉公司发展战略</li>

        <li>14:40------14:45    开业盛典</li>

        <li>14:45------15:15    基因专家讲座（全套）</li>

        <li>15:15------15:25    第一轮抽奖（六等奖）</li>

        <li>15:25------16:00    干细胞专家</li>

        <li>16:00------16:10    第二轮抽奖（五等奖）</li>

        <li>16:10------16:30    华总分析投资</li>

        <li>16:30------16:40    第三轮抽奖（四等奖）</li>

        <li>16:40------17:10    刘英（健康旅游产品套餐）</li>

        <li>17:10------17:30    现场互动、成交</li>

        <li>17:30------17:40    成交者现场抽奖（三等奖）</li>

        <li>17:40------18:40    吃饭、看节目</li>

        <li>18:40------19:00    分享、做成交环节</li>

        <li>19:00------19:10    第五轮抽奖（二等奖）</li>

        <li>19:10------19:20    节目</li>

        <li>19:20------19:30    广州子公司分享（成交）</li>

        <li>19:30------19:40    第六轮抽奖（价值198000一等奖）</li>

        <li>19:40------19:50    节目</li>

        <li>19:50------20:00    武汉子公司分享</li>

        <li>20:00------20:10    节目</li>

        <li>20:10------20:20    成交</li>

        <li>20:20------20:30     抽超级大奖（价值598000特等奖）</li>

      </ul>


   

   
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    	show: false,
        msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    hide(){
    	this.show = !this.show;
    	console.log(this.show)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	position: relative;
}
.slider{
	position: absolute;
	right: 0;
	top: 0;
	z-index: 2;
	width: 200px;
	height: 100%;
	background-color: #000;
}
.head{
  height: 100px;
  background-color: #222;
}
.head img{
  width: 100%;
  height: 100%;
}
.head .logo{
  margin-top: 10px;
  display: inline-block;
  width: 150px;
  height: 80px;
}

.head .right-icon{
  float: right;
  margin-top: 10px;
  display: inline-block;
  width: 150px;
  height: 80px;
}
.title{
  height: 200px;
  color: #666;
  border: 1px solid #000;
}
.player{
  height: 200px;
  color: #666;
  border: 1px solid #000;
}
.layer{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.4);
}
.content{
	z-index: 10;
	width: 90%;
	height: 200px;
	position: fixed;
	left: 50%;
	margin-left: -45%;
	top: 50%;
	margin-top: -100px;
	background: #fff;
	border: 1px solid #000;
}
.content .close img{
	width: 100%;
    height: 100%;
}
.content .close{
	position: absolute;
	right: 0;
	top: -40px;
	width: 40px;
	height: 40px;
}
</style>