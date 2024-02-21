<script setup lang="ts">
import StationCard from '../components/StationCard.vue'
import type { StationItem } from '@/type'
import { ref } from 'vue'
import LaundryStationService from '@/services/LaundryStationService'
const stations = ref<StationItem[]>([])

LaundryStationService.getEvent().then((response) => {
  stations.value = response.data
})

//   {
//     id: 1,
//     title: 'Otteri Wash & Dry',
//     description:
//       'Thailand number 1 laundry convenience store with the most branches and the most user members who have proven that the standards of convenience and cleanliness of the laundry system are satisfactory. Complete modern washing technology International standard industrial washing machine and dryer Open 24 hours a day',
//     location: 'wait for api',
//     small_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     medium_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     large_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     dry_machine: 40
//   },
//   {
//     id: 2,
//     title: 'Neko Wash & Dry',
//     description:
//       'Thailand number 1 laundry convenience store with the most branches and the most user members who have proven that the standards of convenience and cleanliness of the laundry system are satisfactory. Complete modern washing technology International standard industrial washing machine and dryer Open 24 hours a day',
//     location: 'wait for api',
//     small_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     medium_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     large_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     dry_machine: 40
//   },
//   {
//     id: 1,
//     title: 'Sky & Wash',
//     description:
//       'Thailand number 1 laundry convenience store with the most branches and the most user members who have proven that the standards of convenience and cleanliness of the laundry system are satisfactory. Complete modern washing technology International standard industrial washing machine and dryer Open 24 hours a day',
//     location: 'wait for api',
//     small_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     medium_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     large_washing: {
//       cold_water: 30,
//       warm_water: 40,
//       hot_water: 50
//     },
//     dry_machine: 40
//   }
// ])
</script>
<template>
  <div>
    <div class="content">
      <h1 class="text-3xl font-medium">Participating Laundry Station</h1>
    </div>
    <main class="content">
      <StationCard v-for="station in stations" :key="station.id" :station="station" class="card">
      </StationCard>
    </main>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
}

.card {
  margin-left: 1%;
  margin-right: 1%;
}
</style>
