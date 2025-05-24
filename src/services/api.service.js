import axios from "axios";

import { authHeader } from "./_helper";

// const rootURL = "http://localhost:3111/api/v1/";
const rootURL = "https://admin.abhitprints.in/api/v1/";
// const rootURL = "http://192.168.1.16:3111/api/v1/";

const authURL = rootURL + "auth";
const accountURL = rootURL + "account";
const dashboardURL = rootURL + "dashboard";
const faqURL = rootURL + "faqs";
const feedbackURL = rootURL + "feedback";
const pagesURL = rootURL + "pages";
const designationURL = rootURL + "designation";
const staffDetailsURL = rootURL + "staff-details";
const userPermissionsURL = rootURL + "user-permissions";
const organizationDetailsURL = rootURL + "organization-details";
const settingsURL = rootURL + "settings";
const classListURL = rootURL + "class-list";
const classDivURL = rootURL + "class-div";
const bookCategoryURL = rootURL + "book-category";
const departmentsURL = rootURL + "departments";
const houseZonesURL = rootURL + "house-zones";
const subjectsURL = rootURL + "subjects";
const studentsURL = rootURL + "students";
const booksURL = rootURL + "books";
const staffClassURL = rootURL + "staff-class";
const staffDepartmentURL = rootURL + "staff-department";
const staffDivisionURL = rootURL + "staff-division";
const staffSubjectURL = rootURL + "staff-subject";
const staffDocURL = rootURL + "staff-documents";
const partnersDetailsURL = rootURL + "partner-details";
const defaultSettingURL = rootURL + "default-settings";
const eventURL = rootURL + "events";
const timeTableURL = rootURL + "staff-time-table";
const cardOrderURL = rootURL + "card-orders";
const deliveryPartnerURL = rootURL + "delivery-partners";
const idCardStockURL = rootURL + "id-cards-stock";
const categoryURL = rootURL + "category";
const productImageURL = rootURL + "product-images";
const cartURL = rootURL + "carts";
const cartProductURL = rootURL + "cart-product";
const bannersURL = rootURL + "banner";
const usersURL = rootURL + "user-details";
const blogsURL = rootURL + "blogs";

/***** Login *****/
async function crmLogin(payload) {
  return await axios.post(authURL + "/account/login", payload);
}
async function crmVerifyOtp(payload) {
  return await axios.post(authURL + "/verify", payload);
}
async function forgotPassword(payload) {
  return await axios.post(authURL + "/account/forgot", payload);
}
async function forgotVerifyOtp(payload) {
  return await axios.post(authURL + "/verify/otp", payload);
}
async function resetPassword(payload) {
  return await axios.patch(accountURL + "/reset/" + payload.id, payload);
}
async function crmLogout() {
  return await axios.get(authURL + "/logout", { headers: authHeader() });
}
/***** Login *****/

/********** DASHBOARD **********/
function getDashboardCounts(fromDate, toDate, all) {
  return axios.get(
    dashboardURL + "/count/" + fromDate + "/" + toDate + "/" + all,
    {
      headers: authHeader(),
    }
  );
}
/********** DASHBOARD **********/

/********** ADMIN **********/
function getAdmin(limit, offset, keyword, status, role) {
  return axios.get(
    accountURL +
      "/my-admin/" +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}

function addAdmin(phoneNumber, password, name, emailId, gender, dob, roles) {
  return axios.post(
    accountURL,
    { phoneNumber, password, name, emailId, gender, dob, roles },
    { headers: authHeader() }
  );
}
function updatePassword(oldPassword, password, confirmPassword) {
  return axios.patch(
    accountURL + "/password",
    { oldPassword, password, confirmPassword },
    { headers: authHeader() }
  );
}
function updateAdminStatus(id, status) {
  return axios.put(
    accountURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/********** END ADMIN **********/

/***** STAFF *****/
function getStaff(limit, offset, keyword, status, role) {
  return axios.get(
    staffDetailsURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}
function getStaffList(limit, offset, keyword, status, settingId) {
  return axios.get(
    staffDetailsURL +
      "/my-staff-list/" +
      settingId +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}
function getMyStaffList(limit, offset, keyword, status, settingId) {
  return axios.get(
    staffDetailsURL +
      "/my-staff" +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}
function getProfile() {
  return axios.get(staffDetailsURL + "/profile", { headers: authHeader() });
}
function updateProfileImage(id, file) {
  return axios.put(
    staffDetailsURL + "/profile/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}
function updateProfile(name, emailId, gender, dob) {
  return axios.patch(
    staffDetailsURL,
    { name, emailId, gender, dob },
    { headers: authHeader() }
  );
}
function getOneStaff(id) {
  return axios.get(staffDetailsURL + "/" + id, { headers: authHeader() });
}
function addMyStaff(
  phoneNumber,
  name,
  emailId,
  gender,
  password,
  dob,
  designationId
) {
  return axios.post(
    staffDetailsURL + "/my-staff",
    {
      phoneNumber,
      contactNo: phoneNumber,
      name,
      emailId,
      gender,
      password,
      dob,
      designationId,
    },
    { headers: authHeader() }
  );
}

function addStaff(
  phoneNumber,
  name,
  emailId,
  gender,
  password,
  dob,
  joiningDate,
  contactNo,
  nationality,
  address,
  city,
  state,
  pincode,
  guardianName,
  guardianContactNo,
  designationId,
  organizationDetailId,
  spouseName,
  spouseContactNo,
  spouseOccupation,
  spouseIncome,
  accountId,
  settingId
) {
  return axios.post(
    staffDetailsURL + "/" + accountId + "/" + settingId,
    {
      phoneNumber,
      name,
      emailId,
      gender,
      password,
      dob,
      joiningDate,
      contactNo,
      nationality,
      address,
      city,
      state,
      pincode,
      guardianName,
      guardianContactNo,
      designationId,
      organizationDetailId,
      spouseName,
      spouseContactNo,
      spouseOccupation,
      spouseIncome,
    },
    { headers: authHeader() }
  );
}
function updateStaff(id, name, emailId, gender, dob, designationId) {
  return axios.patch(
    staffDetailsURL + "/" + id,
    { name, emailId, gender, dob, designationId },
    { headers: authHeader() }
  );
}

function updateStaffStatus(id, status) {
  return axios.put(
    staffDetailsURL + "/status/" + id,
    { status },
    { headers: authHeader() }
  );
}
function updatePermission(menu) {
  return axios.put(userPermissionsURL, { menu }, { headers: authHeader() });
}

// Branch Staff
function getBranchStaff(
  limit,
  offset,
  keyword,
  status,
  type,
  organizationDetailId
) {
  return axios.get(
    staffDetailsURL +
      "/staff/" +
      organizationDetailId +
      "/" +
      type +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}

/***** END STAFF *****/
/****  FAQ ****/
function getFaq(limit, offset, keyword, status) {
  return axios.get(
    faqURL +
      "/all?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}
function addFaq(question, answer) {
  return axios.post(faqURL, { question, answer }, { headers: authHeader() });
}
function updateFaq(id, answer) {
  return axios.patch(faqURL + "/" + id, { answer }, { headers: authHeader() });
}
function updateFaqStatus(id, status) {
  return axios.put(faqURL + "/" + id, { status }, { headers: authHeader() });
}
/**** END FAQ ****/
/*** FEEDBACK ****/
function getFeedback(limit, offset, keyword, status) {
  return axios.get(
    feedbackURL +
      "/all?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}
function updateFeedbackStatus(id, status) {
  return axios.put(
    feedbackURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/*** END FEEDBACK ****/
/*** PAGE ****/
function getPage() {
  return axios.get(pagesURL, { headers: authHeader() });
}
function getPageDetails(id) {
  return axios.get(pagesURL + "/" + id, { headers: authHeader() });
}
function updatePage(id, desc) {
  return axios.patch(pagesURL + "/" + id, { desc }, { headers: authHeader() });
}
/*** END PAGE ****/

/*** ORGANIZATION ****/
function getOrganizationByCreator(id, limit, offset, keyword, status, roles) {
  return axios.get(
    organizationDetailsURL +
      "/by-creator/" +
      id +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function getOrganization(limit, offset, keyword, status, roles) {
  return axios.get(
    organizationDetailsURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function getOrganizationDashboard(
  limit,
  offset,
  keyword,
  status,
  fromDate,
  toDate,
  roles,
  all
) {
  return axios.get(
    organizationDetailsURL +
      "/dashboard/" +
      all +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function getOneOrganization(id) {
  return axios.get(organizationDetailsURL + "/" + id, {
    headers: authHeader(),
  });
}
function getOrganizationByType(limit, offset, keyword, type) {
  if (type == "PARTNER" || type == "SUB PARTNER") {
    return axios.get(
      partnersDetailsURL +
        "/list/" +
        type +
        "?limit=" +
        limit +
        "&offset=" +
        offset +
        "&keyword=" +
        keyword,
      { headers: authHeader() }
    );
  } else {
    return axios.get(
      organizationDetailsURL +
        "/list/" +
        type +
        "?limit=" +
        limit +
        "&offset=" +
        offset +
        "&keyword=" +
        keyword,
      { headers: authHeader() }
    );
  }
}
function addOrganization(
  phoneNumber,
  singleMultiType,
  roles,
  password,
  name,
  address,
  pincode,
  city,
  state,
  contactNo,
  whatsApp,
  email,
  ownerName,
  type,
  numberOfBranch
) {
  return axios.post(
    organizationDetailsURL + "/main",
    {
      phoneNumber,
      singleMultiType,
      roles,
      password,
      name,
      address,
      pincode,
      city,
      state,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch,
    },
    { headers: authHeader() }
  );
}

function addOrganizationByCreator(
  creatorId,
  phoneNumber,
  singleMultiType,
  roles,
  password,
  name,
  address,
  pincode,
  city,
  state,
  contactNo,
  whatsApp,
  email,
  ownerName,
  type,
  numberOfBranch
) {
  return axios.post(
    organizationDetailsURL + "/main/" + creatorId,
    {
      phoneNumber,
      singleMultiType,
      roles,
      password,
      name,
      address,
      pincode,
      city,
      state,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch,
    },
    { headers: authHeader() }
  );
}
function updateOrganization(
  id,
  name,
  address,
  pincode,
  city,
  state,
  contactNo,
  whatsApp,
  email,
  ownerName,
  type,
  numberOfBranch
) {
  return axios.patch(
    organizationDetailsURL + "/" + id,
    {
      name,
      address,
      pincode,
      city,
      state,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch,
    },
    { headers: authHeader() }
  );
}
function updateOrganizationStatus(id, status) {
  return axios.put(
    organizationDetailsURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
function updateOrganizationImage(id, file) {
  return axios.put(
    organizationDetailsURL + "/profile/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}
function getOneOrganizationSettings(id) {
  return axios.get(settingsURL + "/" + id, { headers: authHeader() });
}
function getSetting() {
  return axios.get(settingsURL, { headers: authHeader() });
}
function updateCsvField(id, csvFields, staffCsvFields) {
  return axios.patch(
    settingsURL + "/" + id,
    { csvFields, staffCsvFields },
    { headers: authHeader() }
  );
}
//  ORG BRANCH

function getOrganizationBranch(id, limit, offset, keyword, status, roles) {
  return axios.get(
    organizationDetailsURL +
      "/branches/" +
      id +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}

function addOrganizationBranch(
  name,
  address,
  pincode,
  city,
  state,
  contactNo,
  whatsApp,
  email,
  ownerName,
  type,
  numberOfBranch,
  accountId,
  settingId,
  organizationId,
  roles
) {
  return axios.post(
    organizationDetailsURL + "/branch",
    {
      name,
      address,
      pincode,
      city,
      state,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch,
      accountId,
      settingId,
      organizationId,
      roles,
    },
    { headers: authHeader() }
  );
}
/*** END ORGANIZATION ****/

/**** CLASS ****/
function getMyClasses(settingId) {
  return axios.get(classListURL + "/" + settingId, { headers: authHeader() });
}
function addClass(name, priority, settingId) {
  return axios.post(
    classListURL + "/" + settingId,
    { name, priority },
    { headers: authHeader() }
  );
}
function addAsignClass(
  classListId,
  classDivId,
  staffDetailId,
  coOrdinatorId,
  subjectId,
  type,
  time_start,
  time_end
) {
  return axios.patch(
    classListURL + "/setting",
    {
      classListId,
      classDivId,
      staffDetailId,
      coOrdinatorId,
      subjectId,
      type,
      time_start,
      time_end,
    },
    { headers: authHeader() }
  );
}
function deleteAsignClass(id) {
  return axios.delete(classListURL + "/setting/" + id, {
    headers: authHeader(),
  });
}
function updateClass(id, name, priority, settingId) {
  return axios.patch(
    classListURL + "/" + id,
    { name, priority, settingId },
    { headers: authHeader() }
  );
}
function deleteClass(id, status) {
  return axios.put(
    classListURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
function assignClassProduct(payload) {
  console.log(payload);
  return axios.put(classListURL + "/products", payload, {
    headers: authHeader(),
  });
}
function assignDesignationProduct(payload) {
  return axios.put(designationURL + "/products", payload, {
    headers: authHeader(),
  });
}
/**** END CLASS ****/
/**** DIVISION ****/
function addDivision(name, priority, settingId) {
  return axios.post(
    classDivURL + "/" + settingId,
    { name, priority },
    { headers: authHeader() }
  );
}
function updateDivision(id, name, priority, settingId) {
  return axios.patch(
    classDivURL + "/" + id,
    { name, priority, settingId },
    { headers: authHeader() }
  );
}
function deleteDivision(id, status) {
  return axios.put(
    classDivURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** END DIVISION ****/
/**** BOOK CATEGORY ****/
function addBookCategory(name, settingId) {
  return axios.post(
    bookCategoryURL + "/" + settingId,
    { name },
    { headers: authHeader() }
  );
}
function updateBookCategory(id, name, settingId) {
  return axios.patch(
    bookCategoryURL + "/" + id,
    { name, settingId },
    { headers: authHeader() }
  );
}
function deleteBookCategory(id, status) {
  return axios.put(
    bookCategoryURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** END BOOK CATEGORY ****/

/**** DEPARTMENT ****/
function addDepartment(name, settingId) {
  return axios.post(
    departmentsURL + "/" + settingId,
    { name },
    { headers: authHeader() }
  );
}
function updateDepartment(id, name, settingId) {
  return axios.patch(
    departmentsURL + "/" + id,
    { name, settingId },
    { headers: authHeader() }
  );
}
function deleteDepartment(id, status) {
  return axios.put(
    departmentsURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** END DEPARTMENT ****/

/*** DESIGNATION ****/
function getDesignation(limit, offset, keyword) {
  return axios.get(
    designationURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}
function getMyDesignation() {
  return axios.get(designationURL + "/my-designation", {
    headers: authHeader(),
  });
}
function getMyDesignationBySetting(settingId) {
  return axios.get(designationURL + "/my-designation/" + settingId, {
    headers: authHeader(),
  });
}
function addDesignation(name, priority) {
  return axios.post(
    designationURL,
    { name, priority },
    { headers: authHeader() }
  );
}
function addOtherDesignation(settingId, name, priority) {
  return axios.post(
    designationURL + "/" + settingId,
    { name, priority },
    { headers: authHeader() }
  );
}
function updateDesignation(id, name, priority) {
  return axios.patch(
    designationURL + "/" + id,
    { name, priority },
    { headers: authHeader() }
  );
}
function deleteDesignation(id, status) {
  return axios.put(
    designationURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
function addDesignationByAdmin(name, priority, settingId) {
  return axios.post(
    designationURL + "/" + settingId,
    { name, priority },
    { headers: authHeader() }
  );
}
function updateDesignationByAdmin(id, name, priority, settingId) {
  return axios.patch(
    designationURL + "/" + id,
    { name, priority, settingId },
    { headers: authHeader() }
  );
}
/**** END DESIGNATION ****/

/**** HOUSE ZONE ****/
function addHouseZone(name, settingId) {
  return axios.post(
    houseZonesURL + "/" + settingId,
    { name },
    { headers: authHeader() }
  );
}
function updateHouseZone(id, name, settingId) {
  return axios.patch(
    houseZonesURL + "/" + id,
    { name, settingId },
    { headers: authHeader() }
  );
}
function deleteHouseZone(id, status) {
  return axios.put(
    houseZonesURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** END HOUSE ZONE ****/

/**** SUBJECT ****/
function addSubject(name, settingId) {
  return axios.post(
    subjectsURL + "/" + settingId,
    { name },
    { headers: authHeader() }
  );
}
function updateSubject(id, name, settingId) {
  return axios.patch(
    subjectsURL + "/" + id,
    { name, settingId },
    { headers: authHeader() }
  );
}
function deleteSubject(id, status) {
  return axios.put(
    subjectsURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** END SUBJECT ****/
/**** STUDENT ****/
function getStudent(limit, offset, keyword, organizationId) {
  return axios.get(
    studentsURL +
      "/all/" +
      organizationId +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}
function getStudentByClassDiv(
  limit,
  offset,
  keyword,
  organizationId,
  classListId,
  classDivId
) {
  return axios.get(
    studentsURL +
      "/class-div/" +
      organizationId +
      "/" +
      classListId +
      "/" +
      classDivId +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}

function getStudentForCard(organizationId, classListId, status) {
  return axios.get(
    studentsURL +
      "/card-generate/" +
      organizationId +
      "/" +
      classListId +
      "/" +
      status,
    { headers: authHeader() }
  );
}

function getStudentFinalForCard(organizationId, classListId) {
  return axios.get(
    studentsURL + "/final-card-generate/" + organizationId + "/" + classListId,
    { headers: authHeader() }
  );
}

function getStaffFinalForCard(organizationId, classListId) {
  return axios.get(
    staffDetailsURL +
      "/final-card-generate/" +
      organizationId +
      "/" +
      classListId,
    { headers: authHeader() }
  );
}

function getStudentFinalForCardProfile(id) {
  return axios.get(studentsURL + "/profile-final-card-generate/" + id, {
    headers: authHeader(),
  });
}

function getStaffFinalForCardProfile(id) {
  return axios.get(staffDetailsURL + "/profile-final-card-generate/" + id, {
    headers: authHeader(),
  });
}

function getStudentByClass(limit, offset, keyword, organizationId, classId) {
  return axios.get(
    studentsURL +
      "/class/" +
      organizationId +
      "/" +
      classId +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}
function getStudentByClassList(
  limit,
  offset,
  keyword,
  organizationId,
  classId
) {
  return axios.get(
    studentsURL +
      "/class-list/" +
      organizationId +
      "/" +
      classId +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}
function uploadStudentCsvFile(
  organizationDetailId,
  settingId,
  file,
  onUploadProgress
) {
  return axios.post(
    studentsURL + "/multi/" + organizationDetailId + "/" + settingId,
    file,
    { headers: authHeader("FormData"), onUploadProgress }
  );
}
function uploadStaffCsvFile(
  organizationDetailId,
  settingId,
  file,
  onUploadProgress
) {
  return axios.post(
    staffDetailsURL + "/multi/" + organizationDetailId + "/" + settingId,
    file,
    { headers: authHeader("FormData"), onUploadProgress }
  );
}

function addStudent(
  name,
  regNo,
  studentNo,
  admissionNo,
  rollNo,
  rfidNo,
  emailId,
  cast,
  religion,
  nationality,
  contactNo,
  address,
  city,
  state,
  pincode,
  gender,
  dob,
  fatherName,
  fatherContactNo,
  fatherOccupation,
  fatherIncome,
  motherName,
  motherContactNo,
  motherOccupation,
  motherIncome,
  transport,
  stream,
  canteen,
  library,
  hostel,
  houseZoneId,
  organizationDetailId,
  classDivId,
  classListId,
  settingId,
  PEN,
  UID
) {
  return axios.post(
    studentsURL + "/" + organizationDetailId + "/" + settingId,
    {
      name,
      regNo,
      studentNo,
      admissionNo,
      rollNo,
      rfidNo,
      emailId,
      cast,
      religion,
      nationality,
      contactNo,
      address,
      city,
      state,
      pincode,
      gender,
      dob,
      fatherName,
      fatherContactNo,
      fatherOccupation,
      fatherIncome,
      motherName,
      motherContactNo,
      motherOccupation,
      motherIncome,
      transport,
      stream,
      canteen,
      library,
      hostel,
      houseZoneId,
      classDivId,
      classListId,
      settingId,
      PEN,
      UID,
      organizationDetailId,
    },
    { headers: authHeader() }
  );
}
function getOneStudent(id) {
  return axios.get(studentsURL + "/" + id, { headers: authHeader() });
}
function updateStudent(
  name,
  regNo,
  studentNo,
  admissionNo,
  rollNo,
  rfidNo,
  emailId,
  cast,
  religion,
  nationality,
  contactNo,
  address,
  city,
  stateName,
  pincode,
  gender,
  dob,
  fatherName,
  fatherContactNo,
  fatherOccupation,
  fatherIncome,
  motherName,
  motherContactNo,
  motherOccupation,
  motherIncome,
  transport,
  stream,
  canteen,
  library,
  hostel,
  houseZoneId,
  organizationDetailId,
  classDivId,
  classListId,
  id,
  PEN,
  UID
) {
  return axios.patch(
    studentsURL + "/" + id,
    {
      name,
      regNo,
      studentNo,
      admissionNo,
      rollNo,
      rfidNo,
      emailId,
      cast,
      religion,
      nationality,
      contactNo,
      address,
      city,
      stateName,
      pincode,
      gender,
      dob,
      fatherName,
      fatherContactNo,
      fatherOccupation,
      fatherIncome,
      motherName,
      motherContactNo,
      motherOccupation,
      motherIncome,
      transport,
      stream,
      canteen,
      library,
      hostel,
      houseZoneId,
      organizationDetailId,
      classDivId,
      classListId,
      PEN,
      UID,
    },
    { headers: authHeader() }
  );
}
function updateStudentStatus(id, status) {
  return axios.put(
    studentsURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
function updateStudentCard(payload) {
  return axios.put(studentsURL + "/card", payload, { headers: authHeader() });
}
function promoteClass(payload) {
  return axios.put(studentsURL + "/promote-class", payload, {
    headers: authHeader(),
  });
}
function updateStudentImage(id, type, orgId, file) {
  return axios.put(
    studentsURL + "/profile/" + id + "/" + type + "/" + orgId,
    { file },
    { headers: authHeader("FormData") }
  );
}

function getStudentByDash(
  limit,
  offset,
  keyword,
  status,
  fromDate,
  toDate,
  roles,
  all
) {
  return axios.get(
    studentsURL +
      "/dashboard/" +
      all +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function getStaffDashboard(
  limit,
  offset,
  keyword,
  status,
  fromDate,
  toDate,
  roles,
  all
) {
  return axios.get(
    staffDetailsURL +
      "/dashboard/" +
      all +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
/**** END STUDENT ****/

/**** BOOKS ****/
function getBooks(limit, offset, keyword, status, organizationId) {
  return axios.get(
    booksURL +
      "/all/" +
      organizationId +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}
function addBooks(
  name,
  shortDesc,
  quantity,
  author,
  code,
  bookCategoryId,
  classListId,
  file,
  organizationDetailId
) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("shortDesc", shortDesc);
  formData.append("quantity", quantity);
  formData.append("author", author);
  formData.append("code", code);
  formData.append("bookCategoryId", bookCategoryId);
  formData.append("classListId", classListId);
  formData.append("file", file);
  formData.append("organizationDetailId", organizationDetailId);
  return axios.post(booksURL, formData, { headers: authHeader() });
}
function editBooks(
  name,
  shortDesc,
  quantity,
  author,
  code,
  bookCategoryId,
  classListId,
  organizationDetailId,
  id
) {
  return axios.patch(
    booksURL + "/" + id,
    {
      name,
      shortDesc,
      quantity,
      author,
      code,
      bookCategoryId,
      classListId,
      organizationDetailId,
    },
    { headers: authHeader() }
  );
}
function updateBooksStatus(id, status) {
  return axios.put(
    booksURL + "/status/" + id,
    { status },
    { headers: authHeader() }
  );
}
function updateImage(id, file) {
  return axios.put(
    booksURL + "/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}
/**** END BOOKS ****/
/**** STAFF CLASS ****/

function addStaffClass(classListId, staffDetailId) {
  return axios.post(
    staffClassURL,
    { classListId, staffDetailId },
    { headers: authHeader() }
  );
}
function deleteStaffClass(id) {
  return axios.delete(staffClassURL + "/" + id, { headers: authHeader() });
}
/**** END STAFF CLASS ****/
/**** STAFF DEPARTMENT ****/

function addStaffDepartment(departmentId, staffDetailId) {
  return axios.post(
    staffDepartmentURL,
    { departmentId, staffDetailId },
    { headers: authHeader() }
  );
}
function deleteStaffDepartment(id) {
  return axios.delete(staffDepartmentURL + "/" + id, { headers: authHeader() });
}
/**** END STAFF DEPARTMENT ****/
/**** STAFF DIVISION ****/

function addStaffDivision(classDivId, staffDetailId) {
  return axios.post(
    staffDivisionURL,
    { classDivId, staffDetailId },
    { headers: authHeader() }
  );
}
function deleteStaffDivision(id) {
  return axios.delete(staffDivisionURL + "/" + id, { headers: authHeader() });
}
/**** END STAFF DIVISION ****/

/**** STAFF SUBJECT ****/

function addStaffSubject(subjectId, staffDetailId) {
  return axios.post(
    staffSubjectURL,
    { subjectId, staffDetailId },
    { headers: authHeader() }
  );
}
function deleteStaffSubject(id) {
  return axios.delete(staffSubjectURL + "/" + id, { headers: authHeader() });
}
/**** END STAFF SUBJECT ****/

/**** STAFF DOCUMENTS ****/

function addStaffDoc(staffAccountId, staffDetailId, type, documentId, file) {
  const formData = new FormData();
  formData.append("type", type);
  formData.append("documentId", documentId);
  formData.append("file", file);
  return axios.post(
    staffDocURL + "/" + staffDetailId + "/" + staffAccountId,
    formData,
    { headers: authHeader("FormData") }
  );
}
function deleteStaffDoc(id, staffAccountId) {
  return axios.delete(staffDocURL + "/" + id + "/" + staffAccountId, {
    headers: authHeader(),
  });
}
/**** END STAFF DOCUMENTS ****/

/**** PARTNERS ****/
function getPartners(limit, offset, keyword, status, roles) {
  return axios.get(
    partnersDetailsURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function getPartnersByDash(
  limit,
  offset,
  keyword,
  status,
  fromDate,
  toDate,
  roles,
  all
) {
  return axios.get(
    partnersDetailsURL +
      "/dashboard/" +
      all +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function addPartners(
  phoneNumber,
  firmName,
  firmEmail,
  ownerName,
  ownerMobile,
  ownerEmail,
  ownerWhatsApp,
  natureOfBusiness,
  website,
  gstDetail,
  firmShort,
  firmAddress,
  state,
  city,
  pincode,
  roles,
  singleMultiType
) {
  return axios.post(
    partnersDetailsURL,
    {
      phoneNumber,
      firmName,
      firmEmail,
      ownerName,
      ownerMobile,
      ownerEmail,
      ownerWhatsApp,
      natureOfBusiness,
      website,
      gstDetail,
      firmShort,
      firmAddress,
      state,
      city,
      pincode,
      roles,
      singleMultiType,
    },
    { headers: authHeader() }
  );
}
function editPartners(
  firmName,
  firmEmail,
  ownerName,
  ownerMobile,
  ownerEmail,
  ownerWhatsApp,
  natureOfBusiness,
  website,
  gstDetail,
  firmShort,
  firmAddress,
  state,
  city,
  pincode,
  roles,
  singleMultiType,
  id
) {
  return axios.patch(
    partnersDetailsURL + "/" + id,
    {
      firmName,
      firmEmail,
      ownerName,
      ownerMobile,
      ownerEmail,
      ownerWhatsApp,
      natureOfBusiness,
      website,
      gstDetail,
      firmShort,
      firmAddress,
      state,
      city,
      pincode,
      roles,
      singleMultiType,
    },
    { headers: authHeader() }
  );
}
function getOnePartner(id) {
  return axios.get(partnersDetailsURL + "/" + id, { headers: authHeader() });
}
function updatePartnersStatus(id, status) {
  return axios.put(
    partnersDetailsURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
function updatePartnerImage(id, file) {
  return axios.put(
    partnersDetailsURL + "/profile/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}

/**** END PARTNERS ****/

/**** SUB PARTNERS ****/
function getSubPartners(limit, offset, keyword, status, roles, id) {
  return axios.get(
    partnersDetailsURL +
      "/by-creator/" +
      id +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&roles=" +
      roles,
    { headers: authHeader() }
  );
}
function addSubPartners(
  phoneNumber,
  firmName,
  firmEmail,
  ownerName,
  ownerMobile,
  ownerEmail,
  ownerWhatsApp,
  natureOfBusiness,
  website,
  gstDetail,
  firmShort,
  firmAddress,
  state,
  city,
  pincode,
  roles,
  singleMultiType,
  accountId
) {
  return axios.post(
    partnersDetailsURL + "/sub-partner/" + accountId,
    {
      phoneNumber,
      firmName,
      firmEmail,
      ownerName,
      ownerMobile,
      ownerEmail,
      ownerWhatsApp,
      natureOfBusiness,
      website,
      gstDetail,
      firmShort,
      firmAddress,
      state,
      city,
      pincode,
      roles,
      singleMultiType,
    },
    { headers: authHeader() }
  );
}
/**** END SUB PARTNERS ****/

/**** DEFAULT SETTINGS ****/
function createDefaultSetting(payload) {
  return axios.post(defaultSettingURL, payload, { headers: authHeader() });
}
function updateDefaultSetting(id, payload) {
  return axios.patch(defaultSettingURL + "/" + id, payload, {
    headers: authHeader(),
  });
}
function bulkDefaultSetting(payload) {
  return axios.put(defaultSettingURL, payload, {
    headers: authHeader(),
  });
}
function deleteDefaultSetting(id) {
  return axios.delete(defaultSettingURL + "/" + id, { headers: authHeader() });
}
function getDefaultSetting(settingType, settingFor) {
  return axios.get(defaultSettingURL + "/" + settingType + "/" + settingFor, {
    headers: authHeader(),
  });
}
/**** END DEFAULT SETTINGS ****/
/**** EVENT ****/
function addEvent(
  title,
  desc,
  eventDate,
  fromTime,
  toTime,
  eventFor,
  all,
  eventIds
) {
  return axios.post(
    eventURL,
    { title, desc, eventDate, fromTime, toTime, eventFor, all, eventIds },
    { headers: authHeader() }
  );
}
function updateEvent(
  title,
  desc,
  eventDate,
  fromTime,
  toTime,
  eventFor,
  all,
  eventIds,
  id
) {
  return axios.patch(
    eventURL + "/" + id,
    { title, desc, eventDate, fromTime, toTime, eventFor, all, eventIds },
    { headers: authHeader() }
  );
}
function getEvent(limit, offset, keyword, fromDate, toDate, eventFor) {
  return axios.get(
    eventURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&eventFor=" +
      eventFor,
    { headers: authHeader() }
  );
}
function deleteEvent(id) {
  return axios.delete(eventURL + "/" + id, { headers: authHeader() });
}
/**** END EVENT ****/
/**** TIME TABLE ****/
function addTimeTable(data) {
  return axios.post(timeTableURL, data, {
    headers: authHeader(),
  });
}

function scheduleStatus(id, status) {
  return axios.put(
    timeTableURL + "/" + id,
    { status },
    {
      headers: authHeader(),
    }
  );
}

function deletePeriod(id) {
  return axios.delete(timeTableURL + "/" + id, {
    headers: authHeader(),
  });
}
function updatePeriod(periodId, data) {
  return axios.patch(timeTableURL + "/" + periodId, data, {
    headers: authHeader(),
  });
}
/**** END TIME TABLE ****/

/****  CARD ORDERS ****/
function getOrders(
  limit,
  offset,
  keyword,
  status,
  fromDate,
  toDate,
  filterType
) {
  return axios.get(
    cardOrderURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&filterType=" +
      filterType,
    { headers: authHeader() }
  );
}

function getOrder(id) {
  return axios.get(cardOrderURL + "/" + id, { headers: authHeader() });
}

function downloadStaffCSVByOrganizationId(id) {
  return axios.get(cardOrderURL + "/download-staff-csv-org/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

function downloadStudentCSVByOrganizationId(id, classes) {
  return axios.get(
    cardOrderURL + "/download-student-csv-org/" + id + "/" + classes,
    {
      headers: authHeader("Blob"),
      responseType: "blob",
    }
  );
}

function downloadStaffFileByOrganizationId(id) {
  return axios.get(cardOrderURL + "/download-staff-file-org/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

function downloadStudentFileByOrganizationId(id, classes) {
  return axios.get(
    cardOrderURL + "/download-student-file-org/" + id + "/" + classes,
    {
      headers: authHeader("Blob"),
      responseType: "blob",
    }
  );
}

function downloadStaffCSVByOrderId(id) {
  return axios.get(cardOrderURL + "/download-staff-csv/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

function downloadStudentCSVByOrderId(id) {
  return axios.get(cardOrderURL + "/download-student-csv/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

function downloadStaffFileByOrderId(id) {
  return axios.get(cardOrderURL + "/download-staff-file/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

function downloadStudentFileByOrderId(id) {
  return axios.get(cardOrderURL + "/download-student-file/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

function createStaffOrder(
  staff,
  deliveryDate,
  deliveryAddress,
  contactNumber,
  qty,
  deliveryPartnerId,
  settingId
) {
  return axios.post(
    cardOrderURL + "/staff/" + settingId,
    {
      staff,
      deliveryDate,
      deliveryAddress,
      contactNumber,
      qty,
      deliveryPartnerId,
    },
    { headers: authHeader() }
  );
}

function createStudentOrder(
  classes,
  deliveryDate,
  deliveryAddress,
  contactNumber,
  qty,
  parentCard,
  deliveryPartnerId,
  settingId
) {
  return axios.post(
    cardOrderURL + "/student/" + settingId,
    {
      classes,
      deliveryDate,
      deliveryAddress,
      contactNumber,
      qty,
      parentCard,
      deliveryPartnerId,
    },
    { headers: authHeader() }
  );
}
function assignSchoolToUpper(id) {
  return axios.patch(
    cardOrderURL + "/school-upper/" + id,
    {},
    { headers: authHeader() }
  );
}

function assignSubPartnerToUpper(id) {
  return axios.patch(
    cardOrderURL + "/sub-partner-upper/" + id,
    {},
    { headers: authHeader() }
  );
}

function assignPartnerToUpper(id) {
  return axios.patch(
    cardOrderURL + "/partner-upper/" + id,
    {},
    { headers: authHeader() }
  );
}

function updateCardOrderStatus(id, status) {
  return axios.put(
    cardOrderURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** END CARD ORDERS ****/

/**** DELIVERY PARTNERS ****/
function getDeliveryPartners() {
  return axios.get(deliveryPartnerURL, { headers: authHeader() });
}

function createDeliveryPartner(title) {
  return axios.post(deliveryPartnerURL, { title }, { headers: authHeader() });
}

function deleteDeliveryPartner(id) {
  return axios.put(
    deliveryPartnerURL + "/" + id,
    { status: "DELETED" },
    {
      headers: authHeader(),
    }
  );
}
/**** END DELIVERY PARTNERS ****/

/**** ID CARD STOCK ****/
function getIdCardStocksByStatus(limit, offset, keyword, status) {
  return axios.get(
    idCardStockURL +
      "/all?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}

function getIdCardStocks(limit, offset, keyword) {
  return axios.get(
    idCardStockURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}

function getIdCardStock(id) {
  return axios.get(idCardStockURL + "/" + id, { headers: authHeader() });
}

function createIdCardStock(
  code,
  title,
  shortDesc,
  desc,
  price,
  discount,
  discountedPrice,
  finalPrice,
  partnerDiscount,
  additionalDiscount,
  productVariant,
  categoryId
) {
  return axios.post(
    idCardStockURL,
    {
      code,
      title,
      shortDesc,
      desc,
      price,
      discount,
      discountedPrice,
      finalPrice,
      partnerDiscount,
      additionalDiscount,
      productVariant,
      categoryId,
    },
    { headers: authHeader() }
  );
}

function updateIdCardStock(
  id,
  code,
  title,
  shortDesc,
  desc,
  price,
  discount,
  discountedPrice,
  finalPrice,
  partnerDiscount,
  additionalDiscount,
  productVariant,
  categoryId
) {
  return axios.patch(
    idCardStockURL + "/" + id,
    {
      code,
      title,
      shortDesc,
      desc,
      price,
      discount,
      discountedPrice,
      finalPrice,
      partnerDiscount,
      additionalDiscount,
      productVariant,
      categoryId,
    },
    { headers: authHeader() }
  );
}

function updateIdCardEditor(id, card) {
  return axios.put(
    idCardStockURL + "/editor/" + id,
    {
      card,
    },
    { headers: authHeader() }
  );
}

function createImage(file) {
  return axios.post(
    idCardStockURL + "/image",
    { file },
    { headers: authHeader("FormData") }
  );
}

function updateIdCardStockImage(id, file) {
  return axios.put(
    idCardStockURL + "/image/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}

function updateIdCardStockStatus(id, status) {
  return axios.put(
    idCardStockURL + "/" + id,
    { status },
    { headers: authHeader() }
  );
}

function uploadIdCardStockImage(id, file) {
  return axios.post(
    productImageURL + "/" + id + "/IMAGE",
    { file },
    { headers: authHeader("FormData") }
  );
}

function deleteIdCardStockImage(id) {
  return axios.delete(productImageURL + "/" + id, { headers: authHeader() });
}

function updateIdCardHouse(id, card, settingId) {
  return axios.put(
    houseZonesURL + "/editor/" + id + "/" + settingId,
    {
      card,
    },
    { headers: authHeader() }
  );
}

function updateIdCardDesignation(id, card, settingId) {
  return axios.put(
    designationURL + "/editor/" + id + "/" + settingId,
    {
      card,
    },
    { headers: authHeader() }
  );
}

function updateIdCardClassStudent(id, card, settingId) {
  return axios.put(
    classListURL + "/seditor/" + id + "/" + settingId,
    {
      card,
    },
    { headers: authHeader() }
  );
}

function updateIdCardParent(id, card, settingId) {
  return axios.put(
    classListURL + "/peditor/" + id + "/" + settingId,
    {
      card,
    },
    { headers: authHeader() }
  );
}

function assignClassParentProduct(payload) {
  return axios.put(classListURL + "/products-parent", payload, {
    headers: authHeader(),
  });
}

function assignHouseProduct(payload) {
  return axios.put(houseZonesURL + "/products", payload, {
    headers: authHeader(),
  });
}

function getEditor(id, settingId, type, sp) {
  return axios.get(
    idCardStockURL + "/details/" + id + "/" + settingId + "/" + type + "/" + sp,
    { headers: authHeader() }
  );
}

function findMaxDetailStudent(id) {
  return axios.get(idCardStockURL + "/max-details-student/" + id, {
    headers: authHeader(),
  });
}

function findMaxDetailStaff(id) {
  return axios.get(idCardStockURL + "/max-details-staff/" + id, {
    headers: authHeader(),
  });
}
/**** ID CARD STOCK ****/

/**** CATEGORY ****/
function getCategoryByStatus(limit, offset, keyword, status) {
  return axios.get(
    categoryURL +
      "/all?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}

function getCategory(limit, offset, keyword) {
  return axios.get(
    categoryURL +
      "?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword,
    { headers: authHeader() }
  );
}

function createCategory(title, desc) {
  return axios.post(categoryURL, { title, desc }, { headers: authHeader() });
}

function updateCategory(id, title, desc) {
  return axios.patch(
    categoryURL + "/" + id,
    { title, desc },
    { headers: authHeader() }
  );
}

function updateCategoryImage(id, file) {
  return axios.put(
    categoryURL + "/image/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}

function updateCategoryStatus(id, status) {
  return axios.put(
    categoryURL + "/status/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** CATEGORY ****/

/**** CARTS ****/
function getCarts(
  limit,
  offset,
  keyword,
  status,
  paymentStatus,
  paymentMode,
  fromDate,
  toDate
) {
  return axios.get(
    cartURL +
      "/all?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status +
      "&paymentStatus=" +
      paymentStatus +
      "&paymentMode=" +
      paymentMode +
      "&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate,
    { headers: authHeader() }
  );
}

function getCartProduct(id) {
  return axios.get(cartProductURL + "/list/" + id, { headers: authHeader() });
}

function updateCartStatus(id, status, cgst, igst, sgst, shipping, addDiscount) {
  return axios.put(
    cartURL + "/status/" + id,
    { status, cgst, igst, sgst, shipping, addDiscount },
    { headers: authHeader() }
  );
}

function downloadInvoice(id) {
  return axios.get(cartProductURL + "/invoice/" + id, {
    headers: authHeader("Blob"),
    responseType: "blob",
  });
}

/**** CARTS ****/

/**** Blogs ****/
function getBlogsByStatus(limit, offset, keyword, status) {
  return axios.get(
    blogsURL +
      "/admin?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}

function createBlog(title, author, desc) {
  return axios.post(
    blogsURL,
    { title, author, desc },
    { headers: authHeader() }
  );
}

function updateBlog(id, title, author, desc) {
  return axios.patch(
    blogsURL + "/" + id,
    { title, author, desc },
    { headers: authHeader() }
  );
}

function updateBlogImage(id, file) {
  return axios.put(
    blogsURL + "/image/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}

function updateBlogStatus(id, status) {
  return axios.put(
    blogsURL + "/status/" + id,
    { status },
    { headers: authHeader() }
  );
}
/**** BLOG ****/

/**** Banner ****/
function getBannersByStatus(limit, offset, keyword, status) {
  return axios.get(
    bannersURL +
      "/admin?limit=" +
      limit +
      "&offset=" +
      offset +
      "&keyword=" +
      keyword +
      "&status=" +
      status,
    { headers: authHeader() }
  );
}

function createBannerImage(type, date, file) {
  return axios.post(
    bannersURL + "/" + type + "/" + date,
    { file },
    { headers: authHeader("FormData") }
  );
}

function updateBannerImage(id, file) {
  return axios.put(
    bannersURL + "/image/" + id,
    { file },
    { headers: authHeader("FormData") }
  );
}

function updateBannerStatus(id, status) {
  return axios.put(
    bannersURL + "/status/" + id,
    { status },
    { headers: authHeader() }
  );
}

function getUSersList(limit, offset, keyword) {
  return axios.get(
    usersURL + "?limit=" + limit + "&offset=" + offset + "&keyword=" + keyword,
    { headers: authHeader() }
  );
}
/**** Banner ****/

export const apiServices = {
  crmLogin,
  crmVerifyOtp,
  forgotVerifyOtp,
  resetPassword,
  forgotPassword,
  crmLogout,

  getDashboardCounts,
  //Admin
  getAdmin,
  addAdmin,
  updateAdminStatus,
  updatePassword,

  //Staff
  getStaff,
  getStaffList,
  getMyStaffList,
  getOneStaff,
  getProfile,
  updateProfile,
  updateProfileImage,
  addStaff,
  addMyStaff,
  updateStaff,
  updateStaffStatus,
  updatePermission,
  uploadStaffCsvFile,

  // Branch Staff
  getBranchStaff,

  //FAQ
  getFaq,
  addFaq,
  updateFaq,
  updateFaqStatus,

  // FEEDBACK
  getFeedback,
  updateFeedbackStatus,

  //Page
  getPage,
  getPageDetails,
  updatePage,

  // DESIGNATION
  getDesignation,
  getMyDesignation,
  getMyDesignationBySetting,
  addDesignation,
  addOtherDesignation,
  updateDesignation,
  deleteDesignation,
  addDesignationByAdmin,
  updateDesignationByAdmin,

  //Organization
  getOrganizationByCreator,
  addOrganizationByCreator,
  getOrganization,
  getOrganizationDashboard,
  getOneOrganization,
  getOrganizationByType,
  addOrganization,
  updateOrganization,
  updateOrganizationStatus,
  updateOrganizationImage,
  getOneOrganizationSettings,

  getSetting,
  updateCsvField,

  // org Branch
  getOrganizationBranch,
  addOrganizationBranch,

  // class
  getMyClasses,
  addClass,
  addAsignClass,
  deleteAsignClass,
  updateClass,
  deleteClass,

  assignClassProduct,
  assignDesignationProduct,

  //Division
  addDivision,
  updateDivision,
  deleteDivision,

  //BookCategory
  addBookCategory,
  updateBookCategory,
  deleteBookCategory,

  // Department
  addDepartment,
  updateDepartment,
  deleteDepartment,

  //House Zone
  addHouseZone,
  updateHouseZone,
  deleteHouseZone,

  //Subject
  addSubject,
  updateSubject,
  deleteSubject,

  //Student
  getStudent,
  getStudentByClass,
  getStudentByClassList,
  getStudentByClassDiv,
  getStudentForCard,
  getStudentFinalForCard,
  getStaffFinalForCard,
  getStudentFinalForCardProfile,
  getStaffFinalForCardProfile,
  addStudent,
  getOneStudent,
  updateStudent,
  updateStudentStatus,
  updateStudentCard,
  promoteClass,
  updateStudentImage,
  uploadStudentCsvFile,
  getStudentByDash,
  getStaffDashboard,

  // Books
  getBooks,
  addBooks,
  editBooks,
  updateBooksStatus,
  updateImage,

  //Staff Class
  addStaffClass,
  deleteStaffClass,

  //staff Department

  addStaffDepartment,
  deleteStaffDepartment,

  //Staff Division

  addStaffDivision,
  deleteStaffDivision,

  //Staff Subject
  addStaffSubject,
  deleteStaffSubject,

  //Staff Documents
  addStaffDoc,
  deleteStaffDoc,

  // Partners
  getPartners,
  getPartnersByDash,
  addPartners,
  getOnePartner,
  updatePartnersStatus,
  updatePartnerImage,
  editPartners,

  // Sub Partner
  getSubPartners,
  addSubPartners,

  // Default setting
  createDefaultSetting,
  updateDefaultSetting,
  bulkDefaultSetting,
  deleteDefaultSetting,
  getDefaultSetting,

  //EVENt
  addEvent,
  updateEvent,
  getEvent,
  deleteEvent,

  //time Table
  addTimeTable,
  scheduleStatus,
  deletePeriod,
  updatePeriod,

  /****  CARD ORDERS ****/
  getOrders,
  getOrder,
  downloadStaffCSVByOrganizationId,
  downloadStudentCSVByOrganizationId,
  downloadStaffFileByOrganizationId,
  downloadStudentFileByOrganizationId,
  downloadStaffCSVByOrderId,
  downloadStudentCSVByOrderId,
  downloadStaffFileByOrderId,
  downloadStudentFileByOrderId,
  createStaffOrder,
  createStudentOrder,
  assignSchoolToUpper,
  assignSubPartnerToUpper,
  assignPartnerToUpper,
  updateCardOrderStatus,
  /**** END CARD ORDERS ****/

  /**** DELIVERY PARTNERS ****/
  getDeliveryPartners,
  createDeliveryPartner,
  deleteDeliveryPartner,
  /**** END DELIVERY PARTNERS ****/

  /**** ID CARD STOCK ****/
  getIdCardStocksByStatus,
  getIdCardStocks,
  getIdCardStock,
  createIdCardStock,
  updateIdCardStock,
  updateIdCardStockImage,
  updateIdCardStockStatus,
  createImage,
  updateIdCardEditor,
  uploadIdCardStockImage,
  deleteIdCardStockImage,

  updateIdCardHouse,
  updateIdCardDesignation,
  updateIdCardClassStudent,
  updateIdCardParent,
  assignClassParentProduct,
  assignHouseProduct,

  getEditor,
  findMaxDetailStaff,
  findMaxDetailStudent,
  /**** ID CARD STOCK ****/

  /**** CATEGORY ****/
  getCategoryByStatus,
  getCategory,
  createCategory,
  updateCategory,
  updateCategoryImage,
  updateCategoryStatus,
  /**** CATEGORY ****/

  /**** CATEGORY ****/
  getCarts,
  getCartProduct,
  updateCartStatus,
  downloadInvoice,
  /**** CATEGORY ****/

  getBlogsByStatus,
  createBlog,
  updateBlog,
  updateBlogImage,
  updateBlogStatus,
  getBannersByStatus,
  createBannerImage,
  updateBannerImage,
  updateBannerStatus,
  getUSersList,
};
