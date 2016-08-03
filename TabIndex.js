const $ = require('jquery');
const _ = require('underscore');
/**
 * Helper class for managing the tab index.
 */
export class TabIndex {
    /**
     * Unset all the tab indexes on the page.
     */
    resetAll() {
        this.reset($('[tabIndex]'))
    }

    /**
     * Set tab indexes from from left to right tab from left to right regardless of the order they inputs appear in the DOM.
     */
    orderAllByPosition() {
        this.orderByPosition($(document))
    }

    /**
     * Unset the tab index for the matched elements.
     * @returns {*}
     */
    reset(selector) {
        $(selector).each(function() {
            $(this).prop('tabIndex', '')
        })
    }

    /**
     * Unset the tab index for the matched elements.
     * @returns {*}
     */
    orderByPosition(selector) {
        let elements = this.getInputsByPosition(selector)
        this.setTabIndexSequentially(elements)
    }

    /**
     * Set the tabIndex property on a set of elements sequentially starting with 1.
     * @param elements
     */
    setTabIndexSequentially(elements) {
        let i = 0
        _.forEach(elements, function(element) {
            i++
            $(element).prop('tabIndex', i)
        })
    }

    /**
     * Get all inputs by position
     * @param selector
     * @returns {*|jQuery}
     */
    getInputsByPosition(selector) {
        let elements = $(selector).find(':input')
        elements.sort(function(oldEl, newEl) {
            let oldY = $(oldEl).offset().top;
            let newY = $(newEl).offset().top;
            if (oldY == newY) return $(oldEl).offset().left - $(newEl).offset().left
            return oldY - newY;
        });
        return elements;
    }
}

export {TabIndex}