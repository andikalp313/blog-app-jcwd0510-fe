"use client";

import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { sign } from "crypto";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

interface LoginrPayload {
  email: string;
  password: string;
}
const useLogin = () => {
  const routes = useRouter();

  return useMutation({
    mutationFn: async (payload: LoginrPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data;
    },
    onSuccess: async (data) => {
      toast.success("Login Success");
      await signIn("credentials", { ...data, redirect: false });
      routes.replace("/");
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
