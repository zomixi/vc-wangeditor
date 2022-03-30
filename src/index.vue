<template>
  <div id="editor" />
</template>

<script>
import Wangeditor from "wangeditor";

export default {
  name: "Vue2WangEditor",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 300,
    },
    placeholder: {
      type: String,
      default: "",
    },
    zIndex: {
      type: Number,
      default: 500,
    },
    showFullScreen: {
      type: Boolean,
      default: true,
    },
    showMenuTooltips: {
      type: Boolean,
      default: true,
    },
    menuTooltipPosition: {
      type: String,
      default: "up",
    },
    menus: {
      type: Array,
      default: undefined,
    },
    colors: {
      type: Array,
      default: undefined,
    },
    fontNames: {
      type: Array,
      default: undefined,
    },
    fontSizes: {
      type: Array,
      default: undefined,
    },
    lineHeights: {
      type: Array,
      default: undefined,
    },
    emotions: {
      type: Array,
      default: undefined,
    },
    languageType: {
      type: Array,
      default: undefined,
    },
    highlight: {
      type: Object,
      default: undefined,
    },
    onfocus: {
      type: Function,
      default: undefined,
    },
    onblur: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      editor: null,
      editorValue: null,
    };
  },
  watch: {
    disabled(value) {
      if (value) {
        this.editor.disable();
      } else {
        this.editor.enable();
      }
    },
    value(value) {
      if (value !== this.editorValue) {
        this.writeValue(value);
      }
    },
  },
  mounted() {
    this.initEditor();
  },
  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy();
    this.editor = null;
  },
  methods: {
    /**
     * 初始化编辑器
     */
    initEditor() {
      const editor = new Wangeditor(this.$el);

      // config
      for (const [key, value] of Object.entries(this.$props)) {
        if (value !== undefined) {
          editor.config[key] = value;
        }
      }
      editor.highlight = this.highlight;
      editor.create();
      this.editor = editor;

      if (this.disabled) {
        editor.disable();
      }

      if (this.value) {
        this.writeValue(this.value);
      }

      // setTimeout为了初始化写值时不触发onchange
      setTimeout(() => {
        editor.config.onchange = (html) => {
          this.editorValue = html;
          this.$emit("change", html);
        };
      }, 200);
    },

    /**
     * 写入值
     */
    writeValue(value) {
      this.editor?.txt.html(value || "");
    },
  },
};
</script>
