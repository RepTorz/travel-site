import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        // collection of four DOM elements
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
        
    }
    
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");    
    }
    
    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            // current DOM element
            var currentItem = this;
            new Waypoint({
                // DOM element you want to watch out for when scrolling down
                element: currentItem,
                // What will happen when it scrolls down
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });    
        })    
    }
}

export default RevealOnScroll;