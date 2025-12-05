import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
