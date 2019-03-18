import axios from "axios";
import Contur from "../constants/contur";

export default {
  getPokemon: (id) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(`${ENDPOINT}/pokemon/${id}`);
  },
  getAllPokemonName: () => {
    const ENDPOINT = Contur.get().API;
    return axios.get(`${ENDPOINT}/pokemon?limit=-1`);
  },
  getType: (id) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(`${ENDPOINT}/type/${id}`);
  },
  getTypeList: () => {
    const ENDPOINT = Contur.get().API;
    return axios.get(`${ENDPOINT}/type`);
  }
};
