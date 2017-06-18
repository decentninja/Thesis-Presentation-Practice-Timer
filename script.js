function GetPermissions() {
    if(Notification.permissions !== "granted") 
    Notification.requestPermission((permissions) => {
        if(permissions !== "granted") {
            GetPermissions();
        }
    })
}
GetPermissions();
var restart_button = document.querySelector("#restart");
var lastNotification;
var timer;
restart_button.addEventListener("click", () => {
    clearInterval(timer);
    if(lastNotification != null)
        lastNotification.close();
    lastNotification = new Notification("20 minutes timer has started!");
    var elapsedMinutes = 0;
    timer = setInterval(() => {
        lastNotification.close();
        elapsedMinutes += 5;
        if(elapsedMinutes < 20) {
            lastNotification = new Notification(elapsedMinutes + " minutes has passed");
        } else {
            lastNotification = new Notification("Times up!");
            clearInterval(timer);
        }
    }, 1000 * 60 * 5);
});