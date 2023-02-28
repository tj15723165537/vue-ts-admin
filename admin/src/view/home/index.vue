<template>
  <div class="home">
    <div class="left">
      <First/>
      <Second/>
    </div>
    <Map />
    <div class="right">
      <Third/>
      <Fourth/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import First from "@/view/home/components/First.vue";
import Second from "@/view/home/components/Second.vue";
import Third from "@/view/home/components/Third.vue";
import Fourth from "@/view/home/components/Fourth.vue";
import Map from "@/view/home/components/Map.vue";
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  .left,.right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    >div{
      padding: 20px 10px;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
