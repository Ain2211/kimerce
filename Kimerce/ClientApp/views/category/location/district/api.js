import BaseApi from '../../../baseApi';
export default {
  list: BaseApi.District + 'districts/search/',
  getChildren: BaseApi.District + 'districts/getchildren/',
  createOrUpdate: BaseApi.District + 'districts/createorupdate/',
  delete: BaseApi.District + 'districts/delete/',
  getModel: BaseApi.District + 'districts/getbyid/',
  exportToXlsx: BaseApi.District + 'districts/exporttoxlsx/',
};
