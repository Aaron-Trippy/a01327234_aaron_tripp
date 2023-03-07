import Image from "next/image";
import styles from "@/components/Product/Product.module.css";

export default function Product({ img = "", tag = "", price = 0 }) {
  return (
    <div className={styles.main}>
      <Image src={img} width={200} height={200} />
      <div>{tag}</div>
      <div>{price}</div>
    </div>
  );
}