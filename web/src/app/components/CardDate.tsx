import { formatCardDate } from '../utils';
import styles from './CardDate.module.css';

type Props = {
    prefix?: string,
    date: Date,
}

export function CardDate(props: Props) {
    const sentence = (props.prefix ?? '') + formatCardDate(props.date);
    return <div className={styles.container}>
        {sentence}
    </div>
}