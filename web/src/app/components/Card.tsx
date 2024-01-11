import '../globals.css';
import styles from './Card.module.css'
import { ReactNode } from 'react';

export default function Card({children}: { children: ReactNode } ) {
    return <div className={styles.container}>
        {children}
    </div>
}