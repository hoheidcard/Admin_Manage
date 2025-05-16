import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Login
  {
    meta: {
      title: "Login Layout",
      requiresAuth: false,
    },
    path: "/login-layout",
    redirect: "/login-type",
    name: "login layout",
    component: () =>
      import(
        /* webpackChunkName: "Login Layout" */ "../views/auth/LoginLayout.vue"
      ),
    children: [
      {
        meta: {
          title: "Forgot Password",
          requiresAuth: false,
        },
        path: "/forgot",
        name: "forgot-password",
        component: () =>
          import(
            /* webpackChunkName: "Forgot Password" */ "../views/auth/Forgot.vue"
          ),
      },
      {
        meta: {
          title: "Password Login",
          requiresAuth: false,
        },
        path: "/login",
        name: "login",
        component: () =>
          import(
            /* webpackChunkName: "Password Login" */ "../views/auth/PasswordLogin.vue"
          ),
      },
      {
        meta: {
          title: "Otp Login",
          requiresAuth: false,
        },
        path: "/otp-login",
        name: "otp-login",
        component: () =>
          import(
            /* webpackChunkName: "Otp Login" */ "../views/auth/OtpLogin.vue"
          ),
      },
    ],
  },
  //Dashboard Layout
  {
    meta: {
      title: "Dashboard Layout CRM",
      requiresAuth: true,
    },
    path: "/",
    redirect: "/crm/dashboard",
    name: "dashboard layout crm",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard Layout CRM" */ "../views/CRM/DashboardLayoutCRM.vue"
      ),
    children: [
      {
        meta: {
          title: "CRM Dashboard",
          requiresAuth: true,
        },
        path: "/crm/dashboard",
        name: "crm dashboard",
        component: () =>
          import(
            /* webpackChunkName: "CRM Dashboard" */ "../views/CRM/Dashboard.vue"
          ),
      },
      //My Profile section start
      {
        meta: {
          title: "CRM Profile Layout",
          requiresAuth: true,
        },
        path: "/crm/profile-layout",
        redirect: "/crm/profile",
        name: "crm profile layout",
        component: () =>
          import(
            /* webpackChunkName: "CRM Profile Layout" */ "../views/CRM/Profile/ProfileLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "CRM Profile",
              requiresAuth: true,
            },
            path: "/crm/profile",
            name: "crm profile",
            component: () =>
              import(
                /* webpackChunkName: "CRM Profile" */ "../views/CRM/Profile/Profile.vue"
              ),
          },
          {
            meta: {
              title: "CRM Permission",
              requiresAuth: true,
            },
            path: "/crm/permission",
            name: "crm permission",
            component: () =>
              import(
                /* webpackChunkName: "CRM Permission" */ "../views/CRM/Profile/Permission.vue"
              ),
          },
          {
            meta: {
              title: "CRM Password Reset",
              requiresAuth: true,
            },
            path: "/crm/password-reset",
            name: "crm password reset",
            component: () =>
              import(
                /* webpackChunkName: "CRM Password Reset" */ "../views/CRM/Profile/PassReset.vue"
              ),
          },
        ],
      },
      //School pages
      //Student
      {
        meta: {
          title: "CRM Students",
          requiresAuth: true,
        },
        path: "/crm/students",
        name: "crm students",
        component: () =>
          import(
            /* webpackChunkName: "CRM Students" */ "../views/CRM/School/Students/Students.vue"
          ),
      },
      {
        meta: {
          title: "CRM Add Student",
          requiresAuth: true,
        },
        path: "/crm/add-student",
        name: "crm add student",
        component: () =>
          import(
            /* webpackChunkName: "CRM Add Student" */ "../views/CRM/School/Students/AddStudent.vue"
          ),
      },
      {
        meta: {
          title: "CRM Event Calendar",
          requiresAuth: true,
        },
        path: "/crm/event-calendar",
        name: "crm event calendar",
        component: () =>
          import(
            /* webpackChunkName: "CRM Event Calendar" */ "../views/CRM/EventCalendar.vue"
          ),
      },
      {
        meta: {
          title: "CRM FAQ",
          requiresAuth: true,
        },
        path: "/crm/faq",
        name: "CRM FAQ",
        component: () =>
          import(/* webpackChunkName: "CRM FAQ" */ "../views/FAQ.vue"),
      },
      {
        meta: {
          title: "CRM Carts",
          requiresAuth: true,
        },
        path: "/crm/carts",
        name: "CRM Carts",
        component: () =>
          import(/* webpackChunkName: "CRM Carts" */ "../views/Carts.vue"),
      },
      {
        meta: {
          title: "Delivery Partner",
          requiresAuth: true,
        },
        path: "/crm/delivery-partners",
        name: "delivery-partners",
        component: () =>
          import(
            /* webpackChunkName: "delivery-partners" */ "../views/DeliveryPartner.vue"
          ),
      },
      {
        meta: {
          title: "Product List",
          requiresAuth: true,
        },
        path: "/crm/product-list",
        name: "product-list",
        component: () =>
          import(
            /* webpackChunkName: "product-list" */ "../views/ProductList.vue"
          ),
      },
      {
        meta: {
          title: "Category List",
          requiresAuth: true,
        },
        path: "/crm/category-list",
        name: "category-list",
        component: () =>
          import(
            /* webpackChunkName: "category-list" */ "../views/Category.vue"
          ),
      },
      {
        meta: {
          title: "Banners",
          requiresAuth: true,
        },
        path: "/crm/banners",
        name: "banners",
        component: () =>
          import(
            /* webpackChunkName: "banners" */ "../views/Banners.vue"
          ),
      },
      {
        meta: {
          title: "Blogs",
          requiresAuth: true,
        },
        path: "/crm/blogs",
        name: "Blogs",
        component: () =>
          import(
            /* webpackChunkName: "blogs" */ "../views/Blogs.vue"
          ),
      },
      {
        meta: {
          title: "Users",
          requiresAuth: true,
        },
        path: "/crm/users",
        name: "Users",
        component: () =>
          import(
            /* webpackChunkName: "Users" */ "../views/Users.vue"
          ),
      },
      {
        meta: {
          title: "Editor",
          requiresAuth: false,
        },
        path: "/crm/editor",
        name: "editor",
        component: () =>
          import(/* webpackChunkName: "editor" */ "../views/Editor.vue"),
      },

      {
        meta: {
          title: "Order List",
          requiresAuth: true,
        },
        path: "/crm/order-list",
        name: "order-list",
        component: () =>
          import(/* webpackChunkName: "order-list" */ "../views/OrderList.vue"),
      },
      {
        meta: {
          title: "CRM Privacy Policy",
          requiresAuth: true,
        },
        path: "/crm/privacy-policy",
        name: "CRM Privacy Policy",
        component: () =>
          import(
            /* webpackChunkName: "CRM Privacy Policy" */ "../views/PolicyPages/PrivacyPolicy.vue"
          ),
      },
      {
        meta: {
          title: "CRM Terms",
          requiresAuth: true,
        },
        path: "/crm/terms",
        name: "CRM Terms",
        component: () =>
          import(
            /* webpackChunkName: "CRM Terms" */ "../views/PolicyPages/Terms.vue"
          ),
      },
      {
        meta: {
          title: "CRM Contact",
          requiresAuth: true,
        },
        path: "/crm/contact",
        name: "CRM Contact",
        component: () =>
          import(/* webpackChunkName: "CRM Contact" */ "../views/Contact.vue"),
      },
      {
        meta: {
          title: "CRM Pages",
          requiresAuth: true,
        },
        path: "/crm/pages",
        name: "CRM Pages",
        component: () =>
          import(
            /* webpackChunkName: "CRM Pages" */ "../views/CRM/Pages/PageList.vue"
          ),
      },
      {
        meta: {
          title: "CRM Pages Update",
          requiresAuth: true,
        },
        path: "/crm/pages/edit",
        name: "CRM Pages Update",
        component: () =>
          import(
            /* webpackChunkName: "CRM Pages Update" */ "../views/CRM/Pages/PageEdit.vue"
          ),
      },
      {
        meta: {
          title: "CRM Designation List",
          requiresAuth: true,
        },
        path: "/crm/designation",
        name: "CRM Designation List",
        component: () =>
          import(
            /* webpackChunkName: "CRM Designation List" */ "../views/CRM/Designation/DesignationList.vue"
          ),
      },
      {
        meta: {
          title: "CRM Staff List",
          requiresAuth: true,
        },
        path: "/crm/staff",
        name: "CRM Staff List",
        component: () =>
          import(
            /* webpackChunkName: "CRM Staff List" */ "../views/CRM/Staff/StaffList.vue"
          ),
      },
      {
        meta: {
          title: "CRM Staff Permission",
          requiresAuth: true,
        },
        path: "/crm/staff-permission",
        name: "CRM Staff Permission",
        component: () =>
          import(
            /* webpackChunkName: "CRM Staff Permission" */ "../views/CRM/Staff/StaffPermission.vue"
          ),
      },

      //Admin
      {
        meta: {
          title: "CRM Admin List",
          requiresAuth: true,
        },
        path: "/crm/admin",
        name: "CRM Admin List",
        component: () =>
          import(
            /* webpackChunkName: "CRM Admin List" */ "../views/CRM/Admin/AdminList.vue"
          ),
      },
      {
        meta: {
          title: "CRM Admin Permission",
          requiresAuth: true,
        },
        path: "/crm/admin-permission",
        name: "CRM Admin Permission",
        component: () =>
          import(
            /* webpackChunkName: "CRM Admin Permission" */ "../views/CRM/Admin/AdminPermission.vue"
          ),
      },

      // start school
      {
        meta: {
          title: "Setting School Layout",
          requiresAuth: true,
        },
        path: "/crm/school-layout",
        redirect: "/crm/school/setting/class-list",
        name: "Setting School layout",
        component: () =>
          import(
            /* webpackChunkName: "Setting School Layout" */ "../views/CRM/School/Settings/BranchLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "School Class List",
              requiresAuth: true,
            },
            path: "/crm/school/setting/class-list",
            name: "School Class List",
            component: () =>
              import(
                /* webpackChunkName: "School Class List" */ "../views/CRM/School/Settings/ClassList.vue"
              ),
          },
          {
            meta: {
              title: "School Division List",
              requiresAuth: true,
            },
            path: "/crm/school/setting/division-list",
            name: "School Division list",
            component: () =>
              import(
                /* webpackChunkName: "School Division List" */ "../views/CRM/School/Settings/DivisionList.vue"
              ),
          },
          {
            meta: {
              title: "School Category",
              requiresAuth: true,
            },
            path: "/crm/school/setting/books-category",
            name: "School Category",
            component: () =>
              import(
                /* webpackChunkName: "School Category" */ "../views/CRM/School/Settings/BookCategoryList.vue"
              ),
          },
          {
            meta: {
              title: "School department",
              requiresAuth: true,
            },
            path: "/crm/school/setting/department",
            name: "School department",
            component: () =>
              import(
                /* webpackChunkName: "School department" */ "../views/CRM/School/Settings/DepartmentList.vue"
              ),
          },
          {
            meta: {
              title: "School designation",
              requiresAuth: true,
            },
            path: "/crm/school/setting/designation",
            name: "School designation",
            component: () =>
              import(
                /* webpackChunkName: "School Designation" */ "../views/CRM/School/Settings/DesignationList.vue"
              ),
          },
          {
            meta: {
              title: "School house zone",
              requiresAuth: true,
            },
            path: "/crm/school/setting/house-zone",
            name: "School house zone",
            component: () =>
              import(
                /* webpackChunkName: "School house zone" */ "../views/CRM/School/Settings/HouseZoneList.vue"
              ),
          },
          {
            meta: {
              title: "School Subject",
              requiresAuth: true,
            },
            path: "/crm/school/setting/subject",
            name: "School Subject",
            component: () =>
              import(
                /* webpackChunkName: "School Subject" */ "../views/CRM/School/Settings/SubjectList.vue"
              ),
          },
          {
            meta: {
              title: "School Permission",
              requiresAuth: true,
            },
            path: "/crm/school/setting/permission",
            name: "School permission",
            component: () =>
              import(
                /* webpackChunkName: "School Permission" */ "../views/CRM/School/Settings/OrgPermission.vue"
              ),
          },
          {
            meta: {
              title: "School CSV Download",
              requiresAuth: true,
            },
            path: "/crm/school/setting/csv-download",
            name: "School CSV Download",
            component: () =>
              import(
                /* webpackChunkName: "School CSV Download" */ "../views/CRM/School/Settings/DownloadCsvPermission.vue"
              ),
          },
          {
            meta: {
              title: "School staff CSV Download",
              requiresAuth: true,
            },
            path: "/crm/school/setting/staff-csv-download",
            name: "School staff CSV Download",
            component: () =>
              import(
                /* webpackChunkName: "School staff CSV Download" */ "../views/CRM/School/Settings/DownloadCsvStaffPermission.vue"
              ),
          },
        ],
      },
      {
        meta: {
          title: "School List",
          requiresAuth: true,
        },
        path: "/crm/school-list",
        name: "School List",
        component: () =>
          import(
            /* webpackChunkName: "School List" */ "../views/CRM/School/List.vue"
          ),
      },
      {
        meta: {
          title: "Create School",
          requiresAuth: true,
        },
        path: "/crm/add-school",
        name: "Create School",
        component: () =>
          import(
            /* webpackChunkName: "Create School" */ "../views/CRM/School/Add.vue"
          ),
      },
      {
        meta: {
          title: "Edit School",
          requiresAuth: true,
        },
        path: "/crm/edit-school",
        name: "Edit School",
        component: () =>
          import(
            /* webpackChunkName: "Edit School" */ "../views/CRM/School/Edit.vue"
          ),
      },
      {
        meta: {
          title: "School My branch",
          requiresAuth: true,
        },
        path: "/crm/school/my-branch",
        name: "School My branch",
        component: () =>
          import(
            /* webpackChunkName: "School My branch" */ "../views/CRM/School/Branch/MyBranchList.vue"
          ),
      },
      {
        meta: {
          title: "School My student",
          requiresAuth: true,
        },
        path: "/crm/school/my-student",
        name: "School My student",
        component: () =>
          import(
            /* webpackChunkName: "My School student" */ "../views/CRM/School/Student/MyStudentList.vue"
          ),
      },
      {
        meta: {
          title: "School Student Profile",
          requiresAuth: true,
        },
        path: "/crm/school/student-profile",
        name: "School student profile",
        component: () =>
          import(
            /* webpackChunkName: "School Student Profile" */ "../views/CRM/School/Student/StudentDetails.vue"
          ),
      },
      {
        meta: {
          title: "School student by class div",
          requiresAuth: true,
        },
        path: "/crm/school/students-by-class-section",
        name: "School student by class div",
        component: () =>
          import(
            /* webpackChunkName: "School student by class div" */ "../views/CRM/School/Student/StudentByClassDiv.vue"
          ),
      },
      {
        meta: {
          title: "School create student",
          requiresAuth: true,
        },
        path: "/crm/school/create-my-student",
        name: "School create student",
        component: () =>
          import(
            /* webpackChunkName: "School create student" */ "../views/CRM/School/Student/AddStudent.vue"
          ),
      },
      {
        meta: {
          title: "School update student",
          requiresAuth: true,
        },
        path: "/crm/school/update-my-student",
        name: "School update student",
        component: () =>
          import(
            /* webpackChunkName: "School update student" */ "../views/CRM/School/Student/EditStudent.vue"
          ),
      },
      {
        meta: {
          title: "School import student",
          requiresAuth: true,
        },
        path: "/crm/school/import-student",
        name: "School import student",
        component: () =>
          import(
            /* webpackChunkName: "School import student" */ "../views/CRM/School/Student/Import.vue"
          ),
      },
      {
        meta: {
          title: "School student id card",
          requiresAuth: false,
        },
        path: "/crm/school/student-id-card",
        name: "School student id card",
        component: () =>
          import(
            /* webpackChunkName: "School student id card" */ "../views/CRM/School/Student/IdCardList.vue"
          ),
      },
      {
        meta: {
          title: "School Final student id card",
          requiresAuth: false,
        },
        path: "/crm/school/final-student-id-card",
        name: "School final student id card",
        component: () =>
          import(
            /* webpackChunkName: "School final student id card" */ "../views/CRM/School/Student/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "School Final staff id card",
          requiresAuth: false,
        },
        path: "/crm/school/final-staff-id-card",
        name: "School final staff id card",
        component: () =>
          import(
            /* webpackChunkName: "School final staff id card" */ "../views/CRM/School/Staff/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "School Final student card",
          requiresAuth: false,
        },
        path: "/crm/school/final-student-card",
        name: "School final student card",
        component: () =>
          import(
            /* webpackChunkName: "School final student card" */ "../views/CRM/School/Student/FinalIdCard.vue"
          ),
      },
      {
        meta: {
          title: "School Final staff card",
          requiresAuth: false,
        },
        path: "/crm/school/final-staff-card",
        name: "School final staff card",
        component: () =>
          import(
            /* webpackChunkName: "School final staff card" */ "../views/CRM/School/Staff/FinalIdCard.vue"
          ),
      },
      {
        meta: {
          title: "CRM School Library",
          requiresAuth: true,
        },
        path: "/crm/school/library",
        name: "CRM School Library",
        component: () =>
          import(
            /* webpackChunkName: "CRM Organization Library" */ "../views/CRM/School/Library/MyBookList.vue"
          ),
      },
      {
        meta: {
          title: "School My Staff",
          requiresAuth: true,
        },
        path: "/crm/school/my-staff",
        name: "School My Staff",
        component: () =>
          import(
            /* webpackChunkName: "CRM My Staff" */ "../views/CRM/School/Staff/MyStaffList.vue"
          ),
      },
      {
        meta: {
          title: "School Import My Staff",
          requiresAuth: true,
        },
        path: "/crm/school/import-staff",
        name: "School Import My Staff",
        component: () =>
          import(
            /* webpackChunkName: "School Import My Staff" */ "../views/CRM/School/Staff/Import.vue"
          ),
      },
      {
        meta: {
          title: "School Add Staff",
          requiresAuth: true,
        },
        path: "/crm/school/add-staff",
        name: "CRM School Staff",
        component: () =>
          import(
            /* webpackChunkName: "School Add Staff" */ "../views/CRM/School/Staff/AddStaff.vue"
          ),
      },
      {
        meta: {
          title: "School Staff Profile Layout",
          requiresAuth: true,
        },
        path: "/crm/school-staff-profile-layout",
        redirect: "/crm/school-staff-profile",
        name: "School staff profile layout",
        component: () =>
          import(
            /* webpackChunkName: "Staff Profile Layout" */ "../views/CRM/School/Staff/Profile/StaffProfileLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "School Staff Profile",
              requiresAuth: true,
            },
            path: "/crm/school-staff-profile",
            name: "School crm Staff Profile",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Profile" */ "../views/CRM/School/Staff/Profile/StaffProfile.vue"
              ),
          },
          {
            meta: {
              title: "School Staff Class",
              requiresAuth: true,
            },
            path: "/crm/school-staff-class",
            name: "School Staff Class",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Class" */ "../views/CRM/School/Staff/Profile/StaffClass.vue"
              ),
          },
          {
            meta: {
              title: "School Staff Class Students",
              requiresAuth: true,
            },
            path: "/crm/school-staff-class-students",
            name: "School Staff Class Students",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Class" */ "../views/CRM/School/Staff/Profile/StaffStudents.vue"
              ),
          },
          {
            meta: {
              title: "School Staff Department",
              requiresAuth: true,
            },
            path: "/crm/school-staff-department",
            name: "School Staff Department",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Department" */ "../views/CRM/School/Staff/Profile/StaffDepartment.vue"
              ),
          },
          {
            meta: {
              title: "School Staff Division",
              requiresAuth: true,
            },
            path: "/crm/school-staff-division",
            name: "School Staff Division",
            component: () =>
              import(
                /* webpackChunkName: "CRM School Division" */ "../views/CRM/School/Staff/Profile/StaffDivision.vue"
              ),
          },
          {
            meta: {
              title: "CRM Staff Subject",
              requiresAuth: true,
            },
            path: "/crm/school-staff-subject",
            name: "school Staff Subject",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Subject" */ "../views/CRM/School/Staff/Profile/StaffSubject.vue"
              ),
          },
          {
            meta: {
              title: "School Staff Documents",
              requiresAuth: true,
            },
            path: "/crm/school-staff-Documents",
            name: "School Staff Documents",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Documents" */ "../views/CRM/School/Staff/Profile/StaffDocuments.vue"
              ),
          },
          {
            meta: {
              title: "School Staff Time Table",
              requiresAuth: true,
            },
            path: "/crm/school-staff-time-table",
            name: "School Staff time table",
            component: () =>
              import(
                /* webpackChunkName: "School Staff Documents" */ "../views/CRM/School/Staff/Profile/StaffTimeTable.vue"
              ),
          },
        ],
      },
      // end of school

      // start College
      {
        meta: {
          title: "Setting College Layout",
          requiresAuth: true,
        },
        path: "/crm/college-layout",
        redirect: "/crm/college/setting/class-list",
        name: "Setting College layout",
        component: () =>
          import(
            /* webpackChunkName: "Setting College Layout" */ "../views/CRM/College/Settings/BranchLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "College Class List",
              requiresAuth: true,
            },
            path: "/crm/college/setting/class-list",
            name: "College Class List",
            component: () =>
              import(
                /* webpackChunkName: "College Class List" */ "../views/CRM/College/Settings/ClassList.vue"
              ),
          },
          {
            meta: {
              title: "College Division List",
              requiresAuth: true,
            },
            path: "/crm/college/setting/division-list",
            name: "College Division list",
            component: () =>
              import(
                /* webpackChunkName: "College Division List" */ "../views/CRM/College/Settings/DivisionList.vue"
              ),
          },
          {
            meta: {
              title: "College Category",
              requiresAuth: true,
            },
            path: "/crm/college/setting/books-category",
            name: "College Category",
            component: () =>
              import(
                /* webpackChunkName: "College Category" */ "../views/CRM/College/Settings/BookCategoryList.vue"
              ),
          },
          {
            meta: {
              title: "College department",
              requiresAuth: true,
            },
            path: "/crm/college/setting/department",
            name: "College department",
            component: () =>
              import(
                /* webpackChunkName: "College department" */ "../views/CRM/College/Settings/DepartmentList.vue"
              ),
          },
          {
            meta: {
              title: "College designation",
              requiresAuth: true,
            },
            path: "/crm/college/setting/designation",
            name: "College designation",
            component: () =>
              import(
                /* webpackChunkName: "College Designation" */ "../views/CRM/College/Settings/DesignationList.vue"
              ),
          },
          {
            meta: {
              title: "College Subject",
              requiresAuth: true,
            },
            path: "/crm/college/setting/subject",
            name: "College Subject",
            component: () =>
              import(
                /* webpackChunkName: "College Subject" */ "../views/CRM/College/Settings/SubjectList.vue"
              ),
          },
          {
            meta: {
              title: "College Permission",
              requiresAuth: true,
            },
            path: "/crm/college/setting/permission",
            name: "College permission",
            component: () =>
              import(
                /* webpackChunkName: "College Permission" */ "../views/CRM/College/Settings/OrgPermission.vue"
              ),
          },
          {
            meta: {
              title: "College CSV Download",
              requiresAuth: true,
            },
            path: "/crm/college/setting/csv-download",
            name: "College CSV Download",
            component: () =>
              import(
                /* webpackChunkName: "College CSV Download" */ "../views/CRM/College/Settings/DownloadCsvPermission.vue"
              ),
          },
          {
            meta: {
              title: "College staff CSV Download",
              requiresAuth: true,
            },
            path: "/crm/college/setting/staff-csv-download",
            name: "College staff CSV Download",
            component: () =>
              import(
                /* webpackChunkName: "College staff CSV Download" */ "../views/CRM/College/Settings/DownloadCsvStaffPermission.vue"
              ),
          },
        ],
      },
      {
        meta: {
          title: "College List",
          requiresAuth: true,
        },
        path: "/crm/college-list",
        name: "College List",
        component: () =>
          import(
            /* webpackChunkName: "College List" */ "../views/CRM/College/List.vue"
          ),
      },
      {
        meta: {
          title: "Create College",
          requiresAuth: true,
        },
        path: "/crm/add-college",
        name: "Create College",
        component: () =>
          import(
            /* webpackChunkName: "Create College" */ "../views/CRM/College/Add.vue"
          ),
      },
      {
        meta: {
          title: "Edit College",
          requiresAuth: true,
        },
        path: "/crm/edit-college",
        name: "Edit College",
        component: () =>
          import(
            /* webpackChunkName: "Edit College" */ "../views/CRM/College/Edit.vue"
          ),
      },
      {
        meta: {
          title: "College My branch",
          requiresAuth: true,
        },
        path: "/crm/college/my-branch",
        name: "College My branch",
        component: () =>
          import(
            /* webpackChunkName: "College My branch" */ "../views/CRM/College/Branch/MyBranchList.vue"
          ),
      },
      {
        meta: {
          title: "College My student",
          requiresAuth: true,
        },
        path: "/crm/college/my-student",
        name: "College My student",
        component: () =>
          import(
            /* webpackChunkName: "My College student" */ "../views/CRM/College/Student/MyStudentList.vue"
          ),
      },
      {
        meta: {
          title: "College Student Profile",
          requiresAuth: true,
        },
        path: "/crm/college/student-profile",
        name: "College student profile",
        component: () =>
          import(
            /* webpackChunkName: "College Student Profile" */ "../views/CRM/College/Student/StudentDetails.vue"
          ),
      },
      {
        meta: {
          title: "College student by class div",
          requiresAuth: true,
        },
        path: "/crm/college/students-by-class-section",
        name: "College student by class div",
        component: () =>
          import(
            /* webpackChunkName: "College student by class div" */ "../views/CRM/College/Student/StudentByClassDiv.vue"
          ),
      },
      {
        meta: {
          title: "College create student",
          requiresAuth: true,
        },
        path: "/crm/college/create-my-student",
        name: "College create student",
        component: () =>
          import(
            /* webpackChunkName: "College create student" */ "../views/CRM/College/Student/AddStudent.vue"
          ),
      },
      {
        meta: {
          title: "College update student",
          requiresAuth: true,
        },
        path: "/crm/college/update-my-student",
        name: "College update student",
        component: () =>
          import(
            /* webpackChunkName: "College update student" */ "../views/CRM/College/Student/EditStudent.vue"
          ),
      },
      {
        meta: {
          title: "College import student",
          requiresAuth: true,
        },
        path: "/crm/college/import-student",
        name: "College import student",
        component: () =>
          import(
            /* webpackChunkName: "College import student" */ "../views/CRM/College/Student/Import.vue"
          ),
      },
      {
        meta: {
          title: "College student id card",
          requiresAuth: false,
        },
        path: "/crm/college/student-id-card",
        name: "College student id card",
        component: () =>
          import(
            /* webpackChunkName: "College student id card" */ "../views/CRM/College/Student/IdCardList.vue"
          ),
      },
      {
        meta: {
          title: "College Final student id card",
          requiresAuth: false,
        },
        path: "/crm/college/final-student-id-card",
        name: "College final student id card",
        component: () =>
          import(
            /* webpackChunkName: "college final student id card" */ "../views/CRM/College/Student/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "College Final staff id card",
          requiresAuth: false,
        },
        path: "/crm/college/final-staff-id-card",
        name: "College final staff id card",
        component: () =>
          import(
            /* webpackChunkName: "College final staff id card" */ "../views/CRM/College/Staff/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "College Final student card",
          requiresAuth: false,
        },
        path: "/crm/college/final-student-card",
        name: "College final student card",
        component: () =>
          import(
            /* webpackChunkName: "College final student card" */ "../views/CRM/College/Student/FinalIdCard.vue"
          ),
      },
      {
        meta: {
          title: "College Final staff id card",
          requiresAuth: false,
        },
        path: "/crm/college/final-staff-id-card",
        name: "College final staff id card",
        component: () =>
          import(
            /* webpackChunkName: "College final staff id card" */ "../views/CRM/College/Staff/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "CRM College Library",
          requiresAuth: true,
        },
        path: "/crm/college/library",
        name: "CRM College Library",
        component: () =>
          import(
            /* webpackChunkName: "CRM College Library" */ "../views/CRM/College/Library/MyBookList.vue"
          ),
      },
      {
        meta: {
          title: "College My Staff",
          requiresAuth: true,
        },
        path: "/crm/college/my-staff",
        name: "College My Staff",
        component: () =>
          import(
            /* webpackChunkName: "CRM My Staff" */ "../views/CRM/College/Staff/MyStaffList.vue"
          ),
      },
      {
        meta: {
          title: "College Import My Staff",
          requiresAuth: true,
        },
        path: "/crm/college/import-staff",
        name: "College Import My Staff",
        component: () =>
          import(
            /* webpackChunkName: "College Import My Staff" */ "../views/CRM/College/Staff/Import.vue"
          ),
      },
      {
        meta: {
          title: "College Add Staff",
          requiresAuth: true,
        },
        path: "/crm/college/add-staff",
        name: "CRM College Staff",
        component: () =>
          import(
            /* webpackChunkName: "College Add Staff" */ "../views/CRM/College/Staff/AddStaff.vue"
          ),
      },
      {
        meta: {
          title: "College Staff Profile Layout",
          requiresAuth: true,
        },
        path: "/crm/college-staff-profile-layout",
        redirect: "/crm/college-staff-profile",
        name: "College staff profile layout",
        component: () =>
          import(
            /* webpackChunkName: "Staff Profile Layout" */ "../views/CRM/College/Staff/Profile/StaffProfileLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "College Staff Profile",
              requiresAuth: true,
            },
            path: "/crm/college-staff-profile",
            name: "College crm Staff Profile",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Profile" */ "../views/CRM/College/Staff/Profile/StaffProfile.vue"
              ),
          },
          {
            meta: {
              title: "College Staff Class",
              requiresAuth: true,
            },
            path: "/crm/college-staff-class",
            name: "College Staff Class",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Class" */ "../views/CRM/College/Staff/Profile/StaffClass.vue"
              ),
          },
          {
            meta: {
              title: "College Staff Class Students",
              requiresAuth: true,
            },
            path: "/crm/college-staff-class-students",
            name: "College Staff Class Students",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Class Studnets" */ "../views/CRM/College/Staff/Profile/StaffStudents.vue"
              ),
          },
          {
            meta: {
              title: "College Staff Department",
              requiresAuth: true,
            },
            path: "/crm/college-staff-department",
            name: "College Staff Department",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Department" */ "../views/CRM/College/Staff/Profile/StaffDepartment.vue"
              ),
          },
          {
            meta: {
              title: "College Staff Division",
              requiresAuth: true,
            },
            path: "/crm/college-staff-division",
            name: "College Staff Division",
            component: () =>
              import(
                /* webpackChunkName: "CRM College Division" */ "../views/CRM/College/Staff/Profile/StaffDivision.vue"
              ),
          },
          {
            meta: {
              title: "CRM Staff Subject",
              requiresAuth: true,
            },
            path: "/crm/college-staff-subject",
            name: "college Staff Subject",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Subject" */ "../views/CRM/College/Staff/Profile/StaffSubject.vue"
              ),
          },
          {
            meta: {
              title: "College Staff Documents",
              requiresAuth: true,
            },
            path: "/crm/college-staff-Documents",
            name: "College Staff Documents",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Documents" */ "../views/CRM/College/Staff/Profile/StaffDocuments.vue"
              ),
          },
          {
            meta: {
              title: "College Staff Time Table",
              requiresAuth: true,
            },
            path: "/crm/college-staff-time-table",
            name: "College Staff time table",
            component: () =>
              import(
                /* webpackChunkName: "College Staff Documents" */ "../views/CRM/College/Staff/Profile/StaffTimeTable.vue"
              ),
          },
        ],
      },
      // end of College
      // start Organization
      {
        meta: {
          title: "Setting Organization Layout",
          requiresAuth: true,
        },
        path: "/crm/organization-layout",
        redirect: "/crm/organization/setting/designation",
        name: "Setting Organization layout",
        component: () =>
          import(
            /* webpackChunkName: "Setting Organization Layout" */ "../views/CRM/Organization/Settings/BranchLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "Organization department",
              requiresAuth: true,
            },
            path: "/crm/organization/setting/department",
            name: "Organization department",
            component: () =>
              import(
                /* webpackChunkName: "Organization department" */ "../views/CRM/Organization/Settings/DepartmentList.vue"
              ),
          },
          {
            meta: {
              title: "Organization designation",
              requiresAuth: true,
            },
            path: "/crm/organization/setting/designation",
            name: "Organization designation",
            component: () =>
              import(
                /* webpackChunkName: "Organization Designation" */ "../views/CRM/Organization/Settings/DesignationList.vue"
              ),
          },
          {
            meta: {
              title: "Organization Permission",
              requiresAuth: true,
            },
            path: "/crm/organization/setting/permission",
            name: "Organization permission",
            component: () =>
              import(
                /* webpackChunkName: "Organization Permission" */ "../views/CRM/Organization/Settings/OrgPermission.vue"
              ),
          },
          {
            meta: {
              title: "Organization staff CSV Download",
              requiresAuth: true,
            },
            path: "/crm/organization/setting/staff-csv-download",
            name: "Organization staff CSV Download",
            component: () =>
              import(
                /* webpackChunkName: "Organization staff CSV Download" */ "../views/CRM/Organization/Settings/DownloadCsvStaffPermission.vue"
              ),
          },
        ],
      },
      {
        meta: {
          title: "Organization List",
          requiresAuth: true,
        },
        path: "/crm/organization-list",
        name: "Organization List",
        component: () =>
          import(
            /* webpackChunkName: "Organization List" */ "../views/CRM/Organization/List.vue"
          ),
      },
      {
        meta: {
          title: "Create Organization",
          requiresAuth: true,
        },
        path: "/crm/add-organization",
        name: "Create Organization",
        component: () =>
          import(
            /* webpackChunkName: "Create Organization" */ "../views/CRM/Organization/Add.vue"
          ),
      },
      {
        meta: {
          title: "Edit Organization",
          requiresAuth: true,
        },
        path: "/crm/edit-organization",
        name: "Edit Organization",
        component: () =>
          import(
            /* webpackChunkName: "Edit Organization" */ "../views/CRM/Organization/Edit.vue"
          ),
      },
      {
        meta: {
          title: "Organization My branch",
          requiresAuth: true,
        },
        path: "/crm/organization/my-branch",
        name: "Organization My branch",
        component: () =>
          import(
            /* webpackChunkName: "Organization My branch" */ "../views/CRM/Organization/Branch/MyBranchList.vue"
          ),
      },
      {
        meta: {
          title: "Organization My Staff",
          requiresAuth: true,
        },
        path: "/crm/organization/my-staff",
        name: "Organization My Staff",
        component: () =>
          import(
            /* webpackChunkName: "CRM My Staff" */ "../views/CRM/Organization/Staff/MyStaffList.vue"
          ),
      },
      {
        meta: {
          title: "Organization Import My Staff",
          requiresAuth: true,
        },
        path: "/crm/organization/import-staff",
        name: "Organization Import My Staff",
        component: () =>
          import(
            /* webpackChunkName: "Organization Import My Staff" */ "../views/CRM/Organization/Staff/Import.vue"
          ),
      },
      {
        meta: {
          title: "Organization Add Staff",
          requiresAuth: true,
        },
        path: "/crm/organization/add-staff",
        name: "CRM Organization Staff",
        component: () =>
          import(
            /* webpackChunkName: "Organization Add Staff" */ "../views/CRM/Organization/Staff/AddStaff.vue"
          ),
      },
      {
        meta: {
          title: "Organization Final staff id card",
          requiresAuth: false,
        },
        path: "/crm/organization/final-staff-id-card",
        name: "Organization final staff id card",
        component: () =>
          import(
            /* webpackChunkName: "College Organization staff id card" */ "../views/CRM/Organization/Staff/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "Organization Final staff id card",
          requiresAuth: false,
        },
        path: "/crm/organization/final-staff-id-card",
        name: "Organization final staff id card",
        component: () =>
          import(
            /* webpackChunkName: "Organization final staff id card" */ "../views/CRM/Organization/Staff/FinalIdCardList.vue"
          ),
      },
      {
        meta: {
          title: "Organization Staff Profile Layout",
          requiresAuth: true,
        },
        path: "/crm/organization-staff-profile-layout",
        redirect: "/crm/organization-staff-profile",
        name: "Organization staff profile layout",
        component: () =>
          import(
            /* webpackChunkName: "Staff Profile Layout" */ "../views/CRM/Organization/Staff/Profile/StaffProfileLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "Organization Staff Profile",
              requiresAuth: true,
            },
            path: "/crm/organization-staff-profile",
            name: "Organization crm Staff Profile",
            component: () =>
              import(
                /* webpackChunkName: "Organization Staff Profile" */ "../views/CRM/Organization/Staff/Profile/StaffProfile.vue"
              ),
          },
          {
            meta: {
              title: "Organization Staff Department",
              requiresAuth: true,
            },
            path: "/crm/organization-staff-department",
            name: "Organization Staff Department",
            component: () =>
              import(
                /* webpackChunkName: "Organization Staff Department" */ "../views/CRM/Organization/Staff/Profile/StaffDepartment.vue"
              ),
          },
          {
            meta: {
              title: "Organization Staff Documents",
              requiresAuth: true,
            },
            path: "/crm/organization-staff-Documents",
            name: "Organization Staff Documents",
            component: () =>
              import(
                /* webpackChunkName: "Organization Staff Documents" */ "../views/CRM/Organization/Staff/Profile/StaffDocuments.vue"
              ),
          },
        ],
      },
      // end of Organization

      //partner
      {
        meta: {
          title: "CRM Partners",
          requiresAuth: true,
        },
        path: "/crm/partners",
        name: "CRM Partners",
        component: () =>
          import(
            /* webpackChunkName: "CRM Partners" */ "../views/CRM/Partners/PartnerList.vue"
          ),
      },
      {
        meta: {
          title: "CRM Partner Settings Layout",
          requiresAuth: true,
        },
        path: "/crm/partners/setting",
        redirect: "/crm/partners/setting/department",
        name: "crm Partner Settings layout",
        component: () =>
          import(
            /* webpackChunkName: "CRM Partner Settings Layout" */ "../views/CRM/Partners/Settings/PartnersLayout.vue"
          ),
        children: [
          {
            meta: {
              title: "CRM Partner Department",
              requiresAuth: true,
            },
            path: "/crm/partners/setting/department",
            name: "crm Partner Department",
            component: () =>
              import(
                /* webpackChunkName: "CRM Staff Department" */ "../views/CRM/Partners/Settings/DepartmentList.vue"
              ),
          },
          {
            meta: {
              title: "CRM Partner Designation",
              requiresAuth: true,
            },
            path: "/crm/partners/setting/designation",
            name: "crm Partner Designation",
            component: () =>
              import(
                /* webpackChunkName: "CRM Partner designation" */ "../views/CRM/Partners/Settings/DesignationList.vue"
              ),
          },
          {
            meta: {
              title: "CRM Partner Permission",
              requiresAuth: true,
            },
            path: "/crm/partners/setting/permission",
            name: "crm Partner Permission",
            component: () =>
              import(
                /* webpackChunkName: "CRM Partner designation" */ "../views/CRM/Partners/Settings/PartnerPermission.vue"
              ),
          },
        ],
      },
      {
        meta: {
          title: "CRM Create Partners",
          requiresAuth: true,
        },
        path: "/crm/add-partners",
        name: "CRM Create Partners",
        component: () =>
          import(
            /* webpackChunkName: "CRM Create Partners" */ "../views/CRM/Partners/AddPartner.vue"
          ),
      },
      {
        meta: {
          title: "CRM Update Partners",
          requiresAuth: true,
        },
        path: "/crm/edit-partners",
        name: "CRM Update Partners",
        component: () =>
          import(
            /* webpackChunkName: "CRM Update Partners" */ "../views/CRM/Partners/EditPartner.vue"
          ),
      },
      {
        meta: {
          title: "CRM Sub Partners",
          requiresAuth: true,
        },
        path: "/crm/sub-partners",
        name: "CRM Sub Partners",
        component: () =>
          import(
            /* webpackChunkName: "CRM Update Partners" */ "../views/CRM/Partners/SubPartners/SubPartnersList.vue"
          ),
      },
      {
        meta: {
          title: "Partners Organization",
          requiresAuth: true,
        },
        path: "/crm/partners/organizations",
        name: "Partners Organizations",
        component: () =>
          import(
            /* webpackChunkName: "Partners Organizations" */ "../views/CRM/Partners/Organization/OrganizationList.vue"
          ),
      },
      {
        meta: {
          title: "Add Partners Organization",
          requiresAuth: true,
        },
        path: "/crm/partners/add-organization",
        name: "Add Partners Organization",
        component: () =>
          import(
            /* webpackChunkName: "Add Partners Organization" */ "../views/CRM/Partners/Organization/AddOrganization.vue"
          ),
      },
      {
        meta: {
          title: "Partners Schools",
          requiresAuth: true,
        },
        path: "/crm/partners/schools",
        name: "Partners Schools",
        component: () =>
          import(
            /* webpackChunkName: "Partners Schools" */ "../views/CRM/Partners/School/SchoolList.vue"
          ),
      },
      {
        meta: {
          title: "Add Sub Partners Schools",
          requiresAuth: true,
        },
        path: "/crm/partners/add-school",
        name: "Add Partners School",
        component: () =>
          import(
            /* webpackChunkName: "Add Partners School" */ "../views/CRM/Partners/School/AddSchool.vue"
          ),
      },
      {
        meta: {
          title: "Partners Colleges",
          requiresAuth: true,
        },
        path: "/crm/partners/colleges",
        name: "Partners Colleges",
        component: () =>
          import(
            /* webpackChunkName: "Partners Colleges" */ "../views/CRM/Partners/College/CollegeList.vue"
          ),
      },
      {
        meta: {
          title: "Add Partners College",
          requiresAuth: true,
        },
        path: "/crm/partners/add-college",
        name: "Add Partners College",
        component: () =>
          import(
            /* webpackChunkName: "Add Partners College" */ "../views/CRM/Partners/College/AddCollege.vue"
          ),
      },
      {
        meta: {
          title: "Create Sub Partners",
          requiresAuth: true,
        },
        path: "/crm/add-sub-partners",
        name: "Create Sub Partners",
        component: () =>
          import(
            /* webpackChunkName: "Create Sub Partners" */ "../views/CRM/Partners/SubPartners/AddSubPartner.vue"
          ),
      },
      {
        meta: {
          title: "Update Sub Partners",
          requiresAuth: true,
        },
        path: "/crm/edit-sub-partners",
        name: "Update Sub Partners",
        component: () =>
          import(
            /* webpackChunkName: "Update Sub Partners" */ "../views/CRM/Partners/SubPartners/EditSubPartner.vue"
          ),
      },
      {
        meta: {
          title: "Default Setting",
          requiresAuth: true,
        },
        path: "/crm/default-setting",
        redirect: "/crm/default-setting/designation",
        name: "default setting",
        component: () =>
          import(
            /* webpackChunkName: "Default Setting" */ "../views/CRM/DefaultSettings/Index.vue"
          ),
        children: [
          {
            meta: {
              title: "Default Setting Class List",
              requiresAuth: true,
            },
            path: "/crm/default-setting/class-list",
            name: "Default Setting Class List",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting Class List" */ "../views/CRM/DefaultSettings/ClassList.vue"
              ),
          },
          {
            meta: {
              title: "Default Setting Division List",
              requiresAuth: true,
            },
            path: "/crm/default-setting/division-list",
            name: "Default Setting Division list",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting Division List" */ "../views/CRM/DefaultSettings/DivisionList.vue"
              ),
          },
          {
            meta: {
              title: "Default Setting Category",
              requiresAuth: true,
            },
            path: "/crm/default-setting/books-category",
            name: "Default Setting Category",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting Category" */ "../views/CRM/DefaultSettings/BookCategoryList.vue"
              ),
          },
          {
            meta: {
              title: "Default Setting department",
              requiresAuth: true,
            },
            path: "/crm/default-setting/department",
            name: "Default Setting department",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting department" */ "../views/CRM/DefaultSettings/DepartmentList.vue"
              ),
          },
          {
            meta: {
              title: "Default Setting designation",
              requiresAuth: true,
            },
            path: "/crm/default-setting/designation",
            name: "Default Setting designation",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting Designation" */ "../views/CRM/DefaultSettings/DesignationList.vue"
              ),
          },
          {
            meta: {
              title: "Default Setting house zone",
              requiresAuth: true,
            },
            path: "/crm/default-setting/house-zone",
            name: "Default Setting house zone",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting house zone" */ "../views/CRM/DefaultSettings/HouseZoneList.vue"
              ),
          },
          {
            meta: {
              title: "Default Setting Subject",
              requiresAuth: true,
            },
            path: "/crm/default-setting/subject",
            name: "Default Setting Subject",
            component: () =>
              import(
                /* webpackChunkName: "Default Setting Subject" */ "../views/CRM/DefaultSettings/SubjectList.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !localStorage.getItem("accessToken")) {
    next("login");
  } else {
    next();
  }
});
export default router;
