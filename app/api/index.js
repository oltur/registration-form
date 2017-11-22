export function sendData(data) {
    const promise = new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.open('POST', 'http://echo-server.turevski.com/', true);
        xmlhttp.onload = () => resolve(JSON.parse(xmlhttp.responseText));
        xmlhttp.onerror = () => reject(xmlhttp.status);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
    });

    return promise;
}
