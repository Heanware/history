const $window = $(window);

class AnimatedTimeline{
    $wrapper;
    $bar;
    $points;

    constructor($wrapper){
        this.$wrapper = $wrapper;
        this.$bar = $wrapper.find(".js-timeline-bar");
        this.$points = $wrapper.find(".js-timeline-point");
        let thisTimeline = this;
        this.$wrapper.on("scroll", function(){
            let scroll = $(this).scrollTop();
            console.log(thisTimeline.$wrapper.height() );
            thisTimeline.$bar.css("height", thisTimeline.$wrapper.height / scroll + "%");
            thisTimeline.$points.each(function(){
                let $point = $(this);
                if($point.position().top <= scroll){
                    $point.addClass("point-active");
                }else{
                    $point.removeClass("point-active");
                }
            })
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