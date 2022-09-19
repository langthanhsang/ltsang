<template>
  <div class="product-info">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5"> Product Information</h3>
      <router-link to="/product">back</router-link>
    </div>

    <div class="container">
      <form @submit.prevent="save()">
        <div class="form-group- row">
          <label for="inputPassword" class="col-sm-3 col-form-label">product name</label>
          <div class="col-sm-9">
            <input type="text"
                   class="form-control"
                   v-model="product.name"
                   @blur="validate($event)"
                   v-bind:class="{'is-invalid': errors.name}"
            >
            <div class="invalid-feedback"
                 v-if="errors.name">
              {{ errors.name }}
            </div>
          </div>
        </div>
        <div class="form-group- row">
          <label for="inputPassword" class="col-sm-3 col-form-label">product price</label>
          <div class="col-sm-9">
            <input type="text"
                   class="form-control"
                   v-model="product.price"
                   @blur="validate()"
                   v-bind:class="{'is-invalid': errors.price}"
            >
            <div class="invalid-feedback"
                 v-if="errors.price">
              {{ errors.price }}
            </div>
          </div>
        </div>
        <div class="form-group- row">
          <label for="inputPassword" class="col-sm-3 col-form-label">product description</label>
          <div class="col-sm-9">
            <textarea type="text"
                      class="form-control"
                      v-model="product.description"
                      v-on:blur="validate()"
                      v-bind:class="{'is-invalid': errors.description}"
            ></textarea>
            <div class="invalid-feedback"
                 v-if="errors.description">
              {{ errors.description }}
            </div>
          </div>
        </div>
        <div class="form-group- row">
          <label for="inputPassword"
                 class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9" text-left>
            <button type="submit" class="btn btn-primary">save</button>&nbsp;
            <button type="submit" class="btn btn-danger">cancel</button>
          </div>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFrom",
  data() {
    return {
      errors: {
        name: '',
        price: '',
        description: ''
      },
      product: {
      }
    }
  },
  methods: {
    validate() {
      let invalid = true;
      this.errors = {
        name: '',
        price: '',
        description: ''
      }
      if (!this.product.name) {
        this.errors.name = 'product name is require!'
        invalid = false
      }
      if (!this.product.price) {
        this.errors.price = 'price name is require!'
        invalid = false
      }else if(!this.isNumber(this.product.price)) {
        this.errors.price = 'product must be number'
        invalid = false

      }
      if (!this.product.description) {
        this.errors.description = 'description name is require!'
        invalid = false
      }
      return invalid;
    },
    isNumber(value) {
      return /^\d*$/.test(value)
    },
    save() {
      console.log(this.validate())

    }
  }
}
</script>

<style scoped>

</style>
