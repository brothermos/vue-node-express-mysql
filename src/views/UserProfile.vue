<template>
    <div>
        <!-- Header -->
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <div class="h3 color-text fw-bold mt-3">
                        User Profile
                        <router-link to="/user/add" class="btn new-button btn-sm">
                            <i class="fa fa-plus-circle me-1"></i>New
                        </router-link>
                    </div>
                    <p class="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui amet
                        possimus totam est earum quo distinctio, perferendis, nisi, inventore fuga a
                        molestias dicta accusamus consequatur ullam voluptatibus asperiores odio.
                    </p>
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Search Name"
                                            
                                        />
                                    </div>
                                    <div class="col">
                                        <input type="submit" class="btn new-button" value="Send" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Show ข้อมูล -->
        <div class="container mt-3" v-if="users.length > 0">
            <div class="row">
                <div class="col-md-6" v-for="user of users" :key="user.id">
                    <div class="card my-2 card-background">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <img :src="user.photo" alt="" class="user-img" />
                                </div>
                                <div class="col-sm-7">
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
                                    </ul>
                                </div>
                                <div
                                    class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
                                >
                                    <router-link
                                        :to="`/user/view/${user.id}`"
                                        class="btn btn-warning my-1"
                                    >
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                    <router-link
                                        :to="`/user/edit/${user.id}`"
                                        class="btn btn-primary my-1"
                                    >
                                        <i class="fa fa-pen"></i>
                                    </router-link>
                                    <button
                                        class="btn btn-danger my-1"
                                        @click="deleteUser(user.id)"
                                    >
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
            users: [],
            // searchFilter: "",
        };
    },
    // computed: {
    //     usersList() {
    //         if (this.searchFilter.trim().length > 0) {
    //             return this.users.filter((user) => user.name.includes(this.searchFilter.trim()));
    //         }
    //         return this.getUser();
    //     },
    // },
    created() {
        this.getUser();
    },
    methods: {
        //get all user
        async getUser() {
            try {
                const response = await axios.get("http://localhost:5000/users");
                this.users = response.data;
                console.log(this.users);
            } catch (error) {
                console.log(error);
            }
        },
        // delete
        async deleteUser(id) {
            try {
                if (window.confirm("Are you sure you want to delete this post?")) {
                    await axios.delete(`http://localhost:5000/users/${id}`);
                    this.getUser();
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.card-background {
    /* background-color: rgb(205, 147, 147); */
    background-color: #01308b;
}
</style>
