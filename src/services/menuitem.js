import axios from "axios";

export const getMenuItemById = (id) => {
  return axios.get(
    `https://mmcardsystem.online/api/Customer/GetMenuItemByMenuGroupId?id=${id}`
  );
};
