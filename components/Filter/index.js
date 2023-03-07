import styles from "@/components/Filter/Filter.module.css";
import { inventory } from "@/data/inventory";

export default function Filter({ setProducts }) {
  const handleFilter = (event) => {
    const category = event.target.dataset.category;
    const sex = event.target.dataset.sex;
    let newProducts = [];

    if (category === "All" && sex === "All") {
      newProducts = [...inventory.clothing];
    } else {
      newProducts = inventory.clothing.filter(
        (product) =>
          (category === "All" || product.category === category) &&
          (sex === "All" || product.sex === sex)
      );
    }

    if (setProducts) {
      setProducts(newProducts);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.category}>
        <div
          className={styles.item}
          data-category="All"
          data-sex="Male"
          onClick={handleFilter}
          style={{ fontWeight: "bold" }}
        >
          Male
        </div>
        <div
          className={styles.item}
          data-category="Hoodies"
          data-sex="Male"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Hoodies
        </div>
        <div
          className={styles.item}
          data-category="Jackets"
          data-sex="Male"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Jackets
        </div>
        <div
          className={styles.item}
          data-category="Headgear"
          data-sex="Male"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Headgear
        </div>
        <div
          className={styles.item}
          data-category="All"
          data-sex="Female"
          onClick={handleFilter}
          style={{ fontWeight: "bold" }}
        >
          Female
        </div>
        <div
          className={styles.item}
          data-category="Hoodies"
          data-sex="Female"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Hoodies
        </div>
        <div
          className={styles.item}
          data-category="Jackets"
          data-sex="Female"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Jackets
        </div>
        <div
          className={styles.item}
          data-category="Headgear"
          data-sex="Female"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Headgear
        </div>
        <div
          className={styles.item}
          data-category="All"
          data-sex="Unisex"
          onClick={handleFilter}
          style={{ fontWeight: "bold" }}
        >
          Unisex
        </div>
        <div
          className={styles.item}
          data-category="Hoodies"
          data-sex="Unisex"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Hoodies
        </div>
      </div>
      <div className={styles.category}>
        <div
          className={styles.item}
          data-category="Jackets"
          data-sex="Unisex"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Jackets
        </div>
        <div
          className={styles.item}
          data-category="Headgear"
          data-sex="Unisex"
          onClick={handleFilter}
          style={{ textIndent: "20px" }}
        >
          Headgear
        </div>

        <div
          className={styles.item}
          data-category="All"
          data-sex="All"
          onClick={handleFilter}
          style={{ fontSize: "0.8em", marginTop: "20px", fontWeight: "bold" }}
        >
          Clear Filters
        </div>
      </div>
    </div>
  );
}
