<template>
  <vue-select
      appendToBody
      class="ui-select"
      :class="{ 'ui-select_disabled': disabled }"
      :clearable="true"
      :disabled="disabled"
      :label="labelField"
      :options="options"
      :placeholder="placeholder"
      :searchable="searchable"
      :model-value="selectedValue"
      @update:modelValue="onChange"
  />
</template>

<script>
import VueSelect from "vue-select";

export default {
  name: "SelectInput",
  components: {
    VueSelect,
  },
  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    labelField: {
      type: String,
      default: "name",
    },
    valueField: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [Number, String, Object],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    searchable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectedValue() {
      if (!this.valueField) {
        return this.modelValue;
      }

      return (
          this.options.find(
              (item) => item[this.valueField] === this.modelValue
          ) || null
      );
    },
  },
  methods: {
    onChange(value) {
      this.$emit(
          "update:modelValue",
          this.valueField ? value[this.valueField] : value
      );
    },
  },
};
</script>
