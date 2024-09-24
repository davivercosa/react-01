import { useState } from 'react';
import styles from './content.module.css';
import { NewTask } from './NewTask';
import { Task, iTask } from './Task';
import emptyTask from '../assets/empty-task.svg';

export function Content() {
  const [tasks, setTasks] = useState<iTask[]>([]);

  function handleNewTask(newTask: iTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDoneChange(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const doneTasksCount = tasks.filter((task) => task.done).length;
  const totalTasksCount = tasks.length;

  return (
    <main className={styles.content}>
      <NewTask onNewTask={handleNewTask} />
      <div className={styles.taskInfo}>
        <div className={styles.taskInfoHeader}>
          <div className={styles.taskInfoCreated}>
            <span className={styles.taskCreated}>Total tasks</span>{' '}
            <span className={styles.taskCount}>{totalTasksCount}</span>
          </div>

          <div className={styles.taskInfoDone}>
            <span className={styles.taskDone}>Done tasks</span>{' '}
            <span className={styles.taskCount}>
              {doneTasksCount} de {totalTasksCount}
            </span>
          </div>
        </div>

        <div
          className={`${styles.taskInfoContent} ${
            !tasks.length ? styles.taskEmpty : ''
          }`}
        >
          {tasks.length ? (
            tasks.map((task) => (
              <Task
                content={task.content}
                done={task.done}
                key={task.id}
                id={task.id}
                onDoneChange={handleDoneChange}
                onDeleteTask={handleDeleteTask}
              />
            ))
          ) : (
            <>
              <img src={emptyTask} alt="Empty image" width="56" height="56" />
              <div className={styles.hold}>
                <div className={styles.hold1}>
                  Você ainda não tem tarefas cadastradas
                </div>
                <div className={styles.hold2}>
                  Crie Tarefas e organize seus itens a fazer
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
