<template>
   <!-- Header -->
   <div class="container mt-3">
      <div class="row">
         <div class="col">
            <p class="h3 color-text fw-bold">Edit User</p>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta rerum
               accusantium distinctio odio doloribus illum, maxime accusamus perferendis numquam
               suscipit praesentium ipsum, error assumenda vero ipsam sed itaque pariatur!
            </p>
         </div>
      </div>
   </div>

   <!-- Form แอดข้อมูล -->
   <div class="container mt-3">
      <div class="row">
         <div class="col-md-5 me-3">
            <form>
               <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Name" />
               </div>
               <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Photo URL" />
               </div>
               <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Email" />
               </div>
               <div class="mb-3">
                  <input type="number" class="form-control" placeholder="Mobile" />
               </div>
               <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Company" />
               </div>
               <div class="mt-3">
                  <input type="submit" class="btn new-button me-3" value="Update" />
                  <router-link to="/" class="btn btn-danger"
                     ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
                  >
               </div>
            </form>
         </div>
         <div class="col-md-4">
            <img
               src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
               alt=""
               class="user-edit-img"
            />
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
