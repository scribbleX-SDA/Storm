Split(["#top-holder", "#bottom-holder"], {
    direction: 'vertical',
    minSize: 30,
    gutterSize: 3,
    sizes: [55,45],
    snapOffset: 0,
});

Split(["#manager", "#frame"], {
    direction: 'horizontal',
    gutterSize: 3,
    snapOffset: 0,
    sizes: [45,55],
});

Split(["#htmlHolder", "#cssHolder", "#jsHolder"], {
    gutterSize: 3,
    snapOffset: 0,
});