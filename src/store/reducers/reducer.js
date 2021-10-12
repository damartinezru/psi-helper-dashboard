import config from "../../config";

// ACTIONS
const GET_ESPECIALIDADES = "psihelp/data/GET_ESPECIALIDADES";
const GET_USER = "psihelp/data/GET_USER";
const GET_COSTO = "psihelp/data/GET_COSTO";
const GET_ESP = "psihelp/data/GET_ESP";
const GET_INFO = "psihelp/data/GET_INFO";
const GET_AGENDA = "psihelp/data/GET_AGENDA";
// REDUCER

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_ESPECIALIDADES:
      return { ...state, especialidades: action.payload };
    case GET_USER:
      return { ...state, users: action.payload };
    case GET_COSTO:
      return { ...state, costo: action.payload };
    case GET_ESP:
        return { ...state, esp: action.payload };
    case GET_INFO:
        return { ...state, info: action.payload };
    case GET_AGENDA:
        return { ...state, agenda: action.payload };
    default:
      return state;
  }
}

// ACTIONS

export const getEspecialidades = (filterEsp) => dispatch => {
  fetch(config.uri + config.especialidad+config.filter, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(filterEsp),})
    .then(response => response.json())
    .then(data =>
      data.result || data.entities
        ? dispatch({type: GET_ESPECIALIDADES, payload: data.entities})
        : dispatch({type: GET_ESPECIALIDADES, payload: 'error'}),
    )
    .catch(err => {
      console.log(`[Especialidades] ${err}`);
      dispatch({type: GET_ESPECIALIDADES, payload: 'error'});
    });
};
export const getUsuarios = (filterUser) => (dispatch) => {
  fetch(config.uri + config.pathUsuario + config.filter, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(filterUser),
  })
    .then((response) => response.json())
    .then((data) =>
      data.result || data.entities
        ? dispatch({ type: GET_USER, payload: data.entities })
        : dispatch({ type: GET_USER, payload: "error" })
    )
    .catch((err) => {
      console.log(`[Users] ${err}`);
      dispatch({ type: GET_USER, payload: "error" });
    });
};
export const getCostoCitas = () => (dispatch) => {
  fetch(config.uri + config.pathUsuario + config.filter, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({IsDoctor:true}),
  })
    .then((response) => response.json())
    .then((data) =>
      data.result || data.entities
        ? dispatch({ type: GET_COSTO, payload: data.entities.map((obj) => parseInt(obj.Costo.toString().slice(0,2)))})
        : dispatch({ type: GET_COSTO, payload: "error" })
    )
    .catch((err) => {
      console.log(`[Users] ${err}`);
      dispatch({ type: GET_USER, payload: "error" });
    });
};

export const getEsp = () => (dispatch) => {
  fetch(config.uri + config.pathUsuario + config.filter, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({IsDoctor:true}),
  })
    .then((response) => response.json())
    .then((data) =>
      data.result || data.entities
        ? dispatch({ type: GET_ESP, payload: data.entities.map((obj) => obj.Especialidades)})
        : dispatch({ type: GET_ESP, payload: "error" })
    )
    .catch((err) => {
      console.log(`[Users] ${err}`);
      dispatch({ type: GET_USER, payload: "error" });
    });
};

export const getInfo = () => (dispatch) => {
  fetch(config.uri + config.pathUsuario + config.filter, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({IsDoctor:true}),
  })
    .then((response) => response.json())
    .then((data) =>
      data.result || data.entities
        ? dispatch({ type: GET_INFO, payload: data.entities})
        : dispatch({ type: GET_INFO, payload: "error" })
    )
    .catch((err) => {
      console.log(`[Users] ${err}`);
      dispatch({ type: GET_INFO, payload: "error" });
    });
};

export const getCitas = () => (dispatch) => {
  fetch(config.uri + config.agenda, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) =>
      data.result || data.entities
        ? dispatch({ type: GET_AGENDA, payload: data.entities})
        : dispatch({ type: GET_AGENDA, payload: "error" })
    )
    .catch((err) => {
      console.log(`[Users] ${err}`);
      dispatch({ type: GET_AGENDA, payload: "error" });
    });
};