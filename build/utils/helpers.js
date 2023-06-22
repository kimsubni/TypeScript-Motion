export var customEventEmiiter = function (eventType, detail) {
    document.dispatchEvent(new CustomEvent(eventType, {
        detail: detail,
    }));
};
//# sourceMappingURL=helpers.js.map