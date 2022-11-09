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
                maxScrollValue = Math.ceil(parseInt($scrollingBlock.innerHeight()) - parseInt(thisTimeline.$wrapper.css("height"))),
                /*                actualHeight = parseInt($scrollingBlock.find(".js-timeline-empty-bar").css("height")),*/
                scrollPercentage = (scroll / maxScrollValue),
                itemsHeight = parseInt(thisTimeline.$wrapper.find(".js-timeline-empty-bar").css("height")),
                progressPercentage = Math.ceil(itemsHeight / 100) * (scrollPercentage * 100);

            thisTimeline.$bar.css("height", progressPercentage);
            console.log("SCROLL " + scroll);
            console.log("max scroll value " + maxScrollValue);
            console.log("items height " + itemsHeight);
            console.log("progressbar height " + progressPercentage);
            console.log("scroll percentage " + scrollPercentage);
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