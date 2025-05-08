import Link from "next/link";
import styles from '@/styles/homeLink.module.css';

const HomeLink = ({ children, href }) => (
    <Link href={href} className={styles.item}>
        <div className={styles.linktext} data-text={children}>
            {children}
        </div>
    </Link>
);

export default HomeLink;
