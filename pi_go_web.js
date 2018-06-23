function DRIVER_GUI_ROW_FWD_MAX(token) { 
    return `<tr>`
             +`<td><a href="/motorAfwd?token=${token}&s=255">Klepeta otev MAX</a></td>`
             +`<td><a href="/motorBfwd?token=${token}&s=255">Loket dolu MAX</a></td>`
             +`<td><a href="/motorCfwd?token=${token}&s=255">Rameno dolu MAX</a></td>`
             +`<td><a href="/motorDfwd?token=${token}&s=255">Tocna po smeru HR</a></td>`
           +`</tr>`;
}

function DRIVER_GUI_ROW_FWD(token) {
    return `<tr>`
             +`<td><a href="/motorAfwd?token=${token}">Klepeta otevrit</a></td>`
             +`<td><a href="/motorBfwd?token=${token}">Loket dolu</a></td>`
             +`<td><a href="/motorCfwd?token=${token}">Rameno dolu</a></td>`
             +`<td><a href="/motorDfwd?token=${token}">Tocna po smeru HR</a></td>`
           +`</tr>`;
}

function DRIVER_GUI_ROW_STOP(token) {
    return `<tr>`
             +`<td><a href="/motorAstop?token=${token}">Klepeta stop</a></td>`
             +`<td><a href="/motorBstop?token=${token}">Loket stop</a></td>`
             +`<td><a href="/motorCstop?token=${token}">Rameno stop</a></td>`
             +`<td><a href="/motorDstop?token=${token}">Tocna stop</a></td>`
           +`</tr>`;
}

function DRIVER_GUI_ROW_STOP_ALL(token) {
    return `<tr>`
             +`<td colspan="4" align="center"><a href="/motors-all-stop?token=${token}">STOP VSECHNY MOTORY</a></td>`
           +`</tr>`;
}

function DRIVER_GUI_ROW_REV(token) {
    return `<tr>`
             +`<td><a href="/motorArev?token=${token}">Klepeta zavrit</a></td>`
             +`<td><a href="/motorBrev?token=${token}">Loket nahoru</a></td>`
             +`<td><a href="/motorCrev?token=${token}">Rameno nahoru</a></td>`
             +`<td><a href="/motorDrev?token=${token}">Tocna proti smeru HR</a></td>`
           +`</tr>`;
}

function DRIVER_GUI_ROW_REV_MAX(token) {
    return `<tr>`
             +`<td><a href="/motorArev?token=${token}&s=255">Klepeta zav MAX</a></td>`
             +`<td><a href="/motorBrev?token=${token}&s=255">Loket nahoru MAX</a></td>`
             +`<td><a href="/motorCrev?token=${token}&s=255">Rameno nahoru MAX</a></td>`
             +`<td><a href="/motorDrev?token=${token}&s=255">Tocna proti smeru HR</a></td>`
           +`</tr>`;
}

function DRIVER_GUI_TABLE(token) {
    return `<table cellpadding="5" style="font-size:150%" border="1">`
           +DRIVER_GUI_ROW_FWD_MAX(token)
           +DRIVER_GUI_ROW_FWD(token)
           +DRIVER_GUI_ROW_STOP(token)
           +DRIVER_GUI_ROW_STOP_ALL(token)
           +DRIVER_GUI_ROW_REV(token)
           +DRIVER_GUI_ROW_REV_MAX(token)
           +`</table>`;
}

function DRIVER_GUI_TABLE_INVERTED(token) {
    return `<table cellpadding="5" style="font-size:150%" border="1">`
           +DRIVER_GUI_ROW_REV_MAX(token)
           +DRIVER_GUI_ROW_REV(token)
           +DRIVER_GUI_ROW_STOP(token)
           +DRIVER_GUI_ROW_STOP_ALL(token)
           +DRIVER_GUI_ROW_FWD(token)
           +DRIVER_GUI_ROW_FWD_MAX(token)
           +`</table>`;
}

exports.web = {
    renderDriverTable : function(token) {
        //return DRIVER_GUI_TABLE(token);
        return DRIVER_GUI_TABLE_INVERTED(token);
    }
}