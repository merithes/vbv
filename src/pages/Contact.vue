<template>
  <div class="container q-pt-xl q-mt-xl">
    <div class="row q-col-gutter-lg">
      <div class="col-xs-12">
        <div class="q-px-lg">
          <div class="vbv-longtext text-body1 q-mb-lg text-center">
            <p>
              Wish to contact me for any reason? Just send me a message!
            </p>
          </div>
          <q-form
            class="row q-col-gutter-md"
            @submit="sendMessage"
          >
            <div class="col-xs-12 col-sm-6">
              <q-input type="text" name="subject" v-model="formSubject" label="Subject" filled square dense/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input type="email" name="email" v-model="formEmail" label="Email" filled square dense required/>
            </div>
            <div class="col-xs-12">
              <q-input type="textarea" name="message" v-model="formMessageContent" label="Your message" class="textarea-no-resize" filled square dense required/>
            </div>
            <div class="col-xs-12 text-center">
              <q-btn
                label="send"
                class="no-border-radius q-px-lg"
                color="primary"
                filled
                :loading="submitting"
                type="submit"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'Contact',
    data() {
      return {
        formEmail:            "",
        formSubject:          "",
        formMessageContent:   "",
        submitting: false
      }
    },
    methods: {
      sendMessage() {
        this.submitting = true
        let email = this.formEmail
        let subject = this.formSubject
        let content = this.formMessageContent

        this.$apollo.mutate({
          mutation: gql`mutation ($email: String! $subject: String! $content: String! ){
            createContact(
              input: {
                data: {email: $email subject: $subject content: $content}
              }
            ){
              contact { id }
            }
          }`,
          variables: {
            email :   email,
            subject : subject,
            content : content
          }
        }).then((data) => {
          this.formEmail = ""
          this.formSubject = ""
          this.formMessageContent = ""
          this.$q.notify({
            type: 'positive',
            message:  "Message sent!",
            icon: "send"
          })
        }).catch((err) => {
          this.$q.notify({
            type: 'negative',
            multiLine: true,
            message:  `Error : ${err.message}`,
            icon: "cancel_schedule_send"
          })
        }).finally(() => {
          this.submitting = false
        })
      }
    },
    computed: {
    }
  }
</script>
