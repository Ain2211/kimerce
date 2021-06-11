<template>
  <div>
    <div class="air__utils__heading" style="margin-bottom:20px;">

      <h5>Tạo / cập nhật đơn hàng</h5>
    </div>
    <div class="row">
      <a-form layout="vertical" :form="Form">
        <div class="col-lg-12 text-right">
          <router-link to="/order">
            <a-button class="btn btn-primary mb-3" type="primary">
              <a-icon type="rollback" />
              Trở lại
            </a-button>
          </router-link>
          <a-button class="btn btn-primary mb-3" type="primary" html-type="button" icon="save" @click="SaveAndFinish">Lưu lại</a-button>
          <a-button class="btn btn-primary mb-3" type="primary" html-type="button" icon="save" @click="Save">Lưu và sửa tiếp</a-button>
          <a-button class="btn btn-danger mb-3" type="danger" html-type="button" icon="save" @click="Reset">Reset thông tin</a-button>
        </div>
        <div class="card overflow-hidden">
          <div class="card-body">
            <div class="row">

              <div class="col-lg-4">
                <a-form-item label=" Giá trị" class="mb-2">
                  <a-input-number style="width: 100%"
                                  v-decorator="['Value', {
                                  rules: [
                                  {
                                    type: 'integer',
                                    message: 'Vui lòng nhập số nguyên!'
                                  },{
                                    required: true,
                                    message: 'Vui lòng nhập Giá trị đơn hàng!'
                                  }]
                                  }]" />
                </a-form-item>
              </div>

              <div class="col-lg-4">
                <a-form-item label="Mã giao dịch" class="mb-2">
                  <a-input-number style="width: 100%"
                                  v-decorator="['Transactionsid', {
                                  rules: [
                                  {
                                    type: 'integer',
                                    message: 'Vui lòng nhập số nguyên!'
                                  },{
                                    required: true,
                                    message: 'Vui lòng nhập Mã giao dịch'
                                  }]
                                  }]" />
                </a-form-item>
              </div>

              <div class="col-lg-8">
                <a-form-item label="Khách Hàng" has-feedback>
                  <a-input v-decorator="['Customerid',{ rules: [{ required: true, message: 'Vui lòng nhập tên Khách Hàng!' }] }]"/>


                </a-form-item>
              </div>

              <div class="col-lg-8">
                <a-form-item label="Miêu tả ngắn" has-feedback>
                  <a-input v-decorator="['ShortDescription',{ rules: [{ required: true, message: 'Vui lòng nhập miêu tả ngắn!' }] }]"/>
                </a-form-item>
              </div>


              <div class="col-lg-8">
                <a-form-item label="User">
                  <!-- <a-select v-decorator="['UserId',{ rules: [{ required: true, message: 'Vui lòng nhập người dùng!' }] }]">

                       <a-select-option v-for="cter in users" :key="cter.value" :value="cter.value">
                       
                       </a-select-option>
                     </a-select>-->
                  <a-input v-decorator="['UserId',{ rules: [{ required: true, message: 'Vui lòng nhập Id người dùng!' }] }]"/>
                </a-form-item>
              </div>

            </div>
          </div>
          
        </div>
      </a-form>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
   import Axios from 'axios';
 
  export default {
    created() {
      Axios.get("https://localhost:44397/orders/Getbyid/" + this.$route.params.id).then(r => {
        this.Model.Value = r.data.value;
        this.Model.Transactionsid = r.data.transactionsid;
        this.Model.Customerid = r.data.customerid;
        this.Model.ShortDescription = r.data.shortDescription;
        this.Model.UserId = r.data.userid;
        this.Model.Id = r.data.id;
      }).then(() => {
        this.CreateForm();
      });
    },
    mounted() {
     
      
    },
    data() {
      return {
        Form: null,
        Model: {
          Value: 0,
          Transactionsid: "",
          Customerid: "",
          ShortDescription: "",
          UserId: ""



        },
      }
    },
    methods: {
      CreateForm() {
        let options = {
          mapPropsToFields: () => {
            return {
              Value: this.$form.createFormField({ value: this.Model.Value, }),
              Transactionsid: this.$form.createFormField({ value: this.Model.Transactionsid, }),
              Customerid: this.$form.createFormField({ value: this.Model.Customerid, }),
              ShortDescription: this.$form.createFormField({ value: this.Model.ShortDescription, }),
              UserId: this.$form.createFormField({ value: this.Model.UserId, }),


              
            };
          }
        }
        this.Form = this.$form.createForm(this, options);
      },
      GetModel() {
        this.Model.Value = this.Form.getFieldValue('Value');
        this.Model.Transactionsid = this.Form.getFieldValue('Transactionsid');
        this.Model.Customerid = this.Form.getFieldValue('Customerid');
        this.Model.ShortDescription = this.Form.getFieldValue('ShortDescription');
        this.Model.UserId = this.Form.getFieldValue('UserId');


      },
      async SaveAndFinish() {
        this.Form.validateFieldsAndScroll((errors, values) => {
          if (!errors) {
            this.GetModel();
            
            Axios.post("https://localhost:44397/orders/createorupdate/", this.Model).then(r => {
              if (r.data.result != 1) {
                this.$message.error(r.data.message);
              }
              else {
                this.$message.success('Lưu dữ liệu thành công', 3);
                this.$router.replace("/order");
              }
            }).catch(error => {
              this.$message.error('Không thể kết nối tới máy chủ', 3);
              console.log(error);
            });
          }
        });
      },
      Save() {
        this.Form.validateFieldsAndScroll((errors, values) => {
          if (!errors) {
            this.GetModel();
            Axios.post("https://localhost:44397/orders/createorupdate/", this.Model).then(r => {
              if (r.data.result != 1) {
                this.$message.error(r.data.message);
              }
              else {
                this.$message.success('Lưu dữ liệu thành công', 3);
              }
            }).catch(error => {
              this.$message.error('Không thể kết nối tới máy chủ', 3);
              console.log(error);
            });
          }
        });
      },
      Reset() {
        Axios.get("https://localhost:44397/orders/getbyid/" + this.$route.params.id).then(r => {
          this.Form.setFieldsValue({
            Value : r.data.value,
        Transactionsid : r.data.transactionsid,
        Customerid : r.data.customerid,
       ShortDescription : r.data.shortDescription,
        UserId : r.data.userId,
        Id : r.data.id,
          })
          this.$message.success('Reset thành công', 3);
        })
      }
    }
  }
</script>
