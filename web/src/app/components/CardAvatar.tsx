import Image from 'next/image'
import styles from './CardAvatar.module.css'
import { CardTypography } from './CardTypography'

type Props = {
    imageSrc: string,
    name: string,
    alt?: string,
    width?: number,
    height?: number,
} 

export function CardAvatar({imageSrc, name, alt = "", width = 30, height = 30}: Props) {
    return <div className={styles.container}>
        <Image src={imageSrc} alt={alt} width={width} height={height}/>
        <CardTypography fontWeight={800}>{name}</CardTypography>
    </div>
}