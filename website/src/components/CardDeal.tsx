import { card } from "../assets/images";
import styles, { layout } from "../styles";
import Button from "./Button";



const CardDeal = () => (
    <section className={layout.section}>
      <div className={ layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a bettter card deal<br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, molestiae et! Asperiores laudantium minima id, eius quaerat consectetur saepe velit placeat ducimus nostrum qui voluptatem deleniti non beatae atque laboriosam.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )


export default CardDeal;