// AOS.init();
const Talisman_app = Vue.createApp({
    data() {
        return {
            Talisman_datas: Talisman_data,
            Talisman_choose_datas: Talisman_choose_data,
            Type_talismans: Type_talisman,
            draw_lot_title: "",
            result: "",
            draw_random: ["吉", "大吉", "上吉", "中平", "上平", "平"],
            draw_show: false,
        }
    },
    methods: {
        animation_delay(index) {
            return `animation-delay:calc(-${0.5}s + (${index}s / 2))`
        },
        draw_lot(title) {
            this.draw_lot_title = title
            var num = Math.floor(Math.random() * 7)
            this.result = this.draw_random[num]
            this.draw_show = true
        }
    }
}).mount("#Talisman_app")