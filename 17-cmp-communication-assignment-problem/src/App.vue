<template>
  <div>
    <h1>Users</h1>
    <hr />
    <active-user
      v-for="user in users"
      :key="user.id"
      :user-name="user.name"
      :user-age="user.age"
    />
    <hr />
    <user-data @add-user="addUser" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [{ id: "diego456", name: "Diego Florença", age: "38" }],
    };
  },
  methods: {
    addUser(user) {
      this.users.push(user);
    },
  },
};
</script>
<style></style>
