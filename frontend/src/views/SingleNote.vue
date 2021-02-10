<template>
  <div class="note">
    <h1>{{ note.title }} <span>by {{ note.author }}</span></h1>
    <p>
      {{ note.text }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'SingleNote',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      note: {}
    }
  },
  async created () {
    const response = await fetch(`${process.env.VUE_APP_API}/notes/${this.id}`)
    this.note = (await response.json())[0]
  }
}
</script>
<style lang="scss" scoped>
  .note {
    text-align: center;
    padding: 10px;
    width: 1024px;
    margin: 30px auto 0;
    padding-top: 25px;
    background: #ffffff;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    h1 {
      margin: 0;
      span {
        font-size: 20px;
      }
    }
  }
</style>
