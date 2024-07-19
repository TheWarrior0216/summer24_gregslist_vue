<script setup>
import { computed } from "vue";
import { House } from "../models/House.js";
import { AppState } from "../AppState.js";


defineProps({home: {type: House}})

const account = computed(()=>AppState.account)

function setEditable(home){
  AppState.editable  = home
}

</script>


<template>
<div class="col-6 px-0">
        <img :src="home.imgUrl"
          :alt="home.description">
      </div>
      <div class="col-6">
        <h2 class="text-center">{{home.description}}</h2>
        <p class="fs-3 p-1 "> ${{ home.price }}</p>
        <p class="fs-3 p-1"> {{ home.bedrooms }} Bedroom {{home.bathrooms}} Bath</p>
        <button v-if="account?.id == home.creatorId" class="btn btn-dark mb-3" data-bs-toggle="modal" data-bs-target="#EdithouseFormModal" @click="setEditable(home)"> Edit House Listing</button>
      </div>
</template>


<style lang="scss" scoped>
img {
  width: 100%;
  max-height: 50dvh;
  object-fit: cover;
  object-position: bottom;

}
</style>