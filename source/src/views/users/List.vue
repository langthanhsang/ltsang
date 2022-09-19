<template>
  <div class="users-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4"> User Management</h2>
      <p><router-link to="/users/create">Add new</router-link></p>
    </div>
    <div class="container">
      <div class="cart-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> name</th>
            <th scope="col"> email</th>
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
