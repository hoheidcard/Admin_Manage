import router from "../../router";

export function authHeader(type) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    if (type === "Blob") {
      return {
        responseType: "blob",
        Authorization: "Bearer " + accessToken,
      };
    } else if (type === "FormData") {
      return {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + accessToken,
      };
    } else {
      return { Authorization: "Bearer " + accessToken };
    }
  } else {
    localStorage.clear();
    router.push("/login");
  }
}
