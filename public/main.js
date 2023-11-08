// Create Countdown
var Countdown = {

    // Backbone-like structure
    $el: $('.countdown'),

    // Params
    countdown_interval: null,
    total_seconds: 0,
    target_date: new Date("2024-01-15 00:00:00").getTime(), // Target date: January 15, 2024

    // Initialize the countdown
    init: function () {

        // DOM
        this.$ = {
            hours: this.$el.find('.bloc-time.hours .figure'),
            minutes: this.$el.find('.bloc-time.min .figure'),
            seconds: this.$el.find('.bloc-time.sec .figure')
        };

        // Init countdown values
        this.values = {
            hours: this.$.hours.parent().attr('data-init-value'),
            minutes: this.$.minutes.parent().attr('data-init-value'),
            seconds: this.$.seconds.parent().attr('data-init-value'),
        };

        // Initialize total seconds
        // this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;
        this.total_seconds = Math.floor((this.target_date - new Date().getTime()) / 1000);
        this.updateCountdown();

        // Animate countdown to the end
        this.count();
    }, updateTimeComponents: function (hours, minutes, seconds) {

        this.values = {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    },
    updateCountdown: function () {

        var current_time = new Date().getTime();
        var seconds_remaining = Math.max(Math.floor((this.target_date - current_time) / 1000), 0);

        // Lấy giờ, phút và giây còn lại
        var hours_remaining = Math.floor((seconds_remaining % (24 * 3600) / 3600));
        var minutes_remaining = Math.floor((seconds_remaining % 3600) / 60);
        var seconds = seconds_remaining % 60;

        // Cập nhật DOM với giờ, phút và giây còn lại
        this.updateTimeComponents(hours_remaining, minutes_remaining, seconds);

        if (seconds_remaining <= 0) {
            clearInterval(this.countdown_interval);
        }
    },
    count: function () {

        var that = this,
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1 = this.$.minutes.eq(0),
            $min_2 = this.$.minutes.eq(1),
            $sec_1 = this.$.seconds.eq(0),
            $sec_2 = this.$.seconds.eq(1);
        var $date_1 = this.$el.find('.bloc-time.date .figure.date-1');
        var $date_2 = this.$el.find('.bloc-time.date .figure.date-2');

        this.countdown_interval = setInterval(function () {

            if (that.total_seconds > 0) {

                --that.values.seconds;

                if (that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }
                // Update DOM values
                // Date component

                that.checkDate(that.total_seconds, $date_1, $date_2);
                // Hours
                that.checkHour(that.values.hours, $hour_1, $hour_2);

                // Minutes
                that.checkHour(that.values.minutes, $min_1, $min_2);

                // Seconds
                that.checkHour(that.values.seconds, $sec_1, $sec_2);

                --that.total_seconds;
            } else {
                clearInterval(that.countdown_interval);
            }
        }, 1000);
    },

    animateFigure: function ($el, value) {

        var that = this,
            $top = $el.find('.top'),
            $bottom = $el.find('.bottom'),
            $back_top = $el.find('.top-back'),
            $back_bottom = $el.find('.bottom-back');

        // Before we begin, change the back value
        $back_top.find('span').html(value);

        // Also change the back bottom value
        $back_bottom.find('span').html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {

                $top.html(value);

                $bottom.html(value);

                TweenMax.set($top, { rotationX: 0 });
            }
        });

        TweenMax.to($back_top, 0.8, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    },

    checkHour: function (value, $el_1, $el_2) {

        var val_1 = value.toString().charAt(0),
            val_2 = value.toString().charAt(1),
            fig_1_value = $el_1.find('.top').html(),
            fig_2_value = $el_2.find('.top').html();

        if (value >= 10) {

            // Animate only if the figure has changed
            if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
            if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
        } else {

            // If we are under 10, replace first figure with 0
            if (fig_1_value !== '0') this.animateFigure($el_1, 0);
            if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
        }
    },
    checkDate: function (seconds, $el_1, $el_2) {
        var days = Math.floor(seconds / (60 * 60 * 24));
        var daysStr = days.toString();

        if (days < 10) {
            daysStr = "0" + daysStr;
        }

        var day_1 = daysStr.charAt(0);
        var day_2 = daysStr.charAt(1);

        var fig_1_value = $el_1.find('.top').html();
        var fig_2_value = $el_2.find('.top').html();

        if (days >= 10) {
            if (fig_1_value !== day_1) this.animateFigure($el_1, day_1);
            if (fig_2_value !== day_2) this.animateFigure($el_2, day_2);
        } else {
            if (fig_1_value !== '0') this.animateFigure($el_1, '0');
            if (fig_2_value !== day_1) this.animateFigure($el_2, day_1);
        }
    }
};

// Let's go !
Countdown.init();