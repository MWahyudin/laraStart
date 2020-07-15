<template>
    <div class="container-fixed">
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">User Tableeee</h3>
                        <div class="card-tools">
                            <button class="btn btn-success" @click="newModal">
                                Add New
                                <i class="fas fa-user-plus"></i>
                            </button>
                            <div
                                class="input-group input-group-sm"
                                style="width: 150px;"
                            >
                                <div class="input-group-append">
                                    <button
                                        type="submit"
                                        class="btn btn-default"
                                    ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Desciption</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Registered At</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users.data" :key="index">
                                    <td>{{ users.current_page == 1 ? index + 1 : users.current_page.toString() + index }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.bio }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>
                                        {{ user.type }}
                                    </td>
                                    <td>{{ user.created_at | date }}</td>
                                    <td>
                                        <a href="#" @click="editModal(user)">
                                            <i class="fas fa-edit blue"></i>
                                        </a>
                                        |
                                        <a
                                            href="#"
                                            @click="deleteUser(user.id)"
                                        >
                                            <i class="fas fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
	<preloader-component
                        :preloader="preloader">
        </preloader-component>


		<pagination-component
                    :pagination="users"
                    v-on:pagi="getUsers"
                    :offset="offset">
        </pagination-component>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="addNewModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addNewLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5
                            class="modal-title"
                            id="addNewModal"
                            v-show="!editMode"
                        >
                            Add new data
                        </h5>
                        <h5
                            class="modal-title"
                            id="addNewModal"
                            v-show="editMode"
                        >
                            Edit info
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form
                        @submit.prevent="editMode ? updateUser() : createUser()"
                    >
                        <div class="modal-body">
                            <div class="form-group">
                                <input
                                    v-model="form.name"
                                    refs="inputName"
                                    autofocus
                                    id="inputName"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    autocomplete="off"
                                    :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="name"
                                ></has-error>
                            </div>

                            <div class="form-group">
                                <input
                                    v-model="form.email"
                                    placeholder="Email Address"
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('email')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="email"
                                ></has-error>
                            </div>

                            <div class="form-group">
                                <textarea
                                    v-model="form.bio"
                                    placeholder="Short Destcription User bio (Optional)"
                                    type="text"
                                    name="bio"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('bio')
                                    }"
                                />
                                <has-error :form="form" field="bio"></has-error>
                            </div>

                            <div class="form-group">
                                <select
                                    v-model="form.type"
                                    placeholder="type Address"
                                    type="type"
                                    name="type"
                                    id="type"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('type')
                                    }"
                                >
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard User</option>
                                    <option value="author">Author</option>
                                </select>
                                <has-error
                                    :form="form"
                                    field="type"
                                ></has-error>
                            </div>

                            <div class="form-group">
                                <input
                                    v-model="form.password"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has(
                                            'password'
                                        )
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="password"
                                ></has-error>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                            >
                                <i class="fas fa-chevron-circle-left"></i> Close
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                v-show="!editMode"
                            >
                                <i class="fas fa-plus-circle"></i> Create
                            </button>
                            <button
                                type="submit"
                                class="btn btn-success"
                                v-show="editMode"
                            >
                                <i class="fas fa-edit"></i> Update
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PreloaderComponent from '../components/Preloader'
import PaginationComponent from '../components/Pagination'

export default {
    components: {
        PaginationComponent,
		PreloaderComponent,
    },
    data() {
        return {
            editMode: false,
            users: {
                  total: 0,
                per_page: 10,
                from: 1,
                to: 0,
                current_page: 1,
                data: []
            },
              offset: 10, // Total Items por page (default)
            preloader: false, // Is Preloader is runing
            form: new Form({
                id: "",
                name: "",
                email: "",
                password: "",
                type: "",
                bio: "",
                photo: ""
            })
        };
    },
    methods: {
        //delete user
        deleteUser(id) {
            btnDelete
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true
                })
                .then(result => {
                    if (result.value) {
                        this.$Progress.start();
                        //send request to server
                        this.form.delete("api/user/" + id);
                        Fire.$emit("afterCreate");
                        $("#addNewModal").modal("hide");
                        //send data to api
                        // salahdisini
                        btnDelete.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        this.$Progress.finish();
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === swal.DismissReason.cancel
                    ) {
                        btnDelete.fire(
                            "Cancelled",
                            "Your data file is safe :)",
                            "error"
                        );
                    }
                });
        },
        updateUser() {
            //send http request to api
            this.form
                .patch("api/user/" + this.form.id)
                .then(() => {
                    this.$Progress.start();
                    Fire.$emit("afterCreate");
                    $("#addNewModal").modal("hide");
                    swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your date has been updated",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    this.$Progress.finish();
                })
                .catch(() => {});
        },

        editModal(user) {
            this.editMode = true;
            this.form.clear();
            this.form.reset();
            $("#addNewModal").modal("show");
            this.form.fill(user);
        },
        newModal() {
            this.editMode = false;
            this.form.clear();
            this.form.reset();
            $("#addNewModal").modal("show");
        },
          getUsers (page) {
			this.preloader = true
this.users.current_page = page
			axios.get(`api/user?page=${this.users.current_page}`)
				.then(response => {
					this.users = response.data
				}, error => {
					console.log(error)
				})
				.finally(() => this.preloader = false)
		},
        LoadUser() {
            this.preloader = true
            axios.get(`api/user?page=${this.users.current_page}`)
            // .then(({ data }) => (this.users = data.data));
            	.then(response => {
					console.log(response)
					this.users = response.data
				}, error => {
					console.log(error)
				})
				.finally(() => this.preloader = false)
        },
        createUser() {
            this.form
                .post("api/user")
                //without arrow function
                // .post("api/user")
                // .then(response => {
                //     this.posts = response.data;
                //     // toast.
                //     alert("data has been saved");
                //     $("#addNewModal").modal("hide");
                // })
                // .catch(err => {});

                .then(() => {
                    // toast.
                    this.$Progress.start();
                    Fire.$emit("afterCreate");
                    $("#addNewModal").modal("hide");

                    toast.fire({
                        icon: "success",
                        title: "Data saving successfully"
                    });
                    this.$Progress.finish();
                    // Toast.fire({
                    //     icon: "success",
                    //     title: "Signed in successfully"
                    // });
                    // toast.fire(
                    //     "GGreats!!!!",
                    //     "Data has been Added!",
                    //     "success"
                    // );
                })
                .catch(() => {});
        }
    },
    created() {
        this.getUsers();
        Fire.$on("afterCreate", () => {
            this.LoadUser();
        });
        // setInterval(() => this.LoadUser(), 5000);
    },
    mounted() {
        // Your JQuery code here
        $(document).ready(function() {
            $("#addNewModal").on("shown.bs.modal", function() {
                $(this)
                    .find("#inputName")
                    .focus();
            });
        });
    }
};
</script>
