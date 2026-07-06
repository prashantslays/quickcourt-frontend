import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function OwnerLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar role="owner" />

      <div className="flex-1">

        <Topbar title="Owner Dashboard" />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default OwnerLayout;