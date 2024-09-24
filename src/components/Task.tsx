import styles from './task.module.css';
import { Check, Trash } from 'phosphor-react';

export interface iTask {
  id: string;
  content: string;
  done: boolean;
}

interface iTaskProps extends iTask {
  onDoneChange: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  content,
  done,
  id,
  onDoneChange,
  onDeleteTask,
}: iTaskProps) {
  function handleChangeCheck() {
    onDoneChange(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskLeft}>
        <div
          className={`${
            done ? styles.taskCheckerDone : styles.taskCheckerNotDone
          }`}
          onClick={handleChangeCheck}
        >
          {done ? <Check /> : ''}
        </div>

        <div className={`${done ? styles.taskDone : ''}`}>{content}</div>
      </div>
      <div onClick={handleDeleteTask} className={styles.taskTrash}>
        <Trash size={14} />
      </div>
    </div>
  );
}
