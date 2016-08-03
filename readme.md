Tab Index
---------

A Javascript helper library for easily working with the HTML input tabIndex property.

Usage
-----

```
    import {TabIndex} from 'TabIndex'
    
    new TabIndex().orderAllByPosition()
```

Methods
-------

`reset(selector_or_element)` Unset the tab indexes in a container.

`.resetAll()` Unset all the tab indexes on the page.

`orderByPosition(selector_or_element)` Set tab indexes in a container from left to right tab from left to right regardless of the order they inputs appear in the DOM.

`.orderAllByPosition()` Set all tab indexes on the page from left to right tab from left to right regardless of the order they inputs appear in the DOM.

`setTabIndexSequentially(elements)` Set all tab indexes sequentially on an array of elements.

`getInputsByPosition(selector_or_element)` Returns and array of inputs from a container from left to right and top to bottom.

Dependencies
------------

This is an es2016 module that depends on Underscore and jQuery. Sorry, if you don't want to depend on any of those libraries. I built this for my personal use. I just published it in case anyone else might find it helpful. 