<template>
    <div>
        <!-- Header -->
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 color-text fw-bold">Edit User</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta
                        rerum accusantium distinctio odio doloribus illum, maxime accusamus
                        perferendis numquam suscipit praesentium ipsum, error assumenda vero ipsam
                        sed itaque pariatur!
                    </p>
                </div>
            </div>
        </div>

        <!-- Form edit -->
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-4">
                    <form @submit.prevent="updateForm">
                        <div class="mb-2">
                            <input
                                v-model="user.name"
                                type="text"
                                class="form-control"
                                placeholder="Name"
                            />
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
                                v-model="user.phone"
                                type="number"
                                class="form-control"
                                placeholder="Phone"
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
                        <div class="mt-3">
                            <input type="submit" class="btn new-button me-3" value="Update" />
                            <router-link to="/" class="btn btn-danger"
                                ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
                            >
                        </div>
                    </form>
                </div>
                <div class="col-md-4 ms-4">
                    <img :src="user.photo" alt="" class="user-edit-img" />
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
    created() {
        this.getUserById();
    },
    methods: {
        // get user by id
        async getUserById() {
            try {
                const response = await axios.get(
                    `https://vue-crud-mysql.herokuapp.com/users/${this.$route.params.id}`
                );
                this.user = response.data;
                console.log("id", this.$route.params.id);
            } catch (error) {
                console.log(error);
            }
        },

        async updateForm() {
            // const formData = new FormData();
            // formData.append("name", this.user.name);
            // formData.append("photo", this.user.photo);
            // formData.append("email", this.user.email);
            // formData.append("phone", this.user.phone);
            // formData.append("company", this.user.company);
            // formData.append("title", this.user.title);
            this.$swal
                .fire({
                    title: "You wanna update it?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#01308b",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes!",
                })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            // ยิง axios
                            await axios.put(
                                `https://vue-crud-mysql.herokuapp.com/users/${this.$route.params.id}`,
                                this.user
                            );

                            this.$swal.fire(
                                `User ${this.user.name} has been updated.`,
                                "",
                                "success"
                            );
                            this.$router.push("/");
                        } catch (error) {
                            console.log(error);
                        }
                    }
                });
            // try {
            //     await axios.put(`http://localhost:5000/users/${this.$route.params.id}`, this.user);
            //     this.$router.push("/");
            // } catch (error) {
            //     console.log(error);
            // }
        },
    },
};
</script>

<style lang="scss" scoped></style>
