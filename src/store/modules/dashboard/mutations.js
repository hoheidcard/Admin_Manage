export const SET_DATA = (state, data) => {
  state.STUDENT = data.studentCount.count;

  if (data.accountCount?.length > 0) {
    data.accountCount.forEach((item) => {
      if (item.roles == "ADMIN") {
        state.ADMIN = item.count;
      }
      if (item.roles == "STAFF") {
        state.STAFF = item.count;
      }
      if (item.roles == "PARTNER") {
        state.PARTNER = item.count;
      }
      if (item.roles == "SUB PARTNER") {
        state.SUB_PARTNER = item.count;
      }
      if (item.roles == "SCHOOL") {
        state.SCHOOL = item.count;
      }
      if (item.roles == "COLLEGE") {
        state.COLLEGE = item.count;
      }
      if (item.roles == "ORGANIZATION") {
        state.ORGANIZATION = item.count;
      }
      if (item.roles == "PARENT") {
        state.PARENT = item.count;
      }
    });
  } else {
    state.ADMIN = 0;
    state.STAFF = 0;
    state.PARTNER = 0;
    state.SUB_PARTNER = 0;
    state.SCHOOL = 0;
    state.COLLEGE = 0;
    state.ORGANIZATION = 0;
    state.PARENT = 0;
  }
};

export const UNSET_DATA = (state, data) => {
  state.ADMIN = 0;
  state.STAFF = 0;
  state.PARTNER = 0;
  state.SUB_PARTNER = 0;
  state.SCHOOL = 0;
  state.COLLEGE = 0;
  state.ORGANIZATION = 0;
  state.PARENT = 0;
  state.STUDENT = 0;
};
export const PARTNERS_DATA = (state, data) => {
  state.partnersData = data.result;
  state.totalPartners = data.total;
};

export const ORGANIZATION_DATA = (state, data) => {
  state.organizationData = data.result;
  state.totalOrganization = data.total;
};

export const STUDENT_DATA = (state, data) => {
  state.studentData = data.result;
  state.totalStudent = data.total;
};

export const STAFF_DATA = (state, data) => {
  state.staffData = data.result;
  state.totalStaff = data.total;
};
