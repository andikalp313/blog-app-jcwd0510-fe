"use client";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
// Use React Query
interface ForgotPasswordPayload {
  email: string;
}
const useForgotPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: ForgotPasswordPayload) => {
      const { data } = await axiosInstance.post(
        "/auth/forgot-password",
        payload,
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Send email success. Please check your email.");
      router.replace("/");
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
