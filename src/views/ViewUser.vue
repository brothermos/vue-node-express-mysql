<template>
   <!-- Header -->
   <div class="container mt-3">
      <div class="row">
         <div class="col">
            <p class="h3 color-text fw-bold">View User</p>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta rerum
               accusantium distinctio odio doloribus illum, maxime accusamus perferendis numquam
               suscipit praesentium ipsum, error assumenda vero ipsam sed itaque pariatur!
            </p>
         </div>
      </div>
   </div>

   <!-- ข้อมูล -->
   <div class="container">
      <div class="row align-items-center">
         <div class="col-md-4">
            <img
               src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
               alt=""
               class="user-img-big"
            />
         </div>
         <div class="col-md-5">
            <ul class="list-group">
               <li class="list-group-item">Name : <span class="fw-bold">Name</span></li>
               <li class="list-group-item">Email : <span class="fw-bold">Email</span></li>
               <li class="list-group-item">Mobile : <span class="fw-bold">Mobile</span></li>
               <li class="list-group-item">Company : <span class="fw-bold">Company</span></li>
               <li class="list-group-item">Title : <span class="fw-bold">Title</span></li>
            </ul>
         </div>
      </div>

      <div class="row mt-5">
         <div class="col">
            <router-link to="/" class="btn new-button"
               ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
            >
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
