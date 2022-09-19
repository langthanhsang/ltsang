<template>
  <div class="product-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4"> Product Management</h2>
      <p><router-link to="/product/create">Add new</router-link></p>
    </div>
    <div class="container">
      <div class="cart-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col"> Price</th>
            <th scope="col">Handel</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  components: {

  }
}
</script>

<style scoped>

</style>
