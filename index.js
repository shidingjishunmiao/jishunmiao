// AOS.init();
const app = Vue.createApp({
    data() {
        return {
            about: about_data,
            information: information_data,
            question: question_data,
            is_show: false,
            inputMessage: "",
            robot_message: [
            ],
            feature: feature_data,
            aboutsd: aboutsd_data,
        }
    },
    computed: {
        toggleStyle() {
            return {
                "transform": this.is_show ? "scale(1)" : "scale(0)"
            }
        },
        getMessageLen() {
            return this.robot_message ? true : false
        }

    },
    methods: {
        toggle() {
            this.is_show = !this.is_show
        },
        question_ans(e) {
            this.inputMessage = e.target.innerHTML
            this.send_ans()
        },
        keybord(e) {
            if (e.key == "Enter") this.send_ans()
        },
        send_ans() {
            if (this.inputMessage) {
                let mes = this.inputMessage
                this.robot_message.push({
                    message: mes,
                    root: 'admin'
                })
                this.updata()
                setTimeout(() => {
                    this.robot_ans()
                }, 500);
            }

        },
        robot_ans() {
            let mes = "您好，歡迎來到集順廟明德宮！更多問題請洽宮廟或來電(02-26633398)!"
            this.question.forEach((item, index) => {
                item.keyword.forEach((word) => {
                    if (this.inputMessage.includes(word)) {
                        return mes = this.question[index].ans
                    }
                })
            });
            this.robot_message.push({
                message: mes,
                root: "robot"
            })
            this.inputMessage = ""
            this.updata()
        },
        updata() {
            setTimeout(() => {
                this.$refs.robotDiv.scrollTop = this.$refs.robotDiv.scrollHeight
            },);

        }

    }
}).mount("#app")
