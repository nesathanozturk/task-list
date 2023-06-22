import { ITask, TaskListProps } from "../../types"
import Task from "./Task"

const TaskTable: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      {tasks.length > 0 ? (
        <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
      ) : (
        <div className="p-10 text-center font-bold text-xl text-gray-500 border-2 border-gray-700 rounded-md">
          <p>There is no task in your list!</p>
        </div>
      ) }
</div>
  )
}

export default TaskTable;