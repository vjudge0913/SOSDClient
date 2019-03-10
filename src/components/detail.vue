<template>
    <div class="detials">
        <div class="three-part">
            <date></date>
            <hr-y></hr-y>
            <div class="competition-introduction">
                <p class="ci-h">{{ h }}</p>
                <p class="ci-p" v-for="item in p" :key="item">{{ item.p }}</p>
            </div>
        </div>
        <div style="width:10%;">
            <a class="arrow-bg" href="#" traget="_blank"><img alt="" :src="arrUrl"> </a>
        </div>
        <div class="double-center" ><img alt="" :src="imgUrl"  style="width:70%; border-radius:10px;"></div>
        <div class="bg-blur"></div>
        </div>
</template>

<script>
import hrY from './hr-y.vue';
import date from './date.vue';

export default {
    name:"detail",
    data: function () {
      return {
        year: '2018',
        month: '09',
        day: '23',
        h: '【校赛】福州大学校赛报名开始',
        p:[
            {p:'一些缩略介绍xxxxx'},
            {p:'一些缩略介绍xxxxx'},
        ],
        arrUrl: '../src/res/Arrow.png',
        imgUrl:'../src/res/bg5.png',
      }
    },
    components:{
        "hr-y":hrY,
        "date":date,
    }
}
</script>

<style lang="scss">
.detials {
	width:100%;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	border-color:rgba(199,213,245,1.00);
	border-width:1px;
	border-radius: 8px;
	border-style: solid;
	margin-bottom: 2%;
    font-size: 100px;
	}
.three-part {
	width:70%;
	display: flex;
	flex-direction: row;
	font-family: "CN";
	font-style: normal;
	line-height: 0;
}
.competition-introduction {
	width:85%;
	position: relative;
	display: flex;
	flex-direction: column;
	line-height:normal;
}

.ci-h{
	font-size: 0.3em;
	margin-bottom: 40px;
	margin:30px 0 20px;
}
.ci-p{
	font-size: 0.2em;
	color: rgba(102,102,102,1.00);
	margin:10px 0;;
}


.arrow-bg {
	background: rgba(109,167,219,1.00);
	border-radius: 100%;
	position: absolute;
	bottom: 10%;
	box-shadow: rgba(51,51,51,0.3) 0 0 10px;
	font-size: 0.2rem;
	line-height: 0;
	padding:7px;
} 
.arrow-bg img{
	 width:100%;
}
.double-center {
	display: flex;
	justify-content: center;
	align-items: center;
	margin:10px; 
	width:30%;
}
@media screen and (max-width:650px){
    .double-center{
		display: none;
	}
	.detials{
		
		background-size: cover;
		position: relative;
		z-index: -6;
		overflow: hidden;
	}
}
</style>
