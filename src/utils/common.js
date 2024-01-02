import { toast } from "vue3-toastify";
import format from "date-fns/format";
import parse from "date-fns/parse";
import isBefore from "date-fns/isBefore";

const checkResponse = (
  response,
  success = (response) => {},
  fail = (response) => {
    toast.error(response.message || "Lỗi");
  },
) => {
  if (response.code === "200") {
    success(response.data);
  } else {
    fail(response.data);
  }
};

const formatDate = (date, formatType) => {
  let result = "";
  if (date) result = format(new Date(date), formatType || "dd/MM/yyyy HH:mm:ss");
  return result;
};

const compareDate = (date1, date2) => {
  const temp1 = new Date(date1);
  const temp2 = new Date(date2);
  return isBefore(temp1, temp2);
};

const convertDate = (date, formatType) => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const formattedDate = format(parsedDate, formatType || "yyyy-MM-dd HH:mm:ss");
  return formattedDate;
};

const formatMoney = (format, price) => {
  let result = new Intl.NumberFormat(format).format(price);
  return result;
};

const sumaryNumber = (num) => {
  let result= 0;
  if (num) {
    let a = num * 100;
    result = a.toString().split(".")[0];
  }
  return Number(result) / 100;
};

const removeNullObjects = (obj) => {
  return Object.entries(obj).reduce((a, [k, v]) => (v === null || v === "" ? a : ((a[k] = v), a)), {});
};

export {
  checkResponse,
  removeNullObjects,
  formatDate,
  convertDate,
  compareDate,
  formatMoney,
};
