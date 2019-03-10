<template>
    <div class="date">
        <p>
            <span>{{ month }}</span>
            /
            <span>{{ day }}</span>
        </p>
        <p>
            <span>{{ year }}</span>
        </p>
    </div>
</template>

<script>
export default {
    name:"date",
    data:function(){
        return {
            year:'2018',
        month:'09',
        day:'03'
        }
    }
}
</script>

<style lang="scss">
.date{
    margin:10px;
	width:15%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	line-height: 0;
	color: rgba(102,102,102,1.00);
}
.date p{
	margin:20px 0;
}
</style>

