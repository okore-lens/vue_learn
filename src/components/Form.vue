<template>
  <div class="card">
    <form>
      <input v-model="formInputs.name" placeholder="Enter your name" />
      <hr />
      <input v-model="formInputs.age" placeholder="Enter your age" />
      <hr />
      <input
        v-model="formInputs.interests"
        placeholder="Enter your interests"
      />
      <hr />

      <select v-model="formInputs.education">
        <option disabled value="">Select Current Level of Education</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="university">University</option>
      </select>
    </form>

    <u><p>Information entered</p></u>
    <p>Name :: {{ formInputs.name }}</p>
    <p>Age ::{{ formInputs.age }}</p>
    <p>Interests :: {{ formInputs.interests }}</p>
    <p>Education Level ::{{ formInputs.education }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInputs: {
        name: "",
        age: "",
        interests: "",
        education: "",
      },
    };
  },
};
</script>

<style scoped></style>
