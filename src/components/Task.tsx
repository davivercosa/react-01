import styles from './task.module.css';
import { Trash } from 'phosphor-react';

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.taskLeft}>
        <div className={styles.taskChecker}></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          quaerat placeat voluptatibus veritatis ad nesciunt pariatur, quasi
          obcaecati animi!
        </div>
      </div>
      <div>
        <Trash size={14} />
      </div>
    </div>
  );
}
