import axios from "axios";

export const getBaseURL = () => `https://us-central1-xiasso-dev.cloudfunctions.net/api/`;

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(
  config => {
    config.url = `${getBaseURL()}${config.url}`;
    return config;
  },
  error => Promise.reject(error)
);


export const addHeaders = (headers, newHeaders) => {
  headers = Object.assign(
    headers,
    newHeaders
  );
};

export const removeHeaders = headerList =>
  headerList.forEach(header => delete instance.defaults.headers[header]);

export const removeHeaderAuthorization = () => {
  instance.defaults.headers.Authorization = "";
  return true;
};

export default instance;
