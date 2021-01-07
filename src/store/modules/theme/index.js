import MUTATIONS from './mutation';

const state = {
  primaryColor: '#225667',
};

const getters = {
  primaryColor: _state => _state.primaryColor,
};

const mutations = {
  [MUTATIONS.SET_PRIMARY_COLOR]: (_state, color) => {
    _state.primaryColor = color;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
//  actions,
};
