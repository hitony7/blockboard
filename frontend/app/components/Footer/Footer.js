import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <hr style={styles.divider} />
      <div style={styles.content}>
        <p style={styles.copyright}>
          © 2024 Blockboard. All Rights Reserved
        </p>
        <div style={styles.socialIcons}>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram style={styles.icon} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin style={styles.icon} />
          </Link>
          {/* <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter style={styles.icon} />
          </Link> */}
          <Link href="https://discord.com" target="_blank" aria-label="Discord">
            <FaDiscord style={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '80px',  // Slightly taller footer
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1000,
    paddingTop: '10px',  // Creates space above the content
  },
  divider: {
    width: '100%',
    borderColor: 'white',
    borderWidth: '1px',
    marginBottom: '10px',  // Moves the divider slightly higher above the content
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  copyright: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 300,
  },
  socialIcons: {
    display: 'flex',
    gap: '20px',
  },
  icon: {
    color: 'white',
    fontSize: '24px',
    transition: 'color 0.3s',
  },
  iconHover: {
    color: '#3b82f6',
  },
};
