import Header from "./components/Header";
import Packages from "./components/Packages";
import HappyPlans from "./components/HappyPlans";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fe]">
      <Header />
      <main>
        <Packages />
        <HappyPlans />
      </main>
    </div>
  );
}
