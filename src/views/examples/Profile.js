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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state) =>
    state.reducer ? (state.reducer.users ? state.reducer.users[0] : "") : ""
  );
  const list = data?.Especialidades;
  useEffect(() => {
    document.body.classList.add("bg-default");

    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);

  if (!data) return null;
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/card.png").default}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between"></div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div
                        style={{ display: data?.IsDoctor ? "block" : "none" }}
                      >
                        <span className="heading">
                          {data?.IsDoctor? data?.Especialidades.length : ""}
                        </span>
                        <span className="description">Especialidades</span>
                      </div>
                      <div
                        style={{ display: data?.IsDoctor ? "block" : "none" }}
                      >
                        <span className="heading">{data?.Calificaion }</span>
                        <span className="description">
                          Calificacion Promedio
                        </span>
                      </div>
                      <div>
                        <span className="heading">{data?.Numero_citas}</span>
                        <span className="description">Numero de citas</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>{data?.Nombre}</h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {data?.Correo}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Telefono - {data?.Telefono}
                  </div>
                  <div style={{ display: data?.IsDoctor ? "block" : "none" }}>
                    {console.log(list)}
                    {"Especialidades : "}
                    (
                    {list.length > 0
                      ? list.map((obj) => {
                          <i className="ni education_hat mr-2" />;
                          return `${obj.Nombre},`;
                        })
                      : ""}
                    )
                  </div>
                  <hr className="my-4" />
                  <p>
                  Nunca te enseñaron cómo hablar con tus gestos, pero si fuiste enseñado a hablar con palabras -Paul Ekman
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mi cuenta</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informacion de usuario
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre de Usuario
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            placeholder="Nombre de Usuario"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Correo
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Telefono
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="315-2345-3223"
                            id="input-first-name"
                            placeholder="315-2345-3223"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Contraseña
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>


                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Acerca de mi</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Acerca de mi</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
