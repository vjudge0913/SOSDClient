<template>
    <div class="mycss">
        这是一个测试页面
        <date></date>
        <hr-y></hr-y>
        <detail></detail>
        <excellent-works></excellent-works>
    </div>
</template>

<script>
import date from '../components/date.vue';
import hrY from '../components/hr-y.vue';
import comIntro from '../components/comIntro.vue';
import detail from '../components/detail.vue';
import excellentWorks from '../components/excellentWorks.vue';

export default {
    components:{
        date,hrY,comIntro,detail,excellentWorks
    }
}
</script>

<style lang="scss">
</style>
