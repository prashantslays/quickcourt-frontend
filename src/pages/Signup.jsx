import MainLayout from "../layouts/MainLayout";
import SignupForm from "../components/forms/SignupForm";

function Signup() {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
        <SignupForm />
      </div>
    </MainLayout>
  );
}

export default Signup;