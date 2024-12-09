"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface LoginrPayload {
  email: string;
  password: string;
}
const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: LoginrPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Login Success");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useLogin;

// const useRegister = () => {
//   const [isLoading, setLoading] = useState<boolean>(false);

//   const handleRegister = async (payload) => {
//     try {
//       setLoading(true);
//       const { data } = await axios.post("http://localhost:8000", payload);

//       toast.success("Register Success");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return { handleRegister, isLoading };
// };

// export default useRegister;
