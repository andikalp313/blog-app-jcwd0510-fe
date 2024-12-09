"use client";

import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ForgotPasswordrPayload {
  email: string;
}
const useForgotPassword = () => {
  const routes = useRouter();
  return useMutation({
    mutationFn: async (payload: ForgotPasswordrPayload) => {
      const { data } = await axiosInstance.post(
        "/auth/forgot-password",
        payload,
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Send email success"); //masukin data ke local storage
      routes.push("/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useForgotPassword;

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
