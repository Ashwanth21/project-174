AFRAME.registerComponent("createmodel", {
  init: async function () {

    //Get the compund details of the element
    var models = await this.getmodels();

    var barcodes = Object.keys(models);

    barcodes.map(barcode => {
      var model = models[barcode];

      //Call the function
      this.createModel(element);
    });

  },
  getmodels: function () {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  
  createModel: async function (element) {

    //Element data
    var modelName = model.model_name;
    var barcodeValue = model.barcode_value;
    var modelUrl = model.model_url;

    
    

    //Scene
    var scene = document.querySelector("a-scene");

    //Add marker entity for BARCODE marker
    var marker = document.createElement("a-marker");

    marker.setAttribute("id", `marker-${barcodeValue}`);
    marker.setAttribute("type", "barcode");
    marker.setAttribute("model_name", modelName);
    marker.setAttribute("value", barcodeValue);

    scene.appendChild(marker);

    var modelEl = document.createElement("a-entity");
    modelEl.setAttribute("id", `${modelName}-${barcodeValue}`);
    marker.appendChild(modelEl);

    
    
    

    
  }
});
