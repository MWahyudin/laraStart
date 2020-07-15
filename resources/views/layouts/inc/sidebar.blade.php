<aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Main Sidebar Container -->
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="./img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
        <span class="brand-text font-weight-light">Lara Mng</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="./img/profile.png" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block"> {{ Auth::user()->name }} </a>
            </div>
        </div>
          <!-- Sidebar Menu -->
<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
        data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
with font-awesome or any other icon font library -->
<li class="nav-item">
<router-link to="/dashboard" class="nav-link">
    <i class="nav-icon fas fa-tachometer-alt yellow"></i>
    <p>Dashboard<span class="right badge badge-danger">New</span></p>
</router-link>
</li>

        <li class="nav-item has-treeview ">
            <a href="#" class="nav-link">
                <i class="nav-icon fas fa-cog blue"></i>
                <p>
                    Management
                    <i class="right fas fa-angle-left"></i>
                    {{-- <i class="right fas fa-cog"></i> --}}
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/users" class="nav-link">
                        <i class="fas fa-users nav-icon"></i>
                        <p>Users</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-times"></i>
                        <p>Inactive Page</p>
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <router-link to="/profile" class="nav-link">
                <i class="nav-icon fas fa-user green"></i>
                <p>Profile</p>
            </router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('logout') }}"
            onclick="event.preventDefault();
        document.getElementById('logout-form').submit();">
        <i class="nav-icon fas fa-power-off red"></i>
        <p>
            {{ __('Logout') }}
        </p>
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
        </li>
    </ul>
</nav>
<!-- /.sidebar-menu -->
</div>
<!-- /.sidebar -->
</aside>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

<!-- Main content -->
<div class="content">
    <div class="container-fluid">

      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>

    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
<!-- Control sidebar content goes here -->
<div class="p-3">
    <h5>Title</h5>
    <p>Sidebar content</p>
</div>
</aside>
<!-- /.control-sidebar -->
