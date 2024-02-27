// import
// Path: assets/js/main.js
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./index.js";

(async function() {
    // Cache frequently used DOM elements
    let boton = $("#btnRegistrar");
    let animal = $("#animal");
    let edad = $("#edad");
    let comentarios = $("#comentarios");
    let preview = $("#preview");
    let errorAnimal = $('#errorAnimal');
    let errorEdad = $('#errorEdad');
    let errorComentarios = $('#errorComentarios');
    let animalesContainer = $('#Animales');
    let modal = $('#animalModal');

    // Validar formulario
    function validarFormulario() {
        let isValid = true;
        if (!animal.val()) {
            errorAnimal.html("Debe seleccionar un animal");
            isValid = false;
        } else {
            errorAnimal.html("");
        }
        if (!edad.val()) {
            errorEdad.html("Debe seleccionar una edad");
            isValid = false;
        } else {
            errorEdad.html("");
        }
        //validacion con expresion regular

        let regex = /\b\w+\b.*\b\w+\b/;
        if (!regex.test(comentarios.val())) {
            errorComentarios.html("Debe ingresar un comentari(al menos dos palabras)");
            isValid = false;
        } else {
            errorComentarios.html("");
        }
        return isValid;
    }

    // Function to load image asynchronously
    function loadImageAsync(url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        });
    }

    // Handle form submission
    boton.click(async function(e) {
        e.preventDefault();
        console.log("click");
        if (validarFormulario()) {
            // Get form values
            let animalElegido = animal.val();
            let edadElegida = edad.val();
            let comentariosElegidos = comentarios.val();
            console.log(comentariosElegidos)

            // Create new animal instance
            let animalNuevo = null;
            switch (animalElegido) {
                case "Leon":
                    animalNuevo = new Leon(animalElegido, edadElegida, "assets/imgs/Leon.png", comentariosElegidos, "assets/sounds/Leon.mp3");
                    break;
                case "Lobo":
                    animalNuevo = new Lobo(animalElegido, edadElegida, "assets/imgs/Lobo.jpg", comentariosElegidos, "assets/sounds/Lobo.mp3");
                    break;
                case "Oso":
                    animalNuevo = new Oso(animalElegido, edadElegida, "assets/imgs/Oso.jpg", comentariosElegidos, "assets/sounds/Oso.mp3");
                    break;
                case "Serpiente":
                    animalNuevo = new Serpiente(animalElegido, edadElegida, "assets/imgs/Serpiente.jpg", comentariosElegidos, "assets/sounds/Serpiente.mp3");
                    break;
                case "Aguila":
                    animalNuevo = new Aguila(animalElegido, edadElegida, "assets/imgs/Aguila.png", comentariosElegidos, "assets/sounds/Aguila.mp3");
                    break;
            }

            try {
                // Update preview
                let img = await loadImageAsync(animalNuevo.Img);
                preview.css('background-image', `url(${img.src})`);

                // Add new animal card
                let newCard = $(`
                    <div class="card bg-dark animalito m-2">
                        <img src=${img.src} class="card-img-top" alt=${animalNuevo.Name} data-toggle="modal" data-target="#animalModal">
                        <div class="card-body cimg">                                 
                        </div>
                        <button type="button" class="btn btn-danger" value="Eliminar">Eliminar</button>  
                    </div>
                `);
                animalesContainer.append(newCard);

                // Reset form after 4 seconds
                setTimeout(function() {
                    animal.val("");
                    edad.val("");
                    comentarios.val("");
                    preview.css('background-image', "");
                }, 1000);

                // Update modal content when the image is clicked
                let modaltext = `
                <p>Nombre : ${animalNuevo.Name}</p>
                <p>Edad : ${animalNuevo.Edad}</p>
                <p>Comentarios : ${animalNuevo.Comentario}</p>`

                newCard.find('img').click(function() {
                    $('.modal-body').html(modaltext);
                    $('#animalModalImg').attr('src', img.src);
                    $('#animalModal').modal('show');
                });
            } catch (error) {
                console.error("Error loading image:", error);
            }
          
        }
        // Eliminar animal de la lista

        let eliminar = $(".btn-danger");
        eliminar.click(function() {
            $(this).parent().remove();
        });

      // Reproducir sonido
      let play = $(".cimg");
      play.click(function() {
          let animalName = $(this).parent().find('img').attr('alt');
          let audioSrc = getAudioSrc(animalName);
          if (audioSrc) {
              let audio = new Audio(audioSrc);
              audio.play();
          }
      });
      
      function getAudioSrc(animalName) {
          const audioMap = {
              "Leon": "assets/sounds/Leon.mp3",
              "Lobo": "assets/sounds/Lobo.mp3",
              "Oso": "assets/sounds/Oso.mp3",
              "Serpiente": "assets/sounds/Serpiente.mp3",
              "Aguila": "assets/sounds/Aguila.mp3"
          };
          return audioMap[animalName];
      }
      
    });
})();
