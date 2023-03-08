import Image from "next/image";
import styles from "@/components/Product/Product.module.css";

export default function Product({
  img = "",
  tag = "",
  price = 0,
  colour = "",
}) {
  return (
    <>
      <div className={styles.main}>
        <Image src={img} width={200} height={200} />
        <div>{tag}</div>
        <div>{price}</div>
        <div
          style={{
            display: "flex",
            gap: 5,
          }}
        >
          {colour.map((colour) => (
            <div
              style={{
                backgroundColor: colour,
                width: 20,
                height: 20,
                borderRadius: 50,
                display: "inline-block",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
