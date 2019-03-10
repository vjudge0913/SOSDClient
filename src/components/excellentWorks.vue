<template>
    <div class="img" onmouseover="details()" onmouseout="detailsClear()">
        <img alt="icon" src="../res/奖章.png" id="details_icon1" class="icon1"/>
        <img alt="icon" src="../res/团队设置.png" id="details_icon2" class="icon2"/>
        <img alt="icon" src="../res/时间01.png" id="details_icon3" class="icon3"/>
        <img alt="icon" src="../res/文件.png" id="details_icon4" class="icon4"/>
        <p class="img1" id="p1">作品名称</p>
        <p class="img2" id="p2">软件杯一等奖</p>
        <img alt="the work information" src="../res/矩形5.png" id="cover"/>
        <img alt="works" src="../res/1拷贝.png" class="works_img" id="works_img"/>
    </div>
</template>

<script>
export default {
    name:"excellentWorks",
    computed:{
    details:function(){
    img1=document.getElementById("works_img");
    img1.src="../res/组10_v1.png";

    cover=document.getElementById("cover");
    cover.style.display="none";

    icon1=document.getElementById("details_icon1");
    icon1.style.display="block";

    icon2=document.getElementById("details_icon2");
    icon2.style.display="block";

    icon3=document.getElementById("details_icon3");
    icon3.style.display="block";

    icon4=document.getElementById("details_icon4");
    icon4.style.display="block";

    p1=document.getElementById("p1");
    p1.style.margin=" 337px 0 0 288px";
    p1.style.color="#0066cc";

    p2=document.getElementById("p2");
    p2.innerHTML="软件杯一等奖<br/><br/>队长，队员1，队员2<br/><br/>2018年10月19日<br/><br/>简介，xxxxxxxxxxxxxxxxxxxxx<br/><br/>简介，xxxxxxxxxxxxxxxxxxxxx";
    p2.style.margin=" 52px 0 0 233px";
    p2.style.fontSize="17px";
    p2.style.letterSpacing="1px";
},

    detailsClear:function(){
    img1=document.getElementById("works_img");
    img1.src="../res/first-fold-image.png";

    cover=document.getElementById("cover");
    cover.style.display="block";

    icon1=document.getElementById("details_icon1");
    icon1.style.display="none";

    icon2=document.getElementById("details_icon2");
    icon2.style.display="none";

    icon3=document.getElementById("details_icon3");
    icon3.style.display="none";

    icon4=document.getElementById("details_icon4");
    icon4.style.display="none";

    p1=document.getElementById("p1");
    p1.style.margin=" 315px 0 0 31px";
    p1.style.color="#ffffff";

    p2=document.getElementById("p2");
    p2.innerHTML="软件杯一等奖";
    p2.style.margin=" 352px 0 0 31px";
    p2.style.fontSize="18px";
    p2.style.letterSpacing="2px";
}
    }
}
</script>

<style lang="scss">
.icon1,.icon2,.icon3,.icon4{
    display:none;
}
.img1,.img2{
        position: absolute;
}
#cover{
        position: absolute;
        margin: 304px 0 0 0;
}
.works_img{
        cursor: pointer;
}

</style>
