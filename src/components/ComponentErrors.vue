<template>
  <span v-show="errors.length > 0" v-tooltip="tooltipObj" class="has-text-danger has-text-weight-normal is-italic is-size-6 pl-8">
    <i class="fa fa-warning"></i>
    Error in {{ errors.length }} field{{ errors.length > 1 ? 's' : '' }}
  </span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentErrors',
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    tooltipObj() {
      return {
        content: this.htmlContent,
        html: true,
      };
    },
    htmlContent() {
      let str = "<ul class='errors-wrapper'>";
      this.errors.forEach((error) => {
        str += `<li class='error-element'><span class="pr-5"><i class="fa fa-warning"></i></span>${error}</li>`;
      });
      str += '</ul>';
      return str;
    },
  },
});
</script>
