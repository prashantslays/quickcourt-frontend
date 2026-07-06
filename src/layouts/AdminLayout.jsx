import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar role="admin" />

      <div className="flex-1">

        <Topbar title="Admin Dashboard" />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;