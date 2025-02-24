import { Year } from "./components/Year";

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <h1>Habit Tracker</h1>
      </div>
      <Year />
    </div>
  );
}
