<script >
import Layout from '../../layouts/AdminLayout.vue'
export default {
  layout: Layout
}
</script>
<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <span>
        Welcome to Dashboard
      </span>
      <router-link :to="{ name: 'adminDashboard' }"> Click Here</router-link>
    </div>
  </q-page>
</template>
