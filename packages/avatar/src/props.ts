/*
 * @Author: wangyongcun
 * @Date: 2021-12-02 10:16:12
 * @LastEditors: wangyongcun
 * @LastEditTime: 2022-09-19 15:43:59
 * @Description: AvatarProps
 */
import { PropType } from 'vue';
export default {
    src: String,
    radius: String,
    fontSize: {
        type: [String, Number],
        default: 14
    },
    color: {
        type: String,
        default: '#ffffff'
    },
    bgColor: {
        type: String,
        default: '#eff0f1'
    },
    size: {
        type: [String, Number] as PropType<number | 'small' | 'medium' | 'large'>,
        default: 'medium'
    },
    fit: {
        type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
        default: 'fill'
    },
    onError: Function as PropType<(e: Event) => void>
}