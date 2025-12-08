import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/validation/auth";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get, child } from "firebase/database";
import { auth, rtdb } from "../firebase";
import { useNavigate, Link } from "react-router";
import { FieldGroup } from "@/components/ui/field";
import { FormField } from "@/components/FormField";
import { toast } from "react-toastify";
import { ArrowBigLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Login() {
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userId = userCredential.user.uid;
      const dbRef = ref(rtdb);
      const snapshot = await get(child(dbRef, `users/${userId}`));
      const userRole = snapshot.exists() ? snapshot.val().role : "consumer";
      toast.success("Login successful!");
      if (userRole === "farmer") navigate("/farmer-dashboard");
      else navigate("/");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);

      toast.error("Invalid email or password.");
      form.setError("email", {
        type: "manual",
        message: "Invalid email or password.",
      });

      console.error("Login failed:", errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-tr from-green-50 to-white px-5 md:p-10">
      <ArrowBigLeft
        size={30}
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 cursor-pointer text-primary hover:text-primary/70 transition"
      />
      <Card className="w-full max-w-md p-5 md:p-10 shadow-lg rounded-2xl">
        <div className="text-center text-greeny">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Welcome Back
          </h2>
          <p className="text-base md:text-lg md:mb-4 mt-2">
            Log in to continue your experience.
          </p>
        </div>
        <FieldGroup>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full max-w-xl mx-auto px-2"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              type="email"
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              label="Password"
              type="password"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/70 text-lg py-6 text-grany"
              disabled={isSubmitting}
            >
              Log In
            </Button>
          </form>
        </FieldGroup>

        {/* Link */}
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-primary/70 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
}
