export function sendData(url, data) {
    const promise = new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.open('POST', url, true);
        xmlhttp.onload = () => resolve(JSON.parse(xmlhttp.responseText));
        xmlhttp.onerror = () => reject(xmlhttp.status);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
    });

    return promise;
}
