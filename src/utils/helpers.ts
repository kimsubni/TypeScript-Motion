export const customEventEmiiter = (eventType: string, detail?: object) => {
  document.dispatchEvent(
    new CustomEvent(eventType, {
      detail,
    })
  );
};
