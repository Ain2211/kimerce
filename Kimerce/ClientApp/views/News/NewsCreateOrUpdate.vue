<template>
  <div>
    <div class="air__utils__heading" style="margin-bottom:20px;">

      <h5>Tạo / cập nhật Blog</h5>
      <router-link :to="{ name:'News'}" class="btn btn-primary mb-3" type="primary">
        <a-icon type="rollback" />
        Quay lại
      </router-link>
    </div>
    <div class="row">
      <a-tabs defaultActiveKey="1">
        <a-tab-pane tab="Thông tin blog" key="1">
          <a-form layout="vertical" :form="FrmNews">
            <div class="col-lg-12 text-right">
              <a-button class="btn btn-primary mb-3" type="primary" html-type="button" icon="save" @click="SaveAndFinish">Lưu lại</a-button>
              <a-button class="btn btn-primary mb-3" type="primary" html-type="button" icon="save" @click="Save">Lưu và sửa tiếp</a-button>
              <a-button class="btn btn-danger mb-3" type="danger" html-type="button" icon="save" @click="Reset">Reset thông tin</a-button>
            </div>
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="row mb-4">
                  <div class="col-lg-12">

                  </div>

                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <a-form-item label="Chủ đề" class="mb-2">
                      <a-input v-decorator="['title', { rules: [{ required: true, message: 'Vui lòng tạo chủ đề của blog!' }] }]" />
                    </a-form-item>
                    <a-form-item label="Trạng thái">
                    </a-form-item>
                  </div>
                  <a-form-item label="Date"
                               :label-col="labelCol"
                               :wrapper-col="wrapperCol"
                               style="margin-bottom:0;">
                    <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
                      <a-date-picker v-model="Model.StartDate" style="width: 100%" />
                    </a-form-item>
                    <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">-</span>
                    <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
                      <a-date-picker v-model="Model.EndDate" style="width: 100%" />
                    </a-form-item>
                  </a-form-item>
                  <div class="col-lg-8">
                    <a-form-item label="Mô tả ngắn" class="mb-2">
                      <!--<a-input v-decorator="['shortdescription', { rules: [{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }] }]" />-->
                      <a-textarea placeholder="Mô tả ngắn"
                                  v-decorator="['ShortDescription', { rules: [{ required: true, message: 'Vui lòng nhập mô tả của blog!' }] }]"
                                  :autosize="{ minRows: 3, maxRows: 6 }" />
                    </a-form-item>
                    <a-form-item label="Nội dung đầy đủ">
                      <ckeditor :editor="editor" v-model="Model.Description" :config="editorConfig"></ckeditor>
                    </a-form-item>

                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">

                  </div>
                </div>
              </div>
            </div>
          </a-form>
        </a-tab-pane>
        <!--<a-tab-pane v-if="$route.params.id!=0" tab="Danh sách ảnh" key="2">
          <ProductImage></ProductImage>
        </a-tab-pane>-->
      </a-tabs>
    </div>
  </div>
  <!--<h6 class="mb-3 text-uppercase">
    <strong>Sản phẩm liên quan</strong>
  </h6>-->
</template>
<script>
  import CkEditor from '@ckeditor/ckeditor5-build-classic';
  import Axios from 'axios';


  export default {
    created() {
      Axios.get('https://localhost:44397/News/GetById/' + this.$route.params.id).then(r => {
        this.Model.title = r.data.title;
        this.Model.ShortDescription = r.data.shortDescription;
        this.Model.Description = r.data.description;
        this.Model.StartDate = r.data.startDate;
        this.Model.EndDate = r.data.endDate;
        this.Model.Id = this.$route.params.id;
      }).then(() => {
        this.CreateForm();
      });
    },
    mounted() {

    },
    data() {
      return {
        FrmNews: null,
        Model: {
          title: "",
          ShortDescription: "",
          Description: "",
          Status: 1,
          StartDate: "",
          EndDate: "",
          Id: 0,
        },
        editor: CkEditor,
        editorConfig: {
        },
        tmpid : 0,
      }
    },
    methods: {
      CreateForm() {
        let options = {
          mapPropsToFields: () => {
            return {
              title: this.$form.createFormField({ value: this.Model.title }),
              ShortDescription: this.$form.createFormField({ value: this.Model.ShortDescription }),
            };
          }
        }
        this.FrmNews = this.$form.createForm(this, options);
      },
      GetModel() {
        this.Model.title = this.FrmNews.getFieldValue('title');
        this.Model.shortDescription = this.FrmNews.getFieldValue('ShortDescription');
        this.Model.Id = this.$route.params.id;
      },
      async SaveAndFinish() {
        console.log(this.Model);
        this.FrmNews.validateFieldsAndScroll((errors, values) => {
          if (!errors) {
            this.GetModel();
            Axios.post('https://localhost:44397/News/CreateOrUpdate/', this.Model).then(r => {
              if (r.data.result != 1) {
                this.$message.error(r.data.message);
              }
              else {
                this.$message.success('Lưu dữ liệu thành công', 3);
                this.$router.replace("/News");
              }
            }).catch(error => {
              this.$message.error('Không thể kết nối tới máy chủ', 3);
              console.log(error);
            });
          }
        });
      },
      Save() {
        this.FrmNews.validateFieldsAndScroll((errors, values) => {
          if (!errors) {
            this.GetModel();
            Axios.post('https://localhost:44397/News/CreateOrUpdate/', this.Model).then(r => {
              if (r.data.result != 1) {
                this.$message.error(r.data.message);
              }
              else {
                this.$message.success('Lưu dữ liệu thành công!', 3);
                this.$router.replace("/NewsCreateOrUpdate/" + r.data.id);
                console.log(r.data);
              }
            }).catch(error => {
              this.$message.error('Đã xảy ra lỗi!', 3);
              console.log(error);
            });
          }
        });
      },
      Reset() {
        Axios.get('https://localhost:44397/News/GetById/' + this.$route.params.id).then(r => {
          this.FrmNews.setFieldsValue({
            title: r.data.title,
            ShortDescription: r.data.shortDescription,  
          })
          this.$message.success('Reset thành công', 3);
        })
      },
      OnChange(e) {
       
      }
    },
    components: {
     
    }
  }
</script>
