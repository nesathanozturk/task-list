"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { addTask } from "../../api";
import Modal from "./Modal";

const AddTask = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [taskValue, setTaskValue] = useState<string>("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (taskValue.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    await addTask({
      id: uuidv4(),
      title: taskValue,
    });
    setTaskValue("");
    setIsModalOpen(false);
    router.refresh(); // => Refresh the page.
  }

  return (
    <div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary w-full">Add New Task <AiOutlinePlus size={18} /></button>
        <Modal modalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-lg">Add New Task</h3>
              <div className="modal-action">
              <input type="text" placeholder="Add task" className="input input-bordered w-full" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
              <button type="submit" className="btn">Submit</button>
              </div>
            </form>
        </Modal>
    </div>
  )
}

export default AddTask;