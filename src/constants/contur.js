class Contur {
  static init = () => {
    const config = {
      "API": "https://pokeapi.co/api/v2",
      "AUTH": "https://pokeapi.co/api/v2"
    };
    return Promise.resolve(config);
  };

  static set = (config) => {
    this.API = config.API;
    this.AUTH = config.AUTH;
  };

  static get = () => ({
    API: this.API,
    AUTH: this.AUTH
  });
}

export default Contur;
