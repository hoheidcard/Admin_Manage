<template>
  <section class="permission-page user-profile">
    <div class="title text-primary top-header">
      <div class="title">Permission</div>
      <div class="title">All</div>
      <div class="title">Create</div>
      <div class="title">Read</div>
      <div class="title">Update</div>
      <div class="title">Delete</div>
    </div>
    <div class="per-table" v-for="(item, index) in permissiondata" :key="index">
      <div class="left-title">
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="right-permissions">
        <div class="input-row">
          <div class="toggle-input">
            <p>All</p>
            <label class="toggle-control">
              <input type="checkbox">
              <span class="control"></span>
            </label>
          </div>
        </div>
        <div class="input-row" v-for="(perms, permsIndex) in item.userPermission" :key="permsIndex">
          <div class="toggle-input">
            <p>{{ perms.permission?.name }}</p>
            <label class="toggle-control">
              <input type="checkbox" v-model="perms.status">
              <span class="control"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="save-btn justify-end mt-16">
    <button class="btn white-btn w-10-r">Save</button>
  </div>
</template>

<script setup>
const permissiondata = [
  {
    "id": 1,
    "name": "account",
    "title": "Account",
    "userPermission": [
      {
        "id": 61,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 1,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.789Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 63,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 1,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.794Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 64,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 1,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.796Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 62,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 1,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.792Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 2,
    "name": "bank_account",
    "title": "Bank Account",
    "userPermission": [
      {
        "id": 65,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 2,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.798Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 67,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 2,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.802Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 68,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 2,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.804Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 66,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 2,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.800Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 13,
    "name": "book_category",
    "title": "Book Category",
    "userPermission": [
      {
        "id": 109,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 13,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.874Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 111,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 13,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.876Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 112,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 13,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.878Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 110,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 13,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.875Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 12,
    "name": "books",
    "title": "Books",
    "userPermission": [
      {
        "id": 105,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 12,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.869Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 107,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 12,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.871Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 108,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 12,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.873Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 106,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 12,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.870Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 15,
    "name": "class_div",
    "title": "Class Div",
    "userPermission": [
      {
        "id": 117,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 15,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.887Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 119,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 15,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.890Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 120,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 15,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.891Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 118,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 15,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.888Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 14,
    "name": "class_list",
    "title": "Class List",
    "userPermission": [
      {
        "id": 113,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 14,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.879Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 115,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 14,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.885Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 116,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 14,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.886Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 114,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 14,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.881Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 3,
    "name": "designation",
    "title": "Designation",
    "userPermission": [
      {
        "id": 69,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 3,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.809Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 71,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 3,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.812Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 72,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 3,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.814Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 70,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 3,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.810Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 4,
    "name": "faq",
    "title": "Faq",
    "userPermission": [
      {
        "id": 73,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 4,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.818Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 75,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 4,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.822Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 76,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 4,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.824Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 74,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 4,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.820Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 5,
    "name": "feedback",
    "title": "Feedback",
    "userPermission": [
      {
        "id": 77,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 5,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.825Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 79,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 5,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.828Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 80,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 5,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.829Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 78,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 5,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.826Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 6,
    "name": "login_history",
    "title": "Login History",
    "userPermission": [
      {
        "id": 81,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 6,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.830Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 83,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 6,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.835Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 84,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 6,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.836Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 82,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 6,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.833Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 7,
    "name": "menu",
    "title": "Menu",
    "userPermission": [
      {
        "id": 85,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 7,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.838Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 87,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 7,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.840Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 88,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 7,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.842Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 86,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 7,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.839Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 8,
    "name": "page",
    "title": "Page",
    "userPermission": [
      {
        "id": 89,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 8,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.843Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 91,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 8,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.845Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 92,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 8,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.847Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 90,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 8,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.844Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 9,
    "name": "permission",
    "title": "Permission",
    "userPermission": [
      {
        "id": 93,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 9,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.850Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 95,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 9,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.853Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 96,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 9,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.855Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 94,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 9,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.852Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 10,
    "name": "staff_detail",
    "title": "Staff Detail",
    "userPermission": [
      {
        "id": 97,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 10,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.856Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 99,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 10,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.858Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 100,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 10,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.860Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 98,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 10,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.857Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  },
  {
    "id": 11,
    "name": "user_permission",
    "title": "User Permission",
    "userPermission": [
      {
        "id": 101,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 11,
        "permissionId": 1,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.861Z",
        "permission": {
          "id": 1,
          "name": "Create"
        }
      },
      {
        "id": 103,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 11,
        "permissionId": 2,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.866Z",
        "permission": {
          "id": 2,
          "name": "Read"
        }
      },
      {
        "id": 104,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 11,
        "permissionId": 3,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.868Z",
        "permission": {
          "id": 3,
          "name": "Update"
        }
      },
      {
        "id": 102,
        "accountId": "5e30dbd6-861a-4c03-ad53-64d3d68eabd9",
        "menuId": 11,
        "permissionId": 4,
        "status": false,
        "updatedAt": "2024-02-12T06:35:41.862Z",
        "permission": {
          "id": 4,
          "name": "Delete"
        }
      }
    ]
  }
]
</script>

<style></style>
