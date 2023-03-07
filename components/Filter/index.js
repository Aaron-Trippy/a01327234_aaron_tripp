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
          data-sex="All"
          onClick={handleFilter}
        >
          Clear Filters
        </div>
        <div
          className={styles.item}
          data-category="Hoodies"
          data-sex="Male"
          onClick={handleFilter}
        >
          Male Hoodies
        </div>
        <div
          className={styles.item}
          data-category="Hoodies"
          data-sex="Female"
          onClick={handleFilter}
        >
          Female Hoodies
        </div>
        <div
          className={styles.item}
          data-category="Hoodies"
          data-sex="Unisex"
          onClick={handleFilter}
        >
          Unisex Hoodies
        </div>
        <div
          className={styles.item}
          data-category="Jackets"
          data-sex="Male"
          onClick={handleFilter}
        >
          Male Jackets
        </div>
        <div
          className={styles.item}
          data-category="Jackets"
          data-sex="Female"
          onClick={handleFilter}
        >
          Female Jackets
        </div>
      </div>
      <div className={styles.category}>
        <div
          className={styles.item}
          data-category="Jackets"
          data-sex="Unisex"
          onClick={handleFilter}
        >
          Unisex Jackets
        </div>
        <div
          className={styles.item}
          data-category="Headgear"
          data-sex="Unisex"
          onClick={handleFilter}
        >
          Unisex Headgear
        </div>
        <div
          className={styles.item}
          data-category="All"
          data-sex="Male"
          onClick={handleFilter}
        >
          Male All
        </div>
        <div
          className={styles.item}
          data-category="All"
          data-sex="Female"
          onClick={handleFilter}
        >
          Female All
        </div>
        <div
          className={styles.item}
          data-category="All"
          data-sex="Unisex"
          onClick={handleFilter}
        >
          Unisex All
        </div>
      </div>
    </div>
  );
}
