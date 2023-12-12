import React from 'react';
import styles from './styles.module.css';

export function Cell(props: React.PropsWithChildren) {
  return (
    <div className="w-full h-full bg-gray-400 rounded-lg border-zinc-900 border-2 border-double dark:bg-blue-950 dark:border-blue-600">
      {props.children}
    </div>
  );
}

export function GridContainer(props: React.PropsWithChildren) {
  return (
    <div
      className={`grid grid-rows-3 grid-flow-col gap-4 ${styles.colContainer}`}
    >
      {props.children}
    </div>
  );
}
