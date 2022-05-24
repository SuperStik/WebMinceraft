class GUI {
	static gen_info_box = document.getElementById("gen_info_box");
	static gen_info = document.getElementById("gen_info");
	static gen_info_progress = document.getElementById("gen_info_progress");
	static setGenInfo() {
		document.getElementById("main_menu").hidden = true;
		gen_info_box.hidden = false;
		document.getElementById("selector").hidden = true;
		document.getElementById("glCanvas").hidden = true;
	}

	static genInfoShowText(text, amount) {
		gen_info.innerText = text;
		gen_info_progress.value = amount;
	}

	static setPlaying(click) {
		document.getElementById("main_menu").hidden = true;
		gen_info_box.hidden = true;

		document.getElementById("glCanvas").hidden = false;
		document.getElementById("selector").hidden = false;
		const scale = 4;
		const border = 4;
		var selector = document.getElementById("selector");
		selector.hidden = false;
		for(var i = 0; i < global.selector.length; i++) {
			var material = document.createElement("div");
			material.block = world.blockMaps.get(global.selector[i]);
			const coords = material.block.sides;
			material.style.backgroundPosition = (-coords[0] * 16 * scale) + "px " + (-coords[1] * 16 * scale) + "px";
			material.style.backgroundSize = 256 * scale + "px " + 256 * scale + "px";
			material.style.height = 16 * scale + "px";
			material.style.width = 16 * scale + "px";
	
			material.onclick = function() {
				click(this.block.name);
			};
			
			selector.appendChild(material);
		}
		selector.style.padding = border + "px";
		selector.style.marginLeft = (border + Math.floor(-global.selector.length * 16 * scale / 2)) + "px";
	}
}