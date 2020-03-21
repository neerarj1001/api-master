<template>
  <div>
    <v-form ref="createForm" @submit.prevent >
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="name" label="Employee Name" required :rules="[genericRules.required]" single-line></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model.number="salary" label="Employee Salary" single-line required :rules="[genericRules.required, genericRules.integerCheck]"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model.number="age" label="Employee Age" single-line required :rules="[genericRules.required, genericRules.integerCheck]"></v-text-field>
        </v-col>
        <v-col class="text-center" sm="11">
          <v-btn small color="primary" @click="submit" type="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    id: null,
    name: '',
    salary: null,
    age: null,
    genericRules: {
      required: t => t && t.length !== 0 || 'This Field is required',
      integerCheck: t => t && Number.isInteger(t) || 'Only Integer'
    }
  }),

  methods: {
    submit() {
      if (this.$refs.createForm.validate()) {
        this.$store.dispatch('employees/createEmployee', {
          name: this.name,
          salary: this.salary,
          age: this.age,
        })
      }
    }
  }
}

</script>
