export interface ITask {
    id: string;
    title: string;
};

export interface TaskProps {
    task: ITask
};

export interface TaskListProps {
    tasks: ITask[]
};

export interface ModalProps {
    modalOpen: boolean,
    setModalOpen: (modalOpen: boolean) => boolean | void,
    children: React.ReactNode,
};