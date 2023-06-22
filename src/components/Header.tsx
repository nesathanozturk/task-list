import AddTask from "@/components/AddTask";

const Header = () => {
  return (
    <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Task List App</h1>
        <AddTask />
      </div>
  )
}

export default Header;