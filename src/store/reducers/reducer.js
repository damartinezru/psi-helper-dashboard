import config from "../../config";

// ACTIONS
const GET_ESPECIALIDADES = "psihelp/data/GET_ESPECIALIDADES";
const GET_USER = "psihelp/data/GET_USER";
// REDUCER

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_ESPECIALIDADES:
      return { ...state, especialidades: action.payload };
    case GET_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

// ACTIONS

// export const getEspecialidades = () => dispatch => {
//   fetch(config.uri + config.SERVICES.especialidad)
//     .then(response => response.json())
//     .then(data =>
//       data.result || data.entities
//         ? dispatch({type: GET_ESPECIALIDADES, payload: data.entities})
//         : dispatch({type: GET_ESPECIALIDADES, payload: 'error'}),
//     )
//     .catch(err => {
//       console.log([Especialidades] ${err});
//       dispatch({type: SEARCH, payload: 'error'});
//     });
// };
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
