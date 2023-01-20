const datos_personales = `{
  "nombre": "Jordan",
  "apellido": "Ticona",
  "edad": 21,
  "rol": "Diseñador Web",
  "fecha_de_nacimiento": "31/07/2001",
  "nacionalidad": "Argentina",
  "domicilio": "Villa Gral. Mitre, CABA",
  "telefono": 1166882316,
  "email": "jordangtmc31@gmail.com",
  "objetivo": "Quiero aplicar mis conocimientos y habilidades al desarrollo tecnológico, elaborar proyectos innovadores, aprender de cada experiencia para afianzar mis aptitudes, lograr superarme como persona y de forma profesional.",
  "proyectos": {
    "p1": "Proyecto web (Exposición de producto)",
    "p2": "Conexión de SQL y Visual Basic (Administración: turnos y servicios)",
    "p3": "Página web (Página web informativa ET24)",
    "p4": "Proyecto Turnero (Administración de Turnos y reuniones ET24)"
  }
}`;

const datos = JSON.parse(datos_personales);

document.getElementById('nombre_y_apellido').innerHTML = `${datos.nombre} ${datos.apellido}`;
document.getElementById('rol').innerHTML = datos.rol;
document.getElementById('objetivo').innerHTML = datos.objetivo;


let claves = ['fecha_de_nacimiento', 'edad', 'nacionalidad', 'domicilio', 'telefono', 'email', 'p1', 'p2', 'p3', 'p4'];
for(let c=0; c<claves.length; c++){
  if(c >= 6){
    document.getElementById(claves[c]).innerHTML = datos.proyectos[claves[c]];
  }else{
    document.getElementById(claves[c]).value = datos[claves[c]];
  }
}
