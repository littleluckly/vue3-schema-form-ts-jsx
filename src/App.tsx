import { defineComponent, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  setup() {
    const state = reactive({ number: 0 });
    setInterval(() => {
      state.number += 1;
    }, 1000);
    return () => {
      return (
        <div>
          hello jsx {state.number}
          <HelloWorld msg="a" />
        </div>
      );
    };
  },
});
