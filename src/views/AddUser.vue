<template>
   <!-- Header -->
   <div class="container mt-3">
      <div class="row">
         <div class="col">
            <p class="h3 text-success fw-bold">Add User</p>
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
         <div class="col-md-4">
            <form @submit.prevent="handleSubmitForm">
               <div class="mb-2">
                  <input v-model="user.name" type="text" class="form-control" placeholder="Name" />
               </div>
               <div class="mb-2">
                  <input
                     v-model="user.photo"
                     type="text"
                     class="form-control"
                     placeholder="Photo URL"
                  />
               </div>
               <div class="mb-2">
                  <input
                     v-model="user.email"
                     type="email"
                     class="form-control"
                     placeholder="Email"
                  />
               </div>
               <div class="mb-2">
                  <input
                     v-model="user.mobile"
                     type="number"
                     class="form-control"
                     placeholder="Mobile"
                  />
               </div>
               <div class="mb-2">
                  <input
                     v-model="user.company"
                     type="text"
                     class="form-control"
                     placeholder="Company"
                  />
               </div>
               <div class="mb-2">
                  <input
                     v-model="user.title"
                     type="text"
                     class="form-control"
                     placeholder="Title"
                  />
               </div>
               <div class="mb-2">
                  <input type="submit" class="btn btn-success" value="Create" />
               </div>
            </form>
         </div>
         <div class="col-md-4">
            <img :src="user.photo" alt="" class="user-img" />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "AddUser",
   data() {
      return {
         user: {
            name: "",
            photo: "",
            email: "",
            mobile: "",
            company: "",
            title: "",
         },
      };
   },
};
</script>

<style lang="scss" scoped></style>
