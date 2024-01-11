import { ReactNode } from 'react';
import styles from './CardTypography.module.css';

export function CardTypography({ fontWeight, children }: { fontWeight?: number, children: ReactNode }) {
    return <div className={styles.container} style={{ ...(fontWeight && { fontWeight }) }}>{children}</div>
}