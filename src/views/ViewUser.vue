<template>
    <div>
        <!-- Header -->
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 color-text fw-bold mt-3">View User</p>
                    <p class="mt-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta
                        rerum accusantium distinctio odio doloribus illum, maxime accusamus
                        perferendis numquam suscipit praesentium ipsum, error assumenda vero ipsam
                        sed itaque pariatur!
                    </p>
                </div>
            </div>
        </div>

        <!-- ข้อมูล -->
        <div class="container mt-3">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img
                        :src="user.photo"
                        alt=""
                        class="user-edit-img"
                    />
                </div>
                <div class="col-md-5">
                    <ul class="list-group">
                        <li class="list-group-item">
                            Name : <span class="fw-bold">{{ user.name }}</span>
                        </li>
                        <li class="list-group-item">
                            Email : <span class="fw-bold">{{ user.email }}</span>
                        </li>
                        <li class="list-group-item">
                            Phone : <span class="fw-bold">{{ user.phone }}</span>
                        </li>
                        <li class="list-group-item">
                            Company : <span class="fw-bold">{{ user.company }}</span>
                        </li>
                        <li class="list-group-item">
                            Title : <span class="fw-bold">{{ user.title }}</span>
                        </li>
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
                    `http://localhost:5000/users/${this.$route.params.id}`
                );
                this.user = response.data;
                console.log("id", this.$route.params.id);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped></style>
