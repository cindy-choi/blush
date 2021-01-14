import MUTATIONS from './mutation';
import utils from '@/utils';

const state = {
  primaryColor: '#225667',
  complementaryColor: '#ff9800',
};

const getters = {
  primaryColor: _state => _state.primaryColor,
  complementaryColor: _state => _state.complementaryColor,
};

const mutations = {
  [MUTATIONS.SET_PRIMARY_COLOR]: (_state, color) => {
    _state.primaryColor = color;
    _state.complementaryColor = utils.getComplementaryColor(color);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
//  actions,
};
