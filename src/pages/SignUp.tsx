import ConsumerSignUp from "@/components/ConsumerSignup";
import FarmerSignUp from "@/components/FarmerSignUp";
import RoleSelection from "@/components/SelectRole";
import { useState } from "react";
const SIGN_IN_FLOW = {
  Role: "selectRole",
  Farmer: "farmer",
  Consumer: "consumer",
} as const;

type SignInFlow = (typeof SIGN_IN_FLOW)[keyof typeof SIGN_IN_FLOW];

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState<SignInFlow>(
    SIGN_IN_FLOW.Role
  );

  const renderStep = () => {
    switch (selectedRole) {
      case SIGN_IN_FLOW.Farmer:
        return (
          <FarmerSignUp
            role="farmer"
            onBack={() => setSelectedRole(SIGN_IN_FLOW.Role)}
          />
        );
      case SIGN_IN_FLOW.Consumer:
        return (
          <ConsumerSignUp
            role="consumer"
            onBack={() => setSelectedRole(SIGN_IN_FLOW.Role)}
          />
        );
      default:
        return (
          <RoleSelection
            onSelectRole={(role: "farmer" | "consumer") =>
              setSelectedRole(
                role === "farmer" ? SIGN_IN_FLOW.Farmer : SIGN_IN_FLOW.Consumer
              )
            }
          />
        );
    }
  };

  return <div>{renderStep()}</div>;
};

export default SignUp;
