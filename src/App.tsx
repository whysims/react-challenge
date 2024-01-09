import "./App.css";
import { PeriodicName } from "./components/PeriodicName";
import { useAppDispatch } from "./context/hooks";
import { useGetDataQuery } from "./context/periodicTable";
import { setName } from "./context/user";

function App() {
  const dispatch = useAppDispatch();
  useGetDataQuery(1);

  const submitForm = (e: any) => {
    e.preventDefault();
    const { firstName, lastName } = e.target;

    dispatch(setName({ firstName: firstName.value, lastName: lastName.value }));
  };
  return (
    <div className="card">
      <PeriodicName />
      <form onSubmit={submitForm}>
        <div className="flex gap-4 mt-8">
          <div className="flex flex-col items-start">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              className="rounded-md bg-gray-200 text-gray-900 p-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              className="rounded-md bg-gray-200 text-gray-900 p-2"
            />
          </div>
        </div>
        <button type="submit" className="bg-green-800 w-full mt-4">
          Breakify
        </button>
      </form>
    </div>
  );
}

export default App;
