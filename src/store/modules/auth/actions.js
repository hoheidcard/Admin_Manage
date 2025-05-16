import router from "../../../router";
import {
  errorHandler,
  errorMessage,
  successHandler,
} from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const crmLogin = async (
  { commit, state },
  { loginId, password, roles, passwordStatus }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.crmLogin({ loginId, password, roles, passwordStatus }).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      if (passwordStatus) {
        localStorage.setItem("roles", response.data.user?.roles);
        localStorage.setItem("accessToken", response.data.token);
        successHandler("Login Successfully");
        commit("SET_LOADER", false, { root: true });
        router.push({ path: "/crm/dashboard" });
      } else {
        successHandler("Otp sent please check your phone inbox");
        state.otpStatus = true;
      }
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const crmVerifyOtp = async ({ commit, state }, { loginId, otp, roles }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.crmVerifyOtp({ loginId, otp, roles }).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      localStorage.setItem("roles", response.data.user?.roles);
      localStorage.setItem("accessToken", response.data.token);
      successHandler("Login Successfully");
      state.otpStatus = false;
      router.push({ path: "/crm/dashboard" });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const crmLoout = async ({ commit, state }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.crmLogout().then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      localStorage.clear();
      successHandler("Logout Successfully");
      router.push({ path: "/login" });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      localStorage.clear();
      successHandler("Logout Successfully");
      router.push({ path: "/login" });
    }
  );
};

export const forgotPassword = async ({ commit, state }, { loginId, roles }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.forgotPassword({ loginId, roles }).then(
    (response) => {
      successHandler("Otp sent please check your phone inbox");
      state.forgotOtpStatus = true;
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage(error.response.data.message);
    }
  );
};

export const forgotVerifyOtp = async ({ commit, state }, { loginId, otp, roles }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.forgotVerifyOtp({ loginId, otp, roles }).then(
    (response) => {
      state.id = response.data.id;
      commit("SET_LOADER", false, { root: true });
      successHandler("Otp verified. Now you can reset your password");
      state.forgotPasswordStatus = true;
      state.forgotOtpStatus = false;
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage(error.response.data.message);
    }
  );
};

export const resetPassword = async (
  { commit, state },
  { id, password, confirmPassword }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.resetPassword({ id, password, confirmPassword }).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Congrats! Your new password set. Now you can login.");
      state.forgotPasswordStatus = false;
      state.forgotOtpStatus = false;
      router.push({ path: "/login" });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Account not found to reset the password!");
    }
  );
};

export const getProfile = async ({ commit, state }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getProfile().then(
    (response) => {
      commit("SET_PROFILE", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateProfile = async (
  { commit, state },
  { name, emailId, gender, dob }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateProfile(name, emailId, gender, dob).then(
    (response) => {
      successHandler("Update Successfully");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updatePassword = async (
  { commit, state },
  { oldPassword, password, confirmPassword }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePassword(oldPassword, password, confirmPassword).then(
    (response) => {
      successHandler("Update Successfully");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateProfileImage = async ({ commit, state }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateProfileImage(id, file).then(
    (response) => {
      successHandler("Update Successfully");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
