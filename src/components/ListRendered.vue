<template>
  <ul>
    <li v-for="(person, index) in persons">
      {{ index + 1 }}. My name is {{ person.name }} and I am
      {{ person.age }} years old. <br />
      <div class="twin-cards">
        <ul class="interests-list">
          <h5>Interests</h5>
          <template v-for="interest in person.interests">
            <li>{{ interest }}</li>
          </template>
        </ul>
        <ul class="interests-list">
          <h5>Education Level</h5>
          <template
            v-for="(education, key, index) in person.education"
            :key="index"
          >
            <li>{{ key }} :: {{ education }}</li>
          </template>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        {
          name: "Okore",
          age: 59,
          interests: ["politics", "education", "travelling", "family"],
          education: { primary: "true", secondary: "true", university: "true" },
        },
        {
          name: "Achieng'",
          age: 48,
          interests: ["fashion", "family", "humanitarian aid", "cooking"],
          education: {
            primary: "true",
            secondary: "true",
            university: "false",
          },
        },
        {
          name: "Okudo",
          age: 25,
          interests: ["partying", "shoes", "travelling", "cars"],
          education: { primary: "true", secondary: "true", university: "true" },
        },
        {
          name: "Ochieng'",
          age: 22,
          interests: ["music", "cars", "accessories", "physics"],
          education: { primary: "true", secondary: "true", university: "true" },
        },
        {
          name: "Owino",
          age: 20,
          interests: [
            "computers",
            "documentaries",
            "travelling",
            "relationships",
          ],
          education: { primary: "true", secondary: "true", university: "true" },
        },
        {
          name: "Bodo",
          age: 15,
          interests: ["fashion", "cooking", "stories", "money"],
          education: {
            primary: "true",
            secondary: "true",
            university: "false",
          },
        },
        {
          name: "Marien",
          age: 7,
          interests: ["education", "cartoon", "games", "stories"],
          education: {
            primary: "true",
            secondary: "false",
            university: "false",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.interests-list {
  margin-top: 0 !important;
  background-color: maroon;
}
</style>
