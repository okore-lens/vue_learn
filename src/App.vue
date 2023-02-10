<script setup>
import Basics from "./components/Basics.vue";
import Form from "./components/Form.vue";
import ListRendered from "./components/ListRendered.vue";
</script>

<template>
  <div>
    <div class="card">
      <input v-model="appName" placeholder="Enter the  Name " />
    </div>
    <!-- Basics -->
    <Basics :appName="appName" />

    <!-- List Rendering -->
    <ListRendered />

    <!-- List Rendering -->
    <Form />
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      appName: "",
    };
  },
  components: {
    Form,
    ListRendered,
    Basics,
  },
};
</script>
