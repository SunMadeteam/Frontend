import React, { useEffect, useState } from "react";
import "./GoodsInfo.scss";
import { Delete } from "../../../Delete/Delete";
import { ModalAdd } from "../../../AddBtn/ModalAdd/ModalAdd";
import { Care } from "../HardCare/Care";
import { Category } from "../HardCare/Category";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "../../../../../Store/AsyncAction/getGoods";
import { getProduct } from "../../../../../Store/AsyncAction/getProduct";
import { Hight } from "../HardCare/Hight";
import { Pagination } from "../../../Pagination/Pagination";
import { paginationGoods } from "../../../../../Store/AsyncAction/pagination";
import { deleteProduct } from "../../../../../Store/AsyncAction/deleteProduct";
export const GoodsInfo = () => {

  const goods = useSelector((state) => state.Goods.goods);
  const product = useSelector((state) => state.Goods.product);
  const category = useSelector(state => state.Goods.category)
  // console.log(goods);
  console.log(category)

  useEffect(() => {
    dispatch(getGoods());
  }, []);

  const getProductById = (id) => {
    dispatch(getProduct(id));
  };

  const [modalActive, setModalActive] = useState(false, getProductById);
  
  const [form, setForm] = useState({
    name: "",
    number: "",
    password: "",
    usertype: "",
    branch:"",
    is_active: true,
  });
  const dispatch = useDispatch();

  const onChange = (type, value) => {
    // dispatch(clearErr())
    setForm({
      ...form,
      [type]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("signup", form);
    // dispatch(registerStaff(form));
  };

  return (
    <div>
      {/* {goods.results.map(item=>console.log(item))} */}
      {goods.results.map((element, index) => (
        <div className="goods_info1" key={element.id}>
          <div
            className="goods_info"
            onClick={() => setModalActive(true, getProductById(element.id))}
          >
            <div className="info_№">
              <h4>{index + 1}</h4>
            </div>
            <div className="info_img">
              {/* <img src={element.image} width="84px" height="80px" /> */}
            </div>
            <div className="info_title">
              <h4>{element.name}</h4>
            </div>
            <div className="info_category">
              <h4>{element.category}</h4>
            </div>
            <div className="info_description">
              <h4>{element.description}</h4>
            </div>
          </div>
          <div className="info_delete">
            <Delete id={element.id} newState={getGoods} take={deleteProduct} />
          </div>
        </div>
      ))}
      <Pagination next={goods.next} previous={goods.previous} take={paginationGoods}/>
      <ModalAdd active={modalActive} setActive={setModalActive}>
        <div>
          <form className="goods_modal" onSubmit={onSubmit}>
            <h2>Данные товара</h2>
            <label className="goods_label label_margin">Добавить фото</label>
            <img src={product.image} className="goods_img" />
            <label className="goods_label">Название</label>
            <input className="goods_input" value={product.name} 
            onChange={(e) => onChange("name", e.target.value)}
            />
            <label className="goods_label">Цена</label>
            <input value={product.price} className="goods_input" 
            onChange={(e) => onChange("price", e.target.value)}
            />
            <label className="goods_label">Описание</label>

            <div className="goods_description">{product.description}</div>
            <Care />
            {/* <pre>{product.complexity_of_care}</pre> */}
            <Hight />
            <Category />
            <button className="goods_button" type="submit">СОХРАНИТЬ</button>
          </form>
        </div>
      </ModalAdd>
    </div>
  );
};
