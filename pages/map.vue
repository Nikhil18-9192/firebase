<template>
  <div>
    <GmapMap :center="center" :zoom="7" style="width: 500px; height: 300px;">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 16.69409, lng: 74.24647 },
      markers: [
        {
          position: { lat: 16.69409, lng: 74.24647 }
        },
        {
          position: { lat: 10.0, lng: 10.0 }
        }
      ]
    };
  }
};
</script>
<style scoped></style>
