<template>
  <div id="map"></div>
</template>

<script lang="ts" setup>
import {nextTick} from "vue";

nextTick(() => {
  var map = new BMapGL.Map('map');
  map.centerAndZoom(new BMapGL.Point(106.5518, 29.5627), 13);
  map.enableScrollWheelZoom(true);
})

</script>
<style lang="scss" scoped>
#map{
  border-radius: 20px;
  box-shadow:
      1.1px 1.1px 2.2px rgba(0, 0, 0, 0.02),
      2.7px 2.7px 5.3px rgba(0, 0, 0, 0.028),
      5px 5px 10px rgba(0, 0, 0, 0.035),
      8.9px 8.9px 17.9px rgba(0, 0, 0, 0.042),
      16.7px 16.7px 33.4px rgba(0, 0, 0, 0.05),
      40px 40px 80px rgba(0, 0, 0, 0.07);
}
</style>