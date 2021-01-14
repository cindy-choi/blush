const TokenManager = () => {
  let token = null;

  const set = (_token) => {
    token = _token;
    localStorage.setItem('token', _token);
  };

  const load = () => {
    token = localStorage.getItem('token');
  };

  const get = () => {
    return token;
  };

  return {
    set,
    load,
    get,
  };
};

export default TokenManager();
