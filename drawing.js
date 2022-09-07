function draw_grid(ctx, minor, major) 
	{
		minor = minor || 10;
		major = major || minor * 5;
	for(var x = 0; x < ctx.canvas.width; x += minor) 
		{
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, ctx.canvas.height);
		ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
		ctx.stroke();
		if(x % major == 0 ) {ctx.fillText(x, x, 10);}
		}
	for(var y = 0; y < ctx.canvas.height; y += minor) 
		{
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(ctx.canvas.width, y);
		ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
		ctx.stroke();
		if(y % major == 0 ) {ctx.fillText(y, 0, y + 10);}
		}
	}
	
	function draw_pacman(ctx, x, y, r, mouth_size) 
	{
			startArc =  mouth_size *Math.PI || 0.10* Math.PI;
			finishArc =  (2 - mouth_size)  * Math.PI || 1.8* Math.PI;
			context.beginPath();
			context.arc(x, y, r, startArc, finishArc);
			context.lineTo(x, y);
			context.strokeStyle = "#000000"; 
			context.lineWidth = 3;
			context.fillStyle = "#FFFF00";
			context.closePath();
			context.stroke();
			context.fill();
	}
	
	function draw_asteroid(ctx, radius, shape, noise, guide) {
	ctx.save();
	ctx.beginPath();
	for(var i = 0; i < shape.length; i++) 
		{
		ctx.rotate(2 * Math.PI / shape.length);
		ctx.lineTo(radius + radius * noise * shape[i], 0);
		}
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		if(guide) 
			{
			ctx.lineWidth = 0.5;
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, 2 * Math.PI);
			ctx.stroke();
			ctx.beginPath();
			ctx.lineWidth = 0.2;
			ctx.arc(0, 0, radius + radius * noise, 0, 2 * Math.PI);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, radius - radius * noise, 0, 2 * Math.PI);
			ctx.stroke();
			}
	ctx.restore();
}