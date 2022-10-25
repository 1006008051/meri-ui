/*
 * @Author: wangyongcun
 * @Date: 2021-08-15 23:56:12
 * @LastEditors: wangyongcun
 * @LastEditTime: 2022-10-12 16:48:55
 * @Description: 头像 Avatar
 */
import { h, computed, defineComponent, ref } from "vue";
import props from "./props";
import fallbackImg from "../../_static/fallback.png";

const Avatar = defineComponent({
  name: "Avatar",
  props,
  emits: ["onError"],
  setup(props, { slots, emit }) {
    const classVars = "m-avatar";
    const hasLoadError = ref(false);
    const { size, radius, color, bgColor, fontSize, fit } = props;
    let src = props.src;
    const styleVars = computed(() => {
      let height: string;
      if (typeof size === "number") {
        height = `${size}`;
      } else {
        height = `var(--size-${size})`;
      }
      return {
        "--border-radius": radius || "100%",
        "--size": height,
        "--color": color,
        "--bgColor": bgColor,
        "--fontSize": fontSize,
        "--fit": fit,
      };
    });
    const handleError = (e: Event): void => {
      hasLoadError.value = true;
      emit("onError", e);
    };
    return () => (
      <span class={classVars} style={styleVars.value as any}>
        {!slots.default && src ? (
          <img
            src={hasLoadError.value ? fallbackImg : src}
            // @ts-ignore
            onError={handleError}
          ></img>
        ) : (
          slots
        )}
      </span>
    );
  },
});

export default Avatar;
