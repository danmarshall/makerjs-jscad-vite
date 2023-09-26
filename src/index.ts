import * as makerjs from 'makerjs';
import { CAG } from '@jscad/csg';
import * as stlSerializer from '@jscad/stl-serializer';

const star = new makerjs.models.Star(7, 100, 50);
const svg = makerjs.exporter.toSVG(star);

document.body.innerHTML = svg;

//add a button to the page
const button = document.createElement('button');
button.innerHTML = 'STL';
document.body.appendChild(button);

//when the button is clicked, export an STL
button.onclick = () => {
    const stl = makerjs.exporter.toJscadSTL(CAG, stlSerializer, star, { extrude: 50 });

    //download the STL file, using the hyperlink trick
    const link = document.createElement('a');
    link.download = 'star.stl';
    link.href = 'data:text/plain,' + stl;
    link.click();
}