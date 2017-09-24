import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; 

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;//елементы которые будут появляться при скролле
        this.offsetPercentege = offset;
        this.hideInitially();//скрывает
        this.createWaypoints();//появля/ться
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');//по началу скрываються
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function(){//для каждого елемента
            var currentItem = this;//елемент 
            new Waypoint({//создаем обьект
                element: currentItem,//берем елемент
                handler: function() {
                    $(currentItem).addClass('reveal-item--is-visible');//делаем его видимым
                },
                offset: that.offsetPercentege//при достижения прокрутки
            });
        });
    }
}

export default RevealOnScroll;