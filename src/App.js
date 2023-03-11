import React, { useState } from "react";
import "antd/dist/reset.css";
import "./styles.css";
import {
  InputNumber,
  Button,
  Row,
  Col,
  Modal,
  Typography,
  message
} from "antd";
import Footer from "./Footer";

const { Title } = Typography;

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
    {props.number}
  </span>
);

const style = {
  background: "#ced8e0",
  padding: "4px 0",
  borderStyle: "solid",
  borderWidth: "1.5px"
};

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export default function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const [house_x, setHouse_x] = useState();
  const [house_y, setHouse_y] = useState();
  const [houseXArray, setHouseXArray] = useState([]);
  const [houseYArray, setHouseYArray] = useState([]);

  const [restaurant_x, setRestaurant_x] = useState();
  const [restaurant_y, setRestaurant_y] = useState();
  const [restaurantXArray, setRestaurantXArray] = useState([]);
  const [restaurantYArray, setRestaurantYArray] = useState([]);

  const [gym_x, setGym_x] = useState();
  const [gym_y, setGym_y] = useState();
  const [gymXArray, setGymXArray] = useState([]);
  const [gymYArray, setGymYArray] = useState([]);

  const [hospital_x, setHospital_x] = useState();
  const [hospital_y, setHospital_y] = useState();
  const [hospitalXArray, setHospitalXArray] = useState([]);
  const [hospitalYArray, setHospitalYArray] = useState([]);

  const [house_no, setHouse_No] = useState();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [M, setM] = useState();
  const [N, setN] = useState();
  const [F_M, setF_M] = useState();
  const [F_N, setF_N] = useState();

  const [grid_list, setGrid_list] = useState([]);
  const prop_type = {
    House: "House",
    Restaurant: "Restaurant",
    Hospital: "Hospital",
    Gym: "Gym"
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (M && N) {
      initial_grid(M, N);
      setF_M(M);
      setF_N(N);
      setN();
      setM();
      setIsModalOpen(false);
    } else {
      messageApi.open({
        type: "error",
        content: "Enter both M & N"
      });
    }
  };

  const handleCancel = () => {
    setM();
    setN();
  };

  const handleClose = () => {
    setM();
    setN();
    setIsModalOpen(false);
  };

  function handleHouse_x(event) {
    var x = event;
    setHouse_x(x);
  }

  function handleHouse_y(event) {
    var y = event;
    setHouse_y(y);
  }

  function handleRestaurant_x(event) {
    var x = event;
    setRestaurant_x(x);
  }

  function handleRestaurant_y(event) {
    var y = event;
    setRestaurant_y(y);
  }

  function handleGym_x(event) {
    var x = event;
    setGym_x(x);
  }

  function handleGym_y(event) {
    var y = event;
    setGym_y(y);
  }

  function handleHospital_x(event) {
    var x = event;
    setHospital_x(x);
  }

  function handleHospital_y(event) {
    var y = event;
    setHospital_y(y);
  }

  function handleM(value) {
    var x = value;
    setM(x);
  }

  function handleN(value) {
    var y = value;
    setN(y);
  }

  function addHouse() {
    var flag = 0;
    if (house_x === "" || house_y === "") flag = 1;

    for (var i = 0; i < houseXArray.length; i++) {
      if (house_x === houseXArray[i] && house_y === houseYArray[i]) flag = 1;
    }

    for (var j = 0; j < restaurantXArray.length; j++) {
      if (house_x === restaurantXArray[j] && house_y === restaurantYArray[j])
        flag = 1;
    }

    for (var k = 0; k < gymXArray.length; k++) {
      if (house_x === gymXArray[k] && house_y === gymYArray[k]) flag = 1;
    }

    for (var l = 0; l < hospitalXArray.length; l++) {
      if (house_x === hospitalXArray[l] && house_y === hospitalYArray[l])
        flag = 1;
    }

    if (flag === 0) {
      change_grid(house_x, house_y, prop_type.House, houseXArray.length);
      setHouseXArray((prev) => {
        return [...prev, house_x];
      });
      setHouseYArray((prev) => {
        return [...prev, house_y];
      });
    } else {
      messageApi.open({
        type: "error",
        content: "Enter Valid Position for House"
      });
    }

    setHouse_x("");
    setHouse_y("");
  }

  function addRestaurant() {
    var flag = 0;
    if (restaurant_x === "" || restaurant_y === "") flag = 1;

    for (var i = 0; i < houseXArray.length; i++) {
      if (restaurant_x === houseXArray[i] && restaurant_y === houseYArray[i])
        flag = 1;
    }

    for (var j = 0; j < restaurantXArray.length; j++) {
      if (
        restaurant_x === restaurantXArray[j] &&
        restaurant_y === restaurantYArray[j]
      )
        flag = 1;
    }

    if (flag === 0) {
      change_grid(restaurant_x, restaurant_y, prop_type.Restaurant);
      setRestaurantXArray((prev) => {
        return [...prev, restaurant_x];
      });
      setRestaurantYArray((prev) => {
        return [...prev, restaurant_y];
      });
    } else {
      messageApi.open({
        type: "error",
        content: "Enter Valid Position for Restaurant"
      });
    }

    setRestaurant_x("");
    setRestaurant_y("");
  }

  function addGym() {
    var flag = 0;
    if (gym_x === "" || gym_y === "") flag = 1;

    for (var i = 0; i < houseXArray.length; i++) {
      if (gym_x === houseXArray[i] && gym_y === houseYArray[i]) flag = 1;
    }

    for (var j = 0; j < gymXArray.length; j++) {
      if (gym_x === gymXArray[j] && gym_y === gymYArray[j]) flag = 1;
    }

    if (flag === 0) {
      change_grid(gym_x, gym_y, prop_type.Gym);
      setGymXArray((prev) => {
        return [...prev, gym_x];
      });
      setGymYArray((prev) => {
        return [...prev, gym_y];
      });
    } else {
      messageApi.open({
        type: "error",
        content: "Enter Valid Position for Gym"
      });
    }

    setGym_x("");
    setGym_y("");
  }

  function addHospital() {
    var flag = 0;
    if (hospital_x === "" || hospital_y === "") flag = 1;

    for (var i = 0; i < houseXArray.length; i++) {
      if (hospital_x === houseXArray[i] && hospital_y === houseYArray[i])
        flag = 1;
    }

    for (var j = 0; j < hospitalXArray.length; j++) {
      if (hospital_x === hospitalXArray[j] && hospital_y === hospitalXArray[j])
        flag = 1;
    }

    if (flag === 0) {
      change_grid(hospital_x, hospital_y, prop_type.Hospital);
      setHospitalXArray((prev) => {
        return [...prev, hospital_x];
      });
      setHospitalYArray((prev) => {
        return [...prev, hospital_y];
      });
    } else {
      messageApi.open({
        type: "error",
        content: "Enter Valid Position for Hospital"
      });
    }

    setHospital_x("");
    setHospital_y("");
  }

  function check() {
    if (!houseXArray.length) {
      messageApi.open({
        type: "error",
        content: "Add Some Houses"
      });
    } else {
      var ans = 1;
      var dis = 1000;
      for (var i = 0; i < houseXArray.length; i++) {
        var min_distance = 0,
          a = 100,
          b = 100,
          c = 100;
        for (var j = 0; j < restaurantXArray.length; j++) {
          var p = 0;
          if (houseXArray[i] > restaurantXArray[j])
            p += houseXArray[i] - restaurantXArray[j];
          else p += restaurantXArray[j] - houseXArray[i];
          if (houseYArray[i] > restaurantYArray[j])
            p += houseYArray[i] - restaurantYArray[j];
          else p += restaurantYArray[j] - houseYArray[i];
          if (p < a) a = p;
        }

        for (var k = 0; k < gymXArray.length; k++) {
          var q = 0;
          if (houseXArray[i] > gymXArray[k]) q += houseXArray[i] - gymXArray[k];
          else q += gymXArray[k] - houseXArray[i];
          if (houseYArray[i] > gymYArray[k]) q += houseYArray[i] - gymYArray[k];
          else q += gymYArray[k] - houseYArray[i];
          if (q < b) b = q;
        }

        for (var l = 0; l < hospitalXArray.length; l++) {
          var r = 0;
          if (houseXArray[i] > hospitalXArray[l])
            r += houseXArray[i] - hospitalXArray[l];
          else r += hospitalXArray[l] - houseXArray[i];
          if (houseYArray[i] > hospitalYArray[l])
            r += houseYArray[i] - hospitalYArray[l];
          else r += hospitalYArray[l] - houseYArray[i];
          if (r < c) c = r;
        }

        min_distance = a + b + c;
        if (min_distance < dis) {
          dis = min_distance;
          ans = i + 1;
        }
      }
      if (houseXArray.length) setHouse_No(ans);
    }
  }

  const initial_grid = (m, n) => {
    setGrid_list(() => []);
    var temp_grid = [];
    for (var i = 0; i < m; i++) {
      var temp = [];
      for (var j = 0; j < n; j++) {
        temp.push([]);
      }
      temp_grid.push(temp);
    }
    setGrid_list(() => temp_grid);
  };

  const grid_icon = (type, number) => {
    switch (type) {
      case prop_type.House:
        return (
          <Emoji symbol="🏠" label={prop_type.House} number={number + 1} />
        );
      case prop_type.Hospital:
        return <Emoji symbol="🏥" label={prop_type.Hospital} />;
      case prop_type.Gym:
        return <Emoji symbol="🏋️" label={prop_type.Gym} />;
      case prop_type.Restaurant:
        return <Emoji symbol="🍽️" label={prop_type.Restaurant} />;
      default:
        return null;
    }
  };

  const change_grid = (m, n, type, number) => {
    setGrid_list((prev) => {
      const newGrid = prev.map((each_col, index_i) => {
        if (index_i === m - 1) {
          const new_col = each_col.map((col_obj, index_j) => {
            if (index_j === n - 1) {
              col_obj.push(
                number === undefined ? grid_icon(type) : grid_icon(type, number)
              );
              console.log({ col_obj });
              return col_obj;
            } else {
              return col_obj;
            }
          });
          return new_col;
        } else {
          return each_col;
        }
      });
      return newGrid;
    });
  };

  const render_grid = () => {
    const render_grid_list = [];
    for (var i = 0; i < F_M; i++) {
      var temp_row = [];
      for (var j = 0; j < F_N; j++) {
        temp_row.push(
          <Col style={style} span={2}>
            <DemoBox value={200}>{grid_list[i][j]}</DemoBox>
          </Col>
        );
      }
      render_grid_list.push(<Row>{temp_row}</Row>);
    }
    return render_grid_list;
  };

  return (
    <div className="Input">
      <Modal
        title="Enter Value of M and N"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={handleClose}
        maskClosable={false}
      >
        <InputNumber
          min={1}
          max={10}
          onChange={handleM}
          placeholder="M"
          name="M"
          value={M}
        />
        <InputNumber
          min={1}
          max={10}
          onChange={handleN}
          placeholder="N"
          name="N"
          value={N}
        />
      </Modal>

      <Row>
        <Col span={10}>
          <Row>
            {F_M && F_N ? (
              <Title level={1}>
                Grid Dimensions are {F_M} X {F_N}
              </Title>
            ) : (
              <Title level={1}> Give me a Grid</Title>
            )}
          </Row>
          <br />
          <br />
          <Row>
            <Title level={3}>House Locations</Title>
          </Row>
          <Row>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_M}
                onChange={handleHouse_x}
                placeholder="x"
                name="x-cordinate"
                value={house_x}
              />
            </Col>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_N}
                onChange={handleHouse_y}
                placeholder="y"
                name="y-cordinate"
                value={house_y}
              />
            </Col>
            <Col span={1}>
              <Button onClick={addHouse}>+</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Title level={3}>Restaurant Locations</Title>
          </Row>
          <Row>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_M}
                onChange={handleRestaurant_x}
                placeholder="x"
                name="x-cordinate"
                value={restaurant_x}
              />
            </Col>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_N}
                onChange={handleRestaurant_y}
                placeholder="y"
                name="y-cordinate"
                value={restaurant_y}
              />
            </Col>
            <Col span={1}>
              <Button onClick={addRestaurant}>+</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Title level={3}>Gym Locations</Title>
          </Row>
          <Row>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_M}
                onChange={handleGym_x}
                placeholder="x"
                name="x-cordinate"
                value={gym_x}
              />
            </Col>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_M}
                onChange={handleGym_y}
                placeholder="y"
                name="y-cordinate"
                value={gym_y}
              />
            </Col>
            <Col span={1}>
              <Button onClick={addGym}>+</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Title level={3}>Hospital Locations</Title>
          </Row>
          <Row>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_M}
                onChange={handleHospital_x}
                placeholder="x"
                name="x-cordinate"
                value={hospital_x}
              />
            </Col>
            <Col span={2.5}>
              <InputNumber
                min={1}
                max={F_M}
                onChange={handleHospital_y}
                placeholder="y"
                name="y-cordinate"
                value={hospital_y}
              />
            </Col>
            <Col span={1}>
              <Button onClick={addHospital}>+</Button>
            </Col>
          </Row>
          <br />
          <div>
            <br />
            <Row>
              <Col span={7}>
                {contextHolder}
                <Button onClick={check}>Check The Best House</Button>
              </Col>
              <Col span={6}>
                <Button type="primary" onClick={showModal}>
                  Create New Grid
                </Button>
              </Col>
            </Row>
            <br />
            {house_no ? <Title level={3}> House {house_no}</Title> : null}
          </div>
        </Col>

        <Col span={14}>{render_grid()}</Col>
      </Row>
      <Footer />
    </div>
  );
}
