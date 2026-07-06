import MainLayout from "../layouts/MainLayout";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  return (
    <MainLayout>

      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">

        <LoginForm />

      </div>

    </MainLayout>
  );
}

export default Login;