const $window = $(window);

class AnimatedTimeline{
    $wrapper;
    $bar;
    $items;

    constructor($wrapper){
        this.$wrapper = $wrapper;
        this.$bar = $wrapper.find(".js-timeline-bar");
        this.$items = $wrapper.find(".js-timeline-item");
        let thisTimeline = this;
        this.$wrapper.on("scroll", function(){
            let $scrollingBlock = thisTimeline.$wrapper.find(".js-timeline-scrolling"),
                scroll = $(this).scrollTop(),
                actualHeight = Math.ceil(parseInt($scrollingBlock.innerHeight()) - parseInt(thisTimeline.$wrapper.css("height"))),
                firstItemHeight = thisTimeline.$items.first().height(),
                progressPercentage = firstItemHeight + Math.ceil(actualHeight / 100) * ((scroll / actualHeight) * 100);
            thisTimeline.$bar.css("height", progressPercentage);
            thisTimeline.$items.each(function(){
                let $item = $(this);
                if($item.find(".js-timeline-point").position().top < progressPercentage)
                    $item.addClass("item-active");
                else
                    $item.removeClass("item-active");
            });
        });
        this.$wrapper.trigger("scroll");
    }
}

$(function(){
    let effect = new Rellax(".rellax-img", {speed: 2}), timelines = $(".js-timeline");
    timelines.each(function(){
        new AnimatedTimeline($(this));
    });
})