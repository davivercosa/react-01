import { PlusCircle } from 'phosphor-react';

import styles from './newTask.module.css';
import { MouseEvent, useState } from 'react';

export function NewTask() {
  const [newTask, setNewTask] = useState('');

  function handleNewTask(event: MouseEvent<HTMLButtonElement>) {
    console.log(event);
  }

  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Add a new task" />
      <button onClick={handleNewTask}>
        Add <PlusCircle size={16} />
      </button>
    </div>
  );
}
