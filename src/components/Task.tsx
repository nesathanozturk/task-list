"use client"

import { AiFillEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { FormEventHandler, useState } from "react";
import { ITask, TaskProps } from "../../types";
import { useRouter } from "next/navigation";
import { editTask, deleteTask } from "../../api";
import Modal from "./Modal";

const Task: React.FC <TaskProps>= ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [editTaskValue, setEditTaskValue] = useState<string>(task.title);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
     await editTask({
       id: task.id,
       title: editTaskValue,
     });
    setOpenModalEdit(false);
    router.refresh();
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setOpenModalDelete(false);
    router.refresh();
  }

  return (
    <tr>
    <td className="w-full font-semibold tracking-wider">{task.title}</td>
    <td className="flex gap-5">
      <AiFillEdit onClick={() => setOpenModalEdit(true)} size={25} className="cursor-pointer text-blue-500 hover:text-blue-700 transition-all" />
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-lg">Edit Task</h3>
              <div className="modal-action">
              <input type="text" placeholder="Edit task text" className="input input-bordered w-full" value={editTaskValue} onChange={(e) => setEditTaskValue(e.target.value)} />
              <button type="submit" className="btn">Submit</button>
              </div>
            </form>
        </Modal>
      <FiTrash2 onClick={() => setOpenModalDelete(true)} size={25} className="cursor-pointer text-red-500 hover:text-red-700 transition-all" />
      <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Do you want to delete this task?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn btn-success">Yes</button>
            <button onClick={() => setOpenModalDelete(false)} className="btn btn-error">No</button>
          </div>
        </Modal>
    </td>
  </tr>
  )
}

export default Task;