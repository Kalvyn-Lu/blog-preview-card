import styles from './CardTags.module.css';

export enum CardTagEnum {
    LEARNING = 'Learning',
}

type Props = {
    tags: CardTagEnum[],
}

export function CardTags({tags}: Props) {
    return <div className={styles.container}>
        {tags.map((tag) => <div key={`tag-${tag}`} className={styles[`card-tag-${tag}`.toLowerCase()]}>
            {tag}
        </div>)}
    </div>
}