import { ITask } from "../types";

const BASE_URL = 'http://localhost:3001';

export const getTasks = async (): Promise<ITask[]> => {
   try {
    const res = await fetch(`${BASE_URL}/tasks`, {
        cache: "no-store", // => no-store yaptık çünkü her seferinde yeni veri çekmeli.
    });
    const tasks = await res.json();
    return tasks;  
   } catch (e) {
       throw new Error("Error while fetching tasks");
   }
}

export const addTask = async (task: ITask): Promise<ITask> => {
    try {
        const res = await fetch(`${BASE_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        const newTask = await res.json();
        return newTask;
    } catch (e) {
        throw new Error("Error while adding task");
    }
}

export const editTask = async (task: ITask): Promise<ITask> => {
 try {
    const res = await fetch(`${BASE_URL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
    const updatedTask = await res.json();
    return updatedTask;
 } catch (e) {
    throw new Error("Error while editing task");
 }
}

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
    })
  } catch (e) {
    throw new Error("Error while deleting task");
  }
}