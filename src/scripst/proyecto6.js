const valor = document.getElementById("valor");
const de = document.getElementById("de");
const a = document.getElementById("a");
const btn = document.getElementById("convertir");
const res = document.getElementById("resultadoConv");

btn.onclick = () => {
  const v = parseFloat(valor.value);
  if(isNaN(v)) return res.textContent="Ingresa un número";

  let v_m;
  switch(de.value){
    case "cm": v_m=v/100; break;
    case "m": v_m=v; break;
    case "km": v_m=v*1000; break;
  }
  let final;
  switch(a.value){
    case "cm": final=v_m*100; break;
    case "m": final=v_m; break;
    case "km": final=v_m/1000; break;
  }
  res.textContent = `${v} ${de.value} = ${final} ${a.value}`;
}
