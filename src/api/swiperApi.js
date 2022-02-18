import request from "@/utils/request";

export function getFlimList(params) {
  return request({
    url: "getFlimList",
    method: "get",
    params,
  });
}
export function getClass(params) {
  return request({
    url: "getClass",
    method: "get",
    params,
  });
}
export function getTopClass(params) {
  return request({
    url: "getTopClass",
    method: "get",
    params,
  });
}
export function getCity(params) {
  return request({
    url: "getCity",
    method: "get",
    params,
  });
}
export function getDesigner(params) {
  return request({
    url: "getDesigner",
    method: "get",
    params,
  });
}
