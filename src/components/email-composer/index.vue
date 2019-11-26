<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex xs12 md8 mx-auto>
        <main class="email-composer">
          <div class="email-composer__header">
            <h1 class="email-composer__title headline font-weight-light">Send E-mail</h1>
          </div>
          <v-form
            ref="form"
            @submit.prevent="handleSubmit"
            v-model="valid"
            method="post" class="email-composer__form body-1 pa-10">
            <div>
              <input-component
                ref=""
                @returnInput="setInputData($event, 'to')"
                :inputLabel="'To'"
                :setRule="emailRules"
                :isRequired="true"
              />

              <input-component
                @returnInput="setInputData($event, 'cc')"
                :inputLabel="'CC'"
                :setRule="emailRules"
                :isRequired="false"
              />

              <input-component
                @returnInput="setInputData($event, 'bcc')"
                :inputLabel="'BCC'"
                :setRule="emailRules"
                :isRequired="false"
              />

              <input-component
                @returnInput="setInputData($event, 'subject')"
                :inputType="'text'"
                :isCounter="100"
                :inputLabel="'Subject'"
                :isRequired="true"
                :requiredValid="'required|max:100'"
              />
            </div>

            <v-textarea
              outlined
              label="Message"
              v-model="composerFields.message">
            </v-textarea>

            <!--  Attachments -->
            <div class="image-uploader" v-show="isUpload">
              <p>Attached files</p>
              <template
                v-for="(image, index) in uploadedFiles">
                <v-hover  v-slot:default="{ hover }" :key="index">
                  <v-card
                    class="d-inline-flex align-baseline mr-5"
                  >
                    <v-img
                      :src="image"
                      :maxWidth="'7rem'">
                    </v-img>
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="#000">
                        <v-btn
                          fab
                          :setColor="'#939598'"
                          @click="deleteImage(index)"
                        ><i class="fas fa-trash"></i></v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </v-hover>
              </template>
            </div>

            <!-- Buttons Bar -->
            <div class="email-composer__buttons-wrapper mt-5">
              <div class="email-composer__uploader">

                <fileUploader
                  @onUpload="setUpload">
                  <span class="email-composer__uploader--icon py-2">
                    <i class="fas fa-paperclip">
                    </i>
                  </span>

                </fileUploader>
              </div>

              <button-component
                :isDisabled="setDisabled"
                setColor="#00bef0"
                setHeight="3rem"
                minWidth="7.5rem"
                buttonType="Submit"
                buttonText="Send">
                <span class="mr-2">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button-component>
            </div>
          </v-form>
        </main>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import fileUploader from '@/components/email-composer/file-uploader';

export default {
  name: 'EmailComposer',
  components: {
    fileUploader,
  },
  data() {
    return {
      uploadedFiles: [],
      overlay: false,
      valid: false,
      mainEmailRules: [
        v => this.validateEmail(v) || 'Please enter a valid email',
      ],
      emailRules: [
        v => this.setValidation(v) || 'Please enter a valid email',
      ],
      composerFields: {
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        message: '',
        attachmens: [],
      },
    };
  },
  computed: {
    setDisabled() {
      const {
        to,
        bcc,
        cc,
        subject,
        message,
      } = this.composerFields;
      const isEmails = !!(to || bcc || cc);
      const isDisabled = !!(isEmails && subject && message && this.valid);

      return !isDisabled;
    },
    isUpload() {
      return this.uploadedFiles.length >= 1;
    },
  },
  methods: {
    ...mapMutations(['SET_COMPOSER_FIELDS']),
    setValidation(emails) {
      return emails === ''
        ? true
        : this.validateEmail(emails);
    },
    validateEmail(emails) {
      if (emails) {
        const emailsArray = emails.split(', ');
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = emailsArray.map(email => emailRegex.test(email));
        if (emailTest.indexOf(false) === -1) return true;
      }
      return false;
    },
    setInputData(data, field) {
      this.composerFields[field] = data;
    },
    deleteImage(ImgIndex) {
      const imageToDelete = this.uploadedFiles[ImgIndex];
      const filteredImages = this.uploadedFiles.filter(item => item !== imageToDelete);
      this.uploadedFiles = [...filteredImages];
    },
    setUpload(event) {
      const fileList = event.target.files || event.dataTransfers.files;

      Object.keys(fileList).forEach(key => {
        const reader = new FileReader();

        reader.onload = () => this.uploadedFiles.push(reader.result);
        reader.readAsDataURL(fileList[key]);
      });
    },
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.composerFields.attachmens = this.uploadedFiles;
        this.SET_COMPOSER_FIELDS(this.composerFields);
        this.$router.push('/confirmation');
      }
    },
  },
};
</script>

<style lang="scss">

.email-composer {
  position: relative;
  border-radius: 7px;
  background-color: #fff;

  &__form {
    padding: calcRem(20);
  }

  &__header {
    background-color: #094358;
    border-radius: 7px 7px 0 0;
    padding: calcRem(20);
  }

  &__title  {
    color: #fff;
  }

  &__buttons-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__uploader {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: fit-content;
    border-radius: 50%;
    border: 1px solid #e8e8e8;
    height: 40px;
    width: 40px;
    cursor: pointer;

    &--icon {
    display: inline-block;
    color: #a5a7aa;
    transform: rotate(-45deg);
    cursor: pointer;
    }
  }
}
</style>
