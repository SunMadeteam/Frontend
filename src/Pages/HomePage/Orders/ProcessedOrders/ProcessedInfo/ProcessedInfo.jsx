import React, { useEffect, useState } from "react";
import "./ProcessedInfo.scss";
import { ModalClient } from "../../Modals/ModalClient/ModalClient";
import { OrderDelete } from "../../NewOrders/OrderDelete/OrderDelete";
import { useDispatch, useSelector } from "react-redux";
import { getOrderProcessed } from "../../../../../Store/AsyncAction/getOrder";
import { getOrderById } from "../../../../../Store/AsyncAction/getOrderById";
import { paginationOrder } from "../../../../../Store/AsyncAction/pagination";
import { Pagination } from "../../../Pagination/Pagination";
import { getOrderDetail } from "../../../../../Store/AsyncAction/getOrderDetail";

const ProcessedInfo = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderProcessed());
  }, []);
  const orderDetailById = (id) => {
    // value()
    dispatch(getOrderDetail(id));
    dispatch(getOrderById(id));
  };
  const order = useSelector((state) => state.Order.order);
  const oneOrder = useSelector((state) => state.Order.getOrder);
  const orderDetail = useSelector((state) => state.Order.orderDetail);
  console.log(oneOrder);
  // console.log(order);

  const orderDetailname = () => {
    if (oneOrder.user === null) {
      return oneOrder.name;
    }
      else if(oneOrder.name === null){
        return oneOrder.user.name
      }
      else{
        return "неизвестно"
      }
  };

  const orderDetailnumber = () => {
    if (oneOrder.user === null) {
      return oneOrder.number;
    }
      else if(oneOrder.number === null){
        return oneOrder.user.number
      }
      else{
        return "неизвестно"
      }
  };
  return (
    <div>
      {order.results.map((element, index) => (
        <div
          className="processed_info"
          onClick={() => setModalActive(true, orderDetailById(element.id))}
          key={index}
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
            <h4>{element.user === null ? element.name : element.user.name}</h4>
          </div>
          <div className="check_adres">
            <h4>{element.adress}</h4>
          </div>
          <div className="processed_status status_color__delivered">
            доставил
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
            value={orderDetailname()}
          ></input>
          <label>Номер</label>
          <input className="modal_order__input" value={orderDetailnumber()}></input>
          <label>Адрес</label>
          <input
            className="modal_order__input input_height"
            value={oneOrder.adress}
          ></input>
        </div>
        <div className="modal_goods__processed">
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
              <OrderDelete />
            </div>
          </div>
          <div className="goods_content">
            <p className="content_№">2</p>
            <div className="img_2"></div>
            <p className="content_title">Листова земля</p>
            <input className="input_number" placeholder="3"></input>
            <p>1200 c</p>
            <div className="goods_delete">
              <OrderDelete />
            </div>
          </div>
          <div className="goods_content">
            <p className="content_№">3</p>
            <div className="img_3"></div>
            <p className="content_title">Лейка</p>
            <input className="input_number" placeholder="3"></input>
            <p>1000 c</p>
            <div className="goods_delete">
              <OrderDelete />
            </div>
          </div>
          <p className="modal_total__processed">10 600 c</p>
        </div>
        <div className="kur">
          <div className="kur_status">
            <div>
              <label>Имя</label>
              <p>Леонид</p>
            </div>
            <div className="kur_accept">Принял</div>
          </div>

          <div className="kur_number">
            <label>Номер</label>
            <p>+996 000 111 111</p>
          </div>
          <div className="kur_adress">
            <label>Филиал</label>
            <p>Жибек-Жолу 305, дом 30, кв 5</p>
          </div>
        </div>
      </ModalClient>
    </div>
  );
};

export default ProcessedInfo;
