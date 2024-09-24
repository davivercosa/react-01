import { useState } from 'react';
import styles from './content.module.css';
import { NewTask } from './NewTask';
import { Task } from './Task';

export function Content() {
  const [tasks, setTask] = useState([]);

  return (
    <main className={styles.content}>
      <NewTask />
      <div className={styles.taskInfo}>
        <div className={styles.taskInfoHeader}>
          <div className={styles.taskInfoCreated}>
            <span className={styles.taskCreated}>Total tasks</span>{' '}
            <span className={styles.taskCount}>0</span>
          </div>

          <div className={styles.taskInfoDone}>
            <span className={styles.taskDone}>Done tasks</span>{' '}
            <span className={styles.taskCount}>0 de 2</span>
          </div>
        </div>
        <div className={styles.taskInfoContent}>
          <Task />
        </div>
      </div>
    </main>
  );
}
