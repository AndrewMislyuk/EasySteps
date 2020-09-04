<template>
  <div class="form__block">
    <form class="form" @submit.prevent="submitForm">
      <input
        class="form__input"
        type="text"
        placeholder="Your Name"
        v-model.trim="name"
        :class="{
          error:
            ($v.name.$dirty && !$v.name.required) ||
            ($v.name.$dirty && !$v.name.minLength),
        }"
      />
      <small v-if="$v.name.$dirty && !$v.name.required" class="invalid"
        >Field is empty</small
      >
      <small v-else-if="$v.name.$dirty && !$v.name.minLength" class="invalid"
        >Name is incorrect min Length {{ $v.name.$params.minLength.min }}</small
      >
      <input
        class="form__input"
        type="email"
        placeholder="Your Email"
        v-model.trim="email"
        :class="{
          error:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
      <small v-if="$v.email.$dirty && !$v.email.required" class="invalid"
        >Field is empty</small
      >
      <small v-else-if="$v.email.$dirty && !$v.email.email" class="invalid"
        >Email is incorrect</small
      >
      <input
        class="form__input"
        type="text"
        placeholder="Phone"
        v-model.trim="phone"
        :class="{
          error:
            ($v.phone.$dirty && !$v.phone.required) ||
            ($v.phone.$dirty && !$v.phone.minLength),
        }"
      />
      <small v-if="$v.phone.$dirty && !$v.phone.required" class="invalid"
        >Field is empty</small
      >
      <small v-else-if="$v.phone.$dirty && !$v.phone.minLength" class="invalid"
        >Phone is incorrect min Length
        {{ $v.phone.$params.minLength.min }}</small
      >
      <button class="form__button" type="submit">Download eBook Now</button>
      <div class="form__text">
        * We don’t share your personal info with anyone. Check out our Policy
        for more information.
      </div>
    </form>
  </div>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: "",
    name: "",
    phone: "",
  }),
  validations: {
    email: { email, required },
    name: { required, minLength: minLength(3) },
    phone: { required, minLength: minLength(10) },
  },
  methods: {
    submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.name = this.email = this.phone = "";
      this.$swal("Success", "Form submit success:)", "success");
    },
  },
};
</script>
