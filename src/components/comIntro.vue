<template>
    <div class="competition-introduction">
        <p class="ci-h">{{ h }}</p>
        <p class="ci-p" v-for="item in p" :key="item">{{ item.p }}</p>
    </div>
</template>

<script>
export default {
    name:'com-intro',
    data:function(){
      return {
        year: '2018',
        month: '09',
        day: '23',
        h: '【校赛】福州大学校赛报名开始',
        p:[
            {p:'一些缩略介绍xxxxx'},
            {p:'一些缩略介绍xxxxx'},
        ],
        arrUrl: '../res/Arrow.png',
        imgUrl:'../res/bg5.png',
      }
    }
    }
</script>

<style lang="scss" >
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
</style>
