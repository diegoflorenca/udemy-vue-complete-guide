<template>
  <form @submit.prevent="submitUserForm">
    <div><label>Name</label><input type="text" v-model="enteredName" /></div>
    <div><label>Age</label><input type="text" v-model="enteredAge" /></div>
    <button>Add user</button>
  </form>
</template>
<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUserForm() {
      const randomId = this.enteredName + Math.floor(Math.random() * 1000) + 1;
      this.$emit("add-user", {
        id: randomId,
        name: this.enteredName,
        age: this.enteredAge,
      });
    },
  },
};
</script>
