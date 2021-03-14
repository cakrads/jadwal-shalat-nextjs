const workerTimer = () => {
  let timout = () => ({});

  self.addEventListener(
    'message',
    function (e) {
      const id = Math.floor(Math.random() * 10) + 1;
      const { remindMeWhen, startCounter } = e.data;
      if (startCounter) {
        clearTimeout(timout);
        counter(remindMeWhen, id)();
      }
    },
    false
  );

  const counter = (remindMeWhen, id) => () => {
    // console.log(id);
    const now = Math.round(new Date() / 1000);
    if (now > remindMeWhen) {
      // console.log('worker postMessage');
      self.postMessage({ remindNow: true });
      clearTimeout(timout);
    } else {
      timout = setTimeout(counter(remindMeWhen, id), 1000);
    }
  };

};

export default workerTimer;
