import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://course-goal-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
