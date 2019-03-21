import Vue from 'vue'
import moment from 'moment';
import { formats } from '@/configs'

const gap = 1000;

Vue.component('timer', {
    name: 'timer',
    data: function () {
        return {
            now: moment()
        }
    },
    render: function (createElement) {
        return createElement('div',
            {
                class: 'timer'
            },
            [
                createElement('p', { class:'title' }, '현재시각'),
                createElement('p',
                {
                    props: {
                        now: this.now
                    }
                },
                moment(this.now).format(formats.timeFormat.FULLDATETIME)),
            ]
        )
    },
    mounted: function () {
        this.onTimer()
    },
    beforeDestroy () {
       clearInterval(this.interval)
    },
    methods: {
        onTimer: function () {
            this.interval = setInterval(function(){
                this.now = moment(this.now).add(gap, 'ms')
            }.bind(this), gap);
        }
    }
})
