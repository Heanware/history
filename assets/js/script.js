const $window = $(window);

class AnimatedTimeline{
    $wrapper;
    $bar;

    constructor($wrapper){
        this.$wrapper = $wrapper;
        this.$bar = $wrapper.find(".js-timeline-bar");
        let thisTimeline = this;
        this.$wrapper.on("scroll", function(){

        });
    }
}

$(function(){
    let effect = new Rellax(".rellax-img", {speed: 1}),
        timelines = $(".js-timeline");
    timelines.each(function(){
        new AnimatedTimeline($(this));
    });
})