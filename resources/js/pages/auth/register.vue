<template>
  <div class="container">
    <div class="row m-5">
      <div class="col-md-5 m-auto">
        <div class="card p-4">
          <div class="card-body">
            <h3 class="card-title text-center">Register</h3>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "register"
};
</script>
