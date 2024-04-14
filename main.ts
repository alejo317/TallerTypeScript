import { Serie } from './Serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioSerieElm: HTMLElement = document.getElementById("promedio-seasons")!;

promedioSerieElm.innerHTML = `${getPromedioSeasons(dataSeries)}`;

renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons += serie.seasons);
  return totalSeasons / series.length;
}
