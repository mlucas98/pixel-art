var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var $paleta = $('#paleta');
var $grillaPix = $('#grilla-pixeles');
var $divGrillaPix;
var $colorActual= '';
var mouse = true;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);
    $colorActual = colorActual;

  })
);

function generarPaleta(arreglo){
  for (let i=0; i<arreglo.length; i++){
    let $crearDiv = $('<div class="color-paleta"></div>');
    let color = arreglo[i];
    $($crearDiv).css('background-color', color);
    $paleta.append($crearDiv);

  }
};

function generarGrilla(){
  for(let i=0; i<1750; i++){
    let $crearDiv = $('<div></div>');
    $grillaPix.append($crearDiv);
  }
  $divGrillaPix = $('#grilla-pixeles div');
}


generarPaleta(nombreColores);
generarGrilla();


$(document).ready(function(){   //Selección de color en pincel
  $("#paleta div.color-paleta").click(function(){
  $colorActual = '';
  $colorActual = $(this).css("background-color");
  $('#indicador-de-color').css('background-color', $colorActual);
  })
});

$($divGrillaPix).click(function(){
  $(this).css("background-color", $colorActual);
});

$($grillaPix).mousedown(function(){   //reconocer si mouse esta clickeado o no
  mouse = false;
  console.log(mouse);
});
$($grillaPix).mouseup(function(){
  mouse = true;
  console.log(mouse);
});

$($divGrillaPix).hover(function(){   //cuando pasa por la grilla, si el mouse esta clickeado cambia el fondo
  if ( mouse == false){
    $(this).css('background-color', $colorActual);
  }
});

$('#borrar').click(function(){
  $divGrillaPix.animate({'background-color': 'rgb (255, 255, 255)'}, 1500);
});
$('#guardar').click(function(){
  guardarPixelArt();
});

$('.imgs li img').click(function(){
  $id = $(this).attr('id');
  console.log($id);
  switch ($id){
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;  
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;
  }
  
});

