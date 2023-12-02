//В строке имеется один верный ip-адрес. При помощи регулярного выражения его найти, вывести и сообщить какой он версии.(v4 или v6)
// 266.168.0.1
// 192.168.0.1
// 172.16.254.1
// 10.0.0.1
// 130.128.0.1
// 85.76.230.5
// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
// fe80:0000:0000:0000:0204:61ff:fe9d:f156
// 3ffe:1900:4545:3:200:f8ff:fe21:67cf

function showResult(){
    let ip_str = String(document.getElementById("ipInput").value);

    let ipv4Regex = /\b([0-9]\.|[0-9][0-9]\.|1[0-9][0-9]\.|2[0-4][0-9]\.|25[0-5]\.){3}([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b/g;
    let ipv6Regex =/\b([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b/g;

    let foundedIPv4 = ip_str.match(ipv4Regex);
    let foundedIPv6 = ip_str.match(ipv6Regex);

    console.log(foundedIPv4);
    console.log(foundedIPv6);

    document.getElementById("ipInput").value = "";

    if (foundedIPv4) {
        foundedIPv4.forEach(ip4 => {document.write("IPv4: " + ip4 + "<br>")});
    } else {
        document.write("IPv4 адреса отсутствуют" + "<br>");
    }

    if (foundedIPv6) {
        foundedIPv6.forEach(ip6 => {document.write("IPv6: " + ip6 + "<br>")});
    } else {
        document.write("IPv6 адреса отсутствуют" + "<br>");
    }
}