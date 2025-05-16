import router from "../../router";
import * as store from "../../store";

export function errorHandler(res, type) {
  if (res.status === 401) {
    setAlert({ type: "danger", message: res.data.message });
    localStorage.clear();
    router.push("/login");
    return;
  }
  if (res.status === 403) {
    setAlert({
      type: "danger",
      message: "Sorry! You don't have permission to access this function!",
    });
    return;
  }
  if (res.status === 409) {
    setAlert({ type: "danger", message: res.data.message });
    return;
  }
  if (res.status === 400) {
    let result = Array.isArray(res.data.message);
    if (result) {
      setAlert({ type: "danger", message: res.data.message[0] });
      return;
    } else {
      setAlert({ type: "danger", message: res.data.message });
      return;
    }
  }
  if (res.status !== 400) {
    setAlert({ type: "danger", message: res.data.message });
  }
}

export function successHandler(msg) {
  setAlert({ type: "success", message: msg });
}

export function errorMessage(msg) {
  setAlert({ type: "danger", message: msg });
}

function setAlert(data) {
  store.default.state.notification = data;
}
