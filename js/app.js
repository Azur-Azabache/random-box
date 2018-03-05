class Random extends React.Component {
  render(){
    function randomBox() {
      //Numero aleatoria de 6 digitos
      let colorCode = '#' + Math.round(Math.random()*999999);
      const fonts = ['arial', 'helvetica', 'courier','times']
      //Indice aleatorio de la longitud del array fonts
      let num =  Math.random()*fonts.length;
      let font = fonts[Math.floor(num)];
      //Creando el css
      let css = {backgroundColor: colorCode, fontFamily: font};
      return css;
    };
    return (
      <div style={randomBox()} className ="box">
      ¡I am a box!
      </div>
    );
  }
}
//renderizando el div box creado
ReactDOM.render(<Random/>, document.getElementById('root'));
