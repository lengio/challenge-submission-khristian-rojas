import React from 'react'
import Link from 'next/link'
import Button from '@components/Button/component/Button'
import styles from '../styles/home.module.scss'
import Avatar from '@components/Avatar/component/Avatar'

const Home = () => {
    return (
        <div className={styles.container}>
            <Avatar />
            <Link href="/Main">
                <a>
                    <Button text="Start playing" />
                </a>
            </Link>
        </div>
    )
}

export default Home