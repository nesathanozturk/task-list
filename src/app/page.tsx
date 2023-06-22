import { getTasks } from "../api";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TaskTable from "@/components/TaskTable";

export default async function Home() {

const tasks = await getTasks();

  return (
    <main className="max-w-4xl mx-auto mt-4">
    <Header />
      <TaskTable tasks={tasks} />
      <Footer />
    </main>
  )
}
