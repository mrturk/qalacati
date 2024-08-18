import axios from "axios";

export const getMenuGroups = () => {
  return axios.get(
    "https://mmcardsystem.online/api/Customer/GetMenuGroupByCustomerId?customerId=14"
  );
};
