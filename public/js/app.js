if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/public/sw.js")
      .then((reg) => {
        console.log(`Service Worker Registration (Scope: ${reg.scope})`);
      })
      .catch((error) => {
        console.log(`Service Worker Error (${error})`);
      });
  });
} else {
  console.log("Service Worker not available");
}

// Push Notifications
Notification.requestPermission((status) => {
  console.log("Notification permission status:", status);
});

function displayNotification() {
  if (Notification.permission === "granted") {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) {
        reg.showNotification("Hello World!");

        const options = {
          body: "Here is a notification body!",
          vibrate: [100, 50, 100],
          icon: "/public/img/favicon.png",
          data: { primaryKey: 1 }, // id for notification
        };

        reg.showNotification("Hello world!", options);
      } else {
        console.error("Service Worker registration not found.");
      }
    });
  } else {
    console.warn("Notification permission not granted.");
  }
}

displayNotification();
