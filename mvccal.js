function send(msg) {
	console.log(msg);
}
model = {
	buttons: [],
	init: function() {
		send("test");
		this.generateButtons();
		view.render();
	},
	createButton: function(text, val, type) {
		send("Create button.");
		var button = document.createElement("button");
		button.setAttribute("value", val);
		button.textContent = text;
		button.className = "btn";
		if (type === "operator") 
			button.className += " operator";
		button.onclick = function() {
			document.getElementById("output").value += this.value;
		}	
		return button;
	},
	generateButtons: function() 
	{
		send("Generating buttons.");
		for( var i = 0; i < 10; i++) {
			button = this.createButton(i, i);
			model.buttons.unshift(button);
		}
		button = this.createButton("+", "+", "operator");
		model.buttons.push(button);
		button = this.createButton("-", "-", "operator");
		model.buttons.push(button);
		button = this.createButton("*", "*", "operator");
		model.buttons.push(button);
		button = this.createButton("/", "/", "operator");
		model.buttons.push(button);
		button = this.createButton("C", "C" );
		button.id = "clear";
		button.onclick = function () {
			model.evaluate(document.getElementById("output").reset);
		}
		model.buttons.push(button);
		button = this.createButton("=", "=", "operator");
		button.id = "evaluate";
		button.onclick = function() {
			model.evaluate(document.getElementById("output").value);
		}
			model.buttons.push(button);	
	},
	getButtons: function() {
		return model.buttons;
	},
	evaluate: function(str) {
		view.renderAnswer(eval(str));
	}
}
controller = {
	
constructor(model, view) {
    this.model = model
    this.view = view 
  }	
}
view = {
	render: function() {
		buttonsList = model.getButtons();
		for ( i = 0; i < buttonsList.length; i++) {
			if (buttonsList[i].className == "btn operator") 
				document.getElementById("operators").append(buttonsList[i]);
			else
				document.getElementById("button-grid").append(buttonsList[i]);
		}
	},
	renderAnswer: function(str) {
		output = document.getElementById("output");
		output.value = "";
		output.placeholder = str;
	}
}
model.init();


const init = function () {
	 var divouput = document.getElementById("calculator");
for (var i = 0; i < 10; i++) {
	document.body.appendChild(divouput.cloneNode(true));
}
 }
document.addEventListener('DOMContentLoaded', init)
