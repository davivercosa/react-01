import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import styles from './newTask.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { iTask } from './Task';

interface iNewTaskProps {
  onNewTask: (newTask: iTask) => void;
}

export function NewTask({ onNewTask }: iNewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newTask) {
      alert('You need to specify an input text for your desired new task');
      return;
    }

    onNewTask({
      id: uuidv4(),
      content: newTask,
      done: false,
    });

    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form className={styles.newTask} onSubmit={handleNewTask}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button type="submit" disabled={!newTask}>
        Add <PlusCircle size={16} />
      </button>
    </form>
  );
}
