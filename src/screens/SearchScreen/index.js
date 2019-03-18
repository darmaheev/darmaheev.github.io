import React, { Component } from "react";
import {observer} from "mobx-react";
import {decorate, observable, action, computed} from "mobx";
import { fromPromise } from "mobx-utils";
import debounce from "lodash/debounce";
import SearchList from "../../containers/SearchList";
import Topbar from "../../containers/Topbar";
import Footer from "../../containers/Footer";
import Sidebar from "../../containers/Sidebar";
import SearchHeader from "../../containers/SearchHeader";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Content from "../../components/Content";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";
import SearchListSpinner from "../../components/SearchListSpinner";
import Api from "../../api";
import {PROMISE_VALUE} from "../../constants/common";

const SearchScreen = observer(class SearchScreen extends Component {

  fetchedTypeList = {};

  get typeList() {
    if (this.fetchedTypeList.state === PROMISE_VALUE.FULFILLED) {
      let initialObject = {};
      return this.fetchedTypeList.value.reduce((typeListObject, value) => ({...typeListObject, [value.data.name]: value.data.pokemon.map(p => p.pokemon.name)}), initialObject);
    } else {
      return [];
    }
  }

  fetchTypeList = (results) => {
    const promises = results.map(type => Api.search.getType(type.name));
    this.fetchedTypeList = fromPromise(Promise.all(promises));
  };

  fetchedTypeNameList = {};

  get typeNameList() {
    if (this.fetchedTypeNameList.state === PROMISE_VALUE.FULFILLED) {
      return this.fetchedTypeNameList.value.data.results;
    } else {
      return [];
    }
  }

  fetchTypeNameList() {
    this.fetchedTypeNameList = fromPromise(Api.search.getTypeList());
    this.fetchedTypeNameList.then(response => {
      this.fetchTypeList(response.data.results);
    });
  }

  fetchedPokemonList = {};

  get pokemonList() {
    if (this.fetchedPokemonList.state === PROMISE_VALUE.FULFILLED) {
      return this.fetchedPokemonList.value.map(value => value.data);
    } else {
      return [];
    }
  }

  fetchPokemonList() {
    this.fetchedPokemonList = fromPromise(this.getPokemonListPromises());
  }

  getPokemonListPromises = () => {
    const promises = [];
    for (let i = this.page.start; i < Math.min((this.page.start + this.page.pageSize), this.page.total + 1); i = i + 1) {
      promises.push(Api.search.getPokemon(this.pokemonNameList[i-1]));
    }
    return Promise.all(promises);
  }

  fetchedPokemonNameList = {};

  get pokemonNameList() {
    if (this.fetchedPokemonNameList.state === PROMISE_VALUE.FULFILLED) {
      let pokemonNameList = this.fetchedPokemonNameList.value.data.results.map(value => value.name);
      if (this.filters.length > 0) {
        let initialPokemonArray = [];
        let pokemonTypesNameList = this.filters.reduce((pokemonList, type) => ([...pokemonList, ...this.typeList[type]]), initialPokemonArray);
        pokemonNameList = pokemonNameList.filter(pokemon => pokemonTypesNameList.findIndex(pok => pok === pokemon) !== -1);
      }
      if (this.query !== "") {
        return pokemonNameList.filter(name => name.indexOf(this.query.toLowerCase()) !== -1);
      } else {
        return pokemonNameList;
      }
    } else {
      return [];
    }
  }

  fetchPokemonNameList() {
    this.fetchedPokemonNameList = fromPromise(Api.search.getAllPokemonName());
    this.fetchedPokemonNameList.then(() => this.fetchPokemonList());
  }

  fetchedPage = {
    start: 1,
    pageSize: 20,
    total: 150
  };

  get page() {
    if (this.fetchedPokemonNameList.state === PROMISE_VALUE.FULFILLED) {
      return {...this.fetchedPage, total: this.pokemonNameList.length};
    } else {
      return this.fetchedPage;
    }
  }

  changePage = (newPage) => {
    this.fetchedPage = newPage;
    this.fetchPokemonList();
  };

  query = "";

  handleQueryChange = (value) => {
    this.query = value;
    this.changePage({...this.fetchedPage, start: 1});
    this.fetchPokemonList();
  };

  handleQueryChangeDebounce = debounce(this.handleQueryChange, 500);

  filters = [];

  handleFiltersChange = (filters) => {
    this.filters = [...filters];
    this.changePage({...this.fetchedPage, start: 1});
    this.fetchPokemonList();
  };

  componentWillMount() {
    this.fetchPokemonNameList();
    this.fetchTypeNameList();
  }

  render() {
    return (
      <Screen>
        <Topbar />
        <Content>
          <Sidebar />
          <Main>
            <ScreenName>Pokémon Search</ScreenName>
            <MainHeader>
              <SearchHeader
                {...this.props}
                typeList={this.typeNameList}
                pokemonNameList={this.pokemonNameList}
                handleQueryChange={this.handleQueryChangeDebounce}
                handleFiltersChange={this.handleFiltersChange}
              />
            </MainHeader>

            {this.fetchedPokemonList.state === PROMISE_VALUE.PENDING ? (
              <SearchListSpinner />
            ) : (
              <SearchList {...this.props} pokemonList={this.pokemonList} page={this.page} changePage={this.changePage}/>
            )}
          </Main>
        </Content>
        <Footer/>
      </Screen>
    );
  }
});

decorate(SearchScreen, {
  fetchedTypeList: observable,
  fetchTypeList: action,
  typeList: computed,
  fetchedTypeNameList: observable,
  fetchTypeNameList: action,
  typeNameList: computed,
  fetchedPokemonList: observable,
  fetchPokemonList: action,
  pokemonList: computed,
  fetchedPage: observable,
  changePage: action,
  page: computed,
  fetchedPokemonNameList: observable,
  fetchPokemonNameList: action,
  pokemonNameList: computed,
  query: observable,
  handleQueryChange: action,
  filters: observable,
  handleFiltersChange: action,
});

export default SearchScreen;
