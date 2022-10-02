import styles from "./Footer.module.scss";

import Link from 'next/link';

// eslint-disable-next-line react/prop-types
function Footer({color}) {
    return (
        <div className={styles.footer} style={{backgroundColor: color}}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopWrapper}>
                        <div className={styles.footerLinks}>
                            <p className={`${styles.firstLink} globalTextDark200`}>Company</p>
                            <Link href={'/'}>
                            <a>
                                <p className={styles.footerLink}>About Us</p>
                            </a>
                            </Link>
                            <Link href={'/products/business'}>
                            <a>
                                <p className={styles.footerLink}>For Brands</p>
                            </a>
                            </Link>
                            <Link href={'/products/creators'}>
                            <a>
                                <p className={styles.footerLink}>For Creators</p>
                            </a>
                            </Link>
                        </div>
                        <div className={styles.footerLinks}>
                            <p className={`${styles.firstLink} globalTextDark200`}>Product</p>
                            <p className={styles.footerLink}>Video Commerce Platform</p>
                            <p className={styles.footerLink}>Video tagging API</p>
                            <p className={styles.footerLink}>Retail API</p>
                        </div>
                        <div className={styles.footerLinks}>
                            <p className={`${styles.firstLink} globalTextDark200`}>Contact</p>
                            <p className={styles.footerLink}>
                                Mulliner Towers,
                            </p>
                            <p className={styles.footerLink}>39 Alfred Rewane Road,
                            </p>
                            <p className={styles.footerLink}>Ikoyi, Lagos.</p>
                            <p className={`${styles.footerLink} text-blue`}>info@edekee.com</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footerBottom} globalTextDark200`}>
                    <div className={styles.bottomLeft}>
                        <a href="/">
                            <picture>
                                <source srcSet="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/edekee-logo.svg" media="(min-width: 800px)"/>
                                <img src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/logo-small.svg" alt=" "/>
                            </picture>
                        </a>
                    </div>
                    <div className={`${styles.bottomCenter} globalTextDark200`}>
                        <Link href={'/privacy'}>
                            <a className={`${styles.terms} globalTextDark200`}>Terms and Conditions</a>
                        </Link>
                        <Link href={'/privacy'}>
                            <a className={`${styles.privacy}  globalTextDark200`}>Privacy Policy</a>
                        </Link>
                    </div>

                    <div className={styles.bottomRight}>
                        <a href="mailto:info@edekee.com" target="_blank" rel="noreferrer">
                            <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/gmailIcon.svg" alt=""/>
                        </a>

                        <a
                            href="https://www.facebook.com/edekeeapp-103179892364791/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/Facebook.svg" alt=""/>
                        </a>

                        <a
                            href="https://www.instagram.com/edekee.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/instagram.svg" alt=""/>
                        </a>

                        <a
                            href="https://twitter.com/edekee_app?t=rU3leaavz-M3TKhNzol8yQ&s=09"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/Twitter.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
