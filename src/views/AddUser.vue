<template>
    <div>
        <!-- Header -->
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 color-text fw-bold mt-3">Add User</p>
                    <p class="mt-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta
                        rerum accusantium distinctio odio doloribus illum, maxime accusamus
                        perferendis numquam suscipit praesentium ipsum, error assumenda vero ipsam
                        sed itaque pariatur!
                    </p>
                </div>
            </div>
        </div>

        <!-- Form แอดข้อมูล -->
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-4">
                    <form @submit.prevent="createForm">
                        <div class="mb-2">
                            <input
                                v-model="user.name"
                                type="text"
                                class="form-control"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                v-model="user.photo"
                                type="text"
                                class="form-control"
                                placeholder="Photo URL"
                                required
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                v-model="user.email"
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                v-model="user.phone"
                                type="number"
                                class="form-control"
                                placeholder="Phone"
                                required
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                v-model="user.company"
                                type="text"
                                class="form-control"
                                placeholder="Company"
                                required
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                v-model="user.title"
                                type="text"
                                class="form-control"
                                placeholder="Title"
                                required
                            />
                        </div>
                        <div class="mt-4">
                            <input type="submit" class="btn new-button me-3" value="Create" />
                            <router-link to="/" class="btn btn-danger"
                                ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
                            >
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <img :src="user.photo" alt="" class="user-img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            user: {
                name: "",
                photo: "",
                email: "",
                phone: "",
                company: "",
                title: "",
            },
        };
    },
    methods: {
        // create new user
        async createForm() {
            // const formData = new FormData();
            // formData.append("name", this.user.name);
            // formData.append("photo", this.user.photo);
            // formData.append("email", this.user.email);
            // formData.append("phone", this.user.phone);
            // formData.append("company", this.user.company);
            // formData.append("title", this.user.title);
            // console.log("this.user.name", this.user.name);
            // console.log("formData", formData);
            try {
                await axios.post("http://localhost:5000/users", this.user);
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
