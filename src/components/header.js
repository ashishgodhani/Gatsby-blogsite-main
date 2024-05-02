import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as styles from './header.module.scss'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site	{
                siteMetadata	{
                    title
                }
            }
        }
    `)

    return (
        <header className={styles.header}>
            <h1>
                <Link to="/" className={styles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={styles.navItem} activeClassName={styles.activeNavItem}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={styles.navItem} activeClassName={styles.activeNavItem}>About</Link>
                </li>
                <li>
                    <Link to="/blog" className={styles.navItem} activeClassName={styles.activeNavItem}>Blog</Link>
                </li>
                <li>
                    <Link to="/contact" className={styles.navItem} activeClassName={styles.activeNavItem}>Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
