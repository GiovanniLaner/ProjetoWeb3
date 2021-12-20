import { http } from './Api'

export default {

  findAll: () => {
    return http.get('company');
  },

  findById: (company) => {
    return http.get(`company/${company.id}`);
  },

  save: (company) => {

    return http.post('company', company); //payload
  },

  delete: (company) => {
    return http.delete(`company/${company.id}`);
  },

  update: (company) => {

    return http.put('company', company);
  },
}
