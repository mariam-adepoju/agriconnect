import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  consumerSignUpSchema,
  type ConsumerFormValues,
} from "@/validation/auth";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ref, set } from "firebase/database";
import { auth, rtdb } from "../firebase";
import { useNavigate } from "react-router";
import { FieldGroup } from "./ui/field";
import { FormField } from "./FormField";
import { ArrowBigLeft } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function ConsumerSignUp({
  role,
  onBack,
}: {
  role: "consumer";
  onBack: () => void;
}) {
  const navigate = useNavigate();

  const form = useForm<ConsumerFormValues>({
    resolver: zodResolver(consumerSignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      location: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (data: ConsumerFormValues) => {
    try {
      // 1. Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userId = userCredential.user.uid;

      // 2. Store Role and additional data in Firestore
      await set(ref(rtdb, `users/${userId}`), {
        role,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        location: data.location,
        address: data.address,
        createdAt: new Date().toISOString(),
      });

      toast.success("Consumer account created successfully!");
      navigate("/");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);

      console.error("Consumer sign-up failed:", errorMessage);

      if (errorMessage.includes("email-already-in-use")) {
        toast.error("Email already in use.");
        form.setError("email", {
          type: "manual",
          message: "Email already in use.",
        });
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center bg-linear-to-tr from-green-50 to-white md:p-10 ">
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:rounded-2xl p-7 md:p-10 bg-[linear-gradient(90deg,#2D7D32_0%,#9CCC65_100%)] text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold md:font-extrabold leading-snug">
            Welcome to Agricconnect
          </h2>
          <p className="text-base md:text-lg mt-2 md:mt-4 text-grany">
            Register to start shopping
          </p>
        </div>

        {/* Right Side: Form */}
        <CardContent className="w-full relative md:w-1/2 py-10 px-5 md:p-10">
          <ArrowBigLeft
            size={30}
            onClick={onBack}
            className="absolute top-0 left-0 cursor-pointer text-primary fill-white hover:text-primary/70 transition"
          />

          <FieldGroup>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full max-w-xl mx-auto bg-white px-4 md:px-7 py-10 rounded-2xl shadow-lg"
            >
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  label="First name"
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  label="Last name"
                />
              </div>

              {/* Row 2: Gender & Location */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="gender"
                  label="Gender"
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
                <FormField
                  control={form.control}
                  name="location"
                  label="Location"
                  options={[
                    { value: "Oyo", label: "Oyo" },
                    { value: "Osun", label: "Osun" },
                    { value: "Lagos", label: "Lagos" },
                  ]}
                />
              </div>
              {/* Row 3: Address */}
              <FormField
                control={form.control}
                name="address"
                label="Address"
              />

              {/* Row 4: Email (Added for Auth) */}
              <FormField
                control={form.control}
                name="email"
                label="Email"
                type="email"
              />
              <div className="grid grid-cols-2 gap-4">
                {/* Row 5: Passwords */}
                <FormField
                  control={form.control}
                  name="password"
                  label="Password"
                  type="password"
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-5 bg-secondary hover:bg-secondary/70 text-lg py-6 text-grany"
              >
                Register
              </Button>
            </form>
          </FieldGroup>
        </CardContent>
      </div>
    </div>
  );
}
