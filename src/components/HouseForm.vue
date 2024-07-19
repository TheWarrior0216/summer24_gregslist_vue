<script setup>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { Modal } from 'bootstrap';


const editablehouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  year: 0,
  price: 0,
  levels: 0,
  description: '',
  imgUrl: '',
  id: ''
})

async function createHouse() {
  try {
    await housesService.createHouse(editablehouseData.value) // NOTE this is a ref object, we have to pass down the value stored inside of the ref
    editablehouseData.value = {
      bedrooms: 0,
      bathrooms: 0,
      year: 0,
      price: 0,
      levels: 0,
      description: '',
      imgUrl: '',
      id: ''
    }
    Modal.getOrCreateInstance('#houseFormModal').hide()
  } catch (error) {
    Pop.error(error)
  }
}
</script>


<template>
  <!-- NOTE .prevent will call event.preventDefault() -->
  <form @submit.prevent="createHouse()">
    <div class="form-floating mb-3">
      <!-- NOTE v-model sets up tow data binding between the input's value and a variable declared in the script -->
      <!-- this input is bound to the make property in our ref object -->
      <input v-model="editablehouseData.bedrooms" type="text" class="form-control" id="bedrooms" placeholder="Bedrooms..."
        required maxlength="500">
      <label for="bedrooms">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editablehouseData.bathrooms" type="text" class="form-control" id="bathrooms" placeholder="Bathrooms..."
        required maxlength="500">
      <label for="bathrooms">Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editablehouseData.imgUrl" type="url" class="form-control" id="imgUrl" placeholder="House ImgUrl..."
        required maxlength="500">
      <label for="imgUrl">House ImgUrl</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editablehouseData.description" class="form-control" placeholder="House Description..."
        id="description" maxlength="500"></textarea>
      <label for="description">House Description</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editablehouseData.year" type="number" class="form-control" id="year" placeholder="Year..."
        required>
      <label for="year">Year</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editablehouseData.price" type="range" class="form-control" id="price" placeholder="House Price..."
        required min="0" max="1000000">
      <label for="price">House Price {{ '$' + editablehouseData.price }}</label>
    </div>
    <div class="row align-items-center">
      <div class="col-10">
        <div class="form-floating mb-3">
          <select v-model="editablehouseData.engineType" class="form-select text-capitalize" id="levels"
            aria-label="Levels for house">
            <option  :value="0" class="text-capitalize">0</option>
            <option  :value="1" class="text-capitalize">1</option>
            <option  :value="2" class="text-capitalize">2</option>
            <option  :value="3" class="text-capitalize">3</option>
          </select>
          <label for="levels">Levels</label>
        </div>
      </div>
    </div>
    <div class="text-end">
      <button class="btn btn-dark" type="submit">Submit</button>
    </div>
  </form>
</template>


<style scoped></style>