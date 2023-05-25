import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-money_tree.jpg?v=1680542101&width=400"
          alt=""
        />

        <div className="user">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          aliquam.
        </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          necessitatibus officiis impedit iste consequuntur sunt cupiditate
          veritatis repellat aperiam, quisquam odit natus aut, recusandae
          blanditiis rem cumque, a illo sed? Sit officiis incidunt veritatis
          cupiditate quod unde consequatur dignissimos id animi, perferendis
          illum? Ad neque porro omnis voluptatibus vel dolorum assumenda,
          adipisci dolores fugiat explicabo earum magnam accusantium hic debitis
          saepe deserunt? Voluptates ducimus perspiciatis quam est, maxime
          voluptas. Ipsum recusandae amet sequi, culpa inventore sed vitae
          perspiciatis dolorum! Vero esse alias omnis eligendi quas. Qui tempora
          aut temporibus incidunt maxime ex in id, dolore assumenda, sequi, sed
          odit beatae?
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
