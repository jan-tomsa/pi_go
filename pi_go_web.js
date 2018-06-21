const DRIVER_GUI_ROW_FWD_MAX = ''
           +'<tr>'
             +'<td><a href="/motorAfwd?s=255">Klepeta zav MAX</a></td>'
             +'<td><a href="/motorBfwd?s=255">Loket dolu MAX</a></td>'
             +'<td><a href="/motorCfwd?s=255">Rameno dolu MAX</a></td>'
             +'<td><a href="/motorDfwd?s=255">Tocna proti HR</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_FWD = ''
           +'<tr>'
             +'<td><a href="/motorAfwd">Klepeta zavrit</a></td>'
             +'<td><a href="/motorBfwd">Loket dolu</a></td>'
             +'<td><a href="/motorCfwd">Rameno dolu</a></td>'
             +'<td><a href="/motorDfwd">Tocna proti HR</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_STOP = ''
           +'<tr>'
             +'<td><a href="/motorAstop">Klepeta stop</a></td>'
             +'<td><a href="/motorBstop">Loket stop</a></td>'
             +'<td><a href="/motorCstop">Rameno stop</a></td>'
             +'<td><a href="/motorDstop">Tocna stop</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_STOP_ALL = ''
           +'<tr>'
             +'<td colspan="4" align="center"><a href="/motors-all-stop">STOP VSECHNY MOTORY</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_REV = ''
           +'<tr>'
             +'<td><a href="/motorArev">Klepeta otevrit</a></td>'
             +'<td><a href="/motorBrev">Loket nahoru</a></td>'
             +'<td><a href="/motorCrev">Rameno nahoru</a></td>'
             +'<td><a href="/motorDrev">Tocna po smeru HR</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_REV_MAX = ''
           +'<tr>'
             +'<td><a href="/motorArev?s=255">Klepeta otev MAX</a></td>'
             +'<td><a href="/motorBrev?s=255">Loket nahoru MAX</a></td>'
             +'<td><a href="/motorCrev?s=255">Rameno nahoru MAX</a></td>'
             +'<td><a href="/motorDrev?s=255">Tocna po smeru HR</a></td>'
           +'</tr>';

const DRIVER_GUI_TABLE = ''
           +'<table cellpadding="5" style="font-size:150%" border="1">'
           +DRIVER_GUI_ROW_FWD_MAX
           +DRIVER_GUI_ROW_FWD
           +DRIVER_GUI_ROW_STOP
           +DRIVER_GUI_ROW_STOP_ALL
           +DRIVER_GUI_ROW_REV
           +DRIVER_GUI_ROW_REV_MAX
           +'</table>';

const DRIVER_GUI_TABLE_INVERTED = ''
           +'<table cellpadding="5" style="font-size:150%" border="1">'
           +DRIVER_GUI_ROW_REV_MAX
           +DRIVER_GUI_ROW_REV
           +DRIVER_GUI_ROW_STOP
           +DRIVER_GUI_ROW_STOP_ALL
           +DRIVER_GUI_ROW_FWD
           +DRIVER_GUI_ROW_FWD_MAX
           +'</table>';

exports.web = {
    renderDriverTable : function() {
        //return DRIVER_GUI_TABLE;
        return DRIVER_GUI_TABLE_INVERTED;
    }
}