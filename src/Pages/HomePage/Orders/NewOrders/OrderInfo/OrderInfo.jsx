import React, { useEffect, useState } from "react";
import "./OrderInfo.scss";
import { ModalClient } from "../../Modals/ModalClient/ModalClient";
import { Delete } from "../../../Delete/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../../../Store/AsyncAction/getOrder";
import { Pagination } from "../../../Pagination/Pagination";
import { paginationOrder } from "../../../../../Store/AsyncAction/pagination";
import { deleteOrder } from "../../../../../Store/AsyncAction/deleteOrder";
import { getOrderById } from "../../../../../Store/AsyncAction/getOrderById";
import { getOrderDetail } from "../../../../../Store/AsyncAction/getOrderDetail";
import { useFormik } from "formik";

export const OrderInfo = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.Order.order);
  const oneOrder = useSelector((state) => state.Order.getOrder);
  const orderDetail = useSelector((state) => state.Order.orderDetail);
  console.log(oneOrder);

  // console.log(order);
  useEffect(() => {
    dispatch(getOrder());
  }, []);

  const orderDetailById = (id) => {
    dispatch(getOrderDetail(id));
    dispatch(getOrderById(id));
  };

  const orderDetailnumber = () => {
    if (oneOrder.user === null) {
      return oneOrder.number;
    } else if (oneOrder.number === null) {
      return oneOrder.user.number;
    } else {
      return "неизвестно";
    }
  };

  const orderDetailname = () => {
    if (oneOrder.user === null) {
      return oneOrder.name;
    } else if (oneOrder.name === null) {
      return oneOrder.user.name;
    } else {
      return "неизвестно";
    }
  };

  const formik = useFormik({
    initialValues: {
      // name: () => {
      //   if (oneOrder.user === null) {
      //     return oneOrder.name;
      //   } else if (oneOrder.name === null) {
      //     return oneOrder.user.name;
      //   } else {
      //     return "неизвестно";
      //   }
      // },
      //  name:(oneOrder.user === null?oneOrder.name:oneOrder.user.name),
      // name:oneOrder.date,
      number:() => {
        if (oneOrder.user === null) {
          return oneOrder.number;
        } else if (oneOrder.number === null) {
          return oneOrder.user.number;
        } else {
          return "неизвестно";
        }
      },
      adress: oneOrder.adress,
    },
  });
  console.log(formik.values)
  const onChange = (type, value) => {};

  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="order_global">
      {order.results.map((element, index) => (
        <div className="order_info" key={element.id}>
          <div
            className="order_info"
            onClick={() => setModalActive(true, orderDetailById(element.id))}
          >
            <div className="check_№">
              <h4>{index + 1}</h4>
            </div>
            <div className="check_time">
              <h4>{element.date}</h4>
            </div>
            <div className="check_number">
              <h4>
                {element.user === null ? element.number : element.user.number}
              </h4>
            </div>
            <div className="check_name">
              <h4>
                {element.user === null ? element.name : element.user.name}
              </h4>
            </div>
            <div className="check_adres">
              <h4>{element.adress}</h4>
            </div>
          </div>
          <div className="check_delete">
            <Delete id={element.id} take={deleteOrder} />
          </div>
        </div>
      ))}

      <Pagination
        next={order.next}
        previous={order.previous}
        take={paginationOrder}
      />

      <ModalClient active={modalActive} setActive={setModalActive}>
        <div className="modal_text">
          <h3>№ 13</h3>
        </div>
        <div className="modal_order__flex">
          <label>Имя</label>
          <input
            className="modal_order__input"
            // value={formik.values.name()}
            onChange={(e) => onChange(formik.handleChange)}
          ></input>
          <label>Номер</label>
          <input
            className="modal_order__input"
            value={orderDetailnumber()}
            onChange={(e) => onChange("number", e.target.value)}
          ></input>
          <label>Адрес</label>
          <input
            className="modal_order__input input_height"
            value={formik.values.adress}
            onChange={(e) => onChange("adress", e.target.value)}
          ></input>
        </div>
        <div className="modal_goods">
          <div className="goods_flex">
            <h3 className="goods_№">№</h3>
            <h3 className="goods_photo">Фото</h3>
            <h3 className="goods_title">Название</h3>
            <h3 className="goods_number">Кол-во</h3>
            <h3 className="goods_sum">Сумма</h3>
          </div>
          <div className="goods_content">
            <p className="content_№">1</p>
            <div className="img_1"></div>
            <p className="content_title">Монстера</p>
            <input className="input_number" placeholder="3"></input>
            <p>8400 c</p>
            <div className="goods_delete">
              <Delete />
            </div>
          </div>
          <div className="goods_content">
            <p className="content_№">2</p>
            <div className="img_2"></div>
            <p className="content_title">Листова земля</p>
            <input className="input_number" placeholder="3"></input>
            <p>1200 c</p>
            <div className="goods_delete">
              <Delete />
            </div>
          </div>
          <div className="goods_content">
            <p className="content_№">3</p>
            <div className="img_3"></div>
            <p className="content_title">Лейка</p>
            <input className="input_number" placeholder="3"></input>
            <p>1000 c</p>
            <div className="goods_delete">
              <Delete />
            </div>
          </div>
          <p className="modal_total">10 600 c</p>
          <div className="modal_button__flex">
            <button>ОТМЕНИТЬ</button>
            <button className="button_accept">ПРИНЯТЬ</button>
          </div>
        </div>
      </ModalClient>
    </div>
  );
};
