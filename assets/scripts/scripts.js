/**
 * Handles the script logic for the home page.
 * Named after the file to help organize the
 * site due to it being fully static.
 * @author GameGlitz
 */

/**
 * Applies the date manipulation to the document.
 */
const applyDate = async() => {
    dateElement = "terminal-date";
    dateString = new Date().toLocaleString();

    document.getElementById(dateElement).innerHTML = dateString;
}

/**
 * Applies the protocol identifier maniplation to the document.
 */
const applyProtocol = async() => {
    protocolElement = "terminal-protocol"
    protocolRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    protocolFetch = await fetch('https://gameglitz.dev/cdn-cgi/trace');

    await (protocolFetch).text().then(data => document.getElementById(protocolElement).innerHTML = data.match(protocolRegex)[0]);
}

applyDate();
applyProtocol();