import FavoriteHeart from "../Favorite-heart";
import "./index.scss";
import PlusMinus from "./../Plus-minus-button/index";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../../redux/busket/busketRuduser";

const ProductCart = ({ base , like }) => {
  const dispatch = useDispatch();

  return (
    <div className="product_cart">
      <div className="cart_img">
        <Link to={"/cartDescription/" + base.id}>
          <img src={base.image} alt="" />
        </Link>
        <FavoriteHeart base={base} like={like} />
      </div>
      <div className="cart_body">
        <Link to={"/cartDescription/" + base.id}>
          <p className="title">{base.name}</p>
        </Link>
        <div className="price_wrap flex">
          <p className="price_product">{base.price} с</p>
          <div className="plus_mines">
            <button
              onClick={() =>
                dispatch(
                  addProductAction({
                    id: base.id,
                    name: base.name,
                    image: base.image,
                    price:base.price
                  })
                )
              }
            >
              {" "}
              <p> + </p>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
