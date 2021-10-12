/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCostoCitas } from "store/reducers/reducer";
import { getEsp } from "store/reducers/reducer";
import { getCitas } from "store/reducers/reducer";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const data = useSelector((state) => state.reducer.costo);
  const data2 = useSelector((state) => state.reducer.esp);
  const data3 = useSelector((state) => state.reducer.agenda);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [famCount, setFamCount] = useState(0);
  const [psiCount, setPsiCount] = useState(0);
  const [pareCount, setPareCount] = useState(0);
  const [countData, setCountData] = useState([]);
  const [agendaData, setAgendaData] = useState([]);

  const dispatch = useDispatch();

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  const count = () => {
    if (data2) {
      const datalist = [...data2];
      let yyy = datalist.map((obj) => obj.map((ob) => ob.Nombre));
      let listaFamiliar = yyy.map((obj) => obj.filter((x) => x === "Familiar"));
      const f = listaFamiliar.filter((lt, i) => lt[0] === "Familiar");
      setFamCount(f.length);
      let listaPsi = yyy.map((obj) => obj.filter((x) => x === "Pareja"));
      const pp = listaPsi.filter((lt, i) => lt[0] === "Pareja");
      setPsiCount(pp.length);
      let listaPareja = yyy.map((obj) =>
        obj.filter((x) => x === "Psiquiatria")
      );
      const ppp = listaPareja.filter((lt, i) => lt[0] === "Psiquiatria");
      setPareCount(ppp.length);
      setCountData([famCount, psiCount, pareCount]);
    }
  };
  const tablas = () => {
    if (data3) {
      const agend = [...data3];
      setAgendaData(agend);
    }
  };
  useEffect(() => {
    dispatch(getEsp());
    dispatch(getCitas());
    dispatch(getCostoCitas());
    count();
  }, [data2]);
  useEffect(() => {
    tablas();
  }, [data3]);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Vista Rapida
                    </h6>
                    <h2 className="text-white mb-0">Costo de citas</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Mensual</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <div style={{ display: "none" }}>
                    {(chartExample1.datas = data)}
                  </div>
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Top Especialidadess
                    </h6>
                    <h2 className="mb-0">Total Especialidades</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <div style={{ display: "none" }}>
                    {(chartExample2.data.datasets[0].data = countData)}
                  </div>
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Agendamiento de citas</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Doctor</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Finalizada</th>
                  </tr>
                </thead>
                <tbody>
                  {agendaData.map((obj) => (
                    <tr>
                      <td>{obj.Id_doctor.Nombre}</td>
                      <td>{obj.Fecha}</td>
                      <td>{obj.Id_usuario.Nombre}</td>
                      <td>{obj.Finalizada? "Si": "No"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
