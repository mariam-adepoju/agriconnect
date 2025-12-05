import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { farmerSignUpSchema, type FarmerFormValues } from "@/validation/auth";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, rtdb } from "../firebase"; // Assuming setup from previous response
import { useNavigate } from "react-router";
import { FieldGroup } from "./ui/field";
import { FormField } from "./FormField";
import { ArrowBigLeft } from "lucide-react";
import { toast } from "react-toastify";

export default function FarmerSignUp({
  role,
  onBack,
}: {
  role: "farmer";
  onBack: () => void;
}) {
  const navigate = useNavigate();

  const form = useForm<FarmerFormValues>({
    resolver: zodResolver(farmerSignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      location: "",
      address: "",
      farmName: "",
      farmProduce: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 25,
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (data: FarmerFormValues) => {
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
        farmName: data.farmName,
        farmProduce: data.farmProduce,
        location: data.location,
        address: data.address,
        age: data.age,
        createdAt: new Date().toISOString(),
      });

      toast.success("Farmer account created successfully!");
      navigate("/dashboard/farmer");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);

      console.error("Farmer sign-up failed:", errorMessage);
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
            Create Your Farm Account
          </h2>
          <p className="text-base md:text-lg mt-2 md:mt-4 text-grany">
            Register and start selling fresh produce directly to consumers.
          </p>
        </div>

        {/* Right Section */}
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
              {/* Row 1: Names */}
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

              {/* Row 2: Gender / Location */}
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
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="age"
                  label="Age"
                  type="number"
                />
                <FormField
                  control={form.control}
                  name="farmName"
                  label="Farm Name"
                />
              </div>
              <FormField
                control={form.control}
                name="farmProduce"
                label="Farm Produce"
              />
              <FormField
                control={form.control}
                name="address"
                label="Address"
              />
              <FormField
                control={form.control}
                name="email"
                label="Email"
                type="email"
              />

              {/* Passwords */}
              <div className="grid grid-cols-2 gap-4">
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
                Register Your Farm
              </Button>
            </form>
          </FieldGroup>
        </CardContent>
      </div>
    </div>
  );
}
