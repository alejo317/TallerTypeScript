import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var promedioSerieElm = document.getElementById("promedio-seasons");
promedioSerieElm.innerHTML = "".concat(getPromedioSeasons(dataSeries));
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
