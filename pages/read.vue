<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined v-for="user in $store.state.employees.users" :key="user.id">
      <v-list-item three-line>
        <v-list-item-content  >
          <div class="overline mb-4">EMPLOYEE ID:{{user.id}}</div>
          <v-list-item-title class="headline mb-1">{{user.employee_name}} </v-list-item-title>
          <v-list-item-subtitle>EMPLOYEE AGE:{{user.employee_age}}</v-list-item-subtitle>
          <v-list-item-subtitle>EMPLOYEE SALARY:{{user.employee_salary}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text>DELETE</v-btn>
        <v-btn text>EDIT</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>

export default {
  created() {
    this.$store.dispatch('employees/fetchEmployees')
  }
}

</script>
