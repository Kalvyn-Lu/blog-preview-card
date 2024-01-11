import Image from 'next/image';
import styles from './page.module.css';
import Card from './components/Card';
import { CardTagEnum, CardTags } from './components/CardTags';
import { CardDate } from './components/CardDate';
import { CardTypography } from './components/CardTypography';
import { CardAvatar } from './components/CardAvatar';
import Link from 'next/link';
import { CardTitle } from './components/CardTitle';

export default function Home() {
  return (
    <main className={styles.main}>
      <Card>
        <Image
          src="illustration-article.svg"
          alt=""
          width="300"
          height="200"
          style={{ objectFit: 'cover' }}
          className={styles.rounded}
        />
        <div style={{ marginTop: 20 }}>
          <CardTags tags={[CardTagEnum.LEARNING]} />
        </div>
        <CardTypography><h3><CardDate prefix={'Published '} date={new Date()} /></h3></CardTypography>
        <CardTitle href="#" text="HTML & CSS Foundations"/>
        <CardTypography><p>These languages are the backbone of every website, defining structure, content, and presentation</p></CardTypography>
        <CardAvatar imageSrc="/image-avatar.webp" name="Greg Hooper" />
      </Card>
    </main>
  )
}