<template>
    <div style="width:10%;">
        <a class="arrow-bg" href="#" traget="_blank"><img alt="" :src="arrUrl"></a>
    </div>
</template>

<script>
export default {
    name:'arrow'
}
</script>

<style lang="scss">
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
</style>

