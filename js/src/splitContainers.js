Split(["#editorPane", "#browserPane"],{
    gutterSize: 7,
    sizes: [50, 50],
    snapOffset: 0
});

Split(["#htmlContainer", "#cssContainer", "#jsContainer"],{
    gutterSize: 7,
    sizes: [90, 5, 5],
    direction: 'vertical',
    snapOffset: 0
});

// Split(["#frameMgr", "#consoleMgr"],{
//     gutterSize: 7,
//     sizes: [90, 10],
//     direction: 'vertical',
//     snapOffset: 0
// });