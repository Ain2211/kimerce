import BaseApi from '../../../baseApi';
export default {
  list: BaseApi.Ward + 'wards/search/',
  getModel: BaseApi.Ward + 'wards/getbyid/',
  createOrUpdate: BaseApi.Ward + 'wards/createorupdate/',
  delete: BaseApi.Ward + 'wards/delete/',
  exportToXlsx: BaseApi.Ward + 'wards/exporttoxlsx/',
};
