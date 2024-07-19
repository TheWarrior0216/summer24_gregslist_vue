<script setup>
import { computed, onMounted } from "vue";
import { housesService } from "../services/HousesService.js";
import { AppState } from "../AppState.js";


const houses = computed(()=> AppState.houses)
const account = computed(()=> AppState.account)

onMounted(() => {
  getHouses()
})

async function getHouses() {
  await housesService.getHouses()
}

</script>


<template>
  <div class="container">
    <div>
      <h2 class="text-center pt-5"> Choose Your House</h2>
      <div class="d-flex justify-content-center my-3">
        <button v-if="account" class="btn btn-dark mb-3" data-bs-toggle="modal" data-bs-target="#houseFormModal">Create
              House Listing</button>
              
      </div>
      </div>
    <div v-for="house in houses" :key="house.id" class="row bg-info mb-3">
      <HouseCard :home = 'house'/>
    </div>
  </div>

  <FormModal modalId="houseFormModal">
    <!-- targets the slot with name of 'modalHeader' and injects whatever is between the template tags -->
    <template #modalHeader>
      Create House
    </template>
    <!-- targets the slot with name of 'modalBody' and injects whatever is between the template tags -->
    <template #modalBody>
      <HouseForm />
    </template>
  </FormModal>

<FormModal modalId="EdithouseFormModal">
    <!-- targets the slot with name of 'modalHeader' and injects whatever is between the template tags -->
    <template #modalHeader>
      Edit House
    </template>
    <!-- targets the slot with name of 'modalBody' and injects whatever is between the template tags -->
    <template #modalBody>
      <EditHouseForm />
    </template>
  </FormModal>

</template>


<style lang="scss" scoped>


.row {
  border: 3px, dashed, purple;
}
</style>

