// default values
const DEV_A3S_BASE = process.env.VUE_APP_A3S_BASE_DEV;
const QA_A3S_BASE = process.env.VUE_APP_A3S_BASE_QA;

export default {
  A3S: {
    DEV: `${DEV_A3S_BASE}`,
    QA: `${QA_A3S_BASE}`,
  },
};
