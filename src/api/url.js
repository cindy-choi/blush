// default values
const DEV_A3S_BASE = process.env.VUE_APP_A3S_BASE_DEV;
const QA_A3S_BASE = process.env.VUE_APP_QA_A3S_BASE_QA;
const DEV_A3S_PORT = process.env.VUE_APP_A3S_PORT_DEV;
const QA_A3S_PORT = process.env.VUE_APP_A3S_PORT_QA;

export default {
  A3S: {
    DEV: `${DEV_A3S_BASE}:${DEV_A3S_PORT}`,
    QA: `${QA_A3S_BASE}:${QA_A3S_PORT}`,
  },
};
