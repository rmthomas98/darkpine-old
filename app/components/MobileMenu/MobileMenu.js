import styles from "./MobileMenu.module.css";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";

const MobileMenu = ({ isActive, setIsActive }) => {
  return (
    <>
      <div
        className={styles.overlay}
        style={{ display: isActive ? "block" : "none" }}
        onClick={() => setIsActive(false)}
      ></div>
      <div className={styles.container} style={{ width: isActive ? 270 : 0 }}>
        <div className={styles.exitContainer}>
          <IoMdClose
            size={26}
            style={{ cursor: "pointer" }}
            onClick={() => setIsActive(false)}
            color="var(--white)"
          />
        </div>
        <Link href="/">
          <a
            className={styles.link}
            style={{
              borderTop: "1px solid #ffffff18",
              opacity: isActive ? 1 : 0,
            }}
          >
            Home
            <HiArrowSmRight className={styles.arrow} size={20} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link} style={{ opacity: isActive ? 1 : 0 }}>
            Product
            <HiArrowSmRight className={styles.arrow} size={20} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link} style={{ opacity: isActive ? 1 : 0 }}>
            Pricing
            <HiArrowSmRight className={styles.arrow} size={20} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link} style={{ opacity: isActive ? 1 : 0 }}>
            Resources
            <HiArrowSmRight className={styles.arrow} size={20} />
          </a>
        </Link>
        <Link href="/">
          <a
            className={styles.link}
            style={{
              opacity: isActive ? 1 : 0,
            }}
          >
            Get started
            <HiArrowSmRight className={styles.arrow} size={20} />
          </a>
        </Link>
      </div>
    </>
  );
};

export default MobileMenu;