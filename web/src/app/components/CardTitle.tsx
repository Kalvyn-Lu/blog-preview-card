import Link from "next/link";
import { CardTypography } from "./CardTypography";
import styles from './CardTitle.module.css';

type Props = {
    href: string,
    text: string,
}

export function CardTitle({href, text}: Props) {
    return <Link href={href} className={styles.link}>
          <CardTypography><h1>{text}</h1></CardTypography>
    </Link>
}